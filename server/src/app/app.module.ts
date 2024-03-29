/**
 * https://github.com/nestjs/config/issues/12 for config globnal issuehttps://github.com/nestjs/config/issues/12
 */

import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from 'src/config/config.module';
import { MongooseModule } from '../mongoose/mongoose.module';
import { GraphQLModule } from 'src/graphql/graphql.module';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    GraphQLModule,
    MongooseModule,
    UsersModule,
    AuthModule,
    ConfigModule,
  ],
  providers: [AppService],
})
export class AppModule {}
