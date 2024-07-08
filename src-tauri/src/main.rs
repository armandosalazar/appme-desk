// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;
mod database;
mod models;
mod schema;
// use commands;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn greet(name: &str) -> String {
//     format!("Hello, {}! You've been greeted from Rust!", name)
// }

// #[tauri::command]
// fn get_words(word_json: &str) -> String {
//     let word: Word = serde_json::from_str(word_json).unwrap();
//     println!("Word: {:?}", word);
//     String::from("Hello from Rust!")
// }

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::get_words,
            commands::create_word
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
