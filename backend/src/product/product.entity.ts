import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum MaterialTypeEnum {
  tree = 'tree',
  metal = 'metal'
}

@Entity({name: 'Product'})
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({nullable: false})
  material: string;

  @Column({nullable: false, default: MaterialTypeEnum.tree, name: 'materialtype'})
  materialtype: string 

  @Column({nullable: false})
  price: number
}
