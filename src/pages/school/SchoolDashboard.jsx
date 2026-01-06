import { Calendar, Users, TrendingUp, MessageSquare } from 'lucide-react';

const stats = [
  { label: 'Lịch tư vấn hôm nay', value: '8', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Học sinh quan tâm', value: '156', icon: Users, color: 'bg-green-500' },
  { label: 'Đánh giá trung bình', value: '4.8/5', icon: TrendingUp, color: 'bg-yellow-500' },
  { label: 'Tin nhắn chưa đọc', value: '12', icon: MessageSquare, color: 'bg-purple-500' },
];

const upcomingBookings = [
  { time: '09:00', student: 'Nguyễn Văn A', parent: 'Nguyễn Văn B', type: 'Trực tuyến' },
  { time: '10:30', student: 'Trần Thị C', parent: 'Trần Thị D', type: 'Trực tuyến' },
  { time: '14:00', student: 'Lê Văn E', parent: 'Lê Văn F', type: 'Trực tiếp' },
];

export default function SchoolDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Trường học</h1>
        <p className="text-gray-600">Tổng quan hoạt động của trường</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bookings */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch tư vấn sắp tới</h2>
          <div className="space-y-4">
            {upcomingBookings.map((booking, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{booking.time}</p>
                  <p className="text-sm text-gray-600">{booking.student}</p>
                  <p className="text-xs text-gray-500">Phụ huynh: {booking.parent}</p>
                </div>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                  {booking.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Thao tác nhanh</h2>
          <div className="space-y-3">
            <button className="w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
              <p className="font-medium text-gray-900">Cập nhật hồ sơ trường</p>
              <p className="text-sm text-gray-600 mt-1">Thêm hình ảnh và thông tin mới</p>
            </button>
            <button className="w-full p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
              <p className="font-medium text-gray-900">Cập nhật điểm chuẩn</p>
              <p className="text-sm text-gray-600 mt-1">Thêm điểm chuẩn năm 2025</p>
            </button>
            <button className="w-full p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
              <p className="font-medium text-gray-900">Quản lý lịch tư vấn</p>
              <p className="text-sm text-gray-600 mt-1">Tạo khung giờ mới</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


