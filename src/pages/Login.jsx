import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { GraduationCap, Mail, Lock } from 'lucide-react';

const roleOptions = [
  { value: 'admin', label: 'Quản trị viên', color: 'bg-red-500' },
  { value: 'school', label: 'Trường học', color: 'bg-blue-500' },
  { value: 'member', label: 'Phụ huynh/Học sinh', color: 'bg-green-500' },
  { value: 'assistant', label: 'Cố vấn', color: 'bg-purple-500' },
];

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('member');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock login - in production, this would call an API
    if (email && password) {
      const user = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: selectedRole,
      };
      login(user);
      
      // Navigate based on role
      const rolePaths = {
        admin: '/admin/dashboard',
        school: '/school/dashboard',
        member: '/member/dashboard',
        assistant: '/assistant/dashboard',
      };
      navigate(rolePaths[selectedRole]);
    } else {
      setError('Vui lòng nhập email và mật khẩu');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-4">
            <GraduationCap className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Admission Portal</h1>
          <p className="text-gray-600">Hệ thống tư vấn tuyển sinh thông minh</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Đăng nhập với vai trò
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roleOptions.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedRole === role.value
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${role.color}`}></div>
                      <span className="text-sm font-medium">{role.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-10"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-10"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button type="submit" className="w-full btn-primary py-3 text-base">
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Demo: Nhập bất kỳ email và mật khẩu nào để đăng nhập</p>
          </div>
        </div>
      </div>
    </div>
  );
}

