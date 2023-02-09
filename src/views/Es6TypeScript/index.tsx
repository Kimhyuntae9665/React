import React from 'react'



export default function Es6Typescript() {
    // # 1.변수 선언 ,state 선언 
    // # 변수를 선언 하는 방법 
    // ^Es6 기준 ->^ let 변수명;
    // ^ TS -> let 변수명 : 데이터 타입
    let integer;
    let integer2 : number;

    // # 상수 선언 방법 
    // ^ 상수를 선언하는 방법 
    //^  ES6->const 상수명;
    // ^ TS -> const 상수명 : 데이터 타입 = 초기값;
    const INTEGER =10;
    const INTEGER2 : number =10;

    // ^ typescript의 경우 변수 혹은 상수를 선언과 동시에 초기화하면 
    // ^ 해당 변수 혹은 상수의 데이터타입을 자동으로 추론한다 

    console.log(typeof(INTEGER));
    // # 3. 데이터 타입 
    // ? TS - > string,number,boolean,null,undefined,any,object
    
    // ? string : 문자열 
    // ? 문자열을 표현할 때는 '',"",``
    let str : string = '';
    str ="10";
    const description = `str의 값은 ${str}입니다`
    alert(description);
    
    // ? number : 숫자
    // ? 실수와 정수를 모두 포함  
    let num : number =10;
    num = 3.14;

    // ? boolean : 논리 
    let bool: boolean = true;

    // ? null : 아무것도 지정되어 있지 않은 상태 
    // ? Java에서 기본 type 애들은 아무것도 지정하지 않으면 null이 아니라 0값이 자동으로 메모리상에 존재한다 
    // ? string은 기본 type이 아니다. ==> 아무것도 지정하지 안으면 0이 아니라 null값이 들어간다 
    // ? 'null' 형식은 'string' 형식에 할당할 수 없습니다.
    let n:null = null;

    // ? undefined : 정의 되지 않은 상태 
    const obj:any = {};
    console.log(obj.a);

    // ? any : 모든 타입을 받는 타입 
    let varialble : any = 'ste';
    varialble = 10;

    // ? object: 객체 타입(java 의 object class와 동일 ) 
    let object : object ={};
    

    let variable2 : string|number|null;
    variable2 = 'st';
    variable2 = 10;
    variable2=null;

    // ! 역으로 생각했을 때 데이터 타입이 지정된 변수는 필수적으로 값이 포함되어 있어야 한다는 뜻
    let vari : string = 'empty';
    let va : number;

    // ? & : 한 변수에 두 개의 데이터타입의 속성을 동시에 지정할 때 사용 
    interface T1{
        a:string;
    }
    interface T2{
        b:number;
    }
    //  상속과 비슷한 개념
    let implement : T1&T2={
        a:'st',
        b:10
    }
    console.log(implement.a);

    // # 4. 연산자 
    // ^ == : 데이터 타입은 비교하지 않고 값 자체만 비교 
    // ^ === : 데이터 타입과 값을 모두 비교 
    const str1:any=10;
    const num1:any='10';

    const flag1 = (str1===num1);
    console.log(flag1);

    // # 5.if
    // ? if문의 조건 
    //  ? ES6와 TS에서는 flase ,'',0,{},[],null,undefined를 모두 false로 받고 나머지는 모두 true
    let emptyArray:boolean[] = [];
    if(!emptyArray) alert('빈 배열을 false로 인정 ') 



    // foreach 반복문 
    // Java ->  for(요소데이터 타입 변수명 : 반복해서 접근할 배열 ){}
    // TS = >   for (const 변수명 of 반복해서 접근할 배열 ){}
    const numberArray=[1,2,3];
    for(const number of numberArray){
        console.log(number);
    }



  return (
    <div>
       index
    </div>
  )
}
