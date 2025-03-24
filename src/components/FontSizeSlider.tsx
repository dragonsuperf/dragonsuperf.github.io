export default function FontSizeSlider({
  fontSize,
  setFontSize,
}: {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}) {
  return (
    <div className="flex flex-col w-full sm:w-auto">
      <label
        htmlFor="font-size"
        className="mb-1 text-sm font-medium text-gray-700"
      >
        폰트 크기: {fontSize}px
      </label>
      <div className="flex items-center gap-2">
        <span className="text-xs">8</span>
        <input
          id="font-size"
          type="range"
          min="8"
          max="72"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <span className="text-xs">72</span>
      </div>
    </div>
  );
}
