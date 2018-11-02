import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === "UPDATE_STATE"){
        return {
            ...state,
            devicesData: action.devicesData,
        }
    }
    return state;
};

export default createStore(reducer, {devicesData: []});