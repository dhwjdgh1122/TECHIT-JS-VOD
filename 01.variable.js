//숫자
let age =25;
//문자
let name = "jungho";
//불리언
let kind = false;

arr
console.log(typeof(x))
//typeof 를 통해 컴퓨터에게 age가 어떤 상태인지 알 수 있음
//console.log(typeof age) -> Number 나타남

//console.log(typeof 1+2) 결과는 number3이 아니라 , number2가 나타남 
//why? typeof1 = number고 +2 해서 number2가 되는거임 연산자 우선순위 때문이지 
//console.log(typeof(1+2))

//객체
let user = {
  age:25,
  name:'jungho',
  kind:false
}
console.log(user)
console.log(typeof 1+3)
console.log(typeof null) //결과 object(객체)로 뜨지만 사실 오류다 객체가 아니다 

// 불리언과 string이 만나면 불리언기능을 잃어서 string로 인식하게 된다 
// 예제코드 let kind = true;
// console.log(typeof (kind + '안녕')); -> 결과값 string 
//배열 array



/////////////////////조건문//////////////////////

let name3 = prompt('당신의 이름은 무엇인가요?');

if(name3 == 'jungho'){
    console.log('맞아');
}else if (name3 == 'asds') {
  console.log('아니야');
}



///////////////////반복문///////////////////

//for (begin; condition; step) {
  // ...반복문 본문
// } begin: 시작단계 변수 , condition: 조건 , step : 각 반복의 body가 실행된 이후에 실행되는 내용 

for(let i=0; i <=10; i++) {
  console.log(i)
}


//함수 function 넣을함수이름() {}  콘솔창에 출력 용도로만
function showconsole() {
  console.log('함수 보여주기');
}
showconsole() // 함수 실행 

function showconsolee(){        // 리턴값은 값을 출력하는거임 
  return '리턴으로 보여주기';
}
console.log(showconsolee());

function sum(a,b) {
  return a+b
}

let Number4 = sum(10,20);
console.log(Number4)

//8가지 자료형 각자 가지고있는 능력들이 있음 => method 라고함 
let name4 = 'jungho';
let age4 = 26;
console.log('안녕 나는' + name4 + '야 내 나이는' + age4)

// let str = 'abcdef';
// str.slice(0,3) >> 'abc' 출력 0부터3전까지 


//배열 //배열의 개수 length
// let arr = ['one','two','three'];
// arr.push('four') >> 결과 four을 arr배열 마지막 요소를 추가 

//pop 배열의 마지막 요소를 제거 

//shift 배열의 첫 번째 요소를 제거 

//unshift 배열의 첫 번째 요소를 추가 

//splice 배열

// 위에들은 배열의 원형을 파괴한다 

//map 배열을받아서 새로운 배열을 만들때
//arr.map(function(item,index){}


//filter 
//reduce

//함수 선언문은 함수의 선언 이전에 함수를 호출해 사용할 수 잇다
// 함수 내에 선안한 변수는 함수 안에서만 접근 가능
// 함수 내부에선 함수 외부의 변수에 접근할 수 있다

// 함수 표현식
// js는 함수를 특별한 종류의 값으로 취급한다
// 따라서 함수도 값처럼 할당 복사 선언할 수 있다
// 함수 표현식은 함수의 선언 이전에 함수를 호출해 사용 가능

// 화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용하다, 리턴문 생략 가능

// 콜백함수는 다른 함수에 전달되어 나중에 실행되는 함수를 가리킨다
// 콜백 함수는 함수를 변수로 전달하고, 이를 다른 함수 내에서 호출하여 수행할 때 주로 사용된다 

var temp_value =123;


let sum8 =0;
for (let i=1; i<=100; i++) {
  sum +=i;
  console.log(i);
}