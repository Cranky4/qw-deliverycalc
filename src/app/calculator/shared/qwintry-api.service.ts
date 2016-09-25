import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class QwintryApiService {

    private apiUrl = 'https://qwintry.com/ru/api-rest/v2/calculator';
    private key = '9e4fddbb3adc4c67f74bb2b7757cebf9';

    constructor(private http: Http) {

    }

    public calculate(weight: number, country: string, cost: number, insurance: boolean, shop_help: boolean) {

        let body = {
            key: this.key,
            weight: weight,
            weight_type: 'kg',
            insurance_type: insurance ? 'yes' : 'no',
            declaration_total: cost,
            country: country,
            shophelp: shop_help ? 1 : 0,
            shophelp_safe_addr: true
        };

        return this.post(body);
    }


    private post(data): Observable<Response> {
        let body = [];
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                let value = data[key];
                body.push(`${key}=${value}`);
            }
        }

        return this.http.post(this.apiUrl, body.join('&'), {
            headers: this.getHeaders(),
        });
    }

    private getHeaders(): Headers {
        return new Headers({'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    }
}