import { useState } from 'react'
import CreateProfilePageOne from './CreateProfile-1';
import CreateProfilePageTwo from './CreateProfile-2';
import CreateProfilePageThree from './CreateProfile-3';
import CreateProfilePageFour from './CreateProfile-4';
import CreateProfilePageFive from './CreateProfile-5';
import CreateProfilePageSix from './CreateProfile-6';
import CreateProfilePageSeven from './CreateProfile-7';
import CreateProfilePageEight from './CreateProfile-8';
import CreateProfilePageNine from './CreateProfile-9';
import CreateProfilePageTen from './CreateProfile-10';

export default function CreateFreelancerProfile() {
   const [page, setPage] = useState(1);
   const [user, setUser] = useState({
        userResume: [],
        userCategories: [],
        userProfession: "",
        userExperience: [],
        userOtherExperience: [],
        userEducation: [],
        userDescription: "",
        userDetails: {}
   });

   console.log(page);
   console.log("Итоговый user", user);

    const renderPageContent = () => {
        switch (page) {
            case 1:
                return <CreateProfilePageOne setPage={setPage} setUser={setUser} user={user}/>;
            case 2:
                return <CreateProfilePageTwo setPage={setPage} setUser={setUser} user={user}/>;
            case 3:
                return <CreateProfilePageThree setPage={setPage} setUser={setUser} user={user}/>;
            case 4:
                return <CreateProfilePageFour setPage={setPage} setUser={setUser} user={user}/>;
            case 5:
                return <CreateProfilePageFive setPage={setPage} setUser={setUser} user={user}/>;
            case 6:
                return <CreateProfilePageSix setPage={setPage} setUser={setUser} user={user}/>;
            case 7:
                return <CreateProfilePageSeven setPage={setPage} setUser={setUser} user={user}/>;
            case 8:
                return <CreateProfilePageEight setPage={setPage} setUser={setUser} user={user}/>;
            case 9:
                return <CreateProfilePageNine setPage={setPage} user={user}/>;
            case 10:
                return <CreateProfilePageTen />;
            default:
                return <CreateProfilePageOne setPage={setPage}/>;
        }
    };

    return (
        <>
            {renderPageContent()}
        </>
    )
}
