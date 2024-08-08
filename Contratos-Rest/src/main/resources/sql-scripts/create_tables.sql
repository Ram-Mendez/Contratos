-- Table for storing administrators
CREATE TABLE `administrator`
(
    `id`           int NOT NULL AUTO_INCREMENT,
    `autoridad_id` int DEFAULT NULL,
    `contratos_id` int DEFAULT NULL,
    `user_id`      int DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UKn09cj489mpoor5ewf34ult8gl` (`contratos_id`, `autoridad_id`, `user_id`),
    KEY `FK2c0240gd4ay9f5is0x577b55e` (`autoridad_id`),
    KEY `FKqrcysxoyqjtyq2obdovndf3dq` (`user_id`),
    CONSTRAINT `FK2c0240gd4ay9f5is0x577b55e` FOREIGN KEY (`autoridad_id`) REFERENCES `authority_entity` (`id`),
    CONSTRAINT `FK72i7hm4ytv4n28lgni0mvjwx` FOREIGN KEY (`contratos_id`) REFERENCES `contratos` (`id`),
    CONSTRAINT `FKqrcysxoyqjtyq2obdovndf3dq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 7
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;


-- Table for storing authority entities
CREATE TABLE `authority_entity`
(
    `id`           int NOT NULL AUTO_INCREMENT,
    `address`      varchar(255) DEFAULT NULL,
    `cif_dni`      varchar(255) DEFAULT NULL,
    `country`      varchar(255) DEFAULT NULL,
    `municipality` varchar(255) DEFAULT NULL,
    `name`         varchar(255) DEFAULT NULL,
    `phone`        varchar(255) DEFAULT NULL,
    `zip_code`     varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 5
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing contact us messages
CREATE TABLE `contact_us`
(
    `id`      int NOT NULL AUTO_INCREMENT,
    `email`   varchar(255) DEFAULT NULL,
    `message` varchar(255) DEFAULT NULL,
    `name`    varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing contracting entities
CREATE TABLE `contracting_entity`
(
    `id`   int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 6
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing contracts
CREATE TABLE `contratos`
(
    `id`                    int NOT NULL AUTO_INCREMENT,
    `creation_date`         date         DEFAULT NULL,
    `name`                  varchar(255) DEFAULT NULL,
    `start_date`            date         DEFAULT NULL,
    `authority_entity_id`   int          DEFAULT NULL,
    `contracting_entity_id` int          DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKgxg42c9k53mtcubymek6o8jqm` (`authority_entity_id`),
    KEY `FK968kgn8opahjeieqc0pyk1qpj` (`contracting_entity_id`),
    CONSTRAINT `FK968kgn8opahjeieqc0pyk1qpj` FOREIGN KEY (`contracting_entity_id`) REFERENCES `contracting_entity` (`id`),
    CONSTRAINT `FKgxg42c9k53mtcubymek6o8jqm` FOREIGN KEY (`authority_entity_id`) REFERENCES `authority_entity` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 9
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;


-- Table for storing file uploads
CREATE TABLE `file_upload`
(
    `id`          int NOT NULL AUTO_INCREMENT,
    `file`        longtext,
    `file_name`   varchar(255) DEFAULT NULL,
    `type`        varchar(255) DEFAULT NULL,
    `contrato_id` int          DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKrlumiswocg7nxs0r4nimgq1ri` (`contrato_id`),
    CONSTRAINT `FKrlumiswocg7nxs0r4nimgq1ri` FOREIGN KEY (`contrato_id`) REFERENCES `contratos` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 22
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;


-- Table for storing contact us messages
CREATE TABLE `inventory_node_entity`
(
    `id`             int NOT NULL AUTO_INCREMENT,
    `description`    varchar(255)   DEFAULT NULL,
    `price`          decimal(38, 2) DEFAULT NULL,
    `quantity`       decimal(38, 2) DEFAULT NULL,
    `vat_percentage` decimal(38, 2) DEFAULT NULL,
    `contrato`       int NOT NULL,
    `parent`         int            DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `FKqrxj19mihkc8r72r8c5g8wu0` (`contrato`),
    KEY `FKm9onset14tjg1bn1dce9ij8rf` (`parent`),
    CONSTRAINT `FKm9onset14tjg1bn1dce9ij8rf` FOREIGN KEY (`parent`) REFERENCES `inventory_node_entity` (`id`),
    CONSTRAINT `FKqrxj19mihkc8r72r8c5g8wu0` FOREIGN KEY (`contrato`) REFERENCES `contratos` (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 45
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing roles
CREATE TABLE `roles`
(
    `id`          int NOT NULL AUTO_INCREMENT,
    `description` varchar(255) DEFAULT NULL,
    `nombre`      varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 5
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing users
CREATE TABLE `user`
(
    `id`        int NOT NULL AUTO_INCREMENT,
    `dni`       varchar(255) DEFAULT NULL,
    `email`     varchar(255) DEFAULT NULL,
    `last_name` varchar(255) DEFAULT NULL,
    `name`      varchar(255) DEFAULT NULL,
    `password`  varchar(255) DEFAULT NULL,
    `phone`     varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;

-- Table for storing user roles
CREATE TABLE `user_roles`
(
    `user_id` int NOT NULL,
    `role_id` int NOT NULL,
    PRIMARY KEY (`user_id`, `role_id`),
    KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
    CONSTRAINT `FK55itppkw3i07do3h7qoclqd4k` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_0900_ai_ci;
