import { Calendar, MessageSquare, FileText, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Ca tư vấn hôm nay', value: '5', icon: Calendar, color: 'bg-blue-500' },
  { label: 'Ca đã hoàn thành', value: '23', icon: CheckCircle, color: 'bg-green-500' },
  { label: 'Đánh giá trung bình', value: '4.8/5', icon: TrendingUp, color: 'bg-yellow-500' },
  { label: 'Đánh giá chưa gửi', value: '3', icon: FileText, color: 'bg-purple-500' },
];

const upcomingSessions = [
  { time: '09:00', student: 'Nguyễn Văn A', school: 'THPT Nguyễn Du', type: 'online' },
  { time: '10:30', student: 'Trần Thị C', school: 'THPT Lê Hồng Phong', type: 'offline' },
  { time: '14:00', student: 'Lê Văn E', school: 'THPT Trần Đại Nghĩa', type: 'online' },
];

export default function AssistantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Cố vấn</h1>
        <p className="text-gray-600">Tổng quan ca tư vấn và đánh giá</p>
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
        {/* Upcoming Sessions */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Ca tư vấn sắp tới</h2>
          <div className="space-y-3">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="text-gray-400" size={16} />
                    <span className="font-medium text-gray-900">{session.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{session.student}</p>
                  <p className="text-xs text-gray-500">{session.school}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    session.type === 'online'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {session.type === 'online' ? 'Trực tuyến' : 'Trực tiếp'}
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
              <MessageSquare className="text-blue-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Mở Workspace</p>
              <p className="text-sm text-gray-600 mt-1">Bắt đầu ca tư vấn</p>
            </button>
            <button className="w-full p-4 bg-green-50 hover:bg-green-100 rounded-lg text-left transition-colors">
              <FileText className="text-green-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Gửi đánh giá</p>
              <p className="text-sm text-gray-600 mt-1">3 đánh giá chưa gửi</p>
            </button>
            <button className="w-full p-4 bg-purple-50 hover:bg-purple-100 rounded-lg text-left transition-colors">
              <Calendar className="text-purple-600 mb-2" size={24} />
              <p className="font-medium text-gray-900">Xem lịch tư vấn</p>
              <p className="text-sm text-gray-600 mt-1">Tất cả ca tư vấn</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

