import axios from 'axios';

/**
 * Method to get a component
 * @returns {Promise<*>}
 */
export function getComponent() {
    const url = `http://localhost:3999/index.js`;
    return axios.get(url).then(res=>res.data);
}
