import {Injectable} from "@angular/core";
import {map, Observable, shareReplay} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpAddressService {
  ipAddress$ = this.getIPAddress().pipe(
    shareReplay({refCount: true, bufferSize: 1})
  );

  constructor(private http: HttpClient) {}

  private getIPAddress(): Observable<string|null> {
    // GET user IP from Cloudflare
    // https://www.cloudflare.com/cdn-cgi/trace
    return this.http.get('https://www.cloudflare.com/cdn-cgi/trace', {responseType: 'text'})
      .pipe(
        map((res) => {
            // split res on new lines, then find the element that begins with 'ip='
            const ipLine = res?.split('\n')?.find((line) => line.startsWith('ip='));
            // split the ipLine on the equals sign, then return the second element
            return ipLine?.split('=')[1] || null;
          }
        )
      );
  }
}
