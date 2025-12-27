import { useState } from 'react';
import { Calendar, Clock, User, Video, MapPin, CheckCircle, XCircle, MessageSquare, FileText } from 'lucide-react';

const sessions = [
  {
    id: 1,
    date: '2024-01-18',
    time: '14:00',
    student: 'Nguyễn Văn A',
    parent: 'Nguyễn Văn B',
    school: 'THPT Nguyễn Du',
    type: 'online',
    status: 'completed',
    duration: 30,
  },
  {
    id: 2,
    date: '2024-01-19',
    time: '10:00',
    student: 'Trần Thị C',
    parent: 'Trần Thị D',
    school: 'THPT Lê Hồng Phong',
    type: 'offline',
    status: 'upcoming',
    duration: 60,
  },
  {
    id: 3,
    date: '2024-01-20',
    time: '09:00',
    student: 'Lê Văn E',
    parent: 'Lê Văn F',
    school: 'THPT Trần Đại Nghĩa',
    type: 'online',
    status: 'upcoming',
    duration: 30,
  },
  {
    id: 4,
    date: '2024-01-17',
    time: '15:00',
    student: 'Phạm Thị G',
    parent: 'Phạm Văn H',
    school: 'THPT Gia Định',
    type: 'online',
    status: 'completed',
    duration: 45,
    evaluated: false,
  },
];

export default function CounselingSessions() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sessionList, setSessionList] = useState(sessions);

  const filteredSessions = selectedStatus === 'all'
    ? sessionList
    : sessionList.filter((s) => s.status === selectedStatus);

  const handleStartSession = (id) => {
    alert('Mở Workspace tư vấn...');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý ca tư vấn</h1>
        <p className="text-gray-600">Tiếp nhận và quản lý các yêu cầu tư vấn</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedStatus('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setSelectedStatus('upcoming')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'upcoming'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Sắp tới
        </button>
        <button
          onClick={() => setSelectedStatus('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'completed'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Đã hoàn thành
        </button>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        {filteredSessions.map((session) => (
          <div key={session.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  {session.type === 'online' ? (
                    <Video className="text-primary-600" size={24} />
                  ) : (
                    <MapPin className="text-primary-600" size={24} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{session.school}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {session.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {session.time} ({session.duration} phút)
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>Học sinh: {session.student}</p>
                    <p>Phụ huynh: {session.parent}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full mb-2 block ${
                    session.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {session.status === 'completed' ? 'Đã hoàn thành' : 'Sắp tới'}
                </span>
                {session.status === 'completed' && !session.evaluated && (
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Chưa đánh giá
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              {session.status === 'upcoming' ? (
                <button
                  onClick={() => handleStartSession(session.id)}
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageSquare size={18} />
                  Mở Workspace
                </button>
              ) : (
                <>
                  {!session.evaluated && (
                    <button className="btn-primary flex items-center gap-2">
                      <FileText size={18} />
                      Gửi đánh giá
                    </button>
                  )}
                  <button className="btn-secondary flex items-center gap-2">
                    <MessageSquare size={18} />
                    Xem chi tiết
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

