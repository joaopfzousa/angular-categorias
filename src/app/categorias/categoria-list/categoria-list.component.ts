import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private service : CategoriaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cat : Categoria){
    this.service.formData = Object.assign({}, cat);
  }

  onDelete(id : number){
    if( confirm('Are you sure to delete this record?')){
      this.service.deleteCategoria(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted Successfully', 'Resgisto Categorias');
      });
    }
  }
}
