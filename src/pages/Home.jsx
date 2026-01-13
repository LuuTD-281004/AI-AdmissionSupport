import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, TrendingUp, Award, Calendar, Search, BarChart3, MessageSquare, Star, Sparkles, Zap, Target, Heart } from 'lucide-react';

function Home() {
  const schools = [
    {
      id: 1,
      name: 'Đại học Bách Khoa Hà Nội',
      type: 'Đại học Công lập',
      location: 'Hà Nội',
      rating: 4.8,
      students: '45000+',
      programs: '50+',
      description: 'Trường đại học kỹ thuật hàng đầu Việt Nam với nhiều chương trình đào tạo chất lượng cao.',
      imageGradient: 'from-blue-500 via-cyan-500 to-teal-500',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      name: 'Đại học Kinh tế Quốc dân',
      type: 'Đại học Công lập',
      location: 'Hà Nội',
      rating: 4.7,
      students: '35000+',
      programs: '40+',
      description: 'Trường đại học kinh tế hàng đầu, đào tạo nguồn nhân lực chất lượng cao cho nền kinh tế.',
      imageGradient: 'from-purple-500 via-pink-500 to-rose-500',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 3,
      name: 'Đại học Y Hà Nội',
      type: 'Đại học Công lập',
      location: 'Hà Nội',
      rating: 4.9,
      students: '12000+',
      programs: '15+',
      description: 'Trường đại học y khoa hàng đầu, đào tạo các bác sĩ và cán bộ y tế chuyên nghiệp.',
      imageGradient: 'from-green-500 via-emerald-500 to-teal-500',
      badgeColor: 'bg-green-100 text-green-700'
    },
    {
      id: 4,
      name: 'Đại học Ngoại thương',
      type: 'Đại học Công lập',
      location: 'Hà Nội',
      rating: 4.6,
      students: '20000+',
      programs: '25+',
      description: 'Trường đại học chuyên đào tạo về thương mại quốc tế và kinh doanh.',
      imageGradient: 'from-orange-500 via-amber-500 to-yellow-500',
      badgeColor: 'bg-orange-100 text-orange-700'
    }
  ];

  const admissionInfo = [
    {
      title: 'Thời gian tuyển sinh',
      description: 'Đăng ký từ tháng 3 đến tháng 7 hàng năm',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Phương thức xét tuyển',
      description: 'Xét điểm thi THPT, học bạ, và các phương thức khác',
      icon: BookOpen,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Điểm chuẩn',
      description: 'Cập nhật điểm chuẩn các năm gần đây để tham khảo',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Hồ sơ cần thiết',
      description: 'Bằng tốt nghiệp, học bạ, giấy khai sinh và các giấy tờ khác',
      icon: Award,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: Search,
      title: 'Tìm kiếm thông minh',
      description: 'Tìm kiếm trường học phù hợp với sở thích và năng lực của bạn',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: BarChart3,
      title: 'Phân tích điểm số',
      description: 'Xem điểm chuẩn và phân tích khả năng trúng tuyển',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: MessageSquare,
      title: 'Tư vấn trực tuyến',
      description: 'Nhận tư vấn từ các chuyên gia về tuyển sinh',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Star,
      title: 'Đánh giá từ học sinh',
      description: 'Xem đánh giá và chia sẻ từ các học sinh đã học tại trường',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">AI Admission Portal</span>
            </div>
            <nav className="flex items-center space-x-4">
              <Link to="/login" className="btn-primary">
                Đăng nhập
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-300/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fadeInDown">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-pulse-slow">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Công nghệ AI tiên tiến</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fadeInUp">
              Cổng Thông Tin Tuyển Sinh
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                Thông Minh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto drop-shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Tìm kiếm và lựa chọn trường đại học phù hợp với bạn. 
              Thông tin tuyển sinh đầy đủ, cập nhật và chính xác.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Link
                to="/login"
                className="btn-primary text-lg !text-white bg-primary-600 hover:bg-primary-700 shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                <Zap className="inline w-5 h-5 mr-2" />
                Bắt đầu ngay
            </Link>

              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-white/30 transform hover:scale-110 transition-all duration-300 border-2 border-white/30">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="mt-16 flex justify-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-50 animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <GraduationCap className="w-32 h-32 text-white animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-primary-600" />
              <span className="text-primary-600 font-semibold">Tính năng</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Tính Năng Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những tính năng độc đáo giúp bạn tìm được trường đại học lý tưởng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent group-hover:border-primary-300 transition-all duration-500 ${feature.bgGradient.replace('from-', 'group-hover:bg-gradient-to-br group-hover:from-').replace('to-', ' group-hover:to-')}`}>
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-glow`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors">{feature.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-primary-600 font-semibold">Top Trường</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Các Trường Đại Học Hàng Đầu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá thông tin về các trường đại học uy tín và chất lượng tại Việt Nam
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
            {schools.map((school, index) => (
              <div 
                key={school.id} 
                className="group relative transform transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${school.imageGradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-500">
                  {/* School Image Header */}
                  <div className={`h-32 bg-gradient-to-br ${school.imageGradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 animate-pulse" />
                      <span className="font-bold text-gray-800">{school.rating}</span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`${school.badgeColor} px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                        {school.type}
                      </span>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-purple-600 transition-all duration-500">
                      {school.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Users className="w-4 h-4" />
                      <span>{school.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{school.description}</p>
                    <div className="flex items-center gap-6 text-sm border-t pt-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold">{school.students}</div>
                          <div className="text-xs text-gray-500">Sinh viên</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold">{school.programs}</div>
                          <div className="text-xs text-gray-500">Chương trình</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/login" className="btn-primary text-lg shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Search className="inline w-5 h-5 mr-2" />
              Xem tất cả các trường
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/20 to-pink-50/20 relative">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-primary-600" />
              <span className="text-primary-600 font-semibold">Thông tin</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Thông Tin Tuyển Sinh
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cập nhật đầy đủ thông tin về quy trình, thời gian và yêu cầu tuyển sinh
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {admissionInfo.map((info, index) => (
              <div 
                key={index} 
                className="group relative transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl">
                  <div className={`w-20 h-20 mb-6 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    <info.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{info.description}</p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`h-1 bg-gradient-to-r ${info.color} rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Thành Tựu Của Chúng Tôi</h2>
            <p className="text-white/80 text-lg">Những con số ấn tượng về nền tảng</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-stagger">
            <div className="group text-center transform transition-all duration-500 hover:scale-110">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all animate-glow"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-6 border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent animate-pulse-slow">500+</div>
              <div className="text-white/90 font-semibold">Trường đại học</div>
            </div>
            <div className="group text-center transform transition-all duration-500 hover:scale-110">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all animate-glow"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-6 border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent animate-pulse-slow">1000+</div>
              <div className="text-white/90 font-semibold">Chương trình đào tạo</div>
            </div>
            <div className="group text-center transform transition-all duration-500 hover:scale-110">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all animate-glow"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-6 border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent animate-pulse-slow">50K+</div>
              <div className="text-white/90 font-semibold">Học sinh sử dụng</div>
            </div>
            <div className="group text-center transform transition-all duration-500 hover:scale-110">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all animate-glow"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-full p-6 border-2 border-white/20 group-hover:border-white/40 transition-all">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent animate-pulse-slow">95%</div>
              <div className="text-white/90 font-semibold">Độ chính xác</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">AI Admission Portal</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Cổng thông tin tuyển sinh thông minh, giúp bạn tìm kiếm và lựa chọn trường đại học phù hợp nhất.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-all transform hover:scale-110">
                  <span className="text-lg">📘</span>
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-all transform hover:scale-110">
                  <span className="text-lg">📷</span>
                </div>
                <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center cursor-pointer transition-all transform hover:scale-110">
                  <span className="text-lg">🐦</span>
                </div>
              </div>
            </div>
            <div className="animate-fadeInUp">
              <h4 className="font-bold text-lg mb-6 text-white">Liên kết nhanh</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fadeInUp">
              <h4 className="font-bold text-lg mb-6 text-white">Thông tin liên hệ</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div>info@aiadmission.vn</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Hotline</div>
                    <div>1900-xxxx</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Địa chỉ</div>
                    <div>Hà Nội, Việt Nam</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2024 AI Admission Portal. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
                <a href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
