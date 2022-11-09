import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepo: Repository<CartEntity>,
  ) {}

  async getById(id: string): Promise<CartEntity> {
    const cart = await this.cartRepo.findOne({
      where: {
        id,
      },
    });

    console.log(cart);

    return cart;
  }

  create(createCartDto: CreateCartDto) {
    const entity = plainToInstance(CartEntity, createCartDto);

    console.log(entity);
    this.cartRepo.save(entity);
    return 'This action adds a new cart';
  }
}
