import { CacheModule, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as redisStore from 'cache-manager-redis-store'
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contador } from './contador/contador.entity';
import { ContadorModule } from './contador/contador.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      renderPath: '/render/:id',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'contador',
      entities: [Contador],
      synchronize: true,
    }),
    ContadorModule,
    CacheModule.register({
      isGlobal: true,
      // @ts-ignore
      store: async () =>
        await redisStore.redisStore({
          // Store-specific configuration:
          socket: {
            host: 'localhost',
            port: 6379,
          },
          ttl: 60,
        }),
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
