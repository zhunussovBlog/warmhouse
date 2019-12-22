-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 22, 2019 at 12:11 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.2.24-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `kotly`
--

CREATE TABLE `kotly` (
  `id` int(4) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `cost` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `isFavorite` tinyint(1) NOT NULL,
  `isBasket` tinyint(1) NOT NULL,
  `image` text NOT NULL,
  `manufacturer` text NOT NULL,
  `execution` text NOT NULL,
  `appointment` text NOT NULL,
  `power` double NOT NULL,
  `premises` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `chamber` text NOT NULL,
  `warranty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kotly`
--

INSERT INTO `kotly` (`id`, `name`, `description`, `cost`, `amount`, `isFavorite`, `isBasket`, `image`, `manufacturer`, `execution`, `appointment`, `power`, `premises`, `height`, `width`, `depth`, `chamber`, `warranty`) VALUES
(1235, 'Газовый котел PROTHERM', 'Двухконтурный настенный газовый котел Protherm Гепард 23 MTV предназначен для отопления и приготовления горячей воды.', 80000, 1, 0, 0, 'boiler.png', 'Protherm', 'Настенный', 'Отопление и приготовление горячей воды', 24.6, 246, 740, 410, 310, 'Закрытая', 24),
(1236, 'Газовый котел PROTHERM Гепард', 'Двухконтурный настенный газовый котел Protherm Гепард 23 MTV предназначен для отопления и приготовления горячей воды.', 80000, 1, 0, 0, 'parts-1.png', 'Protherm', 'Настенный', 'Отопление и приготовление горячей воды', 24.6, 246, 740, 410, 310, 'Закрытая', 24),
(8494, 'Газовый котел PROTHERM Гепард 3MTV', 'Двухконтурный настенный газовый котел Protherm Гепард 23 MTV предназначен для отопления и приготовления горячей воды.', 80000, 1, 0, 0, 'boiler.png', 'Protherm', 'Настенный', 'Отопление и приготовление горячей воды', 24, 246, 740, 410, 310, 'Закрытая', 24);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kotly`
--
ALTER TABLE `kotly`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kotly`
--
ALTER TABLE `kotly`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8495;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
