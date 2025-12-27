import { useState } from 'react';
import { Heart, TrendingUp, MapPin, DollarSign, Trash2, ArrowUp, ArrowDown } from 'lucide-react';

const wishlist = [
  {
    id: 1,
    name: 'THPT Nguyễn Du',
    priority: 1,
    admissionScore: 25.5,
    currentScore: 25.2,
    change: -0.3,
    distance: 3.5,
    tuition: 5000000,
    status: 'tracking',
  },
  {
    id: 2,
    name: 'THPT Lê Hồng Phong',
    priority: 2,
    admissionScore: 26.0,
    currentScore: 25.8,
    change: -0.2,
    distance: 5.2,
    tuition: 4500000,
    status: 'tracking',
  },
  {
    id: 3,
    name: 'THPT Trần Đại Nghĩa',
    priority: 3,
    admissionScore: 27.0,
    currentScore: 27.0,
    change: 0,
    distance: 7.8,
    tuition: 6000000,
    status: 'tracking',
  },
];

export default function Wishlist() {
  const [wishes, setWishes] = useState(wishlist);

  const handlePriorityChange = (id, direction) => {
    const school = wishes.find((w) => w.id === id);
    if (!school) return;

    if (direction === 'up' && school.priority > 1) {
      const otherSchool = wishes.find((w) => w.priority === school.priority - 1);
      if (otherSchool) {
        setWishes(
          wishes.map((w) =>
            w.id === id
              ? { ...w, priority: w.priority - 1 }
              : w.id === otherSchool.id
              ? { ...w, priority: w.priority + 1 }
              : w
          )
        );
      }
    } else if (direction === 'down' && school.priority < wishes.length) {
      const otherSchool = wishes.find((w) => w.priority === school.priority + 1);
      if (otherSchool) {
        setWishes(
          wishes.map((w) =>
            w.id === id
              ? { ...w, priority: w.priority + 1 }
              : w.id === otherSchool.id
              ? { ...w, priority: w.priority - 1 }
              : w
          )
        );
      }
    }
  };

  const handleRemove = (id) => {
    const removed = wishes.find((w) => w.id === id);
    setWishes(
      wishes
        .filter((w) => w.id !== id)
        .map((w) => (w.priority > removed.priority ? { ...w, priority: w.priority - 1 } : w))
    );
  };

  const sortedWishes = [...wishes].sort((a, b) => a.priority - b.priority);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý nguyện vọng</h1>
        <p className="text-gray-600">Theo dõi danh sách trường ưu tiên và biến động điểm chuẩn</p>
      </div>

      {sortedWishes.length === 0 ? (
        <div className="card text-center py-12">
          <Heart className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 mb-4">Chưa có nguyện vọng nào</p>
          <button className="btn-primary">Thêm nguyện vọng từ AI Gợi ý</button>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedWishes.map((school) => (
            <div key={school.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    NV{school.priority}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{school.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {school.distance} km
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={14} />
                        ₫{school.tuition.toLocaleString('vi-VN')}/tháng
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(school.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Score Tracking */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Điểm chuẩn năm trước</p>
                  <p className="text-xl font-bold text-gray-900">{school.admissionScore}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Điểm chuẩn dự kiến</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-blue-600">{school.currentScore}</p>
                    {school.change !== 0 && (
                      <div className={`flex items-center gap-1 ${school.change > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        {school.change > 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                        <span className="text-sm font-medium">{Math.abs(school.change)}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Trạng thái</p>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Đang theo dõi
                  </span>
                </div>
              </div>

              {/* Trend Chart */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Biến động điểm chuẩn</p>
                <div className="flex items-end gap-2 h-20">
                  {[24.5, 24.8, 25.0, 25.2, 25.2].map((score, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div
                        className="w-full bg-primary-600 rounded-t"
                        style={{ height: `${((score - 24) / 3) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-1">{score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Priority Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Thứ tự ưu tiên:</span>
                  <button
                    onClick={() => handlePriorityChange(school.id, 'up')}
                    disabled={school.priority === 1}
                    className="p-1 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowUp size={18} />
                  </button>
                  <button
                    onClick={() => handlePriorityChange(school.id, 'down')}
                    disabled={school.priority === wishes.length}
                    className="p-1 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowDown size={18} />
                  </button>
                </div>
                <button className="btn-secondary">Xem chi tiết</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

