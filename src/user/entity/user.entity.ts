import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'
@Entity()
export class User {
    @PrimaryGeneratedColumn("increment")   //主键自增 装饰器
    id:number
    @Column({type:"varchar",length:255})
    username:string
    @Column({type:"varchar",length:255})
    password:string
    @Column({type:"varchar",length:255 ,nullable: true })
    ip:string
    @Column({type:"varchar",length:255,nullable: true})
    headerimg:string
    @CreateDateColumn({type:"timestamp"})
    stime:Date
    @Column({type:"varchar",length:255})
    nick:string
}
