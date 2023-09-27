import SideBar from "../components/SideBar";
import Topbar from "../components/topbar";

export default function Popular() {
    return (
        <div>
            <Topbar />
            <div className="relative"><SideBar/></div>
        </div>
    )
}