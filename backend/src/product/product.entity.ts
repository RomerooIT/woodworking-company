import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum MaterialtTypeEnum {
  tree = 'tree',
  metal = 'metal'
}

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  material: string;

  @Column({nullable: false, default: MaterialtTypeEnum.tree})
  materialtType: string 

  @Column({nullable: false})
  price: number
}
