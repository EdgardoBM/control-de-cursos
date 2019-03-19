import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { Evento } from '../evento';

@Component({
  selector: 'app-eventos-marketer',
  templateUrl: './eventos-marketer.component.html',
  styleUrls: ['./eventos-marketer.component.scss']
})
export class EventosMarketerComponent implements OnInit {

    evento = [];
  constructor(public eventosService: EventosService) { }

  ngOnInit() {
 this.getEventos();
  }

  getEventos(){
    this.eventosService.getEventos().subscribe((data : []) =>{
      this.evento=data;
      console.log(data);
    }, err => {
     console.log(err);
      
    })
  }

}
