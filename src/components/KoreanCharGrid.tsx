import React, { useState, useEffect } from "react";
type KoreanCharGridProps = {
  fontSize: number;
  fontWeight: number | string;
  color: string;
};

const KoreanCharGrid: React.FC<KoreanCharGridProps> = ({
  fontSize,
  fontWeight,
  color,
}) => {
  const [visibleChars, setVisibleChars] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const charsPerPage = 100;
  const [isLoading, setIsLoading] = useState(false);
  // 초성, 중성, 종성 배열
  const chosung = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  const jungsung = [
    "ㅏ",
    "ㅐ",
    "ㅑ",
    "ㅒ",
    "ㅓ",
    "ㅔ",
    "ㅕ",
    "ㅖ",
    "ㅗ",
    "ㅘ",
    "ㅙ",
    "ㅚ",
    "ㅛ",
    "ㅜ",
    "ㅝ",
    "ㅞ",
    "ㅟ",
    "ㅠ",
    "ㅡ",
    "ㅢ",
    "ㅣ",
  ];
  const jongsung = [
    "",
    "ㄱ",
    "ㄲ",
    "ㄳ",
    "ㄴ",
    "ㄵ",
    "ㄶ",
    "ㄷ",
    "ㄹ",
    "ㄺ",
    "ㄻ",
    "ㄼ",
    "ㄽ",
    "ㄾ",
    "ㄿ",
    "ㅀ",
    "ㅁ",
    "ㅂ",
    "ㅄ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  // 한글 조합 생성 함수
  const generateKoreanChars = (startIndex: number, count: number): string[] => {
    const result: string[] = [];
    const totalChars = chosung.length * jungsung.length * jongsung.length;
    const endIndex = Math.min(startIndex + count, totalChars);
    for (let i = startIndex; i < endIndex; i++) {
      // 한글 유니코드 계산
      const cho =
        Math.floor(i / (jungsung.length * jongsung.length)) % chosung.length;
      const jung = Math.floor(i / jongsung.length) % jungsung.length;
      const jong = i % jongsung.length;
      // 유니코드 기반 한글 조합
      const charCode = 0xac00 + cho * 21 * 28 + jung * 28 + jong;
      result.push(String.fromCharCode(charCode));
    }
    return result;
  };
  // 더 많은 글자 로드
  const loadMoreChars = () => {
    if (isLoading) return;
    setIsLoading(true);
    const startIndex = (page - 1) * charsPerPage;
    const newChars = generateKoreanChars(startIndex, charsPerPage);
    // 약간의 지연을 두어 로딩 상태를 보여줌
    setTimeout(() => {
      setVisibleChars((prev) => [...prev, ...newChars]);
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 200);
  };
  // 초기 로드
  useEffect(() => {
    loadMoreChars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl font-bold mb-4">한글 문자 그리드</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4">
        {visibleChars.map((char, index) => (
          <div
            key={`${char}-${index}`}
            className="border rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 transition-colors"
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: fontWeight,
              color: color,
            }}
          >
            {char}
          </div>
        ))}
      </div>
      {visibleChars.length > 0 && (
        <div className="flex justify-center mt-8 mb-16">
          <button
            onClick={loadMoreChars}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="https://tinyurl.com/3ell2s"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                로딩 중...
              </span>
            ) : (
              "더 보기"
            )}
          </button>
        </div>
      )}
    </div>
  );
};
export default KoreanCharGrid;
