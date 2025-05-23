import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// const pgConfig = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgress',
//   password: 'root',
//   database: 'root',
//   entities: [],
//   synchronize: false,
// };

// const sqliteConfig: TypeOrmModuleOptions = {
//   type: 'sqlite',
//   database: 'db.sqlite',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true, 
//   logging: true,
// };

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const isDev = config.get<string>('NODE_ENV') === 'development';
        
        return isDev
          ? {
              type: 'sqlite',
              database: config.get<string>('DB_SQLITE_PATH'),
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              synchronize: true,
              logging: true,
            }
          : {
              type: 'postgres',
              host: config.get<string>('DB_HOST'),
              port: parseInt(config.get<string>('DB_PORT', '5432')),
              username: config.get<string>('DB_USERNAME'),
              password: config.get<string>('DB_PASSWORD'),
              database: config.get<string>('DB_NAME'),
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              synchronize: true, // ⚠️ solo en dev o staging
              logging: true,
              ssl: process.env.POSTGRES_SSL === 'true',
              extra: {
                ssl:
                  process.env.POSTGRES_SSL === 'true'
                    ? {
                        rejectUnauthorized: false,
                      }
                    : null
                    }
            };
      },
    }),
    UsersModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
