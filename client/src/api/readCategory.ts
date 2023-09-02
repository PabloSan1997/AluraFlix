import { solicitudGet, url_api } from "../utilities/variables";

export async function readCategoryRelation():Promise<CategoriesRelationRes[]>{
    const data = await fetch(`${url_api}/categories/relation`, solicitudGet);
    const videos = await data.json();
    return videos;
}

export async function readCategory():Promise<CategoriesRes[]> {
    const data = await fetch(`${url_api}/categories`, solicitudGet);
    const category = await data.json();
    return category;
}