import { Users, School, FileText, TrendingUp, DollarSign, Activity } from 'lucide-react';

const stats = [
  { label: 'Tổng người dùng', value: '12,543', icon: Users, color: 'bg-blue-500', change: '+12%' },
  { label: 'Trường đã xác thực', value: '156', icon: School, color: 'bg-green-500', change: '+5' },
  { label: 'Bài viết đã duyệt', value: '234', icon: FileText, color: 'bg-purple-500', change: '+18' },
  { label: 'Doanh thu tháng', value: '₫125M', icon: DollarSign, color: 'bg-yellow-500', change: '+23%' },
];

const recentActivities = [
  { type: 'school', action: 'Trường THPT Nguyễn Du đã được xác thực', time: '5 phút trước' },
  { type: 'user', action: 'Người dùng mới đăng ký: phuhuynh@email.com', time: '12 phút trước' },
  { type: 'cms', action: 'Bài viết "Thông báo tuyển sinh 2025" đã được duyệt', time: '1 giờ trước' },
  { type: 'user', action: 'Tài khoản trường ABC đã bị khóa', time: '2 giờ trước' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Quản trị</h1>
        <p className="text-gray-600">Tổng quan hệ thống và hoạt động</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Hoạt động gần đây</h2>
            <Activity className="text-gray-400" size={20} />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Thao tác nhanh</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left transition-colors">
              <School className="text-blue-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Xác thực trường</p>
              <p className="text-xs text-gray-600 mt-1">5 đang chờ</p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
              <FileText className="text-purple-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Duyệt nội dung</p>
              <p className="text-xs text-gray-600 mt-1">12 đang chờ</p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
              <Users className="text-green-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Quản lý người dùng</p>
              <p className="text-xs text-gray-600 mt-1">Xem tất cả</p>
            </button>
            <button className="p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg text-left transition-colors">
              <TrendingUp className="text-yellow-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Xem báo cáo</p>
              <p className="text-xs text-gray-600 mt-1">Chi tiết</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

