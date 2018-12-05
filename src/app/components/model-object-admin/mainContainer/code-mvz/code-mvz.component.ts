import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-code-mvz',
  templateUrl: './code-mvz.component.html',
  styleUrls: ['./code-mvz.component.css']
})
export class CodeMVZComponent {
  models: any = [];
  products: any = [];
  //productsOfproducts:any = [];
  productsOfproducts: any = [
        {
          name: 'Битумный завод МНПЗ',
          'data': [
            {id: "07267f69-35d0-4215-b37e-ad745247d2ad", name: "A1. Приход сырья", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "7ffbe983-625b-45e9-b75c-11f45401c96c", name: "A2. Производство битума", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "36189e49-fb60-4299-86a3-4b11165009b2", name: "A3. Хранение готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "f0cd3af7-214f-4ecd-b60c-20b556f1d148", name: "A4. Эстакада налива готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null}
          ]
        },
        {
          name: 'УМБ (ГПН-Total) МНПЗ',
          'data': [
            {id: "ee97dc65-f29a-446a-b0b1-5b57da669db8", name: "A5. УМБ (ГПН-Total)", parentId: "2ed70fdb-92d5-496c-82ca-74cba888ac34", description: null}
          ]
        }

  ];
  modelsId: any = [];

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getModels();
  }

  getModels() {
    this.models = [];
    this.rest.getModels("1").subscribe((data: {}) => {
      this.models = data;
      this.models.forEach(element => {
        this.modelsId.push(element.id)

      });
      console.log(this.modelsId);
      //this.modelsId = (JSON.stringify(this.models[0].id)).replace(/"/g, '');
    });
  }
  getObjectsOfModelsObjects(pid) {

    this.rest.getObjectsOfModelsObjects(this.modelsId[0], pid).subscribe((data: {}) => {
      this.productsOfproducts = data;
/*       let res = {};
      res[pid] = data;
      this.productsOfproducts.push(res); */
      console.log(this.productsOfproducts);
    });
  }

  getModelsObjects() {
    //this.getModels();

    this.products = [];
    this.rest.getModelsObjects(this.modelsId[0]).subscribe((data: {}) => {
      this.products = data;
    });
  }
}
