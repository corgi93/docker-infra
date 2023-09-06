import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  public getTodos(): Array<string> {
    // db에서 todo 가져오기
    return ['a', 'b'];
  }

  public addTodo(): string {
    return '';
  }
}
