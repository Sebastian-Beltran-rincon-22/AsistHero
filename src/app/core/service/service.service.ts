import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  public getTask(url:string){
    return this.http.get(url)
  }

  public postTask(url:string, item:any){
    return this.http.post(url,item)
  }
  public deleteTask(url:string){
    return this.http.delete(url)
  }
  public updateTask(url:string, heroId:any){
  return this.http.patch(url,heroId)
  }
}
