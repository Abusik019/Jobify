import { useState } from "react";
import NumberConfirmOne from "./NumberConfirmOne";
import NumberConfirmTwo from "./NumberConfirmTwo";
import NumberConfirmThree from "./NumberConfirmThree";

export default function NumberConfirm() {
    const [page, setPage] = useState(1);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <NumberConfirmOne setPage={setPage}/>;
            case 2:
                return <NumberConfirmTwo setPage={setPage}/>;
            case 3:
                return <NumberConfirmThree setPage={setPage}/>;
            default:
                return <div></div>;
        }
    };

    return (
        <>
            {renderPageContent()}
        </>
    );
}
