import { IsOptional } from 'class-validator';

export class GetStarwarsFilterDto {
  @IsOptional()
  name: string;

  @IsOptional()
  height: string;

  @IsOptional()
  mass: string;

  @IsOptional()
  hair_color: string;

  @IsOptional()
  skin_color: string;

  @IsOptional()
  eye_color: string;

  @IsOptional()
  birth_year: string;

  @IsOptional()
  gender: string;
}
