import { useState } from "react";
import MainReg from './MainReg';
import SelectionRole from "./SelectionRole";
import SuccesRegistration from "./SuccessRegistration";

export default function Registration() {
    const [page, setPage] = useState(1);

    function RenderPage(){
        switch(page){
            case 1:
                return <MainReg setPage={setPage}/>
            case 2:
                return <SelectionRole setPage={setPage}/>
            case 3:
                return <SuccesRegistration />
            default:
                return <MainReg />

        }
    }

    return <>{RenderPage()}</>;
}
