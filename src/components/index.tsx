// #함수형 컴포넌트 자동 완성은 
// ? ES7 + React/ Redux / React-native Snippets 확장 설치
// ? .tsx 파일 내부에서 'rfc'로 함수형 컴포넌트를 자동 생성 

import React from 'react'

// # 함수형 컴포넌트에서 매개변수 받는 방법 
// ? 하나의 인터페이스를 선언하고 해당 인터페이스의 객체로 받음 
interface Props{
    label : string;
    type : string;
}

// ^ 함수형 컴포넌트에서는 일반적인 함수의 매개변수응 받는 방식과 다르게 
// ^ 매개변수를 하나의 묶음(객체)으로 받아야함  
// ^ {중괄호} 사용해야지 typescript의 문법을 사용 가능 
// ^ 그냥 props.label 쓰면 text 그대로 나온다 
export default function InputGroup(props:Props) {
    // # TypeScript 비할당 구조화 
    // ? 객체를 필드 단위로 파괴(분해)해서 사용 가능 
    const{ label,type } = props;

    return (
        <div className="content">
            <div className="input-label">{label}</div>
            <div className="inline">
                <input className="input-style" type={type} />
            </div>
        </div>
    )
}
