import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
  itemValue = '';
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('items').valueChanges();
  }
  onsubmit(){
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
  ngOnInit() {
  }

}
