import getHtmCollectionByClassName from "../../utils/dom/dom";
import axiosGumtree from "../../utils/requests/gumtree.req";
import {ReplayParser, RequestParserBody} from "./type";

const postParserService = async ({path}: RequestParserBody): Promise<ReplayParser[]> => {
    const getArticlesHref = async (): Promise<string[]> => {
        const html = await axiosGumtree.getCategorySend(path);
        const linkCollection = getHtmCollectionByClassName(html || "", "listing-link");

        return [...Array(linkCollection.length).keys()].map((item) => linkCollection[item].getAttribute("href")!);
    }

    const getAdvertisementCollection = async (path: string): Promise<HTMLCollectionOf<Element>[] | null> => {
        const html = await axiosGumtree.getProofingSend(path) || "";
        const includePhoneIcon: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "icon icon--phone");

        if (includePhoneIcon.length === 0) return null;

        const phoneCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "seller-phone-number-title");
        const nameCollection: HTMLCollectionOf<Element> = getHtmCollectionByClassName(html, "truncate-line seller-rating-block-name");

        return [nameCollection, phoneCollection];
    }

    const getUser = ([nameCollection, phoneCollection]: HTMLCollectionOf<Element>[]): ReplayParser => {
        const phone: string = phoneCollection[0]?.innerHTML || "N.A";
        const name: string = nameCollection[0]?.innerHTML || "N.A";

        return {name, phone};
    }

    const hrefs = await getArticlesHref();
    const allAdvertisement: (HTMLCollectionOf<Element>[] | null)[] = await Promise.all(hrefs.map(getAdvertisementCollection));

    return allAdvertisement.flatMap((item: HTMLCollectionOf<Element>[] | null) => item ? getUser(item) : []);
}

export default {postParserService}
