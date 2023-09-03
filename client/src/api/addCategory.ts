import { solicitud, url_api } from "../utilities/variables";


export async function addCategory(newCategory: CategoriaNew){
    const request = solicitud('POST', JSON.stringify(newCategory));
    const mandar = await fetch(`${url_api}/categories`, request);
    const data = await mandar.json();
    if(!mandar.ok){
        throw data;
    }
    return data; 
}