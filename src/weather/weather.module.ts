import { CacheModule, Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
