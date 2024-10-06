import Image from 'next/image'
import Link from 'next/link'
import {PostProps, getAllPostInfos} from './post'

import "yorha/dist/yorha.css"
import "../styles/added-yorha.css"
import "../styles/layout.css"

// import { OptionButton, PostButton } from './client';

export function OptionButton({name, callback}: {name: string, callback: Function}) {
    return (
        <a href='javascript: void(0);'>
            <div className="optionbutton">
                &nbsp;&#x25A0;&nbsp;{name}
            </div>
        </a>
    );
}

export function PostButton({name, link}: {name: string, link: string}) {
    return (
        <Link href={`/blog/${link}`}>
            <div className='postbutton'>
                &nbsp;&#x25A0;&nbsp;{name}
            </div>
        </Link>
    );
}

export default function Home() {
    const post_thumbnails = getAllPostInfos(['title', 'summary', 'thumbnail_src', 'url', 'date', 'tags']);
  return (
    <main style={{height: "100%"}}>
        <div className='yorha-flex'>
            <h1>블로그</h1>
            <div className='bloghome-flex'>
                <blockquote>
                    <OptionButton
                        name='tag'
                        callback={() => {}}
                    />
                    <OptionButton
                        name='date'
                        callback={() => {}}
                    />
                </blockquote>

                <blockquote>
                    {post_thumbnails.map((post_thumbnail) => (
                        <PostButton key={post_thumbnail._id} name={post_thumbnail.title} link={post_thumbnail.url}/>
                    ))}
                </blockquote>
            </div>
        </div>
    </main>
  );
}
