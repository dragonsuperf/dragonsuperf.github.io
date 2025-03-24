export default function ColorPicker({
  textColor,
  setTextColor,
}: {
  textColor: string;
  setTextColor: (textColor: string) => void;
}) {
  const presetColors = [
    "#000000",
    "#333333",
    "#666666",
    "#0066CC",
    "#CC0000",
    "#009900",
    "#FF6600",
    "#9900CC",
  ];

  return (
    <div className="flex flex-col w-full sm:w-auto">
      <label
        htmlFor="text-color"
        className="mb-1 text-sm font-medium text-gray-700"
      >
        텍스트 색상
      </label>
      <div className="flex items-center gap-2">
        <input
          id="text-color"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-8 h-8 border-0 rounded cursor-pointer"
        />
        <div className="flex gap-1">
          {presetColors.map((color) => (
            <button
              key={color}
              onClick={() => setTextColor(color)}
              style={{ backgroundColor: color }}
              className="w-6 h-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
              aria-label={`색상 ${color}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
