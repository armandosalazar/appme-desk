-- Your SQL goes here
create table words (
    id integer primary key autoincrement, -- sqlite unsupported serial type
    word text not null,
    meaning text not null,
    pronunciation text not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    deleted_at timestamp
);
