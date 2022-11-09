import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.cartService.getById(id);
  }

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }
}
