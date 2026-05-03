# Chà Là Store - Online Admin Setup

Mục tiêu: đưa web + admin lên online để có thể dùng điện thoại thêm sản phẩm, upload ảnh/video và đồng bộ cho khách xem.

## 1. Tạo Supabase backend

1. Vào https://supabase.com
2. Tạo project mới.
3. Vào **SQL Editor**.
4. Copy toàn bộ nội dung file `supabase-setup.sql` và chạy.
5. Vào **Authentication > Users**.
6. Tạo user admin bằng email + mật khẩu của bạn.
7. Vào **Project Settings > API**.
8. Lấy:
   - Project URL
   - anon public key

## 2. Điền cấu hình vào web

Mở file `backend-config.js` và sửa thành:

```js
window.CHALA_BACKEND = {
  provider: "supabase",
  url: "https://YOUR_PROJECT.supabase.co",
  anonKey: "YOUR_ANON_PUBLIC_KEY",
  table: "store_data",
  rowId: "main",
  bucket: "chala-media"
};
```

`anonKey` là public key của Supabase, không phải service role key. Không bao giờ đưa service role key vào web.

## 3. Test local với cloud

Mở:

```text
http://127.0.0.1:8080/admin.html
```

Đăng nhập PIN admin, sau đó đăng nhập cloud bằng email/mật khẩu Supabase.

Thêm sản phẩm, upload ảnh/video, rồi bấm **Đẩy lên cloud** nếu cần.

Test trang khách đọc cloud:

```text
http://127.0.0.1:8080/index.html?data=cloud
```

## 4. Deploy web

Có thể dùng Netlify, Vercel hoặc Cloudflare Pages. Với web này, cách dễ nhất là deploy cả thư mục `echo-vintage`.

Sau khi deploy, trang khách tự đọc Supabase cloud data. Admin online cũng dùng cùng cloud data.

## 5. Gắn domain

Sau khi link test chạy ổn, mua domain rồi trỏ domain về hosting.

Ví dụ domain bạn muốn: `chalachanai.com`.

Thứ tự đúng:

1. Supabase chạy ổn.
2. Deploy test chạy ổn.
3. Admin trên điện thoại thêm được sản phẩm.
4. Mua/gắn domain.
