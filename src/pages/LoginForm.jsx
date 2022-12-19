import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../style/LoginForm.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 구글 로그인을 위한 참조
import { GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userLogin } from "../modules/currentUser";

// 부트스트랩에서 grid 가져옴
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// css파일 연결
import "../style/LoginForm.css";

const LoginForm = () => {
  // 리덕스의 리듀서를 사용하기 위한 디스패치
  const dispatch = useDispatch();

  // 페이지를 이동하기 위한 navigate()
  const navigate = useNavigate();

  // 이메일과 비밀번호를 가져올 state
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 이메일로 회원가입하기 위한 함수
  const emailCreate = () => {
    // getAuth는 파이어베이스앱에서 인증부분을 받아오는 함수
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in (회원가입 성공)
        const user = userCredential.user;
        console.log(user);
        dispatch(userLogin(user));
        alert("환영합니다! 홈화면으로 이동합니다.");
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode == "auth/email-already-in-use") {
          alert("회원정보가 이미 존재합니다");
        } else if (errorCode == "auth/weak-password") {
          alert("비밀번호를 6자리 이상 설정해주세요");
        }
        // ..
      });
  };

  // 로그인을 위한 함수
  const emailLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch(userLogin(user));
        // 로그인 성공 후 홈으로 이동
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorCode == "auth/wrong-password") {
          alert("틀린 비밀번호입니다");
        } else if (errorCode == "auth/user-not-found") {
          alert("없는 회원정보입니다");
        }
      });
  };

  // Form의 onSubmit에 연결할 함수
  // Form의 경우에는 새로고침으로 값이 사라질 수 있어
  // preventDefault()로 새로고침 되는 것을 막아주어야 한다
  const onsubmit = (e) => {
    e.preventDefault();
    emailLogin();
  };

  // 구글로 로그인하기 (팝업)
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch(userLogin(user));
        // 구글로그인 완료 후 홈으로 이동
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className="loginForm">
      <Container>
        {/* Form은 항상 새로고침을 하기 때문에 초기화되는 것을 방지해주어야 한다 */}
        <Row>
          <Row>
            <Col>
              <Button onClick={emailCreate} className="create_button">
                입력한 정보로 회원가입
              </Button>
            </Col>
          </Row>

          {/* 너비지정해줌 (xs={10}) */}
          <Col xs={1}></Col>
          <Col xs={10}>
            <Form onSubmit={onsubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="이메일을 입력해주세요" onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호를 입력해주세요" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

              <Button variant="primary" type="submit" className="my_margin_auto">
                로그인
              </Button>
            </Form>
            <Button onClick={googleLogin} variant="outline-danger">
              구글로 로그인
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
