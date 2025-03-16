import { Careers } from "../../components/Careers";
import { Sessions } from "../../components/Sessions";
import { Sidebar } from "../../components/Sidebar";

export default function Dashboard() {
    return (
        <div className="bg-primary-100 flex w-full min-h-screen justify-between flex">
            <Sidebar />
            <Careers />
            <Sessions />
        </div>
    )
}