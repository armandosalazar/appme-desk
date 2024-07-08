use diesel::prelude::*;

use crate::database;
use crate::models::{NewWord, Word};
use crate::schema::words;

#[tauri::command]
pub fn get_words() {
    use self::words::dsl::*;

    let conn = &mut database::establish_connection();

    let ws = words
        .select(Word::as_select())
        .load(conn)
        .expect("Error loading words");
    for wd in ws {
        println!("{:?}", wd);
    }
    println!("@Called get_words()")
}

#[tauri::command]
pub fn create_word(word_json: &str) -> String {
    print!("JSON: ");
    println!("{}", word_json);

    let conn = &mut database::establish_connection();

    let new_word: NewWord = serde_json::from_str(word_json).unwrap();

    diesel::insert_into(words::table)
        .values(&new_word)
        .execute(conn)
        .expect("Error saving new word");

    String::from("Hello from Rust!")
}
