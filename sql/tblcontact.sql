CREATE TABLE IF NOT EXISTS `tblcontact` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Telephone` varchar(20) DEFAULT NULL,
  `Subject` varchar(200) DEFAULT NULL,
  `Message` text,
  `PostingDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` int(11) DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 