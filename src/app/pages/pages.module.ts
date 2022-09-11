import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// Routing Module
import { PagesRoutingModule } from './routing.module'

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
