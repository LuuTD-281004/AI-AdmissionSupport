import { useState } from 'react';
import { FileText, Save, Star, TrendingUp, AlertTriangle, Lightbulb, User, Calendar } from 'lucide-react';

const pendingEvaluations = [
  {
    id: 1,
    student: 'Nguyễn Văn A',
    school: 'THPT Nguyễn Du',
    date: '2024-01-18',
    sessionTime: '14:00 - 14:30',
  },
  {
    id: 2,
    student: 'Phạm Thị G',
    school: 'THPT Gia Định',
    date: '2024-01-17',
    sessionTime: '15:00 - 15:45',
  },
];

const completedEvaluations = [
  {
    id: 1,
    student: 'Trần Thị C',
    school: 'THPT Lê Hồng Phong',
    date: '2024-01-15',
    strengths: ['Có động lực học tập cao', 'Kỹ năng giao tiếp tốt'],
    risks: ['Cần cải thiện môn Toán'],
    recommendations: ['Nên tập trung ôn tập Toán', 'Có thể tham gia lớp bổ trợ'],
    submittedAt: '2024-01-15 15:30',
  },
];

export default function Evaluations() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [evaluation, setEvaluation] = useState({
    strengths: [''],
    risks: [''],
    recommendations: [''],
  });

  const handleSubmit = () => {
    alert('Đã gửi đánh giá thành công!');
    setSelectedSession(null);
    setEvaluation({ strengths: [''], risks: [''], recommendations: [''] });
  };

  const handleAddField = (type) => {
    setEvaluation({
      ...evaluation,
      [type]: [...evaluation[type], ''],
    });
  };

  const handleFieldChange = (type, index, value) => {
    const newFields = [...evaluation[type]];
    newFields[index] = value;
    setEvaluation({
      ...evaluation,
      [type]: newFields,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Đánh giá học sinh</h1>
        <p className="text-gray-600">Ghi lại nhận xét về học sinh sau mỗi ca tư vấn</p>
      </div>

      {!selectedSession ? (
        <>
          {/* Pending Evaluations */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Đánh giá chưa hoàn thành</h2>
            <div className="space-y-4">
              {pendingEvaluations.map((session) => (
                <div key={session.id} className="card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <FileText className="text-yellow-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{session.school}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {session.student}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {session.date} - {session.sessionTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedSession(session)}
                      className="btn-primary flex items-center gap-2"
                    >
                      <FileText size={18} />
                      Viết đánh giá
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completed Evaluations */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Đánh giá đã hoàn thành</h2>
            <div className="space-y-4">
              {completedEvaluations.map((evalItem) => (
                <div key={evalItem.id} className="card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{evalItem.school}</h3>
                      <p className="text-sm text-gray-600">
                        {evalItem.student} • {evalItem.date} • Gửi lúc {evalItem.submittedAt}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Đã gửi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="text-green-600" size={20} />
                        <h4 className="font-medium text-gray-900">Điểm mạnh</h4>
                      </div>
                      <ul className="space-y-1">
                        {evalItem.strengths.map((strength, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-600">•</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="text-red-600" size={20} />
                        <h4 className="font-medium text-gray-900">Rủi ro</h4>
                      </div>
                      <ul className="space-y-1">
                        {evalItem.risks.map((risk, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="text-blue-600" size={20} />
                        <h4 className="font-medium text-gray-900">Đề xuất</h4>
                      </div>
                      <ul className="space-y-1">
                        {evalItem.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-600">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Evaluation Form */
        <div className="card">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Đánh giá: {selectedSession.student}</h2>
            <p className="text-gray-600">{selectedSession.school} • {selectedSession.date}</p>
          </div>

          <div className="space-y-6">
            {/* Strengths */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-600" size={20} />
                  <h3 className="font-bold text-gray-900">Điểm mạnh</h3>
                </div>
                <button
                  onClick={() => handleAddField('strengths')}
                  className="text-sm text-primary-600 hover:underline"
                >
                  + Thêm
                </button>
              </div>
              <div className="space-y-2">
                {evaluation.strengths.map((strength, index) => (
                  <input
                    key={index}
                    type="text"
                    value={strength}
                    onChange={(e) => handleFieldChange('strengths', index, e.target.value)}
                    className="input-field"
                    placeholder="Nhập điểm mạnh..."
                  />
                ))}
              </div>
            </div>

            {/* Risks */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="text-red-600" size={20} />
                  <h3 className="font-bold text-gray-900">Rủi ro</h3>
                </div>
                <button
                  onClick={() => handleAddField('risks')}
                  className="text-sm text-primary-600 hover:underline"
                >
                  + Thêm
                </button>
              </div>
              <div className="space-y-2">
                {evaluation.risks.map((risk, index) => (
                  <input
                    key={index}
                    type="text"
                    value={risk}
                    onChange={(e) => handleFieldChange('risks', index, e.target.value)}
                    className="input-field"
                    placeholder="Nhập rủi ro..."
                  />
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="text-blue-600" size={20} />
                  <h3 className="font-bold text-gray-900">Đề xuất</h3>
                </div>
                <button
                  onClick={() => handleAddField('recommendations')}
                  className="text-sm text-primary-600 hover:underline"
                >
                  + Thêm
                </button>
              </div>
              <div className="space-y-2">
                {evaluation.recommendations.map((rec, index) => (
                  <input
                    key={index}
                    type="text"
                    value={rec}
                    onChange={(e) => handleFieldChange('recommendations', index, e.target.value)}
                    className="input-field"
                    placeholder="Nhập đề xuất..."
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button onClick={handleSubmit} className="btn-primary flex items-center gap-2">
                <Save size={18} />
                Gửi đánh giá
              </button>
              <button
                onClick={() => {
                  setSelectedSession(null);
                  setEvaluation({ strengths: [''], risks: [''], recommendations: [''] });
                }}
                className="btn-secondary"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

