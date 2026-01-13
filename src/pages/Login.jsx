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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 animate-fadeIn relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="w-full max-w-md animate-scaleIn relative z-10">
        <div className="glass rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center mb-8 animate-fadeInDown">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl mb-6 animate-bounce-slow hover:scale-110 transition-transform duration-300 cursor-pointer shadow-xl shadow-primary-500/30 animate-glow">
              <GraduationCap className="text-white" size={36} />
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-3 animate-slideInRight">AI Admission Portal</h1>
            <p className="text-gray-600 font-medium animate-slideInLeft">Hệ thống tư vấn tuyển sinh thông minh</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Đăng nhập với vai trò
              </label>
              <div className="grid grid-cols-2 gap-3 animate-stagger">
                {roleOptions.map((role, index) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      selectedRole === role.value
                        ? 'border-primary-500 bg-primary-50 text-primary-700 scale-105 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${role.color} transition-transform duration-300 ${selectedRole === role.value ? 'scale-150 animate-pulse-slow' : ''}`}></div>
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

            <button type="submit" className="w-full btn-primary py-3 text-base group">
              <span className="flex items-center justify-center gap-2">
                <span>Đăng nhập</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 bg-gray-50/50 rounded-xl p-3 backdrop-blur-sm">
            <p className="font-medium">Demo: Nhập bất kỳ email và mật khẩu nào để đăng nhập</p>
          </div>
        </div>
      </div>
    </div>
  );
}

