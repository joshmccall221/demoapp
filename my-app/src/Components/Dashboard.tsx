import { DetailsList } from "@fluentui/react/lib/DetailsList"
import React from "react";
import { ListOfRequests } from "./ListOfRequests";
import { getRequestFromAPI } from "../Brokers/Request";
import { Request } from "../Models/RequestType";

export const Dashboard = () => {
    const [items, setItems] = React.useState<Request[] | undefined>(undefined);

    React.useEffect(() => {
        setItems(getRequestFromAPI())
    })

    return (<>
        <ListOfRequests items={items} />
    </>)
}

