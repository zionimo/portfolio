// 초기값
// 로그인 여부를 알아보기 위해 초기값을 null
// 안에 [],{}을 넣어두면 값이 있다고 판단하기 때문
/*
 *
 */
const initialState = null;

// 사용할 리듀서 - switch문으로 작성
function currentUser(state = initialState, action) {
  switch (action.type) {
    case "userLogin":
      // 비동기의 내용은 컴포넌트에서 실행한 후, 리덕스로 들고 옴
      // 비동기를 미들웨어(thunk)를 이용하여 진행할 수 있다.
      // 구글인증을 통해서 가져온 값은 객체를 통해서 가져온다
      // 그 값을 통째로 넣어준다면, 받아온 값을 그대로 넣어주면 된다
      // 그 값을 그대로 넣어주기보다는 그 안에 있는 값 중에 필요한 것만 골라서 넣는 것이 좋다
      return action.payload;

    // 기본값 설정
    default:
      return state;

    case "userLogout":
      // 로그아웃을 했을 때 그 값이 null값으로 들어감
      return null;
  }
}

// 작성할 때 편의를 위해 액션함수도 만들어 내보내줌
// userLogin을 실행했을 때 전달해줄 action과 payload로 받아온 값을 같이 전달함
export const userLogin = (user) => ({ type: "userLogin", payload: user });
export const userLogout = () => ({ type: "userLogout" });

export default currentUser;
