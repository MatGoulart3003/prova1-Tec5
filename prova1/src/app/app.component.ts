
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
  cont = 0
  novoTime: Team = {} as Team
  timeLista: Team []=[]

  salvaTime(form:NgForm){
    this.timeLista.push(this.novoTime)
    this.novoTime.colocacao
    this.novoTime = {} as Team
     
    
    form.resetForm()
  }


}
