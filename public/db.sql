CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  userName VARCHAR(80) NOT NULL,
  content VARCHAR(4000) NOT NULL
  );

INSERT INTO messages (userName, content)
VALUES ('John', 'I love this new game');

INSERT INTO messages (userName, content)
VALUES ('Taylor', 'I still need to that game');

INSERT INTO messages (userName, content)
VALUES ('Jake', 'What game is it');

INSERT INTO messages (userName, content)
VALUES ('John', 'what are you guys working on');

INSERT INTO messages (userName, content)
VALUES ('Taylor', 'I need help');

INSERT INTO messages (userName, content)
VALUES ('Jake', 'I am new to this');

CREATE TABLE rooms (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(40) NOT NULL
);

INSERT INTO rooms (name) VALUES ('Gaming');
INSERT INTO rooms (name) VALUES ('Programming');
INSERT INTO rooms (name) VALUES ('help');
INSERT INTO rooms (name) VALUES ('New');


CREATE TABLE messages_rooms (
messagesId int NOT NULL REFERENCES messages(id),
roomsId int NOT NULL REFERENCES rooms(id)
);

INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (1, 1);
INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (2, 1);
INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (3, 1);
INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (4, 2);
INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (5, 3);
INSERT INTO messages_rooms (messagesId, roomsId)
VALUES (6, 4);
