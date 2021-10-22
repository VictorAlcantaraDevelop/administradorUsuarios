import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  /*  loginForm: FormGroup | any; */

  /* loginForm: FormGroup = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required)
})
 */
  /*  loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  }); */

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    /*  const usuarioData = {
      nombreUsuario: 'eve.holt@reqres.in',
      passwordUsuario: 'cityslicka'
    };
    this.loginService.login(usuarioData).subscribe((res) => {
      console.log('Login' + ' '+  usuarioData.nombreUsuario + ' ' + usuarioData.passwordUsuario )
     
    }); */
  }

  iniciarSesion(loginForm: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    this.loginService.login(loginForm).subscribe((res) => {
      console.log(res);
      if (!res) {
        Toast.fire({
          icon: 'success',
          title: 'Inicio de Sesión Correcto',
        });

        this.router.navigate(['home']);
      } else {
        Toast.fire({
          icon: 'error',
          title: 'El usuario no existe',
        });
      }
    });
  }
}
