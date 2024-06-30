import { Component } from '@angular/core';

type Item = {
  name: string;
  description: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public items: Item[] = [];
}
