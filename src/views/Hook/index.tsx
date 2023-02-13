import {useState,useEffect} from 'react'


// ^   state와 React를 관리해 주는 Hook 
// ^   함수형 컴포넌트에서만 동작 
// ?    state와 React 기능을 관리하는 메서드 

// ^    Hook 함수의 규칙
// ?    1. 무조건 함수형 컴포넌트 내에서만 호출 가능 (rfc로 생성한 함수형 컴포넌트 란에서만 호출가능 )
// ?    2. 무조건 함수형 컴포넌트 최상위단에서만 호출할 수 있음 
// ?    3. 조건부로 호출할 수 없음(조건부 안에서는 사용 불가 ) 

// ?    React Hook "useState" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  
// ?    위 에러를 반환 
// const[extState,setExtState] = useState<boolean>(false);



export default function Hook() {

    // # 함수형 컴포넌트의 자식 함수에서 사용한 경우 
    // ?    React Hook "useState" is called in function "fn" that is neither a React function component nor a custom React Hook function.
    // ?     React component names must start with an uppercase letter. React Hook names must start with the word "
    



    // ! 일반 함수안애서는 Hook함수를 사용할 수 없다 
    // const fn = () =>{
    //     const[intState,setIntState] = useState<boolean>(false);
    // }

    // # 1.     useState()
    // ?        React 컴포넌트 내에서 state를 추적(state변수가 변하는지 않하는지 계속해서 추적 )
    // ?        state를 만들어주는 메서드 
    // ?        import {useState} from 'react';


    // ?        const [상태명,set메서드] = useState<데이터타입>(초기값);
    // ^        비구조화 할당,(구조분해 할당) 
    // ?        State 선언 
    // ?       const [상태명,set메서드] = useState<데이터타입>(초기값);
    // ?        여기서 지정한 State가 변경되면 해당 State를 사용하고 있는 

    const[state,setstate] = useState<boolean>(false);

    // !let으로 시작하지 않도록 한다 왠만하면 
    let[state2,setstate2] = useState<boolean>(false);
    // ?위처럼 state를 변수로 선언하고 해당 변수를 대입연산자로 변경하더라도 
    // ? 리랜더링 되지 않음(무조건 set메서드로 변경 해줘야함)

    const [objectState,setObjectState] = useState<number[]>([1])
    
    
    const onClickHandler = () =>{
        // ^ 주의 할 점 
        // ^ 배열 혹은 객체를 가지고 있는 참조변수의 경우 
        // ^ 실제 값을 변경하고 다시 set메서드로 적용시켜준자 하더라도 
        // ^ 참조변수가 가지고 있는 주소는 변경되지 않기 떄문에 
        // ^ state가 변경되었다고 인시하지 못해서 
        // ^ 렌더링이 된지 않음 
        objectState.push(1);
        console.log(objectState);
        // ! map함수는 주어진 기능 실행 후 새로운 배열의 주소를 돌려준다  
        // ! 새로운 객체로 만들어서 돌려줘야지 인식이 가능하다 
        // ^새로운 배열 혹은 객체를 생성하여 새로운 주소를 할당한 다음 
        // ^ 새로운 주소를 가지고 있는 참조 변수로 변경해야 리랜더링이 된다 

        const tmp = objectState.map((item)=>item);
        // !const tmp = objectState   결과 동일 
// ! 실제 map이 실행되는 과정 
        // const tmpList = [];
        // for (const item of objectState) {
        //     tmpList.push(item * 2);
        // }

        // console.log('===tmp')
        // console.log(tmp);
        // console.log('===objectState')
        // console.log(objectState);
         setObjectState(tmp);
        // 원래는 setObjectState(objectState)여서 잘못 된거 
    }


    const [num,setNum] = useState<number>(1);

    const onPlusHandler=()=>{
        // ^ 상태를 set메서드로 변경 시키더라도 
        // ^ 바로 상태가 변경되는 것이 아니라 
        // ^ 해당 호출 혹은 함수가 종료 되고 리랜더링 된 후 변경됨 
        const tmp = num+1
        // ^ 그렇기 떄문에 아래와 같이 변경 후에 변경한 값으로 작업을 하려고 해도 
        // ^ 원래 저장되어있는 값으로 작업이 진행됨 
        // ^ 이런 문제를  해결하는 방법은 
        // ^ 1.     바로 아래의 useEffect(()=>{},[]) 처럼 사용 
        // ^2.      변경 작업을 따로 저장한 후 그 저장한 값으로 작업을 진행 하고 
        // ^ 3.     그 값으로 state를 변경 
        setNum(tmp);
        alert(tmp);

    }

    // useEffect(()=>{
    //    alert(num); 
    // },[num])

    // #2  useEffect
    // ? 특정 상태값이 변경되는지 추적하고 있다가
    // ? 변경이 이루어지면 실행할 코드블록 

    // ?  함수형 컴퍼넌ㅌ, 최상위에서 함수를 호출하면 
    // ? 매 랜더링시 호출됨
    // ? 특정 상태가 변경되었을 때만 실행시키는 동작을 수행할 수 없음 
    // console.log(objectState);
    

    // ? import {useEffect}='react'

    // ? 호출 방법 
    // ? useEffect(특정 상태가 변경되었을떄 실행되는 함수,추적할 상태의 배열()=>{},[]);
    useEffect(()=>{
        console.log(objectState);
    },[objectState]);  //objectState가 바뀔떄만 console.log()를 실행한다 


    useEffect(()=>{
        console.log('로드 될떄만 실행되는 함수 ')
    },[]) //마지막 대괄호 자리에 아무것도 넣지 않으면 시작할때 딱 한번만 실행된다 

    const[loaded,setLoaded]  = useState<boolean>(false);

    //  loaded = false;

    // useEffect(()=>{
    //     // ! 첫 로드 시 두번 샐행되는 것을 방지하느 ㄴ방법으로 
    //     // ^ 특정 변수를 지정하여 그 값이 참일 때만 실행하도록 하고 
    //     // ^ 실행 후에는 참인 상태를 가짓의 상태로 변경해준다 

    //     if(!loaded){
    //         console.log('로드 될때만 실행죄는 함수!');
    //         loaded = true;
    //     }

    // },[]);

    // ^ useEffect에서 scope할 state를 지정할 때 주의!!
    const[flag,setFlag] = useState<boolean>(false);



    // ^ useEffect에 scope한 state를 useEffect 내에서 
    // ^ 변경하는 작업을 진행하면 무한 실행이 된다 
    useEffect(()=>{
        console.log('이거 뭐야 !!!!!');
        setFlag(!flag); // scopr한 state를 useEffect 내에서 변경하는 작업인 !flag
    },[flag]);

    


    
  return (
    <div>{state?'true':'false'}
        <button onClick={()=>setstate(!state)}>버튼</button>
        {objectState.map((num)=>(
            <div>{num}</div>
        ))}
        {/* 버튼 눌릴때 마다 1이 하나씩 늘어나는 배열 push로 인해서  */}
        <button onClick={onClickHandler}>Add number!</button>
        <div>{num}</div>
        <button onClick={onPlusHandler}>{'+'}</button>
    </div>
  )
}
