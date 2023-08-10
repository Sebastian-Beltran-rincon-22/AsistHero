import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { HeroService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private HeroService: HeroService){}

  title = 'AsistHero';
  public allHero: any = []
  currentDate: Date = new Date()
  public done: any = []

  taskTitle = ""
  addTitle(title: string):void{
    this.taskTitle = title
  }

  ngOnInit():void{
    this.loadData()
  }

  public loadData(){
    this.HeroService.getTask('https://superhero-xg93.onrender.com/asisthero/')
    .subscribe(response =>{
      console.log(response)
      this.allHero = response
    })
  }

  onNewHeroCreated(newHero: any) {
    this.allHero.unshift(newHero); // Agregar el nuevo héroe al array
  }

  //GerForID
  // get items(){
  //   if (this.done === "true"){
  //     return this.allHero.filter((item:Item)=> item.done === true)
  //   }
  //   return this.allHero.filter((item:Item) => item.done === false)
  // }

  updateHero(name: string, image: string, id: number):void{
    const updateHero = {
      heroId: id,
      namehero: name,
      imgHero: image,
      done: false
    }
    this.HeroService.updateTask(`https://superhero-xg93.onrender.com/asisthero/update/${id}`,updateHero)
    .subscribe(data =>{
      console.log(data)
      this.loadData()
    })
  }
  deleteHero(item: any){
    this.allHero = this.allHero.filter((hero: Item) => hero.heroId !== item.heroId);
    this.HeroService.deleteTask(`https://superhero-xg93.onrender.com/asisthero/delete/${item.heroId}`)
    .subscribe(responde =>{
      console.log(responde)
    })
  }


  toggleItemDone(item: any) {
    item.done = !item.done; // Cambia el estado contrario y envia la peticion al back para actualizar
    console.log(this.allHero)
    this.HeroService.updateTask(`https://superhero-xg93.onrender.com/asisthero/update/${item.heroId}`, item)
      .subscribe(data => {
        console.log(data);
      });
  }

}



