import { Careers } from "../Careers";
import { Sessions } from "../Sessions";
import { Sidebar } from "../Sidebar";

export default function Dashboard() {
    return (
        <div className="bg-primary-100 flex w-full min-h-screen justify-between flex">
            <Sidebar />
            <Careers />
            <Sessions />
        </div>
    )
}