import {getPostInfoBySlug} from '../../bloghome/post';
import {getPostHtml} from '../blog';

export default function Post({ params }: { params: {id: string}}) {
    const id = params.id;

    const postInfos = getPostInfoBySlug(`${id}`, ["title", "date", "tags"]);
    const html = getPostHtml(id);
  return (
    <main className="antialiased flex flex-col min-h-screen dark:bg-gray-900">
        <div className="flex-1">
            <div className="relative dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 pt-16 lg:pt-28 pb-16 md:pb-24">
                        <h1 className="pb-6 text-5xl md:text-6xl lg:text-8xl font-headline font-black tracking-snug text-center leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-gray-800 dark:text-gray-100">
                            <span>{postInfos.title}</span>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl">
                    <div className="px-6 py-5 flex items-center space-y-0">
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}