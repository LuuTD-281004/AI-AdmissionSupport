import { GraduationCap, BookOpen, MessageSquare, Bell, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickActions = [
  { icon: GraduationCap, label: 'AI Gợi ý trường', path: '/member/recommendation', color: 'bg-blue-500', description: 'Nhận gợi ý trường phù hợp' },
  { icon: BookOpen, label: 'Quản lý nguyện vọng', path: '/member/wishlist', color: 'bg-green-500', description: 'Theo dõi nguyện vọng' },
  { icon: MessageSquare, label: 'Đặt lịch tư vấn', path: '/member/counseling', color: 'bg-purple-500', description: 'Tư vấn 1:1 với chuyên gia' },
  { icon: Bell, label: 'Thông báo', path: '/member/notifications', color: 'bg-yellow-500', description: 'Xem thông báo mới' },
];

const upcomingEvents = [
  { date: '2024-02-01', title: 'Hạn nộp hồ sơ tuyển sinh', type: 'deadline' },
  { date: '2024-02-15', title: 'Ngày thi tuyển sinh', type: 'exam' },
  { date: '2024-03-01', title: 'Công bố điểm chuẩn', type: 'announcement' },
];

export default function MemberDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Chào mừng trở lại!</h1>
        <p className="text-gray-600">Hệ thống tư vấn tuyển sinh thông minh của bạn</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.path}
              to={action.path}
              className="card hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className={`${action.color} p-4 rounded-xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-xl`}>
                <Icon className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{action.label}</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{action.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Events */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sự kiện sắp tới</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-primary-600">
                    {new Date(event.date).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{event.title}</p>
                  <p className="text-xs text-gray-600">
                    {Math.ceil((new Date(event.date) - new Date()) / (1000 * 60 * 60 * 24))} ngày nữa
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    event.type === 'deadline'
                      ? 'bg-red-100 text-red-800'
                      : event.type === 'exam'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {event.type === 'deadline' ? 'Hạn chót' : event.type === 'exam' ? 'Thi' : 'Thông báo'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hoạt động gần đây</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Đã xem gợi ý AI</p>
                <p className="text-xs text-gray-600">5 trường được gợi ý</p>
              </div>
              <span className="text-xs text-gray-500">2 giờ trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="text-green-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Đã thêm nguyện vọng</p>
                <p className="text-xs text-gray-600">THPT Nguyễn Du</p>
              </div>
              <span className="text-xs text-gray-500">1 ngày trước</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <MessageSquare className="text-purple-600" size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Đã đặt lịch tư vấn</p>
                <p className="text-xs text-gray-600">20/01/2024 - 14:00</p>
              </div>
              <span className="text-xs text-gray-500">2 ngày trước</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


