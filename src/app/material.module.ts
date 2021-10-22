import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
 



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [BrowserAnimationsModule, 
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule, 
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSidenavModule,
    MatDialogModule,
    MatGridListModule,
    MatToolbarModule,
    MatGridListModule,

 
    
  ]
})
export class MaterialModule { }
