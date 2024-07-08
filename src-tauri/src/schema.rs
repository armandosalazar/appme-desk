// @generated automatically by Diesel CLI.

diesel::table! {
    words (id) {
        id -> Nullable<Integer>,
        word -> Text,
        meaning -> Text,
        pronunciation -> Text,
        created_at -> Timestamp,
        updated_at -> Timestamp,
        deleted_at -> Nullable<Timestamp>,
    }
}
