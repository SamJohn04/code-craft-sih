import { KeyboardArrowDown } from "@mui/icons-material"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CategoryCard({
    title,
    href,
    imgSrc,
    imgAlt,
}: {
    title: string,
    href: string,
    imgSrc: string,
    imgAlt: string,
}) {

    const pathname = usePathname() 

    return (
        // <Link {href={href}}>
            <div className="py-2 gap-4 pl-2 flex flex-row gap-4 rounded-md font-bolder w-56" style={{
            backgroundColor: pathname === href ? "#F4E7FF" : '',
            color: pathname === href ? '#AB3FFF' : "black",
        }}><img src={imgSrc} alt={imgAlt}/><span className="w-full flex justify-between">{title}<KeyboardArrowDown /></span></div>
        // </Link>
    )
}