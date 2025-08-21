import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Menu } from './menu/entity/menu.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //ensures .env is loaded everywhere
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASS'),
          database: config.get<string>('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    if (this.dataSource.isInitialized) {
      console.log('✅ Database connected successfully!');
    } else {
      console.error('❌ Database connection failed!');
    }
  }
}
