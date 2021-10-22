import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsuarioRequest,UsuarioResponse} from 'src/app/shared/models/usuario.interface';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogged: any;
  constructor(private http: HttpClient) {}

  login(loginData: UsuarioRequest): Observable<UsuarioResponse> {
    return this.http
      .post<UsuarioResponse>(`${environment.API_URL_LOGIN}/api/login`, loginData /* {
        email: loginData.nombreUsuario,
        password: loginData.passwordUsuario,
      } */)
      .pipe(
        map((res: UsuarioResponse) => {
          this.salvartoken(res.token);
        }),
        catchError((err) => this.manejoErrores(err))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  private salvartoken(token: string): void {
    localStorage.setItem('token', token);
  }

  private manejoErrores(err: any): Observable<any> {
    let mensajeError = 'un error ha ocurrido';
    if (err) {
      mensajeError = `Error: codigo ${err.message}`;
    }
    return throwError(err);
  }
}
