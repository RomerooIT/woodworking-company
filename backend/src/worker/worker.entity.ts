import { RequestEntity } from 'src/request/request.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkerEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  currentState: string

  @OneToOne(() => RequestEntity, { nullable: true })
  @JoinColumn()
  worker: RequestEntity;
}