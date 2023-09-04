import { solicitud, url_api } from "../utilities/variables";


export async function  addVideoApi(newVideo:VideosNew) {
    const soli = solicitud('POST', JSON.stringify(newVideo));
    const mandar = await fetch(`${url_api}/videos`, soli);
    if(!mandar.ok){
        throw 'Llene todos los campos';
    }
    const data = await mandar.json();
    return data;
}