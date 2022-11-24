import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/modules/news.module';
import { CalculatorModule } from './calculator/modules/calculator.module';
import { CommentModule } from './comment/modules/comment.module';

@Module({
  imports: [
    NewsModule,
    CalculatorModule,
    CommentModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
