import React, { useRef } from "react";
import styled from "styled-components";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWordFB } from "./redux/modules/Word";


const Card = (props) => {
  const word = React.useRef(null);
  const mean = React.useRef(null);
  const example = React.useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const addMain = () => {
    dispatch(
      createWordFB({
        word: word.current.value,
        mean: mean.current.value,
        example: example.current.value,
      })
    );
    navigate("/");
  };

  return (
    <Blank>
      <Label>단어 </Label>
      <input type="text" ref={word} />
      <Label>의미 </Label>
      <input type="text" ref={mean} />
      <Label>예문 </Label>
      <input type="text" ref={example} />
      <Button onClick={addMain} style= {{cursor: "pointer"}}>단어추가</Button>
    </Blank>
  );
};

const Blank = styled.div`
background: #000;
padding: 40px;
padding-top: 20x;
margin: 30px auto;
border-radius: 5px;
border: 2.3px solid #ff3399;
text-align: center;
width: 300px;
`;


const Label = styled.div`
color: #fff;
font-weight: bold;
text-decoration: underline;
text-underline-position: under;
padding: 5px;
text-shadow:
0 0 7px #fff,
0 0 10px rgb(207, 51, 147),
0 0 21px rgb(207, 51, 147),
0 0 42px rgb(207, 51, 147),
0 0 82px rgb(207, 51, 147),
0 0 92px rgb(207, 51, 147),
0 0 102px rgb(207, 51, 147),
0 0 151px rgb(207, 51, 147);
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #fff;
background-color: #000;
border: 1px solid #fff;
width: 200px;
height: 40px;
font-size: 15px;
font-weight: bold;
border-radius: 5px;
margin: auto;
margin-top: 20px;
text-shadow:
0 0 7px #fff,
0 0 10px rgb(207, 51, 147),
0 0 21px rgb(207, 51, 147),
0 0 42px rgb(207, 51, 147),
0 0 82px rgb(207, 51, 147),
0 0 92px rgb(207, 51, 147),
0 0 102px rgb(207, 51, 147),
0 0 151px rgb(207, 51, 147);
&:hover{
  background-color: #000;

  color: #fff;
  border: 1px solid #ff3399;

  filter: drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(1);

`;


export default Card;