import { BasketEntity } from 'src/basket/basket.entity';
import { SupportEntity } from 'src/support/support.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  name: string;

  @Column({nullable: false})
  role: string

  @OneToMany(() => SupportEntity,  (entity) => entity.client)
  supportMessage: SupportEntity

  @OneToOne(() => BasketEntity)
  basket: BasketEntity
}
