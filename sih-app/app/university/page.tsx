import PostCard from "../components/PostCard";
import SideBar from "../components/SideBar";
import Universities from "../components/Universities";
import Topbar from "../components/topbar";

export default function University() {
    return (
        <div>
            <Topbar />
            <div className="relative flex">
                <SideBar/>
                <div className="min-h-full px-20 py-12 flex flex-col justify-start">
                    <Universities />
                    <PostCard />
                </div>
            </div>
        </div>
    )
}