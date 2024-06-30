import { Component } from '@angular/core';

interface Item {
  name: string;
  desc: string;
  date?: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public items: Item[] = [];

  public addItem(evt: Event, name: string, desc: string) {
    evt.preventDefault();
    this.items.push({ name, desc, date: new Date() });
  }
}
