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
        {/* Sidebar - Fixed */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed inset-y-0 left-0 z-50 w-64 glass border-r border-white/30 transition-transform duration-300 ease-in-out lg:transition-none shadow-2xl`}
        >
          <div className="h-full flex flex-col">
            {/* Logo */}
            <div className="hidden lg:flex items-center gap-3 px-6 py-5 border-b border-white/20 bg-gradient-to-r from-primary-50/50 to-transparent">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 animate-float">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-bold text-lg gradient-text">AI Admission</h1>
                <p className="text-xs text-gray-600 font-medium">{roleLabels[role]}</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
              {menus.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg shadow-primary-500/30'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100/50'
                    }`}
                    style={{
                      animation: `slideInLeft 0.3s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <Icon 
                      size={20} 
                      className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                    />
                    <span className="transition-all duration-200">{item.label}</span>
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
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 animate-fadeIn"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 lg:ml-64">
          {/* Top bar */}
          <div className="hidden lg:block glass border-b border-white/20 px-6 py-4 sticky top-0 z-30 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-900 animate-slideInRight">
                {menus.find((m) => m.path === location.pathname)?.label || 'Dashboard'}
              </h2>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-lg hover:bg-gray-100 relative transition-all duration-200 hover:scale-110 group">
                  <Bell size={20} className="text-gray-600 group-hover:text-primary-600 transition-colors" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="p-4 lg:p-6 animate-fadeIn">{children}</div>
        </main>
      </div>
    </div>
  );
}

