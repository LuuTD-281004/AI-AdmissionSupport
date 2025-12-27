import { useState } from 'react';
import { Check, X, Eye, FileText, MapPin, Phone, Mail } from 'lucide-react';

const pendingSchools = [
  {
    id: 1,
    name: 'THPT Nguyễn Du',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    phone: '0281234567',
    email: 'nguyendu@school.edu.vn',
    license: 'GP-2024-001',
    submittedAt: '2024-01-15',
    documents: ['Giấy phép hoạt động', 'Giấy chứng nhận', 'Hồ sơ pháp lý'],
  },
  {
    id: 2,
    name: 'THPT Lê Hồng Phong',
    address: '456 Đường XYZ, Quận 3, TP.HCM',
    phone: '0287654321',
    email: 'lehongphong@school.edu.vn',
    license: 'GP-2024-002',
    submittedAt: '2024-01-14',
    documents: ['Giấy phép hoạt động', 'Giấy chứng nhận'],
  },
];

export default function SchoolVerification() {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schools, setSchools] = useState(pendingSchools);

  const handleApprove = (id) => {
    setSchools(schools.filter((s) => s.id !== id));
    alert('Trường học đã được phê duyệt');
  };

  const handleReject = (id) => {
    setSchools(schools.filter((s) => s.id !== id));
    alert('Đã từ chối hồ sơ trường học');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Xác thực cơ sở giáo dục</h1>
        <p className="text-gray-600">Kiểm tra và phê duyệt hồ sơ đăng ký từ các trường THPT</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* School List */}
        <div className="lg:col-span-2 space-y-4">
          {schools.length === 0 ? (
            <div className="card text-center py-12">
              <p className="text-gray-500">Không có hồ sơ nào đang chờ duyệt</p>
            </div>
          ) : (
            schools.map((school) => (
              <div key={school.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{school.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin size={14} />
                      {school.address}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Chờ duyệt
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>{school.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} />
                    <span>{school.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FileText size={16} />
                    <span>Giấy phép: {school.license}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Nộp hồ sơ: {school.submittedAt}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Tài liệu đính kèm:</p>
                  <div className="flex flex-wrap gap-2">
                    {school.documents.map((doc, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedSchool(school)}
                    className="flex-1 btn-secondary flex items-center justify-center gap-2"
                  >
                    <Eye size={18} />
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => handleReject(school.id)}
                    className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-2"
                  >
                    <X size={18} />
                    Từ chối
                  </button>
                  <button
                    onClick={() => handleApprove(school.id)}
                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2"
                  >
                    <Check size={18} />
                    Phê duyệt
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">Thống kê</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Đang chờ duyệt</p>
                <p className="text-2xl font-bold text-yellow-600">{schools.length}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Đã phê duyệt</p>
                <p className="text-2xl font-bold text-green-600">156</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Đã từ chối</p>
                <p className="text-2xl font-bold text-red-600">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

