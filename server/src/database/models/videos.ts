import {Entity, Column, PrimaryColumn, ManyToOne} from 'typeorm';
import { Categories } from './categories';


@Entity()
export class Videos{
    @PrimaryColumn()
    id_video:string;

    @Column()
    titulo:string;

    @Column()
    link_video:string;

    @Column()
    link_imagen:string;

    @Column()
    description:string;

    @ManyToOne(()=> Categories, (categoria)=>categoria.id_category)
    categoria:Categories;

}