export default async function md2html(md: string) {
    var showdown = require("../showdown/bin/showdown");
    var converter = new showdown.Converter();
    return converter.makeHtml(md);
}