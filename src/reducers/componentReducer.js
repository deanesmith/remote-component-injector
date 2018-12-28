import * as types from '../constants/componentApiConstants';

const initialState = {
    gettingComponent: false,
    component: null,
    getComponentError: false
};

/**
 * Method to reduce get component state.
 * @param state
 * @param action
 * @returns {*}
 */
export default function getComponentReducer(state = initialState, action) {
    switch(action.type) {
        case types.GET_COMPONENT_BEGIN:
            return {
                ...state,
                gettingComponent: true
            };
        case types.GET_COMPONENT_SUCCESS:
            return {
                ...state,
                gettingComponent: false,
                component: action.component,
                getComponentError: false
            };
        case types.GET_COMPONENT_FAILURE:
            return {
                ...state,
                gettingComponent: false,
                component: null,
                getComponentError: true,
                getComponentErrorMessage: action.message
            };
        default:
            return state;
    }
}
