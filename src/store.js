import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === "UPDATE_STATE"){
        console.log(action.devicesData);
        return {
            ...state,
            devicesData: action.devicesData,
        }
    }
    return state;
};

export default createStore(reducer, {devicesData: []});