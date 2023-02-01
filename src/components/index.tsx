// #함수형 컴포넌트 자동 완성은 
// ? ES7 + React/ Redux / React-native Snippets 확장 설치
// ? .tsx 파일 내부에서 'rfc'로 함수형 컴포넌트를 자동 생성 

import React from 'react'

export default function InputGroup() {
    return (
        <div className="content">
            <div className="input-label">아이디</div>
            <div className="inline">
                <input className="input-style" type="text" />
            </div>
        </div>
    )
}
