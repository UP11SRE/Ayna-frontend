import React, { useState } from "react";
import styled from "styled-components";
import { Input, Card, Button } from "antd";
import { socket } from "../../config/web-sockets";
import { history } from "../../config/network";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const onUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };
  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onConfirmChange = (e) => {
    const confirm = e.target.value;
    setConfirm(confirm);
  };

  const onClick = () => {
    if (username && password && confirm && password === confirm) {
      socket.emit("register", { username, password }, (error) => {
        if (error) {
          setError(error);
          alert(error);
        } else {
          socket.on("registered", () => {
            props.onRegisterSuccess();
          });
        }
      });
    }
  };

  const redirectLoginPage = () => {
    history.push(`/login`);
  };

  socket.on("registered", () => {
    console.log("Welcome event inside Register");
    props.onRegisterSuccess();
  });

  return (
    <StyledCard>
      <label htmlFor="username">
        Enter your username
        <Input
          name="username"
          placeholder="Enter your username"
          maxLength={25}
          value={username}
          onChange={onUsernameChange}
        />
      </label>
      <label htmlFor="password">
        Enter your password
        <Input
          name="password"
          placeholder="Enter your password"
          type="password"
          maxLength={25}
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <label htmlFor="confirm">
        Confirm your password
        <Input
          name="confirm"
          placeholder="Confirm your password"
          type="password"
          maxLength={25}
          value={confirm}
          onChange={onConfirmChange}
        />
      </label>
      <StyledButton type="primary" size={"large"} onClick={onClick}>
        Register
      </StyledButton>
      <p>
        If you have registered before,{" "}
        <StyledSpan onClick={redirectLoginPage}>Log in</StyledSpan>
      </p>
    </StyledCard>
  );
}

export default Register;

const StyledCard = styled(Card)`
  width: 581px;
  height: 280px;
  margin: 30vh auto;
  box-shadow: 2px 3px 3px 2.8px #d7d7e4;
  text-align: center;
`;
const StyledButton = styled(Button)`
  margin: 10px 0;
`;

const StyledSpan = styled.span`
  color: #1890ff;
  cursor: pointer;
`;
