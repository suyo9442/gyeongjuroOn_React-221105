import "./Login.css";
import React, { useEffect, useState } from "react";

function Login() {
  // 이메일, 비번 value를 state에 저장
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // 정규식 조건을 체크할 불리안 state
  const [emailVaild, setEmailVaild] = useState(false);
  const [pwVaild, setPwVaild] = useState(false);

  // 로그인버튼 활성화를 체크할 state
  const [notAllow, setNotAllow] = useState(true);

  // 임시 더미데이터
  const User = {
    email: "suyo9442@naver.com",
    pw: "abc1234!!",
  };

  const Modal3 = () => {
    return (
      <div className="modal fade" id="modal3" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>존재하지 않는 계정입니다.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn blue" data-dismiss="modal">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

   const [checkOK, setCheckOK] = useState(false);

  // 존재하는 계정인지 체크할 함수
  const onClickCheck = () => {
    if (email === User.email && pw === User.pw) {
      console.log('로그인 성공!')
      setCheckOK(true);
    } else {
        console.log('로그인 실패!')
        setCheckOK(false);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    // 정규식
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    // 정규식으로 test
    if (regex.test(email)) {
      setEmailVaild(true);
    } else {
      setEmailVaild(false);
    }
    // 이메일형식이 valid 하거나 빈칸이면 => 알림 텍스트가 뜨지 않도록
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwVaild(true);
    } else {
      setPwVaild(false);
    }
  };

  // 정규식 검사 state에 변화가 일어날 때 마다 실행
  useEffect(() => {
    // 검사가 패스되면..
    if (emailVaild && pwVaild) {
      setNotAllow(false);
      return;
    }
    // 평상시에는..
    setNotAllow(true);
  }, [emailVaild, pwVaild]);


  return (
    <div className="login">
      {/* CONTENT */}
      <div id="content" className="sub">
        <div className="sub-content" id="member">
          <div className="container">
            <div className="title">
              <h2>
                함께 <br />
                여행을 떠나볼까요?
              </h2>
              <p>로그인이 필요한 서비스에요.</p>
            </div>
            <div className="form">
              <div className="form-row">
                <div className="form-label">아이디</div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="inp line"
                      placeholder="이메일을 입력해주세요"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                </div>
                <div className="info-text warning">
                  {!emailVaild && email.length > 0 && (
                    <div>
                      이메일 형식을 정확히 입력해 주세요.(소문자,숫자, @, _, -
                      만 가능
                    </div>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-label">비밀번호</div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="inp line"
                      placeholder="비밀번호를 입력해주세요"
                      value={pw}
                      onChange={handlePw}
                    />
                  </div>
                </div>
                <div className="info-text">
                  {!pwVaild && pw.length > 0 && (
                    <>8자 이상의 영문,숫자,특수문자(!@#$%^&*?) 사용</>
                  )}
                </div>
              </div>
              <div className="join-link">
                <a href="">아이디 찾기</a> ㅣ <a href="">비밀번호 변경</a>
                <b>
                  <a href="#">회원가입</a>
                </b>
              </div>
            </div>
            <div className="btn-box fixed">
              <button
                type="button"
                className="btn blue"
                onClick={onClickCheck}
                disabled={notAllow}
              >
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //CONTENT */}


      {/* 확인3 */}
      {/* <div className="modal fade" id="modal3" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <p>존재하지 않는 계정입니다.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn blue" data-dismiss="modal">
                확인
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {checkOK ? <Modal3/> : null}

    </div>
  );
}

export default Login;
