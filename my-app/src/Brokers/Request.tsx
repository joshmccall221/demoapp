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

export const getRequestFromAPI = (): Promise<Request[]> => {
    return mocker()
        .schema('request', request, 200)
        .build()
        .then(({ request }: any) => {
            console.log({ request })
            return request
        },
            (reason: any) => {
                console.log({ reason })

            });
};
