import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  Users,
  School,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  User,
  Calendar,
  MessageSquare,
  BookOpen,
  TrendingUp,
  Shield,
  GraduationCap,
} from 'lucide-react';

const roleMenus = {
  admin: [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/schools', label: 'Xác thực trường học', icon: School },
    { path: '/admin/cms', label: 'Quản lý nội dung', icon: FileText },
    { path: '/admin/users', label: 'Quản lý người dùng', icon: Users },
    { path: '/admin/reports', label: 'Báo cáo & Thống kê', icon: BarChart3 },
  ],
  school: [
    { path: '/school/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/school/profile', label: 'Hồ sơ trường', icon: School },
    { path: '/school/scores', label: 'Điểm chuẩn', icon: TrendingUp },
    { path: '/school/bookings', label: 'Lịch tư vấn', icon: Calendar },
    { path: '/school/analytics', label: 'Phân tích nhu cầu', icon: BarChart3 },
  ],
  member: [
    { path: '/member/dashboard', label: 'Trang chủ', icon: LayoutDashboard },
    { path: '/member/recommendation', label: 'AI Gợi ý', icon: GraduationCap },
    { path: '/member/wishlist', label: 'Nguyện vọng', icon: BookOpen },
    { path: '/member/counseling', label: 'Tư vấn', icon: MessageSquare },
    { path: '/member/notifications', label: 'Thông báo', icon: Bell },
  ],
  assistant: [
    { path: '/assistant/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/assistant/sessions', label: 'Ca tư vấn', icon: Calendar },
    { path: '/assistant/workspace', label: 'Workspace', icon: MessageSquare },
    { path: '/assistant/evaluations', label: 'Đánh giá', icon: FileText },
  ],
};

const roleLabels = {
  admin: 'Quản trị viên',
  school: 'Trường học',
  member: 'Thành viên',
  assistant: 'Cố vấn',
};

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout, role } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const menus = roleMenus[role] || [];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1 className="text-xl font-bold text-primary-600">AI Admission Portal</h1>
        <div className="w-10" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:transition-none`}
        >
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="hidden lg:flex items-center gap-3 px-6 py-5 border-b border-gray-200">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-bold text-lg text-gray-900">AI Admission</h1>
                <p className="text-xs text-gray-500">{roleLabels[role]}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {menus.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* User section */}
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center gap-3 px-4 py-3 mb-2">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <User size={20} className="text-primary-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.name || 'Người dùng'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span>Đăng xuất</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {/* Top bar */}
          <div className="hidden lg:block bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {menus.find((m) => m.path === location.pathname)?.label || 'Dashboard'}
              </h2>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                  <Bell size={20} className="text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <User size={16} className="text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{user?.name}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="p-4 lg:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

