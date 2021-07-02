import { Component, OnInit } from '@angular/core';
import { GetTurnServiceService } from '../get-turn-service.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { VMRequestTurn } from '../Models/RequestTurn';
import { DatePipe } from '@angular/common';
import { Turn } from '../Models/Turn';

@Component({
  selector: 'app-getturns',
  templateUrl: './getturns.component.html',
  styleUrls: ['./getturns.component.css']
})
export class GetturnsComponent implements OnInit {


  constructor(
    private getTurnService : GetTurnServiceService,
    private form : FormBuilder,
    private datePipe : DatePipe
    ) {
    }
 // Constants
  requestTurnForm : FormGroup = new FormGroup({});
  turn : VMRequestTurn = {
    IdServicio : 0,
    FechaFin : '',
    FechaInicio : ''
  };
  items = Array<Turn>();

  ngOnInit(): void {
    this.requestTurnForm = this.form.group
    ({
      FechaFin: new FormControl('',Validators.required),
      FechaInicio: new FormControl('', Validators.required),
      IdServicio: new FormControl('', Validators.required)
    });

  }


  onSubmit() {
    this.items = [];
    this.turn = this.requestTurnForm.value as VMRequestTurn;
    this.turn.IdServicio = Number.parseInt(this.turn.IdServicio.toString());
    this.turn.FechaFin = this.datePipe.transform(this.turn.FechaFin, 'yyyy-MM-dd') ?? '';
    this.turn.FechaInicio = this.datePipe.transform(this.turn.FechaInicio, 'yyyy-MM-dd') ?? '';

    this.getTurnService.getTurns(this.turn).subscribe(res => 
      res.forEach( (data) => {
        this.items.push(data);
      }
    ));;
    console.log(this.items);
  }
}
