import {Injectable} from '@angular/core';
import {BorderDataServiceInterface} from '../interfaces/border-data-service.interface';

@Injectable()
export class BorderDataService implements BorderDataServiceInterface {
  getBorderColor() {
    return 'red';
  }
}
