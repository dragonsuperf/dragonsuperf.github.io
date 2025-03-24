export default function FontWeightSelector({
  fontWeight,
  setFontWeight,
}: {
  fontWeight: number;
  setFontWeight: (fontWeight: number) => void;
}) {
  const weights = [
    { value: 100, label: "얇게" },
    { value: 300, label: "라이트" },
    { value: 400, label: "일반" },
    { value: 500, label: "미디엄" },
    { value: 700, label: "볼드" },
    { value: 900, label: "블랙" },
  ];
  return (
    <div className="flex flex-col w-full sm:w-auto">
      <label
        htmlFor="font-weight"
        className="mb-1 text-sm font-medium text-gray-700"
      >
        폰트 굵기
      </label>
      <select
        id="font-weight"
        value={fontWeight}
        onChange={(e) => setFontWeight(Number(e.target.value))}
        className="py-1 px-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        {weights.map((weight) => (
          <option key={weight.value} value={weight.value}>
            {weight.label} ({weight.value})
          </option>
        ))}
      </select>
    </div>
  );
}
