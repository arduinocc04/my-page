import fs from 'fs';
import path from 'path';
import {Converter} from '../../showdown/dist/showdown';

export function getPostHtml(id:string) {
    const fullPath = path.join("my-blog", `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    const converter = new Converter({metadata: true});
    var html = converter.makeHtml(fileContent);
    return html;
}
