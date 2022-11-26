import Nav from './Nav';
import './dashboard.css';
import { toast } from 'react-toastify';
import ExamCard from './ExamCard';
function Index() {
    let message = () => {
        const Loading = new Promise((resolve, reject) => {
            setTimeout(reject, 3000)
        })
        toast.promise(Loading, {
            pending: "Checking Config...",
            success: "Dark is now Enabled",
            error: "Unable to do Dark"
        })
    }
    return (
        <div className="dashboard my-3">
            <Nav message={message} />
            <ExamCard />
        </div>

    )
}

export default Index
