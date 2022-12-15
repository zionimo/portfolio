import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

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

  return (
    <NavbarStyle>
      <div>
        <h3>{printClock()}</h3>
      </div>
    </NavbarStyle>
  );
};

export default Navbar;

const NavbarStyle = styled.div`
  background-color: green;
  margin: 1
  text-align: center;
`;
