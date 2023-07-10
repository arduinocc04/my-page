import Image from 'next/image'
import {PostProps, getAllPostInfos} from './post'

function PostThumbnail({post_info} : PostProps) {
    const {_id, title, summary, thumbnail_src, url, date} = post_info;
    return (
        <div className=''>
            <a className="" href={url}>
                <div className='relative demo-viewport'>
                    <div className='absolute inset-0 rounded-lg bg-gray-700 dark:bg-blue-300 -z-10'></div>
                    <div className='text-lg font-bold text-gray-200 dark:text-gray-700 p-2'>
                        <h1>{title}</h1>
                    </div>
                    <div className='overflow-hidden p-2 w-full aspect-video'>
                        <Image
                            className=''
                            src={thumbnail_src}
                            alt={title}
                            width="640"
                            height="480"
                        />
                    </div>
                    <div className='text-sm font-bold text-gray-200 dark:text-gray-700 px-2 pt-2'>
                        <span>{summary}</span>
                    </div>
                    <div className='text-sm font-bold text-gray-400 dark:text-gray-700 px-2 pb-2'>
                        <span>{date.toString()}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default function Home() {
    const post_thumbnails = getAllPostInfos(['title', 'summary', 'thumbnail_src', 'url', 'date']);
  return (
    <main className="antialiased flex flex-col min-h-screen dark:bg-gray-900">
        <div className="flex-1">
            <div className="relative dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 pt-16 lg:pt-28 pb-16 md:pb-24">
                        <h1 className="pb-6 text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>Blog</span>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {post_thumbnails.map((post_thumbnail) => (
                            <PostThumbnail key={post_thumbnail._id}post_info={post_thumbnail}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
