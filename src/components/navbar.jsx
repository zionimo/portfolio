import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import currentUser, { userLogout } from "../modules/currentUser";
import "../style/Navbar.css";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  // 시계내용을 출력하는 함수 : return 값으로 시간을 돌려줌 - 문자열
  const printClock = () => {
    // 시간대를 두자리형태로 만들기 위해 숫자를 문자로 바꿔서, 문자 메소드에 있는 0을 채우는 메소드 사용
    const hour = String(time.getHours()).padStart(2, "0");
    const minute = String(time.getMinutes()).padStart(2, "0");
    const second = String(time.getSeconds()).padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  };
  // 화면이 출력되자마자 setInterval을 실행하여 시간값을 1초마다 바뀌게 함
  // setInterval은 한번만 작성해줌 됨
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  // 로그인 유무를 알기 위함
  const login = false;
  // 리덕스의 state 값을 가져와서 확인
  // user값을 가져와서 확인함
  // state값에 접근해서 state안에 있는 currentUser라는 자바스크립트로 접근해서 전체값을 가져와 사용
  const user = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="nav_container">
        <h3>{printClock()}</h3>

        <div className="nav_list">
          {user ? (
            <div>
              {/* 로그인 했을 때 보이는 화면 
          단, 관리자페이지는 홈페이지 주인만 볼 수 있게 함 */}

              <Link to="/">홈</Link>
              <Link to="">마이페이지</Link>
              <Link to="">포스트</Link>
              <Link to="">방명록</Link>
              <Link to="">관리자 페이지</Link>
              <Link
                onClick={() => {
                  dispatch(userLogout());
                }}
              >
                로그아웃
              </Link>
              <Link to=""></Link>
            </div>
          ) : (
            <div>
              {/* 로그인 되어있지 않을 때 보이는 링크 */}
              <Link to="/">홈</Link>
              <Link>포스트</Link>
              <Link to="/gest">방명록</Link>
              <Link to="/loginform">로그인</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
