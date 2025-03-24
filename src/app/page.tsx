"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import ColorPicker from "@/components/ColorPicker";
import FontSizeSlider from "@/components/FontSizeSlider";
import FontWeightSelector from "@/components/FontWeightSelector";
import KoreanCharGrid from "@/components/KoreanCharGrid";

export default function Home() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(25);
  const [fontWeight, setFontWeight] = useState(400);
  const [textColor, setTextColor] = useState("#333333");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Textarea 높이 자동 조절
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text, fontSize]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <Head>
        <title>폰트 테스트</title>
        <meta name="description" content="폰트 테스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">폰트 쇼케이스</h1>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />

            <FontWeightSelector
              fontWeight={fontWeight}
              setFontWeight={setFontWeight}
            />

            <ColorPicker textColor={textColor} setTextColor={setTextColor} />
          </div>

          <div className="relative">
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="텍스트를 입력하세요. 여기에 원하는 폰트를 테스트할 수 있습니다."
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                color: textColor,
              }}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none overflow-hidden transition-all"
              rows={6}
            />
          </div>
        </div>

        <KoreanCharGrid
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={textColor}
        />
      </main>
    </div>
  );
}
