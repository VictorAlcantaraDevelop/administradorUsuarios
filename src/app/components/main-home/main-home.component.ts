import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { ListaUsuarios } from 'src/app/shared/models/listaUsuarios.interface';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements AfterViewInit {
  //dataSource: ListaUsuarios[] = [];

  pagina: number = 1;
  dato: any;
  other_content:any;

  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
    'acciones',
  ];

  dataSource = new MatTableDataSource<ListaUsuarios>();

  constructor(private usuarios: UsuariosService, private router: Router) {}

  ngAfterViewInit() {
    this.getUsuarios();
    console.log(this.pagina);
  }

  public getUsuarios() {
    this.usuarios.obtenerUsuarios(this.pagina).subscribe((res) => {
      this.dataSource.data = res.data as ListaUsuarios[];
    });
  }

  openSideNav(element: any) {
    this.dato = element;
    this.router.navigate(['/detalle'], {
      queryParams: { detalle: this.dato.id },
    });
  }

  anterior() {
    debugger;
    console.log(this.pagina);
    this.pagina = this.pagina - 1;
    this.getUsuarios();
  }

  siguiente() {
    debugger;
    console.log(this.pagina);
    this.pagina = this.pagina + 1;
    this.getUsuarios();
  }
}
