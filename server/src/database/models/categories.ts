import {Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import { Videos } from './videos';

@Entity()
export class Categories{
    @PrimaryColumn()
    id_category:string;

    @Column()
    description:string;

    @Column()
    color:string;

    @Column()
    name:string;

    @OneToMany(()=>Videos, (videos)=>videos.categoria)
    videos:Videos[];

}