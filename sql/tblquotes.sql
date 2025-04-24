CREATE TABLE IF NOT EXISTS `tblquotes` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `MobileNumber` varchar(20) DEFAULT NULL,
  `FromLocation` varchar(200) DEFAULT NULL,
  `ToLocation` varchar(200) DEFAULT NULL,
  `AdditionalInfo` text,
  `PostingDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` int(11) DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1; 