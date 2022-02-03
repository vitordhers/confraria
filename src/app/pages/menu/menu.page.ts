import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { deburr } from 'lodash';
import categories from '../../shared/entities/categories.constant';
import { ProductDisplay } from '../../shared/models/product-display.model';
import { UnitService } from '../../services/unit.service';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  categories = categories;

  public initialValue?: string;
  public selectedCategory$ = new BehaviorSubject({
    id: 1,
    name: 'Promoções',
    slug: 'promocoes',
  });
  public displayedProducts$!: Observable<ProductDisplay[]>;
  public selectInitialValue!: string;

  private storedCategoryId$ = new BehaviorSubject<number>(0);
  private firstLoad = true;

  constructor(
    private unitService: UnitService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.displayedProducts$ = combineLatest([
      this.unitService.currentUnitId$,
      this.activatedRoute.fragment.pipe(
        map((fragment) => {
          if (fragment && !fragment.startsWith('@')) {
            const selectedCategory = this.categories.find(
              (category) => category.slug === fragment
            );
            if (selectedCategory) {
              this.selectedCategory$.next(selectedCategory);
            }
          }

          if (this.firstLoad) {
            this.firstLoad = false;
            this.selectInitialValue = fragment || 'promocoes';
          }

          return fragment || 'promocoes';
        })
      ),
      this.productService.products$,
    ]).pipe(
      map(([currentUnitId, fragment, products]) => {
        let displayedProducts: IProduct[] = [];
        if (fragment.startsWith('@')) {
          this.initialValue = fragment.substring(1);

          displayedProducts = products.filter((product) =>
            deburr(
              product.name.concat(` ${product.description}`).toLowerCase()
            ).includes(this.initialValue!)
          );

          this.selectedCategory$.next({
            id: 0,
            name: 'Resultados da pesquisa',
            slug: this.initialValue,
          });

          return displayedProducts.map((product) =>
            this.productService.mapProductToDisplayProduct(product)
          );
        }

        const selectedCategory = this.categories.find(
          (category) => category.slug === fragment
        );

        if (selectedCategory) {
          if (
            this.selectedCategory$.value.id &&
            typeof this.selectedCategory$.value.id === 'number'
          ) {
            this.storedCategoryId$.next(this.selectedCategory$.value.id);
          }

          displayedProducts = products.filter(
            (product) =>
              product.categoriesIds.includes(selectedCategory.id) &&
              product.unitsAvailable.includes(currentUnitId)
          );
        }

        return displayedProducts.map((product) =>
          this.productService.mapProductToDisplayProduct(product)
        );
      })
    );
  }

  selectChange(e: any) {
    this.setFragment(e.detail.value);
  }

  setFragment(fragment: string, search = false) {
    this.router.navigate(['/cardapio'], {
      fragment: search ? `@${fragment}` : fragment,
    });
  }

  search(value: string) {
    if (value !== '') {
      // this.selectedCategory$.next({
      //   id: null,
      //   name: 'Resultados da pesquisa',
      //   slug: value,
      // });
      return this.setFragment(value, true);
    }

    const previousCategory = this.categories.find(
      (cat) => cat.id === this.storedCategoryId$.value
    );
    if (previousCategory) {
      this.setFragment(previousCategory.slug);
    }
  }
}
