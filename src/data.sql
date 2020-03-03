CREATE DATABASE todo DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;

CREATE TABLE tasks (
 id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
 description VARCHAR(64) NOT NULL,
 completed TINYINT(1) NOT NULL DEFAULT 0,
 created DATETIME NOT NULL DEFAULT NOW(),
 last_updated DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW()
);