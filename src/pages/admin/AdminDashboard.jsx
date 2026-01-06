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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-stagger">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className="stat-card bg-white group cursor-pointer border-2 border-gray-200 hover:border-primary-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl`}>
                  <Icon className="text-white" size={28} />
                </div>
                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full animate-pulse-slow">{stat.change}</span>
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-2 transition-all duration-300 group-hover:scale-110 inline-block group-hover:text-primary-600">{stat.value}</h3>
              <p className="text-sm text-gray-600 font-medium group-hover:text-gray-900">{stat.label}</p>
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
          <div className="space-y-4 animate-stagger">
            {recentActivities.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 transition-all duration-300 hover:bg-gray-50 rounded-lg px-2 py-1 -mx-2 -my-1 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 animate-pulse-slow group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 group-hover:text-primary-600 transition-colors">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Thao tác nhanh</h2>
          <div className="grid grid-cols-2 gap-3 animate-stagger">
            <button className="p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200 rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-blue-200/50">
              <School className="text-blue-600 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" size={28} />
              <p className="font-bold text-gray-900 mb-1">Xác thực trường</p>
              <p className="text-xs text-gray-600 font-medium">5 đang chờ</p>
            </button>
            <button className="p-5 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200 rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-purple-200/50">
              <FileText className="text-purple-600 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" size={28} />
              <p className="font-bold text-gray-900 mb-1">Duyệt nội dung</p>
              <p className="text-xs text-gray-600 font-medium">12 đang chờ</p>
            </button>
            <button className="p-5 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200 rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-green-200/50">
              <Users className="text-green-600 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" size={28} />
              <p className="font-bold text-gray-900 mb-1">Quản lý người dùng</p>
              <p className="text-xs text-gray-600 font-medium">Xem tất cả</p>
            </button>
            <button className="p-5 bg-gradient-to-br from-yellow-50 to-yellow-100/50 hover:from-yellow-100 hover:to-yellow-200 rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl group border border-yellow-200/50">
              <TrendingUp className="text-yellow-600 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" size={28} />
              <p className="font-bold text-gray-900 mb-1">Xem báo cáo</p>
              <p className="text-xs text-gray-600 font-medium">Chi tiết</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


