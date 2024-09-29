import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BannerComponent } from './Components/banner/banner.component';
import { NewProductsComponent } from './Components/new-products/new-products.component';
import { MoreToLoveComponent } from './Components/more-to-love/more-to-love.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, BannerComponent, NewProductsComponent, MoreToLoveComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_2';
}
