import Image from 'next/image'
import {PostProps, getAllPostInfos} from './post'
import Link from 'next/link';

function PostThumbnail({post_info} : PostProps) {
    const {_id, title, summary, thumbnail_src, url, date, tags} = post_info;
    return (
        <div className=''>
            <Link href={`/blog/${url}`}>
                <div className='relative demo-viewport'>
                    {/* <div className='absolute inset-0 rounded-lg bg-gray-700 dark:bg-blue-300 -z-10'></div> */}
                    <div className='text-xl font-bold text-gray-700 dark:text-gray-300 px-2 pt-2 pb-1'>
                        <h1>{title}</h1>
                    </div>
                    <div className='overflow-hidden px-2 w-full aspect-video rounded-xl'>
                        <Image
                            className=''
                            src={thumbnail_src}
                            alt={title}
                            width="640"
                            height="480"
                        />
                    </div>
                    <div className='text-sm font-bold text-gray-700 dark:text-gray-300 px-2 pt-1'>
                        <span>{summary}</span>
                    </div>
                    <div className="flex px-2 gap-2">
                        {tags.map((tag, idx) => (
                            <div key={idx} className='text-sm float-left rounded-lg dark:bg-gray-300 dark:text-black px-1'>
                                <span className="">#{tag}</span>
                            </div>
                        ))}
                    </div>
                    <div className='text-sm font-bold text-gray-400 dark:text-gray-700 px-2 pb-2'>
                        <span>{date.toLocaleDateString()}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function Home() {
    const post_thumbnails = getAllPostInfos(['title', 'summary', 'thumbnail_src', 'url', 'date', 'tags']);
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
                    {/*
                    <div className="px-6 py-5 flex items-center space-y-0">
                        <div className="flex items-center justify-center space-x-6">
                            <button>Select Tags</button>
                        </div>
                    </div>
                    */
                    }
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {post_thumbnails.map((post_thumbnail) => (
                            <PostThumbnail key={post_thumbnail._id} post_info={post_thumbnail}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
