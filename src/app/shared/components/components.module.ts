import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DisplayProductComponent } from '../../components/display-product/display-product.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { environment } from 'src/environments/environment';
import { InputComponent } from 'src/app/components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from 'src/app/components/map/map.component';
import { ScrollTriggerComponent } from 'src/app/components/scroll-trigger/scroll-trigger.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CellphoneBrDirective } from '../directives/phone.directive';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // AgmCoreModule.forRoot({
    //   apiKey: environment.google_maps_site_key,
    // }),
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    DisplayProductComponent,
    GalleryComponent,
    FooterComponent,
    InputComponent,
    CellphoneBrDirective,
    MapComponent,
    ScrollTriggerComponent,
    ProductDetailComponent,
  ],
  exports: [
    HeaderComponent,
    DisplayProductComponent,
    GalleryComponent,
    FooterComponent,
    InputComponent,
    CellphoneBrDirective,
    MapComponent,
    ScrollTriggerComponent,
    ProductDetailComponent,
  ],
})
export class ComponentsModule {}
