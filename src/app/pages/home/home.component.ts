import { Component, inject } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupModule } from "primeng/inputgroup";
import { ButtonModule } from "primeng/button";
import { SidebarModule } from "primeng/sidebar";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { WordsService } from "./services/words.service";

interface Item {
  name: string;
  desc: string;
  date?: Date;
}
type Section = string;

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    SidebarModule,
    InputGroupModule,
    InputGroupAddonModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  items: Item[] = [];
  sections: Section[] = [];
  wordForm: FormGroup;
  formBuilder: FormBuilder = inject(FormBuilder);
  wordsService: WordsService = inject(WordsService);

  constructor() {
    this.wordForm = this.formBuilder.group({
      word: ["", Validators.required],
      meaning: ["", Validators.required],
      pronunciation: [""],
    });
  }

  getWords() {
    this.wordsService
      .getWords()
      .then((words: any) => {
        console.log(words);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  onSubmitWordForm() {
    this.wordsService
      .createWord(this.wordForm.value)
      .then((words: any) => {
        console.log(words);
      })
      .catch((err: Error) => {
        console.error(err);
      });
    console.log(this.wordForm.value);
  }

  addItem(evt: Event, name: string, desc: string) {
    evt.preventDefault();
    this.items.push({ name, desc, date: new Date() });
  }

  addSection(evt: Event, section: string) {
    evt.preventDefault();
    this.sections.push(section);
  }
}
