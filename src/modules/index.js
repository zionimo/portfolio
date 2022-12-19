// 작성한 리덕스 모듈들을 하나로 묶어서 사용 및 보내기
import { combineReducers } from "redux";

import currentUser from "./currentUser";

// combineReducers을 통해서 변수 rootReducer 만들기
// currentUser 파일 작성후 연결해줌
const rootReducer = combineReducers({ currentUser });
export default rootReducer;
