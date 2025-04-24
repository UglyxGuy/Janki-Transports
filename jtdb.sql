-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2025 at 08:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jtdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbladmin`
--

CREATE TABLE `tbladmin` (
  `ID` int(10) NOT NULL,
  `AdminName` varchar(50) DEFAULT NULL,
  `UserName` varchar(50) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  `AdminRegdate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbladmin`
--

INSERT INTO `tbladmin` (`ID`, `AdminName`, `UserName`, `MobileNumber`, `Email`, `Password`, `AdminRegdate`) VALUES
(1, 'Admin', 'admin', 8979555596, 'admin@gmail.com', 'f925916e2754e5e03f75dd58a5733251', '2025-01-31 06:57:43'),
(2, NULL, 'admin', 1234567890, 'admin@example.com', '0192023a7bbd73250516f069df18b500', '2025-04-17 07:22:54');

-- --------------------------------------------------------

--
-- Table structure for table `tblcontact`
--

CREATE TABLE `tblcontact` (
  `ID` int(10) NOT NULL,
  `Name` varchar(200) DEFAULT NULL,
  `Telephone` bigint(10) DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `Subject` mediumtext DEFAULT NULL,
  `Message` mediumtext DEFAULT NULL,
  `RequestDate` timestamp NULL DEFAULT current_timestamp(),
  `IsRead` int(5) DEFAULT NULL,
  `Status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcontact`
--

INSERT INTO `tblcontact` (`ID`, `Name`, `Telephone`, `Email`, `Subject`, `Message`, `RequestDate`, `IsRead`, `Status`) VALUES
(1, 'Vishu Singh', 4646544654, 'vishu@gmail.com', 'Quotation For XYZ', 'Send me price of moving bike from Allahabad to varanasi', '2025-03-20 09:20:13', 1, 0),
(2, 'Nishu', 6546498798, 'nisu@gmail.com', 'Enquiry', 'Told me the cost of shifting local area', '2025-03-19 08:57:56', 1, 0),
(3, 'Kishan', 2131131311, 'k@gmail.com', 'scooty transport', 'Message...', '2025-03-24 11:36:49', 1, 0),
(4, 'Aman', 1234567890, 'aman@gmail.com', 'test', 'Test for testing.', '2025-03-12 05:42:35', 1, 1),
(5, 'Pankaj Kumar', 7992428322, 'pankajkumar@gmail.com', 'Car Service', 'Need car transport service', '2025-04-17 11:21:41', NULL, 0),
(6, 'Pankaj Kumar', 7992428322, 'pankajkumar@gmail.com', 'Car Service', 'Need car transport service', '2025-04-17 11:36:13', 1, 0),
(7, 'Pankaj Kumar', 7992428322, 'pankajkumar@gmail.com', 'Car Service', 'need car transport service', '2025-04-17 11:50:17', 1, 0),
(8, 'Pankaj Kumar', 7992428322, 'pankajkumar@gmail.com', 'Packers Service', 'Need Packers service', '2025-04-17 11:56:40', 1, 1),
(9, 'Divyanshu', 7992428322, 'Divyanshukumar@gmail.com', 'Packers Service', 'Need Packers Service', '2025-04-17 12:46:41', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblpage`
--

CREATE TABLE `tblpage` (
  `ID` int(10) NOT NULL,
  `PageType` varchar(50) DEFAULT NULL,
  `PageTitle` mediumtext DEFAULT NULL,
  `PageDescription` mediumtext DEFAULT NULL,
  `Email` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `UpdationDate` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblpage`
--

INSERT INTO `tblpage` (`ID`, `PageType`, `PageTitle`, `PageDescription`, `Email`, `MobileNumber`, `UpdationDate`) VALUES
(1, 'aboutus', 'About Us', 'Welcome To Janki Transports, We are among-st the top packing moving Express companies. Provide our services in all over India. With more and more real estate development and people buying new apartments, shifting houses for work, business or personal reasons has increased over the years. We at All India Packers guarantee high quality packing and moving service so that your shifting remains tension free. We are experts in offering high quality packing material and transport facility. We have developed our reputation over the last 15 years for being reliable and efficient. We have with us, skilled professionals, who are able to handle the consignments and deliver them timely. We provide hassle free shifting service with great care. We are also very cautious of the safety and security of the cargo. test&nbsp;', NULL, NULL, '2025-02-03 05:41:11'),
(2, 'contactus', 'Contact Us', 'Industrial Area,Vedvyas,Rourkela,Odisha,769014,India', 'ajayprusti5656@gmail.com', 9305179521, '2025-04-16 19:16:41'),
(3, 'contactus', 'Contact Us', 'Get in touch with us', 'contact@example.com', 1234567890, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblquotes`
--

CREATE TABLE `tblquotes` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `MobileNumber` varchar(15) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `FromLocation` varchar(200) NOT NULL,
  `ToLocation` varchar(200) NOT NULL,
  `ServiceType` varchar(100) NOT NULL,
  `RequestDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `AdditionalInfo` text DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `QuoteAmount` decimal(10,2) DEFAULT NULL,
  `Response` text DEFAULT NULL,
  `ResponseDate` timestamp NULL DEFAULT NULL,
  `VehicleType` varchar(100) DEFAULT NULL,
  `GoodsType` varchar(100) DEFAULT NULL,
  `Weight` varchar(50) DEFAULT NULL,
  `PickupDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblquotes`
--

INSERT INTO `tblquotes` (`ID`, `Name`, `MobileNumber`, `Email`, `FromLocation`, `ToLocation`, `ServiceType`, `RequestDate`, `AdditionalInfo`, `Status`, `QuoteAmount`, `Response`, `ResponseDate`, `VehicleType`, `GoodsType`, `Weight`, `PickupDate`) VALUES
(3, 'Pankaj Kumar', '7992428322', 'pankajkumar@gmail.com', 'Bengal', 'Bihar', '', '2025-04-17 12:11:34', 'Need Trucks', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'Pankaj Kumar', '7992428322', 'pankajkumar@gmail.com', 'Bengal', 'Bihar', '', '2025-04-17 12:16:07', 'Need Trucks', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Pankaj Kumar', '7992428322', 'pankajkumar@gmail.com', 'Bengal', 'Bihar', '', '2025-04-17 12:22:08', 'Need trucks and containers', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'Divyanshu', '7992428322', 'Divyanshu@gmail.com', 'Kanpur', 'Delhi', '', '2025-04-17 12:44:47', 'Need Car Transport service', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblservices`
--

CREATE TABLE `tblservices` (
  `ID` int(10) NOT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `Description` mediumtext DEFAULT NULL,
  `Image` varchar(200) DEFAULT NULL,
  `CreationDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblservices`
--

INSERT INTO `tblservices` (`ID`, `Title`, `Description`, `Image`, `CreationDate`) VALUES
(1, 'Car Transport', 'Car Transport \r\nIf your relocating from your place, don’t worry about moving your car. we at Janki Transports will help you in transporting your car safely to any cities in India. We are known as the best Movers and Packers nationwide.\r\n\r\nSo to get your Car at your destination place without and damages on it, to happen that Contact Janki Transports.', 'car-transport-services.png', '2025-04-17 11:40:02'),
(2, 'Bike and Scooty Transport', 'Best Bike & Scooty Transporter\r\nWe know the attachment of the rider with their bike and by shifting it in safe and sound condition we respect their feelings attached. Our Packaging consists of three layers to give a strong cover to secure it from unexpected damages and scratches. Our containers contain only Bike Inquiries not like others who shift the it with Household or Industrial goods to earn more on Shifting. Our Motto is to earn reasonable and satisfy more to our customers. If you need Janki Transports, Our wide network spread all over India to Shift or Relocate your bike anywhere you want. Our experts provide you the best shifting Experience you ever had while moving with others.', 'bike-transport.png', '2025-04-17 11:40:10'),
(3, 'Containers Truck', 'Take trucks on lease with containers for for seaport shipments', 'Container Trucks.png', '2025-04-17 11:40:18'),
(4, 'Containers on lease', 'We have containers to be given on lease at Janki Transport', 'containers.png', '2025-04-17 11:40:26'),
(5, 'Warehouse Shipments', 'We are also open to integrate with next-gen industries for e-commerce couriers and warehouse to warehouse shipment delivery facility.', 'wareshouse.png', '2025-04-17 11:40:34'),
(6, 'Truck Depo', 'We also help in interstate businesses anywhere in India with our trucks ', 'Truck Depo.png', '2025-04-17 11:40:44'),
(7, 'Packers and Movers', 'We also provide packers and movers service nationwide.\r\nWith professional packing workers to pack your household items and shift you anywhere in India.', '_Packer_Movers_.png', '2025-04-17 11:40:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbluser`
--

CREATE TABLE `tbluser` (
  `ID` int(10) NOT NULL,
  `Name` varchar(120) DEFAULT NULL,
  `MobileNumber` bigint(10) DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(200) DEFAULT NULL,
  `Location` varchar(200) DEFAULT NULL,
  `ShiftingLoc` varchar(200) DEFAULT NULL,
  `ShiftingDate` varchar(200) DEFAULT NULL,
  `BreifItems` mediumtext DEFAULT NULL,
  `Items` mediumtext DEFAULT NULL,
  `Professional` varchar(200) DEFAULT NULL,
  `RequestDate` timestamp NULL DEFAULT current_timestamp(),
  `Remark` varchar(200) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `UpdationDate` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbladmin`
--
ALTER TABLE `tbladmin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblcontact`
--
ALTER TABLE `tblcontact`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblpage`
--
ALTER TABLE `tblpage`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblquotes`
--
ALTER TABLE `tblquotes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tblservices`
--
ALTER TABLE `tblservices`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbluser`
--
ALTER TABLE `tbluser`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbladmin`
--
ALTER TABLE `tbladmin`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tblcontact`
--
ALTER TABLE `tblcontact`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tblpage`
--
ALTER TABLE `tblpage`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblquotes`
--
ALTER TABLE `tblquotes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblservices`
--
ALTER TABLE `tblservices`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbluser`
--
ALTER TABLE `tbluser`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
