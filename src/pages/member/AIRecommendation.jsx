import { useState } from 'react';
import { Sparkles, MapPin, DollarSign, TrendingUp, Star, Calculator } from 'lucide-react';

const recommendations = [
  {
    id: 1,
    name: 'THPT Nguyễn Du',
    matchScore: 92,
    distance: 3.5,
    tuition: 5000000,
    admissionScore: 25.5,
    probability: 85,
    criteria: {
      ability: 95,
      distance: 90,
      tuition: 88,
      preference: 85,
    },
  },
  {
    id: 2,
    name: 'THPT Lê Hồng Phong',
    matchScore: 88,
    distance: 5.2,
    tuition: 4500000,
    admissionScore: 26.0,
    probability: 78,
    criteria: {
      ability: 90,
      distance: 85,
      tuition: 92,
      preference: 88,
    },
  },
  {
    id: 3,
    name: 'THPT Trần Đại Nghĩa',
    matchScore: 85,
    distance: 7.8,
    tuition: 6000000,
    admissionScore: 27.0,
    probability: 72,
    criteria: {
      ability: 88,
      distance: 75,
      tuition: 80,
      preference: 90,
    },
  },
  {
    id: 4,
    name: 'THPT Gia Định',
    matchScore: 82,
    distance: 4.1,
    tuition: 4800000,
    admissionScore: 24.8,
    probability: 88,
    criteria: {
      ability: 85,
      distance: 88,
      tuition: 90,
      preference: 75,
    },
  },
  {
    id: 5,
    name: 'THPT Nguyễn Thị Minh Khai',
    matchScore: 80,
    distance: 6.5,
    tuition: 5200000,
    admissionScore: 25.0,
    probability: 80,
    criteria: {
      ability: 82,
      distance: 80,
      tuition: 85,
      preference: 82,
    },
  },
];

export default function AIRecommendation() {
  const [studentData, setStudentData] = useState({
    averageScore: '',
    testScore: '',
    address: '',
    maxDistance: 10,
    maxTuition: 10000000,
    preferences: [],
  });
  const [results, setResults] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults(recommendations);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Gợi ý trường học</h1>
        <p className="text-gray-600">Nhận gợi ý Top 5 trường phù hợp nhất dựa trên 4 tiêu chí</p>
      </div>

      {showForm && (
        <div className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Nhập thông tin học tập</h2>
              <p className="text-sm text-gray-600">Hệ thống sẽ tính toán và gợi ý trường phù hợp</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Điểm trung bình học tập (0-10)
                </label>
                <div className="relative">
                  <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={studentData.averageScore}
                    onChange={(e) => setStudentData({ ...studentData, averageScore: e.target.value })}
                    className="input-field pl-10"
                    placeholder="8.5"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Điểm thi thử (nếu có)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={studentData.testScore}
                  onChange={(e) => setStudentData({ ...studentData, testScore: e.target.value })}
                  className="input-field"
                  placeholder="25.5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa chỉ nhà
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={studentData.address}
                  onChange={(e) => setStudentData({ ...studentData, address: e.target.value })}
                  className="input-field pl-10"
                  placeholder="123 Đường ABC, Quận 1, TP.HCM"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Khoảng cách tối đa: {studentData.maxDistance} km
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={studentData.maxDistance}
                  onChange={(e) => setStudentData({ ...studentData, maxDistance: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Học phí tối đa: ₫{studentData.maxTuition.toLocaleString('vi-VN')}
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="20000000"
                  step="500000"
                  value={studentData.maxTuition}
                  onChange={(e) => setStudentData({ ...studentData, maxTuition: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary py-3 text-base flex items-center justify-center gap-2">
              <Sparkles size={20} />
              Nhận gợi ý từ AI
            </button>
          </form>
        </div>
      )}

      {results && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Top 5 trường phù hợp nhất</h2>
            <button
              onClick={() => {
                setShowForm(true);
                setResults(null);
              }}
              className="btn-secondary"
            >
              Nhập lại thông tin
            </button>
          </div>

          {results.map((school, index) => (
            <div key={school.id} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
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
                      <span className="flex items-center gap-1">
                        <TrendingUp size={14} />
                        Điểm chuẩn: {school.admissionScore}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600 mb-1">{school.matchScore}%</div>
                  <div className="text-sm text-gray-600">Độ phù hợp</div>
                </div>
              </div>

              {/* Match Criteria */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-3">Đánh giá theo tiêu chí:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Năng lực</span>
                      <span className="text-xs font-bold text-gray-900">{school.criteria.ability}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${school.criteria.ability}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Khoảng cách</span>
                      <span className="text-xs font-bold text-gray-900">{school.criteria.distance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${school.criteria.distance}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Học phí</span>
                      <span className="text-xs font-bold text-gray-900">{school.criteria.tuition}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: `${school.criteria.tuition}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">Sở thích</span>
                      <span className="text-xs font-bold text-gray-900">{school.criteria.preference}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${school.criteria.preference}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Probability */}
              <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg mb-4">
                <div className="flex items-center gap-2">
                  <Star className="text-primary-600" size={20} />
                  <span className="font-medium text-gray-900">Xác suất trúng tuyển</span>
                </div>
                <span className="text-xl font-bold text-primary-600">{school.probability}%</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 btn-primary">Thêm vào nguyện vọng</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

