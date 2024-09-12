import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product/list/product-list/product-list.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { ProductSearchComponent } from "./product/product-search/product-search.component";
import { DynamicFormComponent } from "./shared/components/dynamic-form/dynamic-form.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, NavbarComponent, ProductSearchComponent, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-end';
}
