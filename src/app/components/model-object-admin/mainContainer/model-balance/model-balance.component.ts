import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-balance',
  templateUrl: './model-balance.component.html',
  styleUrls: ['./model-balance.component.css']
})
export class ModelBalanceComponent implements OnInit {

  constructor() { }

  tags = [{
    name: "Масса по ЖД", value: "тэг массы", product: "Битум",
    error: "0,1", node: "Да", actions: "Удалить"
  }
    ,
  {
    name: "Масса по XZ", value: "тэг массы XZ", product: "Gaz",
    error: "0,2", node: "Да", actions: "Удалить"
  }
  ]


  ngOnInit() {
  }

}
