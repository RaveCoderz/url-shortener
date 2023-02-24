import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/web/src/environments/environment';
import { Observable } from 'rxjs';

import { CreateLinkRequest, Link } from '../interfaces/links.interfaces';
import { CreateUserRequest, User } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLink(linkCode: string): Observable<Link> {
    return this.http.get<Link>(`${this.endpoint}/links/${linkCode}`);
  }

  createLink(link: CreateLinkRequest): Observable<Link> {
    return this.http.post<Link>(`${this.endpoint}/links`, link);
  }

  updateLink(link: Link) {
    return this.http.patch(`${this.endpoint}/links/${link.id}`, link);
  }

  removeLink(link: Link) {
    return this.http.delete(`${this.endpoint}/links/${link.id}`);
  }

  getUser(id: string) {
    return this.http.get(`${this.endpoint}/users/${id}`);
  }

  createUser(user: CreateUserRequest) {
    return this.http.post(`${this.endpoint}/users`, user);
  }

  updateUser(user: User) {
    return this.http.patch(`${this.endpoint}/users/${user.id}`, user);
  }

  removeUser(user: User) {
    return this.http.delete(`${this.endpoint}/users/${user.id}`);
  }
}
