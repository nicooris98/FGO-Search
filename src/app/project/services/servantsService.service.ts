import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ServantModel } from '../models/servant.model';

@Injectable({
  providedIn: 'root',
})
export class ServantsService {
    apiUri: string = "https://api.atlasacademy.io/nice/NA/servant/"

    constructor(
        private http: HttpClient
    )  {
    }

    getServantsByName(name: string): Observable<ServantModel[]> {
        return this.http.get<ServantModel[]>(`${this.apiUri}search/?name=${name}`)
    }
}