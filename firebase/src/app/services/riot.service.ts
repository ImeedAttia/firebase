import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiotService {
  Api_KEY = 'RGAPI-75dfe71b-15d1-488f-a998-a9b2828e9f9a';
  Api_URL_Name = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  Api_URL_Rank = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/';
  constructor(private http: HttpClient) { }

  get(username: any): Observable<any> {
    return this.http.get(this.Api_URL_Name+username+`?api_key=`+this.Api_KEY);
  }


}
