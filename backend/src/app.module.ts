import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
// import { CommonModule } from './common/common.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [
    // Service Module
    TodosModule,
    PrismaModule,
    ArticlesModule,

    // Middleware Module
    // CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
