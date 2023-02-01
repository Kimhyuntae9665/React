import React from 'react'

//! interface 만드는 이유는 매개변수로 instance(바뀌는 부분 변수)를 받아야 하기 때문에 
interface DateProps {
    placeholder: string;

}
// ! typescript 문법 적용 위해서는 중괄호가 필수이다 

function DateInputGroup({ placeholder }: DateProps) {
    return (
        <div className="flex-1">
            <input className="input-middle-style"
                type="number"
                placeholder={placeholder} />
        </div>
    );
}

//! 보기 흉해서 컴포넌트로 뺀다 
//! 함수형 컴포넌트는 시작은 무조건 대문자 
// ! return 안에 최상위 div는 하나만 
// ! return 안에서는 for나 if 같은 제어문이 작동하지 않는다 


function MonthSelectGroup() {
    // # Typescript에서 배열 선언 및 초기화는 '[]'로 가능 
    const months : number[] = [];
    for(let i=1;i<=12;i++)
        months.push(i); 
    // [1,2,3,4,5,6,7,8,9,10,11,12]
    return (
        <div className="flex-1">
            {/* select */}
            {/* //!소괄호() html 문법을 담는다  */}
            <select className="input-middle-style">
                <option>월</option>
                {months.map((month)=>(
                    <option>{month}</option>
                ))}
                
            </select>
        </div>

    );

}

// ! 함수형 컴포넌트의 첫 글자는 필수로 대문자 이어야 함 
// ! 함수형 컴포넌트는 함수를 말하는 것 

export default function BirthInputGroup() {
    return (
        <div className="content">
            <div className="input-label">생년월일</div>
            <div className="flex">
                {/* style의 display 요소를 inline으로 적용해서 inline 형식으로 변경 */}
                <DateInputGroup placeholder='년 (4자리)' />
                <MonthSelectGroup/> 
                <DateInputGroup placeholder='일' />
            </div>
        </div>
    )
}
