import fs from 'fs';
import path from 'path';
import showdown from '../../showdown/bin/showdown';

export async function getPostHtml(id:string) {
    const fullPath = path.join("my-blog", `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    var showdown  = require('showdown'),
        converter = new showdown.Converter(),
        html      = converter.makeHtml(fileContent);

    return html;
}
