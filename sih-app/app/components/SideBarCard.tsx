'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideBarCard({
    title,
    href,
    imgSrc,
    activeImgSrc,
    imgAlt,
}: {
    title: string,
    href: string,
    imgSrc: string,
    activeImgSrc: string,
    imgAlt: string,
}) {

    const pathname = usePathname() 

    return (
        <Link href={href}><div className="py-2 gap-4 px-6 flex flex-row items-center gap-4 rounded-md font-bolder w-56" style={{
            backgroundColor: pathname === href ? "#F4E7FF" : '',
            color: pathname === href ? '#AB3FFF' : "black",
        }}><img src={pathname === href ? activeImgSrc : imgSrc} alt={imgAlt}/><span>{title}</span></div></Link>
    )
}