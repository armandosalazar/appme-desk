import { Injectable } from "@angular/core";
import { invoke } from "@tauri-apps/api";

type Word = {
  word: string;
  meaning: string;
  pronunciation: string;
};

@Injectable({
  providedIn: "root",
})
export class WordsService {
  constructor() {}

  async getWords() {
    return await invoke("get_words", {});
  }

  async createWord(word: Word) {
    return await invoke("create_word", { wordJson: JSON.stringify(word) });
  }
}
