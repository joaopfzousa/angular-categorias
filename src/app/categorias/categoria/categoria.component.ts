import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private service: CategoriaService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm) {
    if(form != null)
      form.resetForm();
    this.service.formData = {
      id : null,
      nome : '',
      descricao : ''
    }
  }

  onSubmit(form : NgForm) {
    if(form.value.id == null)
      this.insertRecord(form);
    else
      this.uploadRecord(form);
  }

  insertRecord(form : NgForm) {
    this.service.postCategoria(form.value).subscribe( res => {
      this.toastr.success('Inserted Successfully', 'Resgisto Categorias');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  uploadRecord(form : NgForm) {
    this.service.putCategoria(form.value).subscribe( res => {
      this.toastr.info('Updated Successfully', 'Resgisto Categorias');
      this.resetForm(form);
      this.service.refreshList();
    });
  }
}
