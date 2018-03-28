import { Injectable } from '@angular/core';
import { Request } from '../shared/classes/request'
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()

export class FormRequestService {





    constructor(private http: Http) { }







    save(request: Request): Observable<any> {

        return this.http.post("http://localhost:8080/request", JSON.stringify(request), httpOptions);

    }



}

const httpOptions = {

    headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' })

};