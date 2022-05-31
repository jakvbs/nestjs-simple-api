import {
  Controller,
  Get,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StarWars } from './starwars.entity';
import { StarwarsService } from './starwars.service';
import { GetStarwarsFilterDto } from './dto/get-starwars-filter.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('starwars')
export class StarwarsController {
  constructor(private readonly starwarsService: StarwarsService) {}

  @Get('getall')
  getAllCharacters(): Promise<StarWars[]> {
    return this.starwarsService.getAllCharacters();
  }

  @UseGuards(JwtAuthGuard)
  @Get('getfiltered')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )
  getFilteredCharacters(
    @Query() filterDto: GetStarwarsFilterDto,
  ): Promise<StarWars[]> {
    console.log({ filterDto });
    return this.starwarsService.getFilteredCharacters(filterDto);
  }
}
