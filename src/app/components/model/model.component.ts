import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  models: any = [];
  products: any = [];
  productsOfproducts: any = [];
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
    }, error => {
      console.log(error);
    });
    return this.modelsId;
  }

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

    //let objid = "edafedbb-e45d-4430-9efe-0ec5506246f4";
    //console.log("objid " + objid);

    //let parentName = "Битумный завод МНПЗ";
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
