(function () {
  const DEFAULTS = {
    provider: "",
    url: "",
    anonKey: "",
    table: "store_data",
    rowId: "main",
    bucket: "chala-media"
  };

  const cfg = { ...DEFAULTS, ...(window.CHALA_BACKEND || {}) };
  const NODE_TOKEN_KEY = "chala_node_token";
  let client = null;
  let session = null;

  function provider() {
    return String(cfg.provider || "").toLowerCase();
  }

  function nodeBaseUrl() {
    return String(cfg.url || "").replace(/\/+$/, "");
  }

  function nodeUrl(path) {
    return `${nodeBaseUrl()}${path}`;
  }

  function authHeaders() {
    const token = localStorage.getItem(NODE_TOKEN_KEY);
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  function dispatchAuth() {
    window.dispatchEvent(new CustomEvent("chala-cloud-auth", { detail: { session } }));
  }

  function isConfigured() {
    if (provider() === "node") return true;
    return provider() === "supabase" && Boolean(cfg.url) && Boolean(cfg.anonKey);
  }

  function hasLibrary() {
    if (provider() === "node") return true;
    return Boolean(window.supabase?.createClient);
  }

  async function initNode() {
    const token = localStorage.getItem(NODE_TOKEN_KEY);
    if (!token) {
      session = null;
      return true;
    }

    try {
      const res = await fetch(nodeUrl("/api/me"), {
        headers: authHeaders(),
        cache: "no-store"
      });
      if (!res.ok) throw new Error("Token expired");
      const data = await res.json();
      session = { user: { email: data.user || "server admin" } };
    } catch (_err) {
      localStorage.removeItem(NODE_TOKEN_KEY);
      session = null;
    }
    return true;
  }

  async function initSupabase() {
    if (!hasLibrary()) return false;
    if (!client) {
      client = window.supabase.createClient(cfg.url, cfg.anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true
        }
      });
      client.auth.onAuthStateChange((_event, nextSession) => {
        session = nextSession;
        dispatchAuth();
      });
    }
    const res = await client.auth.getSession();
    session = res.data?.session || null;
    return true;
  }

  async function init() {
    if (!isConfigured() || !hasLibrary()) return false;
    if (provider() === "node") return initNode();
    return initSupabase();
  }

  function getClient() {
    return client;
  }

  function isSignedIn() {
    return Boolean(session?.user);
  }

  function getUserEmail() {
    return session?.user?.email || "";
  }

  async function signInNode(_email, password) {
    const res = await fetch(nodeUrl("/api/login"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Login failed");
    localStorage.setItem(NODE_TOKEN_KEY, data.token);
    session = { user: { email: data.user || "server admin" } };
    dispatchAuth();
    return session;
  }

  async function signInSupabase(email, password) {
    await init();
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    session = data.session || null;
    return session;
  }

  async function signIn(email, password) {
    if (provider() === "node") return signInNode(email, password);
    return signInSupabase(email, password);
  }

  async function signOut() {
    if (provider() === "node") {
      localStorage.removeItem(NODE_TOKEN_KEY);
      session = null;
      dispatchAuth();
      return;
    }

    if (!client) return;
    const { error } = await client.auth.signOut();
    if (error) throw error;
    session = null;
  }

  async function loadStoreNode() {
    const res = await fetch(nodeUrl("/api/store"), { cache: "no-store" });
    const data = await res.json().catch(() => null);
    if (!res.ok) throw new Error(data?.error || "Cannot load store data");
    return data;
  }

  async function loadStoreSupabase() {
    await init();
    if (!client) return null;
    const { data, error } = await client
      .from(cfg.table)
      .select("data")
      .eq("id", cfg.rowId)
      .maybeSingle();
    if (error) throw error;
    return data?.data || null;
  }

  async function loadStore() {
    if (provider() === "node") return loadStoreNode();
    return loadStoreSupabase();
  }

  async function saveStoreNode(data) {
    await init();
    if (!isSignedIn()) throw new Error("Chua dang nhap server admin.");
    const res = await fetch(nodeUrl("/api/store"), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders()
      },
      body: JSON.stringify(data)
    });
    const out = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(out.error || "Cannot save store data");
    return out;
  }

  async function saveStoreSupabase(data) {
    await init();
    if (!client || !isSignedIn()) throw new Error("Chua dang nhap cloud admin.");
    const payload = {
      id: cfg.rowId,
      data,
      updated_at: new Date().toISOString()
    };
    const { error } = await client.from(cfg.table).upsert(payload, { onConflict: "id" });
    if (error) throw error;
    return payload;
  }

  async function saveStore(data) {
    if (provider() === "node") return saveStoreNode(data);
    return saveStoreSupabase(data);
  }

  function safeName(name) {
    return String(name || "media")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9._-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
  }

  async function uploadFileNode(file, folder = "media") {
    await init();
    if (!isSignedIn()) throw new Error("Chua dang nhap server admin.");
    const form = new FormData();
    form.append("folder", folder);
    form.append("file", file, file.name || "upload");

    const res = await fetch(nodeUrl("/api/upload"), {
      method: "POST",
      headers: authHeaders(),
      body: form
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || "Upload failed");

    if (cfg.url && data.url?.startsWith("/")) return `${nodeBaseUrl()}${data.url}`;
    return data.url;
  }

  async function uploadFileSupabase(file, folder = "media") {
    await init();
    if (!client || !isSignedIn()) throw new Error("Chua dang nhap cloud admin.");
    const filename = `${Date.now()}-${safeName(file.name || "upload")}`;
    const path = `${folder}/${filename}`;
    const { error } = await client.storage.from(cfg.bucket).upload(path, file, {
      cacheControl: "31536000",
      upsert: false,
      contentType: file.type || "application/octet-stream"
    });
    if (error) throw error;
    const { data } = client.storage.from(cfg.bucket).getPublicUrl(path);
    return data.publicUrl;
  }

  async function uploadFile(file, folder = "media") {
    if (provider() === "node") return uploadFileNode(file, folder);
    return uploadFileSupabase(file, folder);
  }

  window.ChalaCloud = {
    config: cfg,
    init,
    isConfigured,
    hasLibrary,
    isSignedIn,
    getUserEmail,
    getClient,
    signIn,
    signOut,
    loadStore,
    saveStore,
    uploadFile
  };
})();
