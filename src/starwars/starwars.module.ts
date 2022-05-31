import { Module } from '@nestjs/common';
import { StarwarsController } from './starwars.controller';
import { StarwarsService } from './starwars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarWars } from './starwars.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StarWars])],
  controllers: [StarwarsController],
  providers: [StarwarsService],
})
export class StarwarsModule {}
