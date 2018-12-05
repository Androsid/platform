import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-toir',
  templateUrl: './toir.component.html',
  styleUrls: ['./toir.component.css']
})
export class ToirComponent implements OnInit {
  models: any = [];
  products: any = [];
  productsOfproducts: any = [];
  /* productsOfproducts: any = [
        {
          'edafedbb-e45d-4430-9efe-0ec5506246f4': [
            {id: "07267f69-35d0-4215-b37e-ad745247d2ad", name: "A1. Приход сырья", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "7ffbe983-625b-45e9-b75c-11f45401c96c", name: "A2. Производство битума", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "36189e49-fb60-4299-86a3-4b11165009b2", name: "A3. Хранение готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
            {id: "f0cd3af7-214f-4ecd-b60c-20b556f1d148", name: "A4. Эстакада налива готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null}
          ]
        },
        {
          '2ed70fdb-92d5-496c-82ca-74cba888ac34': [
            {id: "ee97dc65-f29a-446a-b0b1-5b57da669db8", name: "A5. УМБ (ГПН-Total)", parentId: "2ed70fdb-92d5-496c-82ca-74cba888ac34", description: null}
          ]
        },
        {
          'namez': [{id: "07267f69-35d0-4215-b37e-ad745247d2ad", name: "A1. Приход сырья", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
          {id: "7ffbe983-625b-45e9-b75c-11f45401c96c", name: "A2. Производство битума", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
          {id: "36189e49-fb60-4299-86a3-4b11165009b2", name: "A3. Хранение готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null},
          {id: "f0cd3af7-214f-4ecd-b60c-20b556f1d148", name: "A4. Эстакада налива готовой продукции", parentId: "edafedbb-e45d-4430-9efe-0ec5506246f4", description: null}]
        }

  ]; */
  modelsId: any = [];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getModels();

  }

  getModels() {
    this.models = [];
    this.rest.getModels("1").subscribe((data: {}) => {
      this.models = data;
      this.models.forEach(el => {
        this.modelsId.push(el.id)

      });
      console.log(this.modelsId);
      //this.modelsId = (JSON.stringify(this.models[0].id)).replace(/"/g, '');
    }, error => {
      console.log(error);
    });
    return this.modelsId;
  }

  /*   async getModelsObjectsFromRest(){
      console.log("2");
      let newData: any = [];
       await this.rest.getModelsObjects(this.modelsId[0]).subscribe((data: {}) => {
        console.log("products " + data[0].name);
        newData = data;
      });
      console.log("3");
      console.log("newData " + newData);
      return newData;
    } */
  async getModelsObjectsFromRest() {

    let newData: any = [];
    newData = await this.rest.getModelsObjects(this.modelsId[0]).toPromise();

    return newData;
  }

  //получить объекты модели и записать в массив products
  async fillMassiveProducts() {

    let newData: any = [];
    newData = await this.getModelsObjectsFromRest();

    return newData;
  }

  async fillMassiveOfModelsObjects() {
    //заполняем массив с объектами модели
    this.productsOfproducts = []; //обнуляем массив, чтобы не было накладывания
    this.products = await this.fillMassiveProducts();   //метод для получения объектов модели

    /* this.products = [ 
      {
        "id": "b72f3ee2-c2c0-4372-a884-7a48d34c3751",
        "name": "Битумный завод МНПЗ",
        "parentId": null,
        "description": null
      },
      {
        "id": "f3138db6-2105-42f8-ad3f-eb2f39c87b20",
        "name": "УМБ (ГПН-Total) МНПЗ",
        "parentId": null,
        "description": null
      }]; */
    let idModel = this.modelsId[0];
    //console.log("idModel " + idModel);

    let objid = "edafedbb-e45d-4430-9efe-0ec5506246f4";
    //console.log("objid " + objid);

    let parentName = "Битумный завод МНПЗ";
    //console.log("parentName " + parentName);

    //заполняем массив productsOfproducts
    //idModel - id модели
    //objid - объекта, для которого получить дочерние объекты(products[n].objid)
    //parentName - название родительского элемента из массива(products[n].parentName)
    this.products.forEach(product => {
      console.log("product.id " + product.id);
      console.log("product.name " + product.name);
      this.fillMassiveproductsOfproducts(idModel, product.id, product.name);
    });
  }

  //получаем дочерние объекты объектов модели и записываем в массив productsOfproducts
  fillMassiveproductsOfproducts(idModel, objid, parentName) {
    this.rest.getObjectsOfModelsObjects(idModel, objid).subscribe((data: {}) => {
      let res = {};
      res['parentName'] = parentName;
      res['data'] = data;
      this.productsOfproducts.push(res);
      console.log("productsOfproducts" + this.productsOfproducts);
    });
  }

  identify(index) {
    return index;
  }
}
