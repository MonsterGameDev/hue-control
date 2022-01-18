import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GroupActionUpdateRequest,
  GroupActionUpdateResponse,
} from '../+state/groups/groups.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  ipAddress = '192.168.0.116';
  identity = 'roZeTZPeBJpKOZWcmfX7ltbK81P-kt4pUK3xboED';

  baseUrl = `http://${this.ipAddress}/api/${this.identity}`;

  constructor(private httpClient: HttpClient) {}

  getEverything(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }

  // GROUPS
  getAllGroups(): Observable<any> {
    const url = `${this.baseUrl}/groups`;
    return this.httpClient.get<any>(url);
  }

  setGroupAction(
    id: string,
    body: GroupActionUpdateRequest
  ): Observable<GroupActionUpdateResponse> {
    const url = `${this.baseUrl}/groups/${id}/action`;

    return this.httpClient.put<any>(url, body);
  }


  // Scenes
  getAllScenes(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/scenes`);
  }
}
