import { Base } from "src/base/entity";
import { Column, Entity } from "typeorm";
@Entity({name: 'user'})
export class User extends Base{
    @Column({type: 'varchar', name: 'firstname', length: 50})
    firstname: string;
    @Column({type:'varchar', name: 'lastname', length: 50})
    lastname: string;
    @Column({type:'varchar', name: 'profile_img', length: 500})
    profileImg: string;
    @Column({type:'varchar', name:'email', length: 50})
    email: string;
}