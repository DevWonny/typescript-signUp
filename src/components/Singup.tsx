import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";

// 다수 props 사용시 : interface 작성
interface LabelValue {
  isFocus: boolean;
  nameValue: string;
}

const SignUp = () => {
  // label 위치
  const [labelPosition, setLabelPosition] = useState(false);
  // name
  const [name, setName] = useState("");

  return (
    <Container>
      <SignUpWrap>
        {/* Name */}
        <InputContainer>
          <Input
            type='text'
            id='name'
            required
            onFocus={() => setLabelPosition(true)}
            onBlur={() => setLabelPosition(false)}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor='name' isFocus={labelPosition} nameValue={name}>
            Name
          </Label>
        </InputContainer>
        {/* ID */}
        {/* Password */}
        {/* Password Confirm */}
        {/* Email */}
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

  /* display: flex;
  align-items: center; */
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font: inherit;
  outline: 2px solid #000;
`;

// typesciprt styled components props setting
// 단일 props 사용시
// const Label = styled.label < {propsName : Type} >``
const Label = styled.label<LabelValue>`
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s;
  color: ${(props) => (props.isFocus ? "red" : "purple")};
  transform: ${(props) =>
    props.isFocus || props.nameValue ? "translate(0,-30px)" : "translate(0,0)"};
`;
