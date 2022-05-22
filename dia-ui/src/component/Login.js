import React from "react";
import styled from "styled-components";
import "./Login.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
      e.preventDefault();

      signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
          const newUser ={
              userName: userCredential.user.displayName,
            //   name : userCredential.user.Name,
              email: userCredential.user.email,
              uid: userCredential.user.uid
          };
          localStorage.setItem("user", JSON.stringify(newUser));
          navigate("/");
      })
      .catch((err) => alert(err));
  };
  return (
    <Container className="container-login">
      <Main>
        <Form onSubmit={login} className="form-login">
          <Logo>
            <img src={require("../component/logo.png")} alt=" " />
          </Logo>
          <InputContainer>
            <input
              className="input-login"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputContainer>
          <InputContainer>
            <input
              className="input-login"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </InputContainer>
          <button onClick={login} className="button-login">Log In</button>
        </Form>

        <SignUpContainer className="container-bottom">
          <p className="p-container-bottom">
            Don't have an account?
            <span onClick={() => navigate("/signup")}
            className="span-container-bottom">Sign up</span>
          </p>
        </SignUpContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div``;
const Main = styled.main``;
const Form = styled.form``;
const Logo = styled.div`
  width: 260px;
  img {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  height: 25px;
  width: 250px;
  margin-top: 20px;
`;
const SignUpContainer = styled.div``;

export default Login;
