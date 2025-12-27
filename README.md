# AI Admission Portal

Hệ thống tư vấn tuyển sinh thông minh với AI Recommendation cho học sinh và phụ huynh tại TP.HCM.

## Tính năng chính

### 1. System Admin (Quản trị viên hệ thống)
- ✅ Xác thực cơ sở giáo dục: Kiểm tra và phê duyệt hồ sơ đăng ký từ các trường THPT
- ✅ Quản trị nội dung (CMS): Kiểm duyệt bài đăng tin tức và thông báo tuyển sinh
- ✅ Quản lý người dùng: Khóa/mở tài khoản, quản lý quyền truy cập
- ✅ Dashboard & Báo cáo: Thống kê lưu lượng, ca tư vấn, doanh thu

### 2. School (Trường THPT)
- ✅ Quản lý hồ sơ số: Cập nhật hình ảnh, chương trình đào tạo, cơ sở vật chất
- ✅ Công bố điểm chuẩn: Cập nhật điểm chuẩn dự kiến và chính thức qua các năm
- ✅ Quản lý lịch tư vấn: Tạo khung giờ, phân công giáo viên/cố vấn
- ✅ Phân tích nhu cầu: Xem báo cáo học sinh quan tâm dựa trên dữ liệu AI

### 3. Member (Phụ huynh & Học sinh)
- ✅ **AI Recommendation**: Gợi ý Top 5 trường phù hợp theo 4 tiêu chí:
  - Năng lực học tập
  - Khoảng cách địa lý
  - Học phí
  - Sở thích/Định hướng
- ✅ Quản lý nguyện vọng: Tạo danh sách ưu tiên, theo dõi biến động điểm chuẩn
- ✅ Dịch vụ tư vấn: Đặt lịch tư vấn 1:1, gửi đánh giá/feedback
- ✅ Tra cứu & Thông báo: Nhận thông báo về các mốc thời gian quan trọng

### 4. Assistant (Cố vấn/Trợ lý tư vấn)
- ✅ Quản lý ca tư vấn: Tiếp nhận yêu cầu tư vấn
- ✅ Workspace tư vấn: Giao diện Chat/Video Call tích hợp tài liệu
- ✅ Báo cáo đánh giá: Ghi lại nhận xét (Điểm mạnh - Rủi ro - Đề xuất)

## Công nghệ sử dụng

- **React 19** - UI Framework
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Context API** - State management

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

## Cấu trúc dự án

```
src/
├── components/
│   └── Layout/
│       ├── DashboardLayout.jsx    # Layout chính với sidebar
│       └── ProtectedRoute.jsx     # Route bảo vệ theo role
├── contexts/
│   └── AuthContext.jsx            # Context quản lý authentication
├── pages/
│   ├── Login.jsx                   # Trang đăng nhập
│   ├── admin/                      # Trang cho System Admin
│   ├── school/                     # Trang cho School
│   ├── member/                     # Trang cho Member
│   └── assistant/                 # Trang cho Assistant
└── App.jsx                         # Component chính với routing
```

## Đăng nhập

Ứng dụng hỗ trợ 4 vai trò:
- **Admin**: Quản trị viên hệ thống
- **School**: Trường THPT
- **Member**: Phụ huynh/Học sinh
- **Assistant**: Cố vấn tư vấn

**Demo**: Nhập bất kỳ email và mật khẩu nào để đăng nhập. Chọn vai trò trước khi đăng nhập.

## Responsive Design

Giao diện được thiết kế responsive, tương thích với:
- 📱 Điện thoại (mobile)
- 💻 Laptop/Desktop
- 📊 Tablet

## Tính năng nổi bật

1. **AI Recommendation Engine**: Hệ thống gợi ý thông minh dựa trên 4 tiêu chí
2. **Real-time Tracking**: Theo dõi biến động điểm chuẩn theo thời gian thực
3. **Integrated Workspace**: Workspace tư vấn tích hợp chat và tài liệu
4. **Comprehensive Analytics**: Báo cáo và thống kê chi tiết cho từng vai trò

## License

MIT
