import fs from 'fs'
import {join} from 'path';
import matter from 'gray-matter';

export interface PostInfo {
    _id : string
    title : string
    summary : string
    thumbnail_src : string
    url : string
    date : Date
}

export type PostProps = {
    post_info : PostInfo
}

export function getPostSlugs() {
    const posts_dir = join(process.cwd(), "my-blog");
    var res: string[]= [];
    fs.readdirSync(posts_dir).forEach((slug) => {
        var tmp = slug.match(/\.md$/);
        if(tmp != undefined && tmp?.length > 0) {
            res.push(slug);
        }
    })
    return res;
}

export function getPostInfoBySlug(slug: string, fields: string[] = []) {
    const posts_dir = join(process.cwd(), "my-blog");
    const real_slug = slug.replace(/\.md$/, '');
    const full_path = join(posts_dir, `${real_slug}.md`);
    const file_content = fs.readFileSync(full_path, 'utf8');
    const { data, content } = matter(file_content);
    
    const items: PostInfo = {
        _id : "-1",
        title : "",
        summary : "",
        thumbnail_src : "",
        url : "",
        date : new Date(),
    };

    fields.forEach((field) => {
        if(field === 'url') {
            items[field] = `/blog/${real_slug}`;
        }
        else if(typeof data[field] !== 'undefined') {
            items[field as keyof PostInfo] = data[field];
        }
    });
    return items;
}

export function getAllPostInfos(fields: string[] = []) {
    const slugs = getPostSlugs();
    const post_infos = slugs
                       .map((slug) => getPostInfoBySlug(slug, fields))
                       .sort((post_info1, post_info2) => (post_info1.date > post_info2.date ? -1 : 1));
    return post_infos;
}