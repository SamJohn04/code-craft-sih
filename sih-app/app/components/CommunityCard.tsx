import { KeyboardArrowDown } from "@mui/icons-material"
import Link from "next/link"

export default function CommunityCard({
    title,
    href,
}: {
    title: string,
    href: string,
}) {
    return (
        // <Link {href={href}}>
            <div className="py-2 gap-4 pl-2 flex flex-row gap-4 rounded-md font-bolder w-56"><span className="w-full flex justify-between">#{title}<KeyboardArrowDown /></span></div>
        // </Link>
    )
}