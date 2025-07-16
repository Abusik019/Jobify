import { useState } from "react";
import CreateTaskPageOne from "./Page-1";
import CreateTaskPageTwo from "./Page-2";
import CreateTaskPageThree from "./Page-3";
import CreateTaskPageFour from "./Page-4";
import CreateTaskPageFive from "./Page-5";
import CreateTaskPageSix from "./Page-6";
import CreateTaskPageSeven from "./Page-7";
import CreateTaskPageEight from "./Page-8";

export default function CreateTask() {
    const [page, setPage] = useState(0);
    const [task, setTask] = useState({
        title: "",
        skills: [],
        details: {
            mainCategory: {},
            subcategories: [],
            highPriceOffers: {},
            deadlines: {
                date: "",
                time: ""
            },
            notes: ""
        },
        paymentMethod: "fixed",
        stages: [],
        desc: "",
        files: []
    });

    console.log(task);

    const renderPageContent = () => {
        switch (page) {
            case 0:
                return <CreateTaskPageOne setPage={setPage}/>;
            case 1:
                return <CreateTaskPageTwo setPage={setPage} setTask={setTask} task={task}/>;
            case 2:
                return <CreateTaskPageThree setPage={setPage} setTask={setTask} task={task}/>;
            case 3:
                return <CreateTaskPageFour setPage={setPage} setTask={setTask} task={task}/>;
            case 4:
                return <CreateTaskPageFive setPage={setPage} setTask={setTask} task={task}/>;
            case 5:
                return <CreateTaskPageSix setPage={setPage} setTask={setTask} task={task}/>;
            case 6:
                return <CreateTaskPageSeven setPage={setPage} task={task}/>;
            case 7:
                return <CreateTaskPageEight />;
            default:
                return <div></div>;
        }
    };

    return (
        <>
            {renderPageContent()}
        </>
    )
}
