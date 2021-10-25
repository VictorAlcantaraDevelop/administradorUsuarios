import { Injectable } from '@angular/core';
import { ListaUsuarios } from  'src/app/shared/models/listaUsuarios.interface'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

/*  obtenerUsuarios(pagina:number):Observable<ListaUsuarios[]>{
  let direccion = `${environment.API_URL_LOGIN}/api/users` + "?page=" + pagina;
  return this.http.get<ListaUsuarios[]>(direccion)
 } */

   obtenerUsuarios(pagina:number):Observable<any>{
  let direccion = `${environment.API_URL_LOGIN}/api/users`  + "?page=" + pagina ;
  return this.http.get<any>(direccion)
 } 


 detalleUsuarios(id: number):Observable<any> {
   let direccion = `${environment.API_URL_LOGIN}/api/users/`  + id  ;
   return this.http.get<any>(direccion)
 }

post(id:number):Observable<any> {
  let post = `${environment.API_URL_POST}/posts` + "?userId="  + id  ;
  return this.http.get<any>(post)
}


 openSideNav() {
   console.log("abrir nav");
 }


actualizarUsuario(id: number,email:string,first_name:string,last_name:string):Observable<any> {
  let direccion = `${environment.API_URL_LOGIN}/api/users/`  + id  ;
  const body = { email,first_name,last_name };
  return this.http.put<any>(direccion,body)
}

}
