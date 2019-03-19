import { Component, OnInit } from '@angular/core';
import { ProspectoService } from '../prospecto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(public prospectoService: ProspectoService) { }

  ngOnInit() {
    this.getProspectos();
  }

  getProspectos(){
    this.prospectoService.getProspectos()
    .subscribe(data => {
      console.log(data);
    }, err=> {
      console.log(err);
    })
  }

}
