import SideBar from "../components/SideBar";
import Topbar from "../components/topbar";
import PostCard from "../components/PostCard";

export default function Popular() {
    return (
        <div>
            <Topbar />
            <div className="relative flex">
                <SideBar/>
                <div className="min-h-full px-20 py-12 flex flex-col justify-start">
                    <PostCard />
                </div>
            </div>
        </div>
    )
}