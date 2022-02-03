import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutService } from 'src/app/services/layout.service';
import { ProductService } from 'src/app/services/product.service';
import { UnitService } from 'src/app/services/unit.service';
import { IProduct } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input() id!: number;
  product$!: Observable<IProduct>;
  constructor(
    private modalController: ModalController,
    private productService: ProductService,
    public layoutService: LayoutService,
    public unitService: UnitService
  ) {}

  ngOnInit() {
    this.product$ = this.productService.products$.pipe(
      map((products) => products.find((p) => p.id === this.id)!)
    );
  }

  close() {
    this.modalController.dismiss();
  }
}
