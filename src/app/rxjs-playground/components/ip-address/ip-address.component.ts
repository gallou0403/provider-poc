import { Component, OnInit } from '@angular/core';
import {IpAddressService} from "./ip-address.service";

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})
export class IpAddressComponent {
  ipAddress$ = this.service.ipAddress$
  constructor(private service: IpAddressService) { }
}
