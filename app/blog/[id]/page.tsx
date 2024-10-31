import {getPostInfoBySlug, getAllPostInfos} from '../../bloghome/post';
import {getPostHtml} from '../blog';

import Link from 'next/link'

import "yorha/dist/yorha.css"
import "../../styles/added-yorha.css"
import "../../styles/layout.css"

function PostButton({name, link}: {name: string, link: string}) {
  return (
      <Link href={`/blog/${link}`}>
          <div className='postbutton'>
              &nbsp;&#x25A0;&nbsp;{name}
          </div>
      </Link>
  );
}

export default function Post({ params }: { params: {id: string}}) {
    const id = params.id;

    const postInfos = getPostInfoBySlug(`${id}`, ["title", "date", "tags"]);
    const html = getPostHtml(id);

    const post_thumbnails = getAllPostInfos(['title', 'summary', 'thumbnail_src', 'url', 'date', 'tags']);
  return (
    <main className="">
        <div className='yorha-flex'>
            <h1>
                블로그
                <span className='subtitle'>
                -{postInfos.title}
                </span>
            </h1>
            <div className="post-flex">
              <blockquote>
                  {post_thumbnails.map((post_thumbnail) => (
                      <PostButton key={post_thumbnail._id} name={post_thumbnail.title} link={post_thumbnail.url}/>
                  ))}
              </blockquote>
              <div className="post-frame">
                <div className='post-title'>&nbsp;&#x25A0;&nbsp;{postInfos.title}</div>
                <div className='post'>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              </div>
            </div>
        </div>
    </main>
  );
}