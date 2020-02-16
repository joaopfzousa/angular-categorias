import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  formData : Categoria;
  list : Categoria[];
  readonly rootUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  postCategoria(formData : Categoria){
    return this.http.post( this.rootUrl+'/categorias', formData);
  }

  refreshList(){
    this.http.get(this.rootUrl+'/categorias').toPromise().then(res => this.list = res as Categoria[]);
  }

  putCategoria(formData : Categoria){
    return this.http.put( this.rootUrl+'/categorias/'+formData.id, formData);
  }

  deleteCategoria(id : number){
    return this.http.delete( this.rootUrl+'/categorias/'+id);
  }
}
