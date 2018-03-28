import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class DataService {


  public defaultHeaders: Headers = new Headers();

  constructor(private http: Http) {
 
  }

  getAll(): Observable<any> {
    return this.http.get("https://accademiadellamoda.herokuapp.com/courses")
      .map((res: Response) => res.json())
      .map(d => d = d.data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllstudyTitle(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/studytitle", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllAccountManager(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/accountmanager", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllBusinessUnit(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/businessunit", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  
  getAllSkill(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/skill", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
  getAllJobTitle(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/jobtitle", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllRequest(): Observable<any> {
    let headers = new Headers(this.defaultHeaders.toJSON());
    return this.http.get("http://localhost:8080/request", { headers: headers })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }






}
