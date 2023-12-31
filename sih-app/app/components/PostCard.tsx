'use client';

import { BookmarkBorderOutlined, Comment, MoreVert, Reply, Star, StarOutline } from "@mui/icons-material";
import { Box, Button, CircularProgress, CircularProgressProps, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
  ) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex', height: '8rem' }}>
        <CircularProgress variant="determinate" style={{color: '#AB3FFF', width: '8rem', marginTop: '20'}} {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="caption"
            component="div"
            style= {{color: "#AB3FFF", fontSize: '1.3rem'}}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

export default function PostCard({
    title = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut',
    imgSrc = 'Project Orbit.png',
    imgAlt = 'tech',
    author = 'Mar Baselios College of Engineering and Technology',
    authorImg = 'icon/tech.svg',
    authorImgAlt = 'Mar Baselios',
    authorHref = '/university',
    href = '/post/1',
    content = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, Lorem ipsum dolor sit amet consectetur adipiscing elit Ut, ',
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
    const completion = 40

    return (
        <div className="flex flex-row bg-white rounded-md shadow-md p-10">    
            <div className="md:max-w-[800px]">
                <div className="flex flex-row pb-8 items-center justify-between"><div className="flex flex-row items-center gap-4"><img src="icon/tech.svg" style={{width: 48}}/><h2 className="text-xl">{title}</h2></div><div style={{display: limit ? undefined : 'none'}}><MoreVert /></div></div>
                <div className="flex flex-row items-center justify-start gap-2">{tags.map(tag => <div key={tag} className="bg-[#F4E7FF] text-[#AB3FFF] px-4 py-1 rounded-md">{tag}</div>)}</div>
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
                <div className="flex flex-row items-center justify-between gap-4 pt-8 pb-4"><div className="flex flex-row items-center gap-4"><img src={authorImg} alt={authorImgAlt}/><Link href={authorHref}>{author}</Link></div><Link href={'/post'}><Button className="bg-[#AB3FFF] hover:bg-[#AB3FFF] hover:scale-110 transition-all text-white px-4" style={{display: limit ? 'flex' : 'none'}}>View Project</Button></Link></div>
                <hr />
                <div className="flex flex-row items-center justify-between gap-4 pt-1"><div className="flex gap-12"><div>{[1,2,3,4,5].map((i) => <IconButton key={i} onClick={() => setRating(curr => curr === i ? 0 : i) } className="px-0">{rating >= i ? <Star key={i} style={{color: 'gold'}}/> : <StarOutline />}</IconButton>)}</div><button className="flex gap-4 items-center text-[#7C7C7C]"><Comment />{comments.length} Comment</button><button className="flex gap-4 items-center text-[#7C7C7C]"><Reply />5 Share</button></div><button className="flex gap-4 items-center text-[#7C7C7C]"><BookmarkBorderOutlined /> Save</button></div>
            </div>
            <div className="flex flex-col h-full ml-8 pl-8 border-l-2 gap-4" style={{display: limit ? 'none' : undefined}}>
                <span className="w-full flex justify-between items-center">Releases <MoreVert /></span>
                <span className="font-ls text-[#5E5C5C]">Version v0.3.3.3</span>
                <span className="w-full flex justify-between items-center font-bolder">About</span>
                <span className="font-ls text-[#5E5C5C] mb-10"><StarOutline/> 4.2 Rating</span>
                <CircularProgressWithLabel variant="determinate" value={completion}/>
                <p>Contributors</p>
                <div className="flex space-x-5">
                  <img className="h-16 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                  <img className="h-16 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                  <img className="h-16 w-16 rounded-full" src="https://flyingcdn-942385.b-cdn.net/wp-content/uploads/2018/12/Neal-Caffrey-Wardrobe-sunglasses-1a.jpg" alt="" />
                  
                </div>
                <span className="w-full flex justify-between items-center font-bolder">Published in</span>
                <a className="font-ls text-[#5E5C5C]">IEEE Journal 2023</a>
                <button className="bg-[#464646] text-white px-12 py-2 rounded-md">Request Access</button>
            </div>
        </div>
    )
}