import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

// 다수 props 사용시 : interface 작성
interface LabelValue {
  isFocus: boolean;
  nameValue: string;
}

const SignUp = () => {
  // Name Label Position
  const [nameLabelPosition, setNameLabelPosition] = useState(false);
  // ID Label Position
  const [idLabelPosition, setIdLabelPosition] = useState(false);
  // Password Label Position
  const [passwordLabelPosition, setPasswordLabelPosition] = useState(false);
  // Password Confirm Label Position
  const [passwordConfirmLabelPosition, setPasswordConfirmLabelPosition] =
    useState(false);
  // Email Label Position
  const [emailLabelPosition, setEmailLabelPosition] = useState(false);

  // name
  const [name, setName] = useState("");
  // Id
  const [id, setId] = useState("");
  // password
  const [password, setPassword] = useState("");
  // password Confirm
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // email
  const [email, setEmail] = useState("");

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
  width: 30%;
  height: 90vh;
  border: 1px solid black;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  padding-left: 20px;
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
  color: ${(props) => (props.isFocus ? "red" : "#2e2e2e")};
  transform: ${(props) =>
    props.isFocus || props.nameValue ? "translate(0,-40px)" : "translate(0,0)"};
`;
