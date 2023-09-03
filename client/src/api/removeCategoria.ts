import { soliditudDelete, url_api } from "../utilities/variables";

export async function removeCategory(id_category:string){
    const data = await fetch(`${url_api}/categories/${id_category}`, soliditudDelete);
    const message = await data.json();
    if(!data.ok){
        throw JSON.stringify(message);
    }
    return message;
}