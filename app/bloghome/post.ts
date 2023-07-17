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
    tags: string[]
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
        title : "No Title",
        summary : "",
        thumbnail_src : "https://images.unsplash.com/photo-1689351060804-fca36e095da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        url : "",
        date : new Date(),
        tags : []
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