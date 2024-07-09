use chrono::NaiveDateTime;
use diesel::sql_types::Timestamp;
use diesel::{deserialize::Queryable, prelude::Insertable, Selectable};
use serde::Deserialize;
// use serde::Deserialize;

// #[derive(Debug, Deserialize)]
// struct Word {
//     word: String,
//     meaning: String,
//     pronunciation: String,
// }

use crate::schema::words;

#[derive(Debug, Queryable, Selectable)]
#[diesel(table_name = words, check_for_backend(diesel::sqlite::Sqlite))]
pub struct Word {
    pub id: Option<i32>,
    pub word: String,
    pub meaning: String,
    pub pronunciation: String,
}

#[derive(Debug, Deserialize, Insertable)]
#[diesel(table_name = words)]
pub struct NewWord<'a> {
    pub word: &'a str,
    pub meaning: &'a str,
    pub pronunciation: &'a str,
}
