import { BasketEntity } from 'src/basket/basket.entity';
import { ProductEntity } from 'src/product/product.entity';
import { UserEntity } from 'src/users/entity/user.entity';
import { WorkerEntity } from 'src/worker/worker.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Request'})
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn()
  client: UserEntity;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn()
  product: ProductEntity

  @ManyToOne(() => BasketEntity, (entity) => entity.request)
  @JoinColumn()
  basket: BasketEntity

  @Column({nullable: true})
  customerAddress: string

  @Column({nullable: true, default: 1})
  amount: number

  @Column({nullable: true})
  requirements: string

  @OneToOne(() => WorkerEntity, {nullable: true})
  @JoinColumn()
  worker: WorkerEntity
}