import { useState } from "react";
import { Button, Card, FloatingLabel, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addGuest } from "../modules/guest";

const Guest = () => {
  // 리덕스를 이용해서 guest의 값 가져오기
  const guestList = useSelector((state) => state.guest);
  const dispatch = useDispatch();
  // 이메일 정보를 들고오기 위한 리덕스의 currentUser들고오기
  const currentUser = useSelector((state) => state.currentUser);
  const [name, setName] = useState(currentUser ? currentUser.email : "익명");
  const [text, setText] = useState();

  return (
    <div className="mx-5 mt-5">
      {currentUser ? <h1>{currentUser.email}</h1> : <p>로그인이 되어 있지 않습니다</p>}
      <FloatingLabel controlId="floatingInput" label="이름" className="mb-3">
        <Form.Control
          type="text"
          value={name}
          placeholder="name"
          style={{ border: "none", borderBottom: "grey 1px solid" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="작성할 내용">
        <Form.Control
          as="textarea"
          placeholder="작성할 내용"
          style={{ height: "100px", resize: "none" }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </FloatingLabel>
      <Button onClick={() => dispatch(addGuest({ name: name, text: text }))}>작성</Button>
      <hr />
      <h3>글 쓴 내용을 출력하는 공간</h3>
      <Card style={{ width: "100%" }}>
        <ListGroup variant="flush">
          {guestList.map((guest, i) => (
            // props로 전달할 속성이름
            <GuestText guest={guest} key={i} />
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Guest;

// 방명록 내용을 하나씩 출력할 공간
// ListGroup.Item에 출력
// ({guest}) 식으로 중괄호를 넣어줘야 props값을 가져올 수 있음
const GuestText = ({ guest }) => {
  return (
    <ListGroup.Item>
      <b>{guest.name}</b>
      <br />
      <b>{guest.text}</b>
    </ListGroup.Item>
  );
};
