import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

interface Item {
  name: string;
  desc: string;
  date?: Date;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    SidebarModule,
    InputGroupModule,
    InputGroupAddonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: Item[] = [];
  sidebarVisible: boolean = true;

  addItem(evt: Event, name: string, desc: string) {
    evt.preventDefault();
    this.items.push({ name, desc, date: new Date() });
  }
}
