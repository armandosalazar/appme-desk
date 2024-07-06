// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod store;
use serde::Deserialize;
use store::commands;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    commands::save("greeted".to_string(), name.to_string());
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[derive(Debug, Deserialize)]
struct Word {
    word: String,
    meaning: String,
    pronunciation: String,
}

#[tauri::command]
fn get_words(word_json: &str) -> String {
    let word: Word = serde_json::from_str(word_json).unwrap();
    println!("Word: {:?}", word);
    String::from("Hello from Rust!")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_words])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
