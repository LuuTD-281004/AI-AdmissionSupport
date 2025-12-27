import { useState } from 'react';
import { Plus, TrendingUp, Calendar } from 'lucide-react';

const scoreData = [
  { year: 2024, score: 25.5, status: 'official' },
  { year: 2023, score: 24.8, status: 'official' },
  { year: 2022, score: 24.2, status: 'official' },
];

export default function AdmissionScores() {
  const [scores, setScores] = useState(scoreData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newScore, setNewScore] = useState({ year: 2025, score: '', type: 'expected' });

  const handleAddScore = () => {
    if (newScore.score) {
      setScores([...scores, { ...newScore, score: parseFloat(newScore.score) }]);
      setNewScore({ year: 2025, score: '', type: 'expected' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Điểm chuẩn</h1>
          <p className="text-gray-600">Cập nhật điểm chuẩn dự kiến và chính thức qua các năm</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Thêm điểm chuẩn
        </button>
      </div>

      {showAddForm && (
        <div className="card bg-primary-50 border-primary-200">
          <h3 className="font-bold text-gray-900 mb-4">Thêm điểm chuẩn mới</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Năm</label>
              <input
                type="number"
                value={newScore.year}
                onChange={(e) => setNewScore({ ...newScore, year: parseInt(e.target.value) })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Điểm chuẩn</label>
              <input
                type="number"
                step="0.1"
                value={newScore.score}
                onChange={(e) => setNewScore({ ...newScore, score: e.target.value })}
                className="input-field"
                placeholder="25.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Loại</label>
              <select
                value={newScore.type}
                onChange={(e) => setNewScore({ ...newScore, type: e.target.value })}
                className="input-field"
              >
                <option value="expected">Dự kiến</option>
                <option value="official">Chính thức</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={handleAddScore} className="btn-primary">
              Thêm
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className="btn-secondary"
            >
              Hủy
            </button>
          </div>
        </div>
      )}

      {/* Score Chart */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Biểu đồ điểm chuẩn</h2>
        <div className="space-y-4">
          {scores.map((item, index) => {
            const maxScore = Math.max(...scores.map((s) => s.score));
            return (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gray-400" size={18} />
                    <span className="font-medium text-gray-900">Năm {item.year}</span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.status === 'official'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status === 'official' ? 'Chính thức' : 'Dự kiến'}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{item.score} điểm</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all"
                    style={{ width: `${(item.score / maxScore) * 100}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Score Table */}
      <div className="card">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Lịch sử điểm chuẩn</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Năm</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Điểm chuẩn</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Trạng thái</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{item.year}</td>
                  <td className="py-4 px-4">
                    <span className="text-lg font-bold text-primary-600">{item.score}</span>
                    <span className="text-sm text-gray-600 ml-1">điểm</span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.status === 'official'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status === 'official' ? 'Chính thức' : 'Dự kiến'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-primary-600 text-sm font-medium hover:underline">
                      Chỉnh sửa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

