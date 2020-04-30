-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 30. Apr 2020 um 18:43
-- Server-Version: 10.4.11-MariaDB
-- PHP-Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `employeedatabase`
--
DROP DATABASE IF EXISTS `employeedatabase`;
CREATE DATABASE IF NOT EXISTS `employeedatabase` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `employeedatabase`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `employees`
--

INSERT INTO `employees` (`id`, `latitude`, `longitude`, `name`) VALUES
(1, '48.1333', '17.95', 'Sveno'),
(2, '44.2339', '11.8315', 'Laurenzo von Matterhorn'),
(3, '52.198', '19.66', 'Carl Benz');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(4);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);
--
-- Datenbank: `servicedatabase`
--
DROP DATABASE IF EXISTS `servicedatabase`;
CREATE DATABASE IF NOT EXISTS `servicedatabase` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `servicedatabase`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(31);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `employee_id` int(11) DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `services`
--

INSERT INTO `services` (`id`, `date`, `employee_id`, `latitude`, `longitude`, `name`) VALUES
(1, '2020-06-14', 1, '48.12', '22', 'Ambientenbeleuchtung'),
(25, '2020-04-27', 2, '15.4', '17.8', 'HeyItWorks'),
(7, '2020-04-24', 3, '43.3', '45.8', 'Eislaufen'),
(9, '2020-04-12', 1, '43.1', '42.4', 'Leg Day Skippen'),
(17, '2020-04-27', 3, '14', '13', 'Blue Shisha'),
(16, '2020-04-21', 3, '13', '12', 'Dj Snake'),
(15, '2020-04-20', 3, '45.3', '32.6', 'Donald Trump Handschlag'),
(30, '2020-04-20', 2, '45.2', '21.3', 'Clever fit Mitarbeiter begrüßen'),
(21, '2020-04-20', 2, '57.4', '13.4', 'Kung fu Kenny'),
(27, '2020-04-19', 2, '23.2', '23.34', 'Sicko Mode'),
(28, '2020-04-20', 2, '45.3', '44.2', '500 PS'),
(29, '2020-04-26', 2, '23.4', '34.3', 'Sharan verkauft');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
