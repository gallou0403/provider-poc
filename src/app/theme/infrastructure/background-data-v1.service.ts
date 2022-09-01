import {Injectable} from '@angular/core';
import {BackgroundDataServiceInterface} from '../interfaces/background-data-service.interface';

@Injectable()
export class BackgroundDataService implements BackgroundDataServiceInterface {
  getBackgroundColor() {
    return 'green';
  }
}
