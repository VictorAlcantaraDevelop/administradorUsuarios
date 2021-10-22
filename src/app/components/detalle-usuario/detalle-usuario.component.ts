import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

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
        console.log(res);
      });

    this.detalleUsuarioService.post(this.detalle).subscribe((res) => {
      this.postData = res;
      console.log('POST:', res);
    });
  }

  ngOnInit() {}
}
