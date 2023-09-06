import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
// import { CommonModule } from './common/common.module';

@Module({
  imports: [
    // Service Module
    TodosModule,

    // Middleware Module
    // CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
