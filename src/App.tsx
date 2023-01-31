// 한줄 주석
/*공간 주석 가능 */

//! java에서 method 만들 때에는 
// 접근제어자 기타제어자 반환타입 메서드명(파라미터)

//todo typescript method 생성 방법은 
// (1)function 메서드명(파라미터[: 파라미터 타입])[: 반환타입] {...}

// (2) 자바스크립트,타입스크립트는 메서드를 변수로 인식합니다 
//   const 메서드명 = (파라미터[:파라미터 타입])[:반환타입] =>{..}


// (1)
function App() {
  // typescript의 데이터 타입
  // 숫자 타입 : number

  // 문자열 타입: string

  // 논리타입 : boolean

  // typescript의 변수 선언 방식 
  // var: 변수 , let: 변수, const : 상수
  
  // java에서의 변수 선언 
  // 접근제어자 기타제어자 데이터타입 변수명

  // typescript에서의 변수 선언 
  // var 변수명;   or  let 변수명 : 데이터타입;
  var tmp;
  let tmp2: number;
  let tmp4 = 10;
  let tmp5 = "go";
  // typescript에서의 상수 선언 
  // const 상수명 = 값;
  const tmp3 = 'constant';

  // typescript에서의 비교연산자 

  let a : any = 10;
  let b : any = '10';


  // == ,!= : 값만 비교 
  //  === ,!== :값과 타입까지 비교  (>== - 이런 형태는 존재하지 않음 )
  // alert(a == b);
  alert(a===b);

  // typescript에서의 나눗셈 연산 
  let tmp6 = 10/3; // 3.33333
  alert(tmp6);

  return (
    <div></div>
  );
}



// // (2)
// const App = () =>{
//   return(
//     <div></div>
//   );
// }
export default App;
