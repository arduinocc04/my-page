import fs from 'fs';
import path from 'path';
import {Converter} from '../../showdown/dist/showdown';
// import { parse, HtmlGenerator } from 'latex.js';
// const {createHTMLWindow} = require('svgdom')

export function getPostHtml(id:string) {
    var is_md = true;
    var fullPath = path.join("my-blog", `${id}.md`);
    if(!fs.existsSync(fullPath)) {
        fullPath = path.join("my-blog", `${id}.tex`);
        is_md = false;
    }
    var fileContent = fs.readFileSync(fullPath, 'utf8');
    var html;
    if(is_md) {
        const converter = new Converter({metadata: true});
        html = converter.makeHtml(fileContent);
    }
    else {
        // global.window = createHTMLWindow()
        // global.document = window.document
        // fileContent = fileContent.replace(/---\n.*---/m, "");
        // let generator = new HtmlGenerator({hyphenate: false});
        // html = parse(fileContent, {generator: generator}).htmlDocument().documentElement.outerHTML;
    }
    return html;
}
