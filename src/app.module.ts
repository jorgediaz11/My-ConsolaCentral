import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users/users.module';

const pgConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgress',
  password: 'root',
  database: 'root',
  entities: [],
  synchronize: false
}

const sqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
}

@Module({
  imports: [
    TypeOrmModule.forRoot(sqliteConfig),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource){}
}
