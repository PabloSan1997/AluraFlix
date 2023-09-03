import { solicitud, url_api } from "../utilities/variables";

export async function editCategory(category:CategoriesRes){
    const request = solicitud('PATCH', JSON.stringify(category));
    const mandar = await fetch(`${url_api}/categories`, request);
    const data = await mandar.json();
    return data;
}