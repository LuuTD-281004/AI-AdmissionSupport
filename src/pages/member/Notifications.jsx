import { useState } from 'react';
import { Bell, Calendar, FileText, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'deadline',
    title: 'Hạn nộp hồ sơ tuyển sinh',
    message: 'Hạn nộp hồ sơ tuyển sinh lớp 10 năm học 2025-2026 là ngày 01/02/2024',
    date: '2024-01-15',
    read: false,
    icon: AlertCircle,
    color: 'bg-red-100 text-red-800',
  },
  {
    id: 2,
    type: 'exam',
    title: 'Lịch thi tuyển sinh',
    message: 'Kỳ thi tuyển sinh vào lớp 10 sẽ diễn ra vào ngày 15/02/2024',
    date: '2024-01-14',
    read: false,
    icon: Calendar,
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: 3,
    type: 'score',
    title: 'Cập nhật điểm chuẩn',
    message: 'THPT Nguyễn Du đã cập nhật điểm chuẩn dự kiến: 25.2 điểm',
    date: '2024-01-13',
    read: true,
    icon: TrendingUp,
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 4,
    type: 'announcement',
    title: 'Thông báo mới từ Sở GD&ĐT',
    message: 'Sở GD&ĐT TP.HCM đã công bố quy chế tuyển sinh mới',
    date: '2024-01-12',
    read: true,
    icon: FileText,
    color: 'bg-purple-100 text-purple-800',
  },
];

export default function Notifications() {
  const [notifs, setNotifs] = useState(notifications);

  const handleMarkRead = (id) => {
    setNotifs(notifs.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const handleMarkAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifs.filter((n) => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thông báo</h1>
          <p className="text-gray-600">Nhận thông báo về các mốc thời gian quan trọng</p>
        </div>
        {unreadCount > 0 && (
          <button onClick={handleMarkAllRead} className="btn-secondary">
            Đánh dấu tất cả đã đọc
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Bell className="text-red-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
              <p className="text-sm text-gray-600">Thông báo chưa đọc</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {notifs.filter((n) => n.type === 'deadline' || n.type === 'exam').length}
              </p>
              <p className="text-sm text-gray-600">Sự kiện sắp tới</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {notifs.filter((n) => n.read).length}
              </p>
              <p className="text-sm text-gray-600">Đã đọc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifs.map((notif) => {
          const Icon = notif.icon;
          return (
            <div
              key={notif.id}
              className={`card ${!notif.read ? 'border-l-4 border-l-primary-600 bg-primary-50' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`${notif.color} p-3 rounded-lg`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{notif.title}</h3>
                    {!notif.read && (
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-700 mb-2">{notif.message}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{notif.date}</span>
                    {!notif.read && (
                      <button
                        onClick={() => handleMarkRead(notif.id)}
                        className="text-sm text-primary-600 hover:underline"
                      >
                        Đánh dấu đã đọc
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

