import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig.example';
import { StarwarsModule } from './starwars/starwars.module';
import { UserModule } from './user/user.module';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    UserModule,
    WeatherModule,
    StarwarsModule,
    AuthModule,
  ],
})
export class AppModule {}
