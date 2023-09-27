'use client';

import { BookmarkBorderOutlined, Comment, MoreVert, Reply, Star, StarOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function PostCard({
    title = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut',
    imgSrc = 'Project Orbit.png',
    imgAlt = 'tech',
    author = 'Mar Baselios College of Engineering and Technology',
    authorImg = 'icon/tech.svg',
    authorImgAlt = 'Mar Baselios',
    authorHref = '/university/mar-baselios-college-of-engineering-and-technology',
    href = '/post/1',
    content = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, ',
    tags = ['Tech', 'Science'],
    limit = true,
    comments = [],
}: {
    title?: string,
    imgSrc?: string,
    imgAlt?: string,
    author?: string,
    authorImg?: string,
    authorImgAlt?: string,
    authorHref?: string,
    href?: string,
    content?: string,
    tags?: string[],
    limit?: boolean,
    comments?: Comment[]
}) {

    const [rating, setRating] = useState(0)

    return (
        <div className="rounded-md bg-white w-[800px] shadow-md p-10">
            <div className="flex flex-row pb-8 items-center justify-between"><div className="flex flex-row items-center gap-4"><img src="icon/tech.svg" style={{width: 48}}/><h2 className="text-xl">{title}</h2></div><MoreVert /></div>
            <div className="flex flex-row items-center justify-start gap-2">{tags.map(tag => <div className="bg-[#F4E7FF] text-[#AB3FFF] px-4 py-1 rounded-md">{tag}</div>)}</div>
            <div className="flex items-center justify-center"><img src={imgSrc} alt={imgAlt}/></div>
            <div>
                <p style={{
                    display: limit ? '-webkit-box' : 'flex',
                    WebkitBoxOrient: limit ? 'vertical' : undefined,
                    WebkitLineClamp: limit ? 3 : undefined,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.8rem',

                }}>{content}</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 py-8"><div className="flex flex-row items-center gap-4"><img src={authorImg} alt={authorImgAlt}/><Link href={authorHref}>{author}</Link></div> <Button className="bg-[#AB3FFF] hover:bg-[#AB3FFF] hover:scale-110 transition-all text-white px-4" style={{display: limit ? 'flex' : 'none'}}>View Project</Button></div>
            <hr />
            <div className="flex flex-row items-center justify-between gap-4 pt-1"><div className="flex gap-12"><div>{[1,2,3,4,5].map((i) => <IconButton key={i} onClick={() => setRating(curr => curr === i ? 0 : i) } className="px-0">{rating >= i ? <Star style={{color: 'gold'}}/> : <StarOutline />}</IconButton>)}</div><button className="flex gap-4 items-center text-[#7C7C7C]"><Comment />{comments.length} Comment</button><button className="flex gap-4 items-center text-[#7C7C7C]"><Reply />5 Share</button></div><button className="flex gap-4 items-center text-[#7C7C7C]"><BookmarkBorderOutlined /> Save</button></div>
        </div>
    )
}