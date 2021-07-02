import { Injectable } from '@angular/core';
import { VMRequestTurn } from './Models/RequestTurn';
import { HttpClient } from '@angular/common/http';
import { Turn } from './Models/Turn';

@Injectable({
  providedIn: 'root'
})
export class GetTurnServiceService {

  constructor(private http : HttpClient) { }

  items = Array<Turn>();
  getTurns(request : VMRequestTurn) {
    return this.http.post<Turn[]>('api/Turns', request);
  }
}
