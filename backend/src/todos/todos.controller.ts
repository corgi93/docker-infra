import { Controller, Get, Post } from '@nestjs/common';

@Controller('todo')
export class TodosController {
  @Get()
  getTodos(): string {
    return 'todos..';
  }

  @Post()
  addTodo() {}
}
