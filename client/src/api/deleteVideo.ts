import { soliditudDelete, url_api } from "../utilities/variables";


export async function deleteVido(id_video:string):Promise<{message:string}> {
    const request = soliditudDelete;
    const data = await fetch(`${url_api}/videos/${id_video}`, request);
    
    const message = await data.json();
    if(!data.ok){
        throw {message:`Error al borrar video`};
    }
    return message;
}