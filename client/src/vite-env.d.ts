/// <reference types="vite/client" />


interface Children {
    children: JSX.Element | JSX.Element[]
}

type CategoriesRes = {
    id_category: string,
    description: string,
    color: string,
    name: string
}
type CategoriaNew = {
    description: string,
    color: string,
    name: string
}
type CategoriesRelationRes = {
    id_category: string,
    description: string,
    color: string,
    name: string,
    videos: VideosRes[]
}
type VideosRelation = {
    id_video: string,
    titulo: string,
    link_video: string,
    link_imagen: string,
    description: string,
    categoria: CategoriesRes
}

type VideosRes = {
    id_video: string,
    titulo: string,
    link_video: string,
    link_imagen: string,
    description: string,
}

type VideosNew = {
    id_category: string,
    titulo: string,
    link_video: string,
    link_imagen: string,
    description: string,
}

//Context 
type Context = {
    actual: () => void,
    categoriaVideos: CategoriesRelationRes[],
    categorias: CategoriesRes[]
}

