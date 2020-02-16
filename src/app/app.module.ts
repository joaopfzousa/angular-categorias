import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriaListComponent } from './categorias/categoria-list/categoria-list.component';
import { CategoriaService } from './shared/categoria.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    CategoriaComponent,
    CategoriaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
