import {
  CACHE_MANAGER,
  Inject,
  Injectable,
  OnModuleInit,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cache } from 'cache-manager';
import { Interval } from '@nestjs/schedule';

@Injectable()
export class WeatherService implements OnModuleInit {
  private API_PATH = `https://api.openweathermap.org/data/2.5/weather?q=Gdansk&APPID=${process.env.WEATHER_API_KEY}`;

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}

  async onModuleInit() {
    const weather = await this.cacheManager.get('weather');
    if (!weather) {
      this.cacheWeather();
    }
  }

  async getWeather(): Promise<any> {
    return this.cacheManager.get('weather');
  }

  @Interval(1000 * 60 * 60)
  private async cacheWeatherInterval() {
    this.cacheWeather();
  }

  private cacheWeather() {
    this.httpService.get(this.API_PATH).subscribe(async (res) => {
      await this.cacheManager.set('weather', res.data, {
        ttl: 90 * 60,
      });
    });
  }
}
