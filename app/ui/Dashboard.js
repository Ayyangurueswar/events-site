'use client';
import { useRouter } from "next/navigation";
import { API_URL } from "@/config/index";
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import action from "../action";

const Dashboard = ({id}) => {
    const router = useRouter();
    async function deleteEvent(){
        const res = fetch(`${API_URL}/api/all-events/${id}`, {
            method: 'DELETE',
        });
        const result = await toast.promise(res, {
            pending: 'Deleting Event...',
            success: 'Event Deleted',
            error: 'Error Deleting Event'
        })
        if(result.ok) {
            await action();
            router.push('/events');
        }
    }
    return(
        <div className="w-full flex justify-end">
            <div className="mr-10 flex gap-4 p-4">
                <Link href={`/events/edit/${id}`} className="text-blue-500">Edit event</Link>
                <button className="text-red-600" onClick={() => {deleteEvent()}}>Delete event</button>
            </div>
            <ToastContainer position="bottom-left" theme="colored" newestOnTop/>
        </div>
    )
}

export default Dashboard;