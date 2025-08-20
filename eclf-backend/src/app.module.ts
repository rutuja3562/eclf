/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Menu } from './menu/entity/menu.entity';

@Module({
  imports: [
    MenuModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'eclfDB',
      entities: [Menu],
      synchronize: true, // dev only, do not use in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('✅ Database connected successfully!');
    } else {
      console.error('❌ Database connection failed!');
    }
  }
}
