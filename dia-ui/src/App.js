import './App.css';
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {
  return ( 
  <Router>
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>
    </Container>
    </Router>
  );
}
const Container = styled.div ``;

export default App;
