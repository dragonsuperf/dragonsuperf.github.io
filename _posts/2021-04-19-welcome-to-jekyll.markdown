---
layout: post
title:  "React Native에서 styled-components를 사용할 때 Unknown property 에러"
date:   2021-04-20 23:42:00 +0900
categories: react-native styled-components
tag: react-native styled-components
---

styled-components를 사용할 때 보통 vscode-styled-components 또는 typescript-styled-plugin을 사용할텐데, CSS에서는 지원하지 않는 스타일을 쓸 경우 `Unkown property` 경고를 받을 수 있다.  

아래의 설정을 tsconfig.ts에 추가하면 해당 프로퍼티를 IDE에서 허용할 수 있다.

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "typescript-styled-plugin",
        "lint": {
          "validProperties": [
            "aspect-ratio",
            "elevation",
            "margin-vertical",
            "margin-horizontal",
            "padding-horizontal",
            "padding-vertical",
            "resize-mode",
            "shadow-color",
            "shadow-opacity",
            "shadow-offset",
            "shadow-radius",
            "text-align-vertical",
            "tint-color"
          ]
        }
      }
    ]
  }
}
```

이런 임시해결책 말고 깔끔한 해결과 오픈소스 기여에 대한 욕심으로 해당 레포에 열려있는 이슈에 손을 댔지만, 해당 레포와 연관된 레포를 동시에 수정해야하는 문제였기에 물러서고 말았다.  
  
해당 이슈에 관심이 있다면 아래의 링크로 들어가면된다.  
https://github.com/microsoft/typescript-styled-plugin/issues/58#issuecomment-571102257