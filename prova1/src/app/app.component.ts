
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
    this.timeLista.sort(this.sortTeam)
    this.novoTime = {} as Team    
    
    form.resetForm()
  }

  sortTeam = (a:Team,b: Team) => b.pontuacao - a.pontuacao
 
}


