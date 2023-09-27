import CategoryCard from "./CategoryCard";
import CommunityCard from "./CommunityCard";
import SideBarCard from "./SideBarCard";

export default function SideBar() {
    return (
        <div className="h-screen box-border flex flex-col gap-4 items-end p-8 sticky left-0 top-0 border-r-2 border-[#DBDBDB] w-[417px]">
            <SideBarCard title="Feed" href="/feed" imgSrc="icon/feed.svg" activeImgSrc="icon/feed-active.svg" imgAlt="Feed"/>
            <SideBarCard title="Popular" href="/popular" imgSrc="icon/hot.svg" activeImgSrc="icon/hot-active.svg" imgAlt="Popular"/>
            <hr className="border-t-2 border-[#DBDBDB] w-56"/>
            <h3 className="w-56 text-xs text-[#6E6E6E]">CATEGORIES</h3>
            <CategoryCard title="Technology" href="/categories/technology" imgSrc="icon/tech.svg" imgAlt="Technology"/>
            <CategoryCard title="Mechanical" href="/categories/mechanical" imgSrc="icon/mech.svg" imgAlt="Mechanical"/>
            <CategoryCard title="Science" href="/categories/science" imgSrc="icon/science.svg" imgAlt="Science"/>
            <hr className="border-t-2 border-[#DBDBDB] w-56"/>
            <h3 className="w-56 text-xs text-[#6E6E6E]">COMMUNITIES</h3>
            <CommunityCard title="Science" href="/community/science"/>
            <CommunityCard title="Tech" href="/community/technology"/>
            <CommunityCard title="Mechanical" href="/community/mechanical"/>
        </div>
    )
}