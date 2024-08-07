import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ModalController } from '@ionic/angular';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  productList: any[] = []

  constructor(private productService: ProductosService,
    private modalCtrl: ModalController
  ) { }
  ngOnInit(): void {
    console.log('view did enter 2');
  }

  ionViewDidEnter() {
    console.log('view did enter 2');
  }

  ionViewWillEnter() {
    this.getProducts()
  }

  async getProducts() {
    try {
      await this.productService.getProducst()
        .subscribe(item => this.productList = item)
      console.log(this.productList)
    } catch (error) {
      console.log(error)
    }
  }

  async edit(item: any) {
    const modal = await this.modalCtrl.create({
      component: ModalEditComponent,
      componentProps: { item }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      try {
        await this.productService.editProduct(data)
          .subscribe(async () => {
            console.log('Product updated successfully');
            await this.getProducts(); 
          });
      } catch (error) {
        console.log('Error updating product:', error);
      }
    }
  }


  delete(item: any) {
    console.log(item)
  }
}
