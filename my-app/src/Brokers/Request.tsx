import mocker from "mocker-data-generator";
import { Request } from "../Models/RequestType";

var request = {
    c_ticket_number: {
        faker: 'name.firstName'
    },
    path: {
        faker: 'name.lastName'
    },
    s_ticket_number: {
        faker: 'address.country'
    },
    s_time: {
        faker: 'date.past'
    },
    u_time: {
        faker: 'name.firstName'
    },
    u_by: {
        faker: 'name.lastName'
    },
    status: {
        faker: 'address.country'
    },
}

export const getRequestFromAPI = async (): Promise<Request[]> => {

    window.fetch('microsoft.com/api/requests',
        {
            // learn more about this API here: https://graphql-pokemon2.vercel.app/
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
        })
        .then(function(response) {
            return response.json();
          }).then(function(data) {
            console.log(data); 
            return data // { "userId": 1, "id": 1, "title": "...", "body": "..." }
          });
    //const {data, errors} = await response.json()
    return [];

    // return mocker()
    //     .schema('request', request, 200)
    //     .build()
    //     .then(({ request }: any) => {
    //         console.log({ request })
    //         return request
    //     },
    //         (reason: any) => {
    //             console.log({ reason })

    //         });
};
