
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './team';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova1';
  key: string = "pontuacao";
  reverse: boolean = false;

  novoTime: Team = {} as Team
  timeLista: Team []=[]
  ordemTimesOrdenada = this.timeLista.sort((a,b) => a.pontuacao - b.pontuacao)

  salvaTime(form:NgForm){
    this.timeLista.push(this.novoTime)
    this.novoTime = {} as Team    
    
    form.resetForm()
  }

  sort(key: any){

    this.key = key;
    this.reverse = !this.reverse;

  }
 
 
}


