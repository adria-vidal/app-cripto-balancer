import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://criptobalance.helioho.st/api'; // Cambia esto a la URL de tu backend PHP
  private currentUserSubject: BehaviorSubject<number | null>;

  constructor(private http: HttpClient) {
    const savedUserId = localStorage.getItem('user_id');
    this.currentUserSubject = new BehaviorSubject<number | null>(savedUserId ? parseInt(savedUserId, 10) : null);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({ email, password });

    return this.http.post<AuthResponse>(`${this.apiUrl}/auth.php`, body, { headers }).pipe(
      tap(response => {
        if (response.jwt && response.user_id !== undefined) {
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('user_id', response.user_id.toString());
          this.currentUserSubject.next(response.user_id);
        } else {
          throw new Error('Invalid response from server');
        }
      }),
      catchError(this.handleError)
    );
  }

  register(username: string, email: string, password: string): Observable<AuthResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = JSON.stringify({ username, email, password });

    return this.http.post<AuthResponse>(`${this.apiUrl}/register.php`, body, { headers }).pipe(
      tap(response => {
        if (response.jwt && response.user_id !== undefined) {
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('user_id', response.user_id.toString());
          this.currentUserSubject.next(response.user_id);
        } else {
          throw new Error('Invalid response from server');
        }
      }),
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user_id');
    this.currentUserSubject.next(null);
  }

  get currentUserId(): Observable<number | null> {
    return this.currentUserSubject.asObservable();
  }

  get currentUserIdValue(): number | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
