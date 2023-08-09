import { Component, Input } from '@angular/core';
import { HeroService } from 'src/app/core/service/service.service';
import { Item } from 'src/app/shared/models/item';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private HeroService: HeroService){

  }
  @Input() Item!: AppComponent


  
}



