import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import "../style/Home.css";
const Home = () => {
  // ๋ฌธ์ฅ์ถ๋ ฅ
  const [phrase, setPhrase] = useState([
    { text: "text1", site: "site1" },
    { text: "text2", site: "site2" },
  ]);
  // ๐์ฐธ๊ณ ์ฌ์ดํธ ํฌํค: https://www.pantone.kr/report_landing.html

  // ๋ฌธ์ฅ์ ๋๋คํ๊ฒ ์ถ๋ ฅํ๋ ํจ์ ์์ฑ
  // ๐ ๋ฌธ์ ์ : printPhrase๋ฅผ ์คํํ  ๋ ๋ง๋ค random ๊ฐ์ด ๋ฐ๋๋ค. text์ site์ ์ง์ด ๋ง์ง ์์
  // ๐ ์ด์ ๋: printPhrase๊ฐ return์ html ์์ ์๊ธฐ ๋๋ฌธ์
  //           update๋ฅผ ํ  ๋๋ง๋ค printPhrase๊ฐ ๊ณ์ ์คํ๋๊ธฐ ๋๋ฌธ์ด๋ค.
  // ๐ ํด๊ฒฐ๋ฒ: ์ด ํจ์๋ฅผ ๊ณ ์ ํ  ์ ์๋ ๋ฐฉ๋ฒ์ useCallback, useMemo ์ ์ฌ์ฉํ๋ ๊ฒ์ด๋ค.
  // * useMemo: ๋ฆฌํด๊ฐ์ ๊ณ ์ ํด์ค๋ค. ๋ฆฌํด๊ฐ์ด ๋ณ์๊ฐ์ผ๋ก ๋ค์ด๊ฐ์ ์ค์ ๋จ
  const printPhrase = useMemo(() => {
    const randomNum = Math.floor(Math.random() * phrase.length);
    return phrase[randomNum];
  }, []);

  // ์ฌ๋ฆญํ๋ฉด ์ฌ์ฉ
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true, // ์๋์ผ๋ก ํ๋ฉด ๋์ด๊ฐ
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1, // 1์ฅ์ฉ ๋ค๋ก ๋์ด๊ฐ๊ฒ
    centerPadding: "0px", // 0px ํ๋ฉด ์ฌ๋ผ์ด๋ ๋์ชฝ ์ด๋ฏธ์ง๊ฐ ์์๋ฆผ
    fade: true,
  };

  // ์ฌ๋ฆญ์ ์ถ๋ ฅํ  ๋ฐฐ๊ฒฝ์ด๋ฏธ์ง ๋ฐฐ์ด
  const [imageList, setImageList] = useState(["1.jpg", "2.jpg", "3.jpg"]);

  return (
    <div className="home">
      {/** useMemo๋ฅผ ์ฌ์ฉํ์ ๊ฒฝ์ฐ,
       * ๊ทธ ํจ์์ return๊ฐ์ด ๋ณ์ ์์ ๋ค์ด๊ฐ๊ฒ๋๋ค.
       * ์ฌ์ฉํ  ๋ ๋ณ์์ด๋ฆ์ผ๋ก๋ง ์ฌ์ฉ */}

      {/* ์ฌ๋ฆญ์ฌ๋ผ์ด๋ */}
      <Slider {...settings}>
        {/* map์ ์ฌ์ฉํด์ ์ถ๋ ฅ - ๋ฐฐ์ด */}
        {imageList.map((image, index) => (
          <div key={index}>
            {/* ์ด๋ฏธ์ง๊ณต๊ฐ */}
            <div
              className="home_img"
              style={{
                // url์ ๊ดํธ๋ ๋ฌธ์์ด๋ก ๋ง๋ฆ
                backgroundImage: "url(" + require("../img/" + image) + ")",
              }}
            >
              {/* ํ์คํธ ๊ณต๊ฐ */}

              <div className="home_text">
                <h1>{printPhrase.text}</h1>
                <span>{printPhrase.site}</span>
                <Link style={{ textDecoration: "none", color: "black", border: "solid 1px black" }}>VIEW</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Navbar />
    </div>
  );
};

export default Home;
