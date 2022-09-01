import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

// 다수 props 사용시 : interface 작성
interface LabelValue {
  isFocus: boolean;
  nameValue: string;
}

const SignUp = () => {
  // Name Label Position
  const [nameLabelPosition, setNameLabelPosition] = useState<boolean>(false);
  // ID Label Position
  const [idLabelPosition, setIdLabelPosition] = useState<boolean>(false);
  // Password Label Position
  const [passwordLabelPosition, setPasswordLabelPosition] =
    useState<boolean>(false);
  // Password Confirm Label Position
  const [passwordConfirmLabelPosition, setPasswordConfirmLabelPosition] =
    useState<boolean>(false);
  // Email Label Position
  const [emailLabelPosition, setEmailLabelPosition] = useState<boolean>(false);

  // name
  const [name, setName] = useState<string>("");
  // Id
  const [id, setId] = useState<string>("");
  // password
  const [password, setPassword] = useState<string>("");
  // password Confirm
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  // email
  const [email, setEmail] = useState<string>("");

  // validate state
  const [isNameValidate, setIsNameValidate] = useState<boolean>(false);
  const [isIdValidate, setIsIdValidate] = useState<boolean>(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState<boolean>(false);
  const [isPasswordConfirmValidate, setIsPasswordConfirmValidate] =
    useState<boolean>(false);
  const [isEmailValidate, setIsEmailValidate] = useState<boolean>(false);

  // validation
  // name validate
  const nameValidate = () => {
    const nameReg = /^[ㄱ-ㅎ|가-힣]+$/;

    if (!nameReg.test(name)) {
      setIsNameValidate(true);
      return false;
    }
    setIsNameValidate(false);
    return true;
  };

  // id validate
  const idValidate = () => {
    const idReg = /^(?=.*[A-Za-z])(?=.*[0-9])[a-z|A-Z&0-9]+$/gi;

    if (!idReg.test(id)) {
      setIsIdValidate(true);
      return false;
    }
    setIsIdValidate(false);
    return true;
  };

  // password validate
  const passwordValidate = () => {
    const passwordReg =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[A-Za-z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,12}$/;

    if (!passwordReg.test(password)) {
      setIsPasswordValidate(true);
      return false;
    }

    setIsPasswordValidate(false);
    return true;
  };

  // password Confirm validate
  const passwordConfirmValidate = () => {
    if (password !== passwordConfirm) {
      setIsPasswordConfirmValidate(true);
      return false;
    }
    setIsPasswordConfirmValidate(false);
    return true;
  };

  // email validate
  const emailValidate = () => {
    const emailReg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!emailReg.test(email)) {
      setIsEmailValidate(true);
      return false;
    }
    setIsEmailValidate(false);
    return true;
  };

  const onValidate = () => {
    if (!nameValidate()) {
      return false;
    }
    if (!idValidate()) {
      return false;
    }
    if (!passwordValidate()) {
      return false;
    }
    if (!passwordConfirmValidate()) {
      return false;
    }
    if (!emailValidate()) {
      return false;
    }
    return true;
  };

  const signUp = () => {
    if (!onValidate()) {
      return;
    }
    alert("회원가입 성공");
  };

  return (
    <Container>
      <SignUpWrap>
        {/* Name */}
        <InputContainer>
          <Input
            type='text'
            id='name'
            required
            onFocus={() => setNameLabelPosition(true)}
            onBlur={() => setNameLabelPosition(false)}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor='name' isFocus={nameLabelPosition} nameValue={name}>
            Name
          </Label>
        </InputContainer>
        {isNameValidate && (
          <WarningText>이름은 한글만 입력해주세요.</WarningText>
        )}

        {/* ID */}
        <InputContainer>
          <Input
            type='text'
            id='id'
            required
            onFocus={() => setIdLabelPosition(true)}
            onBlur={() => setIdLabelPosition(false)}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Label htmlFor='id' isFocus={idLabelPosition} nameValue={id}>
            ID
          </Label>
        </InputContainer>
        {isIdValidate && (
          <WarningText>아이디는 영문자와 숫자를 포함해주세요.</WarningText>
        )}

        {/* Password */}
        <InputContainer>
          <Input
            type='text'
            id='password'
            required
            onFocus={() => setPasswordLabelPosition(true)}
            onBlur={() => setPasswordLabelPosition(false)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label
            htmlFor='password'
            isFocus={passwordLabelPosition}
            nameValue={password}>
            Password
          </Label>
        </InputContainer>
        {isPasswordValidate && (
          <WarningText>
            비밀번호는 영문자, 숫자, 특수문자를 포함한 8자 이상, 12자 이하로
            입력해주세요.
          </WarningText>
        )}

        {/* Password Confirm */}
        <InputContainer>
          <Input
            type='text'
            id='passwordConfirm'
            required
            onFocus={() => setPasswordConfirmLabelPosition(true)}
            onBlur={() => setPasswordConfirmLabelPosition(false)}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Label
            htmlFor='passwordConfirm'
            isFocus={passwordConfirmLabelPosition}
            nameValue={passwordConfirm}>
            Password Confirm
          </Label>
        </InputContainer>
        {isPasswordConfirmValidate && (
          <WarningText>동일한 비밀번호가 아닙니다.</WarningText>
        )}

        {/* Email */}
        <InputContainer>
          <Input
            type='text'
            id='email'
            required
            onFocus={() => setEmailLabelPosition(true)}
            onBlur={() => setEmailLabelPosition(false)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor='email' isFocus={emailLabelPosition} nameValue={email}>
            Email
          </Label>
        </InputContainer>
        {isEmailValidate && <WarningText>이메일을 확인해주세요.</WarningText>}

        <SignUpButton onClick={signUp}>회원가입</SignUpButton>
      </SignUpWrap>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpWrap = styled.div`
  position: relative;
  width: 30%;
  height: 90vh;
  border: 1px solid black;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  position: absolute;
  bottom: 0;
  width: 70%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 10px;
  box-sizing: border-box;
  font: inherit;
  outline: none;
  margin-left: 20px;
`;

// typescript styled components props setting
// 단일 props 사용시
// const Label = styled.label < {propsName : Type} >``
const Label = styled.label<LabelValue>`
  position: absolute;
  width: 70%;
  bottom: 15px;
  left: 30px;
  font-size: 18px;
  transition: transform 0.25s;
  color: #2e2e2e;
  transform: ${(props) =>
    props.isFocus || props.nameValue ? "translate(0,-40px)" : "translate(0,0)"};
`;

const SignUpButton = styled.div`
  position: relative;
  left: 20px;
  /* top: 30px; */
  width: 50%;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  cursor: pointer;
`;

const WarningText = styled.p`
  width: 70%;
  font-size: 12px;
  color: red;
  position: relative;
  left: 20px;
  top: -10px;
  margin: 0;
`;
