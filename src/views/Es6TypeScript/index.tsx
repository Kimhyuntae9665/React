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
    // alert(description);
    
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

    // # interface 
    // ? Ts -> interface를 데이터 타입 형태로 사용 
     interface IExample{
        a: string;
        b:number;
        c:boolean;
    }

    
    const object1:IExample = {a:'a',b:1,c:true};
    console.log(object1)

    // !  객체형태의 데이터 타입을 지정할 때는 3가지 방법을 쓸  수 있음 
    // ^1 .interface 를 사용 
    // ^ class 사용 
    class Example{
        a: string;
        b:number;
        c:boolean;

        constructor(a:string,b:number,c:boolean){
            this.a=a;
            this.b=b;
            this.c=c;

        }
    }

    const object2 : Example = new Example('a',1,true);
    const object3:Example = {a:'a',b:1,c:true};
    // ^ type 사용 

    type TExample={
        d:string,
        e:number,
        f:boolean
    }

    const object4 : TExample = {d:'a',e:1,f:true};
    // const object5: TExample = new Example('a',1,true);



    // # 8. 삼항 연산자와 Spread 연산자, 비구조화 할당(구조 분해 할당)
    // ? 삼항 연산자 
    // ? 조건 ? 참일떄의 결과값 : 거짓일 떄의 결과 값 
    const result = num > 0 ? '양수' : '양수가 아님';
    console.log(result); 


    // ? spread 연산자 
    // ? ... 객체로 표현 
    





    //? 비구조화 할당( 구조 분해 할당 )
    // ? object 타입(객체와 배열)의 요소를 하나씩 직접 꺼내서 사용할 수 있도록 하는 것 
    // const {a,b,c} =object1;
    // console.log(a,b,c);


     // const [state,set_state_함수] = useState와 형태 동일 
    // const[a1,b1,c1] = numberArray;
    // console.log(a1,b1,c1);

    // ? Spread 연산자
    // ? ...객체 
    // ? 비구조화 할당에 쓰일 때는 직접 뽑은 요소를 제외한 나머지 요소를 하나의 묶음으로 묶어줌 
    const {a,...spread1} = object1;
    console.log(a);
    console.log(spread1);

    // ? 2.새로운 객체를 생성할 때 가지고 있는 객체를 분해해서 요소로 추가 
    const example1 = {a1:'a',object1};
    console.log(example1);
    // ! ...을 쓰면 객체 본인이 가지고 있는것들을 분해해서 나타낸다 
    const example2 = {a1:'a',...object1};
    console.log(example2);

    let state ={email:"e--mail",password:"password",passwordCheck:"passwordChhek"};
    // ! 원래 존재하던 객체를 바꿔주는 역할도 한다 
    // ! spread를 가장 앞에 놔두고 나서 모든것을 맞쳐두고 그다음에 바꿀 값을 넣어 놓는다.
    state = {...state,email:"이메일 "};
    console.log(state);


    // # 9. Enum
    // ? Enumerated Type : 열거형 타입 
    // ^ 상수를 객체 스타일로 해 놓은거 
    enum ENUMERATED{
        APPLE= 'apple',
        BANANA=  'banana',
        CAROT = 'carot'
    }

    const fruit = ENUMERATED.APPLE;
   console.log(fruit);
   let fruit2:ENUMERATED =ENUMERATED.APPLE;
   console.log(fruit2);


  return (
    <div>
       index
    </div>
  )
}
