import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const Home = () => {
  // 문장출력
  const [phrase, setPhrase] = useState([
    { text: "About the Autumn/Winter 2022/2023", site: "New York Fashion Week" },
    { text: "About the Spring/Summer 2023", site: "London Fashion Week" },
  ]);
  // 🎇참고사이트 팬톤: https://www.pantone.kr/report_landing.html

  // 문장을 랜덤하게 출력하는 함수 작성
  // 📍 문제점: printPhrase를 실행할 떄 마다 random 값이 바뀐다. text와 site의 짝이 맞지 않음
  // 📍 이유는: printPhrase가 return의 html 안에 있기 때문에
  //           update를 할 때마다 printPhrase가 계속 실행되기 때문이다.
  // 📍 해결법: 이 함수를 고정할 수 있는 방법은 useCallback, useMemo 을 사용하는 것이다.
  // * useMemo: 리턴값을 고정해준다. 리턴값이 변수값으로 들어가서 설정됨
  const printPhrase = useMemo(() => {
    const randomNum = Math.floor(Math.random() * phrase.length);
    return phrase[randomNum];
  }, []);

  // 슬릭화면 사용
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true, // 자동으로 화면 넘어감
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1, // 1장씩 뒤로 넘어가게
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    fade: true,
  };

  // 슬릭에 출력할 배경이미지 배열
  const [imageList, setImageList] = useState(["londonSS.jpg", "newyorkFW.jpg"]);

  return (
    <div>
      {/** useMemo를 사용했을 경우,
       * 그 함수의 return값이 변수 안에 들어가게된다.
       * 사용할 때 변수이름으로만 사용 */}

      {/* 슬릭슬라이더 */}
      <Slider {...settings}>
        {/* map을 사용해서 출력 - 배열 */}
        {imageList.map((image) => (
          <div>
            {/* 이미지공간 */}
            <ImgArea>
              <div
                style={{
                  // url와 괄호는 문자열로 만듦
                  backgroundImage: "url(" + require("../img/" + image) + ")",
                }}
              >
                {/* 텍스트 공간 */}
                <TextArea>
                  <div>
                    <h1>{printPhrase.text}</h1>
                    <span>{printPhrase.site}</span>
                    <Link style={{ textDecoration: "none", color: "black", border: "solid 1px black" }}>VIEW</Link>
                  </div>
                </TextArea>
              </div>
            </ImgArea>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

const ImgArea = styled.div`
  width: 100vw;
  height: 1000px;
  background-size: cover;
`;

const TextArea = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;
