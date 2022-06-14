import { ShimmeredDetailsList } from "@fluentui/react/lib/ShimmeredDetailsList";
import React from "react";
import { Request } from "../Models/RequestType";

export const ListOfRequests = ({ items }: { items: Request[] | undefined; }) => {
    return (<>
        <ShimmeredDetailsList
            items={items ?? []}
            enableShimmer={!items}
            columns={[
                {
                    key: 'c_ticket_number',
                    name: 'Change Ticket Number',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'path',
                    name: 'Path',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 's_ticket_number',
                    name: 'Snow Ticket Number',
                    minWidth: 100,
                    isResizable: true
                },

                {
                    key: 's_time',
                    name: 'Start Time',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'u_time',
                    name: 'Updated Time',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'u_by',
                    name: 'Updated by',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'status',
                    name: 'Status',
                    minWidth: 100,
                    isResizable: true
                },
                {
                    key: 'actions',
                    name: 'Actions',
                    minWidth: 100,
                    isResizable: true
                }
            ]} />
    </>);
};
