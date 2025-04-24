CREATE DATABASE IF NOT EXISTS jtdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE jtdb;

CREATE TABLE IF NOT EXISTS tblcontact (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Telephone VARCHAR(15) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Subject VARCHAR(200) NOT NULL,
    Message TEXT NOT NULL,
    PostingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    IsRead TINYINT(1) DEFAULT NULL,
    Response TEXT,
    ResponseDate TIMESTAMP NULL,
    PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tblquotes (
    ID INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    MobileNumber VARCHAR(15) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    FromLocation VARCHAR(200) NOT NULL,
    ToLocation VARCHAR(200) NOT NULL,
    ServiceType VARCHAR(100) NOT NULL,
    RequestDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    AdditionalInfo TEXT,
    Status VARCHAR(20) DEFAULT NULL,
    QuoteAmount DECIMAL(10,2) NULL,
    Response TEXT,
    ResponseDate TIMESTAMP NULL,
    VehicleType VARCHAR(100) NULL,
    GoodsType VARCHAR(100) NULL,
    Weight VARCHAR(50) NULL,
    PickupDate DATE NULL,
    PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tbladmin (
    ID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(50) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    MobileNumber VARCHAR(15) NOT NULL,
    PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tblpage (
    ID INT NOT NULL AUTO_INCREMENT,
    PageType VARCHAR(50) NOT NULL,
    PageTitle VARCHAR(200) NOT NULL,
    PageDescription TEXT,
    Email VARCHAR(100),
    MobileNumber VARCHAR(15),
    PRIMARY KEY (ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tbladmin (UserName, Password, Email, MobileNumber) 
VALUES ('admin', MD5('admin123'), 'admin@example.com', '1234567890');

INSERT INTO tblpage (PageType, PageTitle, PageDescription, Email, MobileNumber)
VALUES ('contactus', 'Contact Us', 'Get in touch with us', 'contact@example.com', '1234567890'); 