import { Component, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private HeroService: HeroService){

  }
  @Output() newHeroCreated = new EventEmitter<any>();
  createHero(name: string, url: string){
    if(url === ""){
      url = "https://i.pinimg.com/originals/e1/4c/00/e14c005495e4d8905b90ad5237a6f4c5.jpg"
    }
    if(name === ""){
      name = "Unameless"
    }
    const newHero = {
      namehero: name,
      imgHero: url,
      done: false
    }
    this.HeroService.postTask("https://superhero-xg93.onrender.com/asisthero/create",newHero)
    .subscribe(data =>{
      this.newHeroCreated.emit(data);
    })
  }

}
