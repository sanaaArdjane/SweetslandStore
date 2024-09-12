import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductSearchComponent } from "../../../product/product-search/product-search.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, ProductSearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
