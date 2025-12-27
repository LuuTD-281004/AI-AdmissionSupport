import { useState } from 'react';
import { Plus, Calendar, Clock, User, Video, MapPin, Check, X } from 'lucide-react';

const timeSlots = [
  { id: 1, date: '2024-01-20', time: '09:00', duration: 30, teacher: 'Cô Nguyễn Thị A', status: 'available' },
  { id: 2, date: '2024-01-20', time: '10:00', duration: 30, teacher: 'Thầy Trần Văn B', status: 'booked', student: 'Nguyễn Văn C' },
  { id: 3, date: '2024-01-20', time: '14:00', duration: 60, teacher: 'Cô Lê Thị D', status: 'available' },
  { id: 4, date: '2024-01-21', time: '09:00', duration: 30, teacher: 'Cô Nguyễn Thị A', status: 'booked', student: 'Trần Thị E' },
];

export default function BookingManagement() {
  const [slots, setSlots] = useState(timeSlots);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlot, setNewSlot] = useState({
    date: '',
    time: '',
    duration: 30,
    teacher: '',
    type: 'online',
  });

  const handleAddSlot = () => {
    if (newSlot.date && newSlot.time && newSlot.teacher) {
      setSlots([
        ...slots,
        {
          ...newSlot,
          id: slots.length + 1,
          status: 'available',
        },
      ]);
      setNewSlot({ date: '', time: '', duration: 30, teacher: '', type: 'online' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý lịch tư vấn</h1>
          <p className="text-gray-600">Tạo khung giờ và phân công giáo viên/cố vấn</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Tạo khung giờ
        </button>
      </div>

      {showAddForm && (
        <div className="card bg-primary-50 border-primary-200">
          <h3 className="font-bold text-gray-900 mb-4">Thêm khung giờ mới</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày</label>
              <input
                type="date"
                value={newSlot.date}
                onChange={(e) => setNewSlot({ ...newSlot, date: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Giờ</label>
              <input
                type="time"
                value={newSlot.time}
                onChange={(e) => setNewSlot({ ...newSlot, time: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Thời lượng (phút)</label>
              <select
                value={newSlot.duration}
                onChange={(e) => setNewSlot({ ...newSlot, duration: parseInt(e.target.value) })}
                className="input-field"
              >
                <option value={30}>30 phút</option>
                <option value={60}>60 phút</option>
                <option value={90}>90 phút</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Giáo viên/Cố vấn</label>
              <input
                type="text"
                value={newSlot.teacher}
                onChange={(e) => setNewSlot({ ...newSlot, teacher: e.target.value })}
                className="input-field"
                placeholder="Tên giáo viên"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hình thức</label>
              <select
                value={newSlot.type}
                onChange={(e) => setNewSlot({ ...newSlot, type: e.target.value })}
                className="input-field"
              >
                <option value="online">Trực tuyến</option>
                <option value="offline">Trực tiếp</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleAddSlot} className="btn-primary">
              Thêm
            </button>
            <button onClick={() => setShowAddForm(false)} className="btn-secondary">
              Hủy
            </button>
          </div>
        </div>
      )}

      {/* Calendar View */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch tư vấn</h2>
        <div className="space-y-3">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className={`p-4 rounded-lg border-2 ${
                slot.status === 'booked'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-gray-400" size={18} />
                    <span className="font-medium text-gray-900">{slot.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-gray-400" size={18} />
                    <span className="font-medium text-gray-900">{slot.time}</span>
                    <span className="text-sm text-gray-600">({slot.duration} phút)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="text-gray-400" size={18} />
                    <span className="text-sm text-gray-700">{slot.teacher}</span>
                  </div>
                  {slot.type === 'online' ? (
                    <Video className="text-blue-500" size={18} />
                  ) : (
                    <MapPin className="text-green-500" size={18} />
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {slot.status === 'booked' ? (
                    <>
                      <span className="text-sm text-gray-700">Học sinh: {slot.student}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Đã đặt
                      </span>
                    </>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      Trống
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

