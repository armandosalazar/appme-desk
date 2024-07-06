import { Component, importProvidersFrom, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { invoke } from '@tauri-apps/api/tauri';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    SidebarModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  greetingMessage: string = '';
  sidebarVisible: boolean = false;

  closeCallback(evt: Event): void {
    this.sidebarRef.close(evt);
  }

  addTask(evt: SubmitEvent, task: string): void {
    evt.preventDefault();

    console.log('WORKS', task);
  }

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    invoke<string>('greet', { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
