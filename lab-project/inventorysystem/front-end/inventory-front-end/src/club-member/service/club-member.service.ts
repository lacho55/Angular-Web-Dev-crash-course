import { Injectable } from '@angular/core';
import { ClubMember } from '../model/clubMember';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


const baseUrl = `${environment.apiUrl}/club-members`;

@Injectable({ providedIn: 'root' })
export class ClubMemberService {

  constructor(private http: HttpClient) { }

  //view, list
  public getAll(): Observable<ClubMember[]> {
    return this.http.get<ClubMember[]>(baseUrl);
  }

  //delete
  public delete(memberId: string): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/delete/${memberId}`);
  }

  //create
  public create(member: Omit<ClubMember, 'id'>): Observable<ClubMember> {
    return this.http.post<ClubMember>(baseUrl, member);
  }


  /*getById(id: string) {
    return this.http.get<User>(`${baseUrl}/${id}`);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  */
}
