// components/ProjectDetail.tsx

export default function ProjectDetail({
  period,
  roles,
  members,
  onClose,
}: {
  period?: string;
  roles?: string[];
  members?: number;
  onClose: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">프로젝트 상세 정보</h3>
        {period && (
          <div className="mb-2">
            <span className="font-semibold text-gray-700">진행기간:</span>
            <span className="ml-2 text-gray-600">{period}</span>
          </div>
        )}
        {typeof members === "number" && (
          <div className="mb-2">
            <span className="font-semibold text-gray-700">참여 인원:</span>
            <span className="ml-2 text-gray-600">{members}명</span>
          </div>
        )}
        {roles && roles.length > 0 && (
          <div>
            <span className="font-semibold text-gray-700">담당 업무:</span>
            <ul className="list-disc ml-6 text-gray-600 mt-1">
              {roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        className="self-end mt-8 flex items-center gap-1 text-sm text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 rounded-md px-4 py-2 shadow transition"
      >
        닫기
      </button>
    </div>
  );
}
