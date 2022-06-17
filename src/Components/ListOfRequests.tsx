import { ShimmeredDetailsList } from "@fluentui/react/lib/ShimmeredDetailsList";
import React from "react";
import { Request } from "../Models/RequestType";

type ListOfRequests = {
    items: Request[] | undefined;
    getItems?: () => Promise<Request[]>;
};

export const ListOfRequests = ({ items, getItems }: ListOfRequests) => {
    const [listOfRequests, setlistOfRequests] = React.useState<Request[] | undefined>(items);

    React.useEffect(() => {
        getItems && getItems().then((items => setlistOfRequests(items)))
        items && setlistOfRequests(items)
    }, [items, getItems])
console.log({listOfRequests})
    return (<>
        <ShimmeredDetailsList
            items={ listOfRequests ?? []}
            enableShimmer={!listOfRequests}
            columns={[
                {
                    key: 'c_ticket_number',
                    fieldName:'c_ticket_number',
                    name: 'Change Ticket Number',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'path',
                    fieldName:'path',
                    name: 'Path',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 's_ticket_number',
                    fieldName:'s_ticket_number',
                    name: 'Snow Ticket Number',
                    minWidth: 100,
                    isResizable: true
                },

                {
                    key: 's_time',
                    fieldName:'s_ticket_number',
                    name: 'Start Time',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'u_time',
                    fieldName:'u_time',
                    name: 'Updated Time',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'u_by',
                    fieldName:'u_by',
                    name: 'Updated by',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'status',
                    fieldName:'status',
                    name: 'Status',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'actions',
                    fieldName:'actions',
                    name: 'Actions',
                    minWidth: 100,
                    isResizable: true
                }
            ]} />
    </>);
};
