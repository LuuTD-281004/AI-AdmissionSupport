import { useState } from 'react';
import { Video, MessageSquare, FileText, Send, Paperclip, User, Clock } from 'lucide-react';

const messages = [
  { id: 1, sender: 'student', text: 'Xin chào, em muốn tìm hiểu về trường THPT Nguyễn Du', time: '09:00' },
  { id: 2, sender: 'assistant', text: 'Chào em! Cô rất vui được tư vấn cho em. Em có thể cho cô biết điểm trung bình học tập của em không?', time: '09:01' },
  { id: 3, sender: 'student', text: 'Dạ điểm trung bình của em là 8.5 ạ', time: '09:02' },
];

const documents = [
  { name: 'Hướng dẫn tuyển sinh 2025.pdf', type: 'pdf' },
  { name: 'Thông tin chương trình đào tạo.docx', type: 'doc' },
];

export default function Workspace() {
  const [message, setMessage] = useState('');
  const [activeSession, setActiveSession] = useState({
    student: 'Nguyễn Văn A',
    school: 'THPT Nguyễn Du',
    time: '09:00 - 09:30',
    status: 'active',
  });

  const handleSend = () => {
    if (message.trim()) {
      // Handle send message
      setMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Workspace Tư vấn</h1>
        <p className="text-gray-600">Giao diện Chat/Video Call tích hợp tài liệu hướng dẫn</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Session Info */}
          <div className="card bg-primary-50 border-primary-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{activeSession.school}</h3>
                <p className="text-sm text-gray-700">Học sinh: {activeSession.student}</p>
                <p className="text-sm text-gray-700">Thời gian: {activeSession.time}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                  <Video className="text-primary-600" size={24} />
                </button>
                <span className="px-3 py-2 bg-green-100 text-green-800 text-xs font-medium rounded-full flex items-center">
                  Đang hoạt động
                </span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="card h-96 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={16} />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'assistant'
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-primary-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'assistant' ? 'text-gray-500' : 'text-primary-100'}`}>
                      {msg.time}
                    </p>
                  </div>
                  {msg.sender === 'student' && (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="text-white" size={16} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Nhập tin nhắn..."
                className="flex-1 input-field"
              />
              <button
                onClick={handleSend}
                className="btn-primary flex items-center gap-2"
              >
                <Send size={18} />
                Gửi
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Documents */}
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">Tài liệu hướng dẫn</h3>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <FileText className="text-primary-600" size={20} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.type.toUpperCase()}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 btn-secondary text-sm">
              Tải thêm tài liệu
            </button>
          </div>

          <div className="card">
            <h3 className="font-bold text-gray-900 mb-4">Thông tin học sinh</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-1">Điểm trung bình</p>
                <p className="font-medium text-gray-900">8.5 / 10</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Nguyện vọng</p>
                <p className="font-medium text-gray-900">NV1: THPT Nguyễn Du</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Khoảng cách</p>
                <p className="font-medium text-gray-900">3.5 km</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

