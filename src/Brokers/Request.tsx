import { Request } from "../Models/RequestType";

export const getRequestFromAPI = async (): Promise<Request[]> => {

    return window.fetch('microsoft.com/api/requests',
        {
            method: 'GET',
            headers: { 'content-type': 'application/json;charset=UTF-8', },
        })
        .then((response) => response.json())
        .then((data) => data);
};
