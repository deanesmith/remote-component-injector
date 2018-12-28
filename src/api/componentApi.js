import axios from 'axios';

/**
 * Method to get a component
 * @returns {Promise<*>}
 */
export function getComponent() {
    // Stub out api call to static api
    //const url = `http://localhost:3999/index.js`;
    //return axios.get(url).then(res=>res.data);
    return new Promise(function (resolve) {
        resolve("<div>This is the thing to be injected</div>"); // fulfilled
    });
}
