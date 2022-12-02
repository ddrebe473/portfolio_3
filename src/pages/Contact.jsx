import Contacts from '../components/Contacts';
import Darkmode from '../components/Darkmode'
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const Contact = () => {

    return (
        <>
            <TopBar />
            <Sidebar buttons={[]}/>

            <div className="mainContent">
                <Contacts />
            </div>
        </>
    )
};


export default Contact;