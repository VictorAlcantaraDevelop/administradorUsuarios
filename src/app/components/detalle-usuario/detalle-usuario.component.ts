import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss'],
})





export class DetalleUsuarioComponent implements OnInit {

  detalle: any;
  detalleUsuarioData: any;
  postData?: any;

  constructor(
    private router: ActivatedRoute,
    private detalleUsuarioService: UsuariosService
  ) {
    this.detalle = this.router.snapshot.queryParamMap.get('detalle');
    this.detalleUsuarioService
      .detalleUsuarios(this.detalle)
      .subscribe((res) => {
        this.detalleUsuarioData = res;
      });

    this.detalleUsuarioService.post(this.detalle).subscribe((res) => {
      this.postData = res;
    });
  }

  ngOnInit() {}

  editarUsuario() {
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
    this.detalleUsuarioService
      .actualizarUsuario(
        this.detalleUsuarioData.id,
        this.detalleUsuarioData.email,
        this.detalleUsuarioData.first_name,
        this.detalleUsuarioData.last_name
      )
      .subscribe((res) => {
        Toast.fire({
          icon: 'info',
          title: 'Usuario actualizado correctamente',
        });
      });
  }
  borrarEntrada(id: number) {
    let arrayUsers = [];
    for (var i = 0; i < this.postData.length; i++) {
      if (this.postData[i].id == id) {
        continue;
      }
      arrayUsers.push(this.postData[i]);
    }
    this.postData = arrayUsers;
  }
}
