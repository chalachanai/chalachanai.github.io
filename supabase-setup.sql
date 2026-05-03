-- Chà Là Store cloud backend setup
-- Run this once in Supabase Dashboard > SQL Editor.

create table if not exists public.store_data (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.store_data enable row level security;

drop policy if exists "store public read" on public.store_data;
create policy "store public read"
on public.store_data
for select
to anon, authenticated
using (true);

drop policy if exists "store authenticated write" on public.store_data;
create policy "store authenticated write"
on public.store_data
for all
to authenticated
using (true)
with check (true);

insert into public.store_data (id, data)
values (
  'main',
  jsonb_build_object(
    'schemaVersion', 2,
    'exportedAt', now(),
    'products', '[]'::jsonb,
    'faqs', '[]'::jsonb,
    'settings', jsonb_build_object(
      'messengerLink', 'https://m.me/',
      'shopName', 'Chà Là',
      'soundTagPlaylists', '{}'::jsonb
    )
  )
)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'chala-media',
  'chala-media',
  true,
  52428800,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/apng',
    'video/mp4',
    'video/quicktime',
    'video/x-m4v'
  ]
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "media public read" on storage.objects;
create policy "media public read"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'chala-media');

drop policy if exists "media authenticated insert" on storage.objects;
create policy "media authenticated insert"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'chala-media');

drop policy if exists "media authenticated update" on storage.objects;
create policy "media authenticated update"
on storage.objects
for update
to authenticated
using (bucket_id = 'chala-media')
with check (bucket_id = 'chala-media');

drop policy if exists "media authenticated delete" on storage.objects;
create policy "media authenticated delete"
on storage.objects
for delete
to authenticated
using (bucket_id = 'chala-media');
