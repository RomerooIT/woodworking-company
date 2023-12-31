import { RequestEntity } from 'src/request/request.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Worker'})
export class WorkerEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({nullable: false})
  name: string

  @Column({nullable: false})
  surname: string

  @Column({nullable: false})
  age: number

  @Column({nullable: false})
  salary: number

  @Column({nullable: false})
  category: string

  @Column({nullable: true})
  currentstate: string

  @OneToMany(() => RequestEntity, (entity) => entity.worker)
  @JoinColumn()
  request?: RequestEntity;
}