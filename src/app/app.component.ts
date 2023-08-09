import { Component } from '@angular/core';
import { HeroService } from './core/service/service.service';
import { Item } from './shared/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private HeroService:HeroService){

  }

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
  addHero(title: string, img: string, id: Number){
    const newTask = {
      heroId: id,
      namehero: title,
      imgHero: img,
      done: false
    }
    this.allHero.unshift(newTask)
    console.log(newTask)
    this.HeroService.postTask("https://superhero-xg93.onrender.com/asisthero/create",newTask)
    .subscribe(data =>{
      console.log(data)
    })
  }
//GetForID
  get items(){
    if (this.done === "true"){
      return this.allHero.filter((item:Item)=> item.done === true)
    }
    return this.allHero.filter((item:Item) => item.done === false)
  }

  updateHero(title: string, img: string, id: Number):void{
    const updateTask = {
      heroId: id,
      namehero: title,
      imgHero: img,
      done: false
    }
    this.HeroService.updateTask(`https://superhero-xg93.onrender.com/asisthero/update/${id}`,updateTask)
    .subscribe(data =>{
      console.log(data)
    })
  }
  deleteHero(heroId:Number){
    this.HeroService.deleteTask(`https://superhero-xg93.onrender.com/asisthero/delete/${heroId}`)
    .subscribe(responde =>{
      console.log(responde)
    })
  }
}
