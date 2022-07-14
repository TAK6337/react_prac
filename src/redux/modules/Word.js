import {db} from "../../firebase"

import { collection, doc, getDoc, getDocs, addDoc, deleteDoc} from "firebase/firestore"

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
const REMOVE = 'word/REMOVE';

const initialState = {
  list: [],
};

// Action Creators
export function loadWord(word_list) {
return { type: LOAD, word_list};
}

export function createWord(words) {
return { type: CREATE, words};
}


export function removeWord(word_index) {
return { type: REMOVE, word_index};
}

//middlewares
export const loadWordFB = () => {
  return async function (dispatch) { 
    const word_data = await getDocs(collection(db, "div_item"));

    let word_list = []; 

    word_data.forEach((dic) => {
      word_list.push({id:dic.id, ...dic.data()});
    });

    dispatch(loadWord(word_list));
  }
}

export const createWordFB = (new_word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "div_item"), new_word);
    const _word = await getDoc(docRef);
    const word = {id: _word.id, ..._word.data()}

    dispatch(createWord(word))
  } 
}


export const removeWordFB = (word_id) => {
  return async function (dispatch, getState) {
    //console.log(word_id)
    
    const docRef = doc(db, "div_item", word_id);
    await deleteDoc(docRef);
console.log(getState())
    const _word_list = getState().Words.list;
    const word_index = _word_list.findIndex((dic) => {
      return dic.id === word_id;
    });

    dispatch(removeWord(word_index));

    //loadDictionaryFB 추가 (삭제하면 파이어베이스에서 정보 불러옴)
  };
};

export default function reducer(state = initialState, action = {}) {
    //매개변수에 값이 안들어오면 넣을 초기상태 값 -> 함수(state = {})
    //dispatch는 action함수에 접근하여 리턴값으로 reducer의 2번째 매개변수(action)를 제공
    switch (action.type) {
      case "word/LOAD": {
        return { list: action.word_list}; 
      }
      case "word/CREATE": {
        const new_word = [...state.list, action.words];
        return { list: new_word };
      }

      case "word/REMOVE": {
        const del_word = state.list.filter((l, idx) => {
          return parseInt(action.word_index) !== idx; //action의 word_index가 index와 같이 않으면 된다
        }); //parseInt문자를 숫자로 형변환 - 보기쉽다~
        return { list: del_word };
      }
  

//list 배열중에서 index값이 같은 애를 빼고 나머지 애들로 새로운 배열을 만든다
//return에서는 true와 false 둘 중 하나로 줄 수 있다. true-현재배열애
//새로운 요소 추가 flase-새배열이 요소가 들어가지 않음
     
// do reducer stuff
      default:
        return state;
    }
  }