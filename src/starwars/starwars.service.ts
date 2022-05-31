import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StarWars } from './starwars.entity';
import { GetStarwarsFilterDto } from './dto/get-starwars-filter.dto';

@Injectable()
export class StarwarsService {
  constructor(
    @InjectRepository(StarWars)
    private readonly starwarsRepository: Repository<StarWars>,
  ) {}

  getAllCharacters(): Promise<StarWars[]> {
    return this.starwarsRepository.find();
  }

  getFilteredCharacters(filterDto: GetStarwarsFilterDto): Promise<StarWars[]> {
    const query = this.starwarsRepository.createQueryBuilder('starwars');

    Object.keys(filterDto).forEach((param) => {
      if (param === 'name') {
        query.andWhere('starwars.name LIKE :name', {
          name: `%${filterDto[param]}%`,
        });
      } else {
        query.andWhere(`starwars.${param} = :${param}`, {
          [param]: filterDto[param],
        });
      }
    });

    return query.getMany();
  }
}
