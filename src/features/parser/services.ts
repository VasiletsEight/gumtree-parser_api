import getHtmCollectionByClassName from "../../utils/dom/dom";
import axiosGumtree from "../../utils/requests/gumtree.req";
import {RequestParserBody, UserData} from "./type";
import createExel from "../../utils/createExel/createExel";

const postParserService = async ({path}: RequestParserBody): Promise<Buffer> => {
    const getLinksCollection = async (): Promise<HTMLCollectionOf<Element>> => {
        const html = await axiosGumtree.getBusinessSend(path);

        return getHtmCollectionByClassName(html, "listing-link");
    };

    const getAdvertisementCollection = async (path: string): Promise<HTMLCollectionOf<Element>[] | null> => {
        const html = await axiosGumtree.getProofingSend(path);
        const includePhoneIcon: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "icon icon--phone");

        if (includePhoneIcon.length === 0) return null;

        const phoneCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "seller-phone-number-title");
        const nameCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "truncate-line seller-rating-block-name");

        return [nameCollection, phoneCollection];
    }

    const getUser = ([nameCollection, phoneCollection]: HTMLCollectionOf<Element>[]): UserData => {
        const phone: string = phoneCollection[0]?.innerHTML || "N.A";
        const name: string = nameCollection[0]?.innerHTML || "N.A";

        return {name, phone};
    }

    const linkCollection = await getLinksCollection();
    const linkToHref: string[] = [...Array(linkCollection.length).keys()].map((item) => linkCollection[item].getAttribute("href")!);
    const allAdvertisement: Array<HTMLCollectionOf<Element>[] | null> = await Promise.all(linkToHref.map(getAdvertisementCollection));
    const filterAdvertisement: UserData[] = allAdvertisement.flatMap((item: HTMLCollectionOf<Element>[] | null) => item ? getUser(item) : []);

    return await createExel(filterAdvertisement);
}

export default {postParserService}