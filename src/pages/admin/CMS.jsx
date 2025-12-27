import { useState } from 'react';
import { Eye, Check, X, Edit, Plus, FileText } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'Thông báo tuyển sinh lớp 10 năm học 2025-2026',
    author: 'Sở GD&ĐT TP.HCM',
    category: 'Thông báo',
    status: 'pending',
    submittedAt: '2024-01-15',
    content: 'Nội dung bài viết về thông báo tuyển sinh...',
  },
  {
    id: 2,
    title: 'Hướng dẫn nộp hồ sơ tuyển sinh trực tuyến',
    author: 'Sở GD&ĐT TP.HCM',
    category: 'Hướng dẫn',
    status: 'approved',
    submittedAt: '2024-01-14',
    content: 'Nội dung hướng dẫn chi tiết...',
  },
  {
    id: 3,
    title: 'Lịch thi tuyển sinh vào lớp 10',
    author: 'Sở GD&ĐT TP.HCM',
    category: 'Lịch thi',
    status: 'pending',
    submittedAt: '2024-01-13',
    content: 'Lịch thi chi tiết các môn...',
  },
];

export default function CMS() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [contentList, setContentList] = useState(articles);

  const handleApprove = (id) => {
    setContentList(
      contentList.map((item) =>
        item.id === id ? { ...item, status: 'approved' } : item
      )
    );
  };

  const handleReject = (id) => {
    setContentList(
      contentList.map((item) =>
        item.id === id ? { ...item, status: 'rejected' } : item
      )
    );
  };

  const filteredContent = selectedStatus === 'all'
    ? contentList
    : contentList.filter((item) => item.status === selectedStatus);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý nội dung</h1>
          <p className="text-gray-600">Kiểm duyệt bài đăng tin tức và thông báo tuyển sinh</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={20} />
          Tạo bài viết
        </button>
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
          onClick={() => setSelectedStatus('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'pending'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Chờ duyệt
        </button>
        <button
          onClick={() => setSelectedStatus('approved')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'approved'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Đã duyệt
        </button>
        <button
          onClick={() => setSelectedStatus('rejected')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            selectedStatus === 'rejected'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Đã từ chối
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {filteredContent.length === 0 ? (
          <div className="card text-center py-12">
            <FileText className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">Không có nội dung nào</p>
          </div>
        ) : (
          filteredContent.map((item) => (
            <div key={item.id} className="card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.status === 'approved'
                        ? 'Đã duyệt'
                        : item.status === 'rejected'
                        ? 'Đã từ chối'
                        : 'Chờ duyệt'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Tác giả: {item.author}</span>
                    <span>•</span>
                    <span>Danh mục: {item.category}</span>
                    <span>•</span>
                    <span>Ngày: {item.submittedAt}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">{item.content}</p>

              <div className="flex gap-3">
                <button className="btn-secondary flex items-center gap-2">
                  <Eye size={18} />
                  Xem chi tiết
                </button>
                {item.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2"
                    >
                      <Check size={18} />
                      Duyệt
                    </button>
                    <button
                      onClick={() => handleReject(item.id)}
                      className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-2"
                    >
                      <X size={18} />
                      Từ chối
                    </button>
                  </>
                )}
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                  <Edit size={18} />
                  Chỉnh sửa
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

