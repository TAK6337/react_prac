import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeWordFB } from "./redux/modules/Word";

import { ImBin } from "react-icons/im";
import { IoAddCircle } from "react-icons/io5";


const Main = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const words = useSelector((state) => state.Words.list);
console.log(words)

  return (
    <Cardstyle>
      {words.map((list, index) => {
        return (
          <div key={index} id={list.id}>
        
            <Fuck classname="list_item">
              <ListTitle>단어</ListTitle>
              <ListContent>{list.word}</ListContent>
              <ListTitle>의미</ListTitle>
              <ListContent>{list.mean}</ListContent>
              <ExpTitle>예문</ExpTitle>
              <ExpContent>{list.example}</ExpContent>

              <Icon>
                <ImBin
                  onClick={() => {
                    dispatch(removeWordFB(list.id));
                    navigate("/")
                  }}
                  className="click"
                  size="20"
                  style={{
                    marginRight: 3,
                    cursor: "pointer"
                  }} />

              </Icon>
            </Fuck>
       
          </div>



        )
      }

      )}

      <AddIcon>
        <IoAddCircle
          onClick={() => {
            navigate("/Card");
          }}
          size={50}
          style={{
            cursor: "pointer",
          }}
        />
      </AddIcon>
    </Cardstyle>
  )


}



const Cardstyle = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
height: 50vh;`;

const Fuck = styled.div`
background: #000;
padding: 40px;
padding-top: 20px;
margin: 40px auto;
border-radius: 10px;
text-align: center;
border: 2.3px solid #db3eb1;

`;


const Icon = styled.div`  
color: #ff3399;
display: flex;
filter: drop-shadow(0 0 15px #db3eb1) drop-shadow(0 0 50px #db3eb1) contrast(2) brightness(2);
justify-content: flex-end;
&:hover{
  color: #db3eb1;
  filter: drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(2);

}
`;


const ListTitle = styled.div`
color: #fff;
font-weight: bold;
text-decoration: underline;
text-underline-position: under;
text-shadow:
0 0 7px #fff,
0 0 10px rgb(207, 51, 147),
0 0 21px rgb(207, 51, 147),
0 0 42px rgb(207, 51, 147),
0 0 82px rgb(207, 51, 147),
0 0 92px rgb(207, 51, 147),
0 0 102px rgb(207, 51, 147),
0 0 151px rgb(207, 51, 147);`;

const ListContent = styled.div`
color: #fff;
padding: 23px;
text-shadow:
0 0 7px #fff,
0 0 10px rgb(207, 51, 147),
0 0 21px rgb(207, 51, 147),
0 0 42px rgb(207, 51, 147),
0 0 82px rgb(207, 51, 147),
0 0 92px rgb(207, 51, 147),
0 0 102px rgb(207, 51, 147),
0 0 151px rgb(207, 51, 147);`;

const ExpTitle = styled.div`
color: #3296d7;
font-weight: bold;
text-decoration: underline;
text-underline-position: under;`;

const ExpContent = styled.div`
color: #3296d7;
width: 200px;
height: 10px;
padding: 5px;
margin-bottom: 13px;
align-items: center;`;


const AddIcon = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
color: #000;
background-color: #ff3399;
width: 50px;
height: 50px;
border-radius: 50%;
position: fixed;
bottom: 10px;
right: 10px;
box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 2px 6px 2px;
&:hover{
  background-color: #ff3399;
  filter: drop-shadow(0 0 20px #db3eb1) contrast(2) brightness(1); `;







export default Main;