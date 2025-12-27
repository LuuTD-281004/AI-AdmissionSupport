import { useState } from 'react';
import { Upload, Save, Image, MapPin, Phone, Mail, Globe, GraduationCap } from 'lucide-react';

export default function SchoolProfile() {
  const [profile, setProfile] = useState({
    name: 'THPT Nguyễn Du',
    address: '123 Đường ABC, Quận 1, TP.HCM',
    phone: '0281234567',
    email: 'nguyendu@school.edu.vn',
    website: 'www.nguyendu.edu.vn',
    description: 'Trường THPT Nguyễn Du là một trong những trường THPT hàng đầu tại TP.HCM...',
    programs: ['Lớp tích hợp', 'Lớp chuyên', 'Lớp song ngữ'],
    facilities: ['Phòng thí nghiệm hiện đại', 'Thư viện rộng rãi', 'Sân thể thao đa năng'],
  });

  const handleSave = () => {
    alert('Đã lưu thông tin hồ sơ');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản lý hồ sơ số</h1>
        <p className="text-gray-600">Cập nhật thông tin và hình ảnh của trường</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Thông tin cơ bản</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tên trường
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Địa chỉ
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="input-field pl-10"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mô tả
                </label>
                <textarea
                  value={profile.description}
                  onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                  rows={4}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Chương trình đào tạo</h2>
            <div className="space-y-2">
              {profile.programs.map((program, index) => (
                <div key={index} className="flex items-center gap-2">
                  <GraduationCap className="text-primary-600" size={18} />
                  <input
                    type="text"
                    value={program}
                    onChange={(e) => {
                      const newPrograms = [...profile.programs];
                      newPrograms[index] = e.target.value;
                      setProfile({ ...profile, programs: newPrograms });
                    }}
                    className="input-field flex-1"
                  />
                </div>
              ))}
              <button
                onClick={() => setProfile({ ...profile, programs: [...profile.programs, ''] })}
                className="text-primary-600 text-sm font-medium"
              >
                + Thêm chương trình
              </button>
            </div>
          </div>

          {/* Facilities */}
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cơ sở vật chất</h2>
            <div className="space-y-2">
              {profile.facilities.map((facility, index) => (
                <input
                  key={index}
                  type="text"
                  value={facility}
                  onChange={(e) => {
                    const newFacilities = [...profile.facilities];
                    newFacilities[index] = e.target.value;
                    setProfile({ ...profile, facilities: newFacilities });
                  }}
                  className="input-field"
                />
              ))}
              <button
                onClick={() => setProfile({ ...profile, facilities: [...profile.facilities, ''] })}
                className="text-primary-600 text-sm font-medium"
              >
                + Thêm cơ sở vật chất
              </button>
            </div>
          </div>

          <button onClick={handleSave} className="btn-primary flex items-center gap-2">
            <Save size={20} />
            Lưu thay đổi
          </button>
        </div>

        {/* Image Upload */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Hình ảnh</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Image className="mx-auto text-gray-400 mb-2" size={48} />
                <p className="text-sm text-gray-600 mb-2">Thêm hình ảnh cơ sở vật chất</p>
                <button className="btn-secondary flex items-center gap-2 mx-auto">
                  <Upload size={18} />
                  Tải lên
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                    <Image className="text-gray-400" size={24} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

