import {JSDOM} from "jsdom";

const getHtmCollectionByClassName = (html: string, className: string) => {
    const dom = new JSDOM(html);

    return dom.window.document.getElementsByClassName(className);
};

export default getHtmCollectionByClassName