import { TrendingUp, Users, DollarSign, Activity, BarChart3 } from 'lucide-react';

const revenueData = [
  { month: 'Tháng 1', revenue: 125000000 },
  { month: 'Tháng 2', revenue: 145000000 },
  { month: 'Tháng 3', revenue: 168000000 },
  { month: 'Tháng 4', revenue: 189000000 },
  { month: 'Tháng 5', revenue: 210000000 },
  { month: 'Tháng 6', revenue: 235000000 },
];

const counselingStats = [
  { school: 'THPT Nguyễn Du', sessions: 45, success: 38 },
  { school: 'THPT Lê Hồng Phong', sessions: 52, success: 48 },
  { school: 'THPT Trần Đại Nghĩa', sessions: 38, success: 35 },
];

export default function AdminReports() {
  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Báo cáo & Thống kê</h1>
        <p className="text-gray-600">Theo dõi hiệu suất và doanh thu hệ thống</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-500 p-3 rounded-lg">
              <Users className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">12,543</h3>
          <p className="text-sm text-gray-600">Tổng người dùng</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <Activity className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">1,234</h3>
          <p className="text-sm text-gray-600">Ca tư vấn thành công</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-500 p-3 rounded-lg">
              <DollarSign className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+23%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">₫235M</h3>
          <p className="text-sm text-gray-600">Doanh thu tháng này</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-500 p-3 rounded-lg">
              <TrendingUp className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+15%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">156</h3>
          <p className="text-sm text-gray-600">Trường đã xác thực</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Doanh thu theo tháng</h2>
          <div className="space-y-4">
            {revenueData.map((data, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{data.month}</span>
                  <span className="text-sm font-bold text-gray-900">
                    ₫{(data.revenue / 1000000).toFixed(0)}M
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all"
                    style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Counseling Statistics */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Thống kê tư vấn theo trường</h2>
          <div className="space-y-4">
            {counselingStats.map((stat, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{stat.school}</h3>
                  <span className="text-sm text-gray-600">
                    {stat.success}/{stat.sessions} thành công
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(stat.success / stat.sessions) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Tỷ lệ thành công: {((stat.success / stat.sessions) * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Overview */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Lưu lượng truy cập</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600 mb-2">45,234</p>
            <p className="text-sm text-gray-600">Lượt truy cập hôm nay</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600 mb-2">312,456</p>
            <p className="text-sm text-gray-600">Lượt truy cập tuần này</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <p className="text-3xl font-bold text-purple-600 mb-2">1,234,567</p>
            <p className="text-sm text-gray-600">Lượt truy cập tháng này</p>
          </div>
        </div>
      </div>
    </div>
  );
}


