import React from "react";
import { ListOfRequests } from "./ListOfRequests";
import { getRequestFromAPI } from "../Brokers/Request";
import { Request } from "../Models/RequestType";

export const Dashboard = () => {
    const [items, setItems] = React.useState<Request[] | undefined>(undefined);

    React.useEffect(() => {
        getRequestFromAPI()
        .then((requests: any) =>{
            setItems(requests)
        })

    }, [getRequestFromAPI])

    return (<>
        <ListOfRequests items={items} />
    </>)
}

