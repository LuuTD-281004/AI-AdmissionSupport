import { useState } from 'react';
import { Search, Calendar, Clock, Video, MapPin, Star, MessageSquare } from 'lucide-react';

const availableSlots = [
  {
    id: 1,
    school: 'THPT Nguyễn Du',
    date: '2024-01-20',
    time: '09:00',
    duration: 30,
    counselor: 'Cô Nguyễn Thị A',
    type: 'online',
    rating: 4.8,
  },
  {
    id: 2,
    school: 'THPT Lê Hồng Phong',
    date: '2024-01-20',
    time: '14:00',
    duration: 60,
    counselor: 'Thầy Trần Văn B',
    type: 'offline',
    rating: 4.9,
  },
  {
    id: 3,
    school: 'THPT Trần Đại Nghĩa',
    date: '2024-01-21',
    time: '10:00',
    duration: 30,
    counselor: 'Cô Lê Thị D',
    type: 'online',
    rating: 4.7,
  },
];

const bookedSessions = [
  {
    id: 1,
    school: 'THPT Nguyễn Du',
    date: '2024-01-18',
    time: '14:00',
    counselor: 'Cô Nguyễn Thị A',
    status: 'completed',
    rating: 5,
  },
  {
    id: 2,
    school: 'THPT Lê Hồng Phong',
    date: '2024-01-19',
    time: '10:00',
    counselor: 'Thầy Trần Văn B',
    status: 'upcoming',
  },
];

export default function Counseling() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const handleBook = (slotId) => {
    alert('Đã đặt lịch tư vấn thành công!');
  };

  const filteredSlots = availableSlots.filter((slot) => {
    const matchesSearch = slot.school.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || slot.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dịch vụ tư vấn</h1>
        <p className="text-gray-600">Tìm kiếm và đặt lịch tư vấn 1:1 với cố vấn hoặc đại diện trường</p>
      </div>

      {/* Booked Sessions */}
      {bookedSessions.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch tư vấn của tôi</h2>
          <div className="space-y-3">
            {bookedSessions.map((session) => (
              <div key={session.id} className="card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{session.school}</h3>
                      <p className="text-sm text-gray-600">
                        {session.date} - {session.time}
                      </p>
                      <p className="text-sm text-gray-600">Cố vấn: {session.counselor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        session.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {session.status === 'completed' ? 'Đã hoàn thành' : 'Sắp tới'}
                    </span>
                    {session.status === 'completed' && session.rating && (
                      <div className="flex items-center gap-1 mt-2 justify-end">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="text-sm font-medium">{session.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm trường..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setSelectedType('online')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'online'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Trực tuyến
            </button>
            <button
              onClick={() => setSelectedType('offline')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === 'offline'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Trực tiếp
            </button>
          </div>
        </div>
      </div>

      {/* Available Slots */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Khung giờ có sẵn</h2>
        <div className="space-y-4">
          {filteredSlots.length === 0 ? (
            <div className="card text-center py-12">
              <p className="text-gray-500">Không tìm thấy khung giờ nào</p>
            </div>
          ) : (
            filteredSlots.map((slot) => (
              <div key={slot.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {slot.type === 'online' ? (
                        <Video className="text-primary-600" size={24} />
                      ) : (
                        <MapPin className="text-primary-600" size={24} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{slot.school}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {slot.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {slot.time} ({slot.duration} phút)
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare size={14} />
                          {slot.counselor}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-2 justify-end">
                      <Star className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="text-sm font-medium">{slot.rating}</span>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        slot.type === 'online'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {slot.type === 'online' ? 'Trực tuyến' : 'Trực tiếp'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleBook(slot.id)}
                  className="w-full btn-primary"
                >
                  Đặt lịch tư vấn
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

