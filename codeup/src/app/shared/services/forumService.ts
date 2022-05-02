import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "../entities/User";
import {Forum} from "../entities/Forum";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpclient: HttpClient) {
  }


  public getForums(limit: number, offset: number): Observable<Array<Forum>> {
    return this.httpclient.get<Array<Forum>>(
      'http://localhost:8080/forums/all/limit/' + limit + '/offset/' + offset
    );
  }

  public loginTest(): Observable<string> {
    const params = {
      userName: "test",
      password: "testaaaa"
    }
    return this.httpclient.post<string>(
      'http://localhost:8080/login', params)
  }
}
