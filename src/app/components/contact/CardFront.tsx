type CardFrontProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  done: boolean;
  loading: boolean;
};

export default function CardFront({ handleSubmit, done, loading }: CardFrontProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-2xl w-full px-4 py-6">
      <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">
        Contact
      </h2>
      <p className="mb-6 sm:mb-10 text-sm sm:text-base text-gray-500 text-center">
        궁금한 점이나 연락이 필요하다면 아래 폼에 메시지를 남겨주세요.
        <br />
        또는 <a href="mailto:wsy9088@naver.com" className="underline text-blue-600 break-all">
          wsy9088@naver.com
        </a>
        으로 직접 메일 보내 주시면 감사하겠습니다.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
        <input
          name="name"
          type="text"
          required
          placeholder="이름"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-sm sm:text-base"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="이메일"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition text-sm sm:text-base"
        />
        <textarea
          name="message"
          required
          placeholder="메시지"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 transition resize-none text-sm sm:text-base"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60 text-base sm:text-lg"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {done && (
          <div className="mt-4 sm:mt-8 text-green-500 text-center animate-fade-in text-sm sm:text-base">
            메일이 성공적으로 전송되었습니다!
          </div>
        )}
      </form>
    </div>
  );
}
