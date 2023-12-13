import { RequestEntity } from 'src/request/request.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Basket'})
export class BasketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @OneToMany(() => RequestEntity, (entity) => entity.basket)
  // @JoinColumn()
  // request: RequestEntity

}
