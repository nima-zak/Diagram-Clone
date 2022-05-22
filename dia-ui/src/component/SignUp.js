import React from "react";
import styled from "styled-components";
import "./Login.css";
import { useState } from "react";
import {
  query,
  collection,
  where,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import db, { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const creatAccount =  async (e) => {
    e.preventDefault();
    const username_query = await query(
      collection(db, "users"),
      where("userName", "==", userName)
    );
    const username_exists = await getDocs(username_query);

    if (username_exists.docs.length === 0) {
      if (userName.length > 0 && email.length > 0 && password.length > 0) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            updateProfile(userCredential.user, {
              userName: userName,
              Name: Name,
            });
            await setDoc(doc(db, "users", userCredential.user.uid), {
              email,
              Name,
              userName,
            });
            setEmail("");
            setName("");
            setUserName("");
            setPassword("");
            alert("Your account is created.");
            navigate("/login")
          })
          .catch((err) => alert(err));
      } else {
        alert("Please fill the inputs.");
      }
    } else {
      alert("Username is Exists");
    }
  };
  return (
    <Container className="container-login">
      <Main>
        <Form onSubmit={creatAccount} className="form-login">
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
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={Name}
            />
          </InputContainer>
          <InputContainer>
            <input
              className="input-login"
              type="text"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
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
          <button onClick={creatAccount} className="button-login">
            Sign up
          </button>
        </Form>

        <LogeInContainer className="container-bottom">
          <p className="p-container-bottom">
            Have an account?{" "}
            <span onClick={() => navigate("/login")}
             className="span-container-bottom">Log in</span>
          </p>
        </LogeInContainer>
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
const LogeInContainer = styled.div``;

export default SignUp;
