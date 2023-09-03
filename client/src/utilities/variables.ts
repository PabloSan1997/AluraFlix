
const url_api = import.meta.env.VITE_URLBASE as string;
const cabeza = import.meta.env.VITE_CABEZA as string;

export const solicitud =(method:'POST'|'PATCH', body:string) => ({
    method,
    headers:{
        "Content-Type":'application/json',
        cabeza
    },
    body
});

const solicitudGet = {
    method:'GET',
    headers:{
        cabeza
    }
}
const soliditudDelete = {
    method:'DELETE',
    headers:{
        cabeza
    }
}
export {url_api, cabeza, solicitudGet, soliditudDelete}