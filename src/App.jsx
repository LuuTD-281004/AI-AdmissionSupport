import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import DashboardLayout from './components/Layout/DashboardLayout';
import Login from './pages/Login';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import SchoolVerification from './pages/admin/SchoolVerification';
import CMS from './pages/admin/CMS';
import UserManagement from './pages/admin/UserManagement';
import AdminReports from './pages/admin/Reports';

// School pages
import SchoolDashboard from './pages/school/Dashboard';
import SchoolProfile from './pages/school/Profile';
import AdmissionScores from './pages/school/AdmissionScores';
import BookingManagement from './pages/school/BookingManagement';
import SchoolAnalytics from './pages/school/Analytics';

// Member pages
import MemberDashboard from './pages/member/Dashboard';
import AIRecommendation from './pages/member/AIRecommendation';
import Wishlist from './pages/member/Wishlist';
import Counseling from './pages/member/Counseling';
import Notifications from './pages/member/Notifications';

// Assistant pages
import AssistantDashboard from './pages/assistant/Dashboard';
import CounselingSessions from './pages/assistant/Sessions';
import Workspace from './pages/assistant/Workspace';
import Evaluations from './pages/assistant/Evaluations';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<div className="min-h-screen flex items-center justify-center"><h1>Không có quyền truy cập</h1></div>} />
          
          {/* Admin routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <DashboardLayout>
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="schools" element={<SchoolVerification />} />
                    <Route path="cms" element={<CMS />} />
                    <Route path="users" element={<UserManagement />} />
                    <Route path="reports" element={<AdminReports />} />
                    <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* School routes */}
          <Route
            path="/school/*"
            element={
              <ProtectedRoute allowedRoles={['school']}>
                <DashboardLayout>
                  <Routes>
                    <Route path="dashboard" element={<SchoolDashboard />} />
                    <Route path="profile" element={<SchoolProfile />} />
                    <Route path="scores" element={<AdmissionScores />} />
                    <Route path="bookings" element={<BookingManagement />} />
                    <Route path="analytics" element={<SchoolAnalytics />} />
                    <Route path="*" element={<Navigate to="/school/dashboard" replace />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Member routes */}
          <Route
            path="/member/*"
            element={
              <ProtectedRoute allowedRoles={['member']}>
                <DashboardLayout>
                  <Routes>
                    <Route path="dashboard" element={<MemberDashboard />} />
                    <Route path="recommendation" element={<AIRecommendation />} />
                    <Route path="wishlist" element={<Wishlist />} />
                    <Route path="counseling" element={<Counseling />} />
                    <Route path="notifications" element={<Notifications />} />
                    <Route path="*" element={<Navigate to="/member/dashboard" replace />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Assistant routes */}
          <Route
            path="/assistant/*"
            element={
              <ProtectedRoute allowedRoles={['assistant']}>
                <DashboardLayout>
                  <Routes>
                    <Route path="dashboard" element={<AssistantDashboard />} />
                    <Route path="sessions" element={<CounselingSessions />} />
                    <Route path="workspace" element={<Workspace />} />
                    <Route path="evaluations" element={<Evaluations />} />
                    <Route path="*" element={<Navigate to="/assistant/dashboard" replace />} />
                  </Routes>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
