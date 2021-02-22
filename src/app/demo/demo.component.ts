import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'eCommerce';

  items = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  

  agregarItem(){
    this.items.push(this.title);
  }

  deleteItem(index:number){
    this.items.splice(index,1);
    console.log(index);
    
  }

}
