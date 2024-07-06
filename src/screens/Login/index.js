import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { Input, Card, Button } from "antd";
import { socket } from "../../config/web-sockets";
import { history } from "../../config/network";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onUsernameChange = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };

  const onPasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onClick = () => {
    if (username && password) {
      socket.emit("login", { username, password }, (error) => {
        if (error) {
          setError(error);
          alert(error);
        } else {
          socket.on("logedin", () => {
            props.onLoginSuccess();
          });
        }
      });
    }
  };

  const redirectRegisterPage = () => {
    history.push(`/register`);
  };

  socket.on("logedin", () => {
    console.log("Welcome event inside Login");
    props.onLoginSuccess();
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
      <StyledButton type="primary" size={"large"} onClick={onClick}>
        Login
      </StyledButton>
      <p>
        If you did not register before,{" "}
        <StyledSpan onClick={redirectRegisterPage}>Register</StyledSpan>
      </p>
    </StyledCard>
  );
}

export default Login;

const StyledCard = styled(Card)`
  width: 581px;
  height: 240px;
  margin: 30vh auto;
  box-shadow: 2px 3px 3px 2.8px #d7d7e4;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin: 15px 0;
`;

const StyledSpan = styled.span`
  color: #1890ff;
  cursor: pointer;
`;
