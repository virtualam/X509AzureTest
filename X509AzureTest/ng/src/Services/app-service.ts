import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceBase } from './service-base';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
declare var SERVICE_BASE_URI: any;

@Injectable()
export class AppService extends ServiceBase {
    private serviceBaseUri: string;
    constructor(private http: HttpClient) {
        super();
        this.serviceBaseUri = SERVICE_BASE_URI;
    }

    getHttpOptions(): { headers?: HttpHeaders } {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return httpOptions;
    }

    getValues(attemptNumber : number): Observable<any> {
        return this.http.get<any>(`${this.serviceBaseUri}/api/values/${attemptNumber}`, this.getHttpOptions()).pipe(
            catchError(this.handleError<any>('getValues'))
        );
    }
}