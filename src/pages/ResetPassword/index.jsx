import { useState } from "react";
import ResetPasswordOne from "./ResetPassword1";
import ResetPasswordTwo from "./ResetPassword2";
import ResetPasswordThree from "./ResetPassword3";
import ResetPasswordFour from './ResetPassword4';

export default function ResetPassword() {
    const [page, setPage] = useState(1);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <ResetPasswordOne setPage={setPage} />;
            case 2:
                return <ResetPasswordTwo />;
            case 3:
                return <ResetPasswordThree setPage={setPage} />;
            case 4:
                return <ResetPasswordFour />;
            default:
                return <div></div>;
        }
    };

    return <>{renderPageContent()}</>;
}
