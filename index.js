
import {createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// 액션 타입, 액션 생성 함수 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
    toggle: false,
    counter: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH: 
         return {
            ...state,
            toggle: !state.toggle
         };
        case INCREASE: 
         return {
            ...state,
            counter: state.counter + action.difference
         };
        case DECREASE: 
         return {
            ...state,
            counter: state.counter -1
         };
        default:
         return state;
    }
}

// 스토어 생성
const store = createStore(reducer);

// render 함수 생성
const render = () => {
    const state = store.getState();
    if (state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리
    counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onClick = () => {
    store.dispatch(toggleSwitch());
};
butIncrease.onClick = () => {
 store.dispatch(increase(1));
};
btnDecrease.onClick = () => {
    store.dispatch(decrease());
};