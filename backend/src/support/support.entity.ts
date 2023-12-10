import { UserEntity } from 'src/users/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Support'})
export class SupportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn()
  client: UserEntity

  @Column({nullable: false})
  question: string
}