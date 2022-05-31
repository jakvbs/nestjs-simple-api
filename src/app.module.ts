import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig.example';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarwarsModule } from './starwars/starwars.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    ScheduleModule.forRoot(),
    UserModule,
    WeatherModule,
    StarwarsModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
