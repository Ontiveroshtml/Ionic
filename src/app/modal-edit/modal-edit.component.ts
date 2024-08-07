import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() item: any;
  editProductForm!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private productsService: ProductosService
  ) {}

  ngOnInit(): void {
    this.initForm();
    console.log(this.item);
  }

  initForm() {
    if (!this.item) {
      this.editProductForm = this.formBuilder.group({
        name: ['', Validators.required],
        code: ['', Validators.required],
        category: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        amount: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      });
    } else {
      this.editProductForm = this.formBuilder.group({
        name: [this.item.name || '', Validators.required],
        code: [{ value: this.item.code || '', disabled: true }, Validators.required],
        category: [this.item.category || '', Validators.required],
        description: [this.item.description || '', Validators.required],
        price: [this.item.price || '', Validators.required],
        amount: [this.item.amount || '', Validators.required],
      });

      // Habilitar el campo `code` para editar al agregar uno nuevo
      if (!this.item._id) {
        this.editProductForm.get('code')?.enable();
      }
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (this.editProductForm.valid) {
      const request = {
        id: this.item ? this.item._id : null,
        name: this.editProductForm.value.name,
        code: this.editProductForm.get('code')?.value,
        category: this.editProductForm.value.category,
        price: this.editProductForm.value.price,
        amount: this.editProductForm.value.amount,
        description: this.editProductForm.value.description
      };

      if (!this.item) {
        // Agregar producto
        this.productsService.createProduct(request).subscribe(
          response => {
            console.log('Producto agregado:', response);
            this.modalCtrl.dismiss(this.editProductForm.value, 'confirm');
          },
          error => {
            console.error('Error al agregar el producto:', error);
          }
        );
      } else {
        // Editar producto
        this.productsService.editProduct(request).subscribe(
          response => {
            console.log('Producto editado:', response);
            this.modalCtrl.dismiss(this.editProductForm.value, 'confirm');
          },
          error => {
            console.error('Error al editar el producto:', error);
          }
        );
      }
    }
  }
}