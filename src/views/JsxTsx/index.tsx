import React from 'react'


// #Jsx,Tsx(Javascript기반,Typescript기반 )
// ? Jsx: Javascript 기반 
// ? Tsx: Typescript 기반 

// ? TSX
// ? TypeScript XML 
//  ^ XML : eXtensible MarkUp Language(확장가능한 마크업 언어 )
// ? -React에서 TypeScript로 HTML을 작성할수 있도록 하는 파일 
// ? Typescript 함수안에 html 문법인 <div> tag를 쓸 수 있다 

export default function JsxTsx() {
    const text = 'JSX+TSX';
    const trueflag =true;
    const falseflag = false;

    const numberArray = [1,2,3,4,5];

    // #1 . tsx 파일에서 작성된 typescript 컴포넌트 함수는 
    // # return의 () 안에 html 태그를 포함할 수 있음. 
    // ? typescript return에 html을 표기하려면 ()로 묶어 줘야한다.
    // ! return의 ()안에 최상위 부모 태그가 1개 있어야 한다 
    // ! 0개도 안됨 
    // ^ return ()안에서 Typescript를 사용 하려면 {}로 묶어서 작성해야 한다 
    // ^ return의 ()안은 html 문법이 정배  
    // ^ {}중괄호를 써서 Typescript를 작성하고 싶으면 필수적으로 html 태그 안에 있어야 한다 

    // ^ return ()안의 {}안에서 다시 html 표기하려면 ()로 반환을 해 줘야함 

    // #2. return ()안에서는 제어문을 사용할 수 없음 
    // ? if문 /for 문을 사용할 수 없음 
    // ? 변수와 연산자만 사용가능(논리 연산자로 if 문을 대체 //  if-else 문은 삼항연산자로 대체 // if-elseif-else 문은 삼항연산자에 삼항연산자를 넣어서 대신 쓴디)
    // ? for 문 대체 : 배열 객체의 map 메서드를 사용 

    // # 3. return ()안에서는 html 주석이 사용되지 않음
    // ? {}를 사용하여 Typescript 주석을 사용해야 함 

    // # 4. TSX는 XML 을 기반으로 HTML을 표기하기 때문ㅇ 분법이 정확해야 한다 
    // ? 모든 태그를 다 닫아줘야하고 모든 html 요소를 소문자로 작성해야  한다 
    // ? html 속성이 대소문자를 구분 
  return (
        
    <div>
        {trueflag && (<div>true</div>)}
        {falseflag && (<div>false</div>)}
        {falseflag || (<div>ddd</div>)}
        {/* //! div 앞의 ()는 묶어주는 개념을 거의 항상 써준다  */}
        {numberArray.map((number)=>(<div>{number}</div>))}
    </div>
  )
}
