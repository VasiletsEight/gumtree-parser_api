import getHtmCollectionByClassName from "../../utils/dom/dom";
import axiosGumtree from "../../utils/requests/gumtree.req";
import {RequestParserBody} from "./type";
import createExel from "../../utils/createExel/createExel";

const postParserService = async ({path}: RequestParserBody): Promise<Buffer> => {
    const getLinksCollection: HTMLCollectionOf<Element> = await (async (path: string) => {
        const html = await axiosGumtree.getBusinessSend(path);

        return getHtmCollectionByClassName(html, "listing-link");
    })(path);

    const getAdvertisement = async (path: string): Promise<[string, string] | null> => {
        const html = await axiosGumtree.getProofingSend(path);
        const includePhoneIcon: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "icon icon--phone");

        if (includePhoneIcon.length === 0) return null;

        const phoneCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "seller-phone-number-title");
        const nameCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "truncate-line seller-rating-block-name");
        const phone: string = phoneCollection[0].innerHTML || "phone not found";
        const name: string = nameCollection[0]?.innerHTML || "name not found";

        return [name, phone];
    }

    const linkToHref:string[] = [...Array(getLinksCollection.length).keys()].map((item) => getLinksCollection[item].getAttribute("href")!);
    const allAdvertisement: Array<[string, string] | null> = await Promise.all(linkToHref.map(getAdvertisement));
    const filterAdvertisement: Array<[string, string]> = allAdvertisement.filter((item: [string, string] | null): item is [string, string] => item !== null);

    return await createExel(filterAdvertisement);
}

export default {postParserService}