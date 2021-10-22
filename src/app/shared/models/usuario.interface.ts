export interface UsuarioRequest {
  nombreUsuario: string;
  passwordUsuario: string;
}

export interface UsuarioResponse {  
  token: string;
}