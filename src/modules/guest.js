// 방명록 리스트 저장

// 초기값
const initialState = [
  { guestId: 1, name: "green", text: "블로그 잘 봤습니다" },
  { guestId: 2, name: "익명", text: "들렸다 갑니다" },
];

// 값을 구분하기 위한 id
// 계속 수정이 되어야하는 값이므로 let으로 지정해줌
let guestId = 3;

// 리듀서
function guest(state = initialState, action) {
  switch (action.type) {
    case "addGuest":
      // 방명록을 리스트에 추가
      // 방명록값을 들고와서 리스트에 추가하는 형태
      // 들고오는 방명록의 값: name,text,
      // guestId 값 추가
      // 스프레드로 액션값을 뿌려서 name과 text를 선택해 사용함
      const newGuest = { ...action.payload, guestId: guestId };
      guestId++;

      // 만들어진 방명록 객체를 배열로 추가: 새로운 배열을 만들어서 추가
      // concat을 사용하여 추가
      const newGuestArray = state.concat(newGuest);
      return newGuestArray;

    // 리덕스에서 리듀서를 작성할 때는 반드시 default를 작성하여 state값을 return해주어야 함
    default:
      return state;
  }
}

// 액션함수
export const addGuest = (guest) => ({ type: "addGuest", payload: guest });
export default guest;
