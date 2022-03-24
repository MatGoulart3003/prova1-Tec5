import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prova1';

  novoTime: Time = {} as Time
  timeLista: Time []=[]

  salvaTime(form:NgForm){

    this.timeLista.push(this.novoTime)
    this.novoTime = {} as Time

    form.resetForm()
  }


}
