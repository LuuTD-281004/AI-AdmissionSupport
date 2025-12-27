import { TrendingUp, Users, Heart, MapPin } from 'lucide-react';

const interestData = [
  { criteria: 'Năng lực học tập', count: 234, percentage: 45 },
  { criteria: 'Khoảng cách địa lý', count: 189, percentage: 36 },
  { criteria: 'Học phí phù hợp', count: 156, percentage: 30 },
  { criteria: 'Sở thích/Định hướng', count: 98, percentage: 19 },
];

const districtData = [
  { district: 'Quận 1', count: 45 },
  { district: 'Quận 3', count: 38 },
  { district: 'Quận 5', count: 32 },
  { district: 'Quận 7', count: 28 },
  { district: 'Quận 10', count: 25 },
];

export default function SchoolAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Phân tích nhu cầu</h1>
        <p className="text-gray-600">Xem báo cáo học sinh quan tâm và nguyện vọng vào trường</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">156</h3>
          <p className="text-sm text-gray-600">Học sinh quan tâm</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <Heart className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">89</h3>
          <p className="text-sm text-gray-600">Đã thêm vào nguyện vọng</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500 p-3 rounded-lg">
              <TrendingUp className="text-white" size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">+23%</h3>
          <p className="text-sm text-gray-600">Tăng trưởng tháng này</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interest Criteria */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Tiêu chí quan tâm</h2>
          <div className="space-y-4">
            {interestData.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.criteria}</span>
                  <span className="text-sm font-bold text-gray-900">{item.count} học sinh</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{item.percentage}% tổng số quan tâm</p>
              </div>
            ))}
          </div>
        </div>

        {/* District Distribution */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Phân bố theo quận/huyện</h2>
          <div className="space-y-4">
            {districtData.map((item, index) => {
              const maxCount = Math.max(...districtData.map((d) => d.count));
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-gray-400" size={16} />
                      <span className="text-sm font-medium text-gray-700">{item.district}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{item.count} học sinh</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all"
                      style={{ width: `${(item.count / maxCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Anonymous Insights */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Thông tin ẩn danh từ AI</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800">
            <strong>Lưu ý:</strong> Dữ liệu được thu thập ẩn danh từ hệ thống AI Recommendation để bảo vệ quyền riêng tư của học sinh và phụ huynh.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Điểm trung bình</h3>
            <p className="text-2xl font-bold text-primary-600">8.2 / 10</p>
            <p className="text-xs text-gray-600 mt-1">Điểm trung bình của học sinh quan tâm</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Khoảng cách trung bình</h3>
            <p className="text-2xl font-bold text-primary-600">5.2 km</p>
            <p className="text-xs text-gray-600 mt-1">Khoảng cách từ nhà đến trường</p>
          </div>
        </div>
      </div>
    </div>
  );
}

