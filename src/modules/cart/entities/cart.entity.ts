import {
  BeforeInsert,
  Column,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('carts')
export class CartEntity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'total_qty' })
  totalQty?: number;

  @Column({ name: 'total_amount' })
  totalAmount?: number;

  @Column({ name: 'total_net_amount' })
  totalNetAmount?: number;

  @Column({ name: 'total_discount' })
  totalDiscount?: number;

  @Column({ name: 'created_at' })
  createdAt?: Date;

  @Column({ name: 'updated_at' })
  updatedAt?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }

  @BeforeInsert()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}
