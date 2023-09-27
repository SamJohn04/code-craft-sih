import React from "react";
import SideBar from "../components/SideBar";
import CommunityPost from "../components/CommunityPost";
import Topbar from "../components/topbar";

export default function community() {
    return (
        <div>
            <Topbar/>
            <div className="relative flex"><SideBar />
                <div className="min-h-full px-20 py-12 flex flex-col justify-start">
                    <CommunityPost />
                </div>
            </div>

        </div>
    )
}