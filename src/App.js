import React from "react";
import styled from "styled-components";
import {db} from "./firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"
import { loadWordFB } from "./redux/modules/Word";

import { useDispatch } from "react-redux";

import { useNavigate, Route, Routes } from "react-router-dom";


import "./App.css"

import Main from "./Main";
import Card from "./Card";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <div className="App">
   
      <Title onClick={() => {
        navigate("/");
      }}>
        <h1>나만의 단어장</h1>
      </Title>
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </div>
 
  );
}



const Title = styled.div`
width: 100%;
background-color: #000;
color: #1d3557;
font-size: 40px;
margin: 0px;
padding: 20px;


h1 {
    font-size: 30px;
    color: #fff;
    margin: 0;
  text-shadow:
  0 0 7px #fff,
  0 0 10px rgb(207, 51, 147),
  0 0 21px rgb(207, 51, 147),
  0 0 42px rgb(207, 51, 147),
  0 0 82px rgb(207, 51, 147),
  0 0 92px rgb(207, 51, 147),
  0 0 102px rgb(207, 51, 147),
  0 0 151px rgb(207, 51, 147);
  }
`;

export default App;
