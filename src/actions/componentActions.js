import * as API from '../api/componentApi';
import * as types from '../constants/componentApiConstants';

/**
 * Method to get a component
 * @returns
 */
export function getComponent() {
    return dispatch => {
        dispatch(getComponentBegin());
        return API.getComponent()
            .then(res => {dispatch(getComponentSuccess(res));})
            .catch(res => dispatch(getComponentFailure(res)));
    };
}

/**
 * Begin getting the component.
 * @returns {{type}}
 */
export function getComponentBegin() {
    return {
        type: types.GET_COMPONENT_BEGIN
    };
}

/**
 * Success getting the component.
 * @returns {{type}}
 */
export function getComponentSuccess(result) {
    return {
        type: types.GET_COMPONENT_SUCCESS,
        component: result
    };
}

/**
 * Failure getting the component
 * @param res
 * @returns {{type, message: string}} response error message
 */
export function getComponentFailure(res) {
    let errorMessage = "Unable to connect to the api";
    if (res && res.response) {
        errorMessage = res.message;
    }
    return {
        type: types.GET_COMPONENT_FAILURE,
        message: errorMessage
    };
}
