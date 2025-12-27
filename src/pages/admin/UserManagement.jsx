import { useState } from 'react';
import { Search, Ban, CheckCircle, User, Mail, Shield, GraduationCap, MessageSquare } from 'lucide-react';

const users = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    role: 'member',
    status: 'active',
    registeredAt: '2024-01-10',
    lastActive: '2024-01-15',
  },
  {
    id: 2,
    name: 'THPT Nguyễn Du',
    email: 'nguyendu@school.edu.vn',
    role: 'school',
    status: 'active',
    registeredAt: '2024-01-08',
    lastActive: '2024-01-15',
  },
  {
    id: 3,
    name: 'Trần Thị B',
    email: 'tranthib@email.com',
    role: 'member',
    status: 'banned',
    registeredAt: '2024-01-05',
    lastActive: '2024-01-12',
  },
  {
    id: 4,
    name: 'Cố vấn Nguyễn C',
    email: 'nguyenc@counselor.edu.vn',
    role: 'assistant',
    status: 'active',
    registeredAt: '2024-01-03',
    lastActive: '2024-01-15',
  },
];

const roleIcons = {
  member: User,
  school: GraduationCap,
  assistant: MessageSquare,
  admin: Shield,
};

const roleLabels = {
  member: 'Thành viên',
  school: 'Trường học',
  assistant: 'Cố vấn',
  admin: 'Quản trị viên',
};

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [userList, setUserList] = useState(users);

  const handleBan = (id) => {
    setUserList(
      userList.map((user) =>
        user.id === id ? { ...user, status: 'banned' } : user
      )
    );
  };

  const handleUnban = (id) => {
    setUserList(
      userList.map((user) =>
        user.id === id ? { ...user, status: 'active' } : user
      )
    );
  };

  const filteredUsers = userList.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý người dùng</h1>
        <p className="text-gray-600">Quản lý tài khoản và quyền truy cập của người dùng</p>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="input-field"
          >
            <option value="all">Tất cả vai trò</option>
            <option value="member">Thành viên</option>
            <option value="school">Trường học</option>
            <option value="assistant">Cố vấn</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="card overflow-x-auto">
        <div className="min-w-full">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Người dùng</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Vai trò</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Trạng thái</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Đăng ký</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Hoạt động cuối</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                const RoleIcon = roleIcons[user.role];
                return (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <User size={20} className="text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Mail size={12} />
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <RoleIcon size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-700">{roleLabels[user.role]}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {user.status === 'active' ? 'Hoạt động' : 'Đã khóa'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{user.registeredAt}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{user.lastActive}</td>
                    <td className="py-4 px-4">
                      {user.status === 'active' ? (
                        <button
                          onClick={() => handleBan(user.id)}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium flex items-center gap-1"
                        >
                          <Ban size={14} />
                          Khóa
                        </button>
                      ) : (
                        <button
                          onClick={() => handleUnban(user.id)}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium flex items-center gap-1"
                        >
                          <CheckCircle size={14} />
                          Mở khóa
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        Hiển thị {filteredUsers.length} / {userList.length} người dùng
      </div>
    </div>
  );
}

