-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 05 fév. 2020 à 16:18
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `dev_blog`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id_article` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(70) NOT NULL,
  `intro` text NOT NULL,
  `content` text NOT NULL,
  `date_add` date DEFAULT NULL,
  `date_update` date DEFAULT NULL,
  PRIMARY KEY (`id_article`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id_article`, `title`, `intro`, `content`, `date_add`, `date_update`) VALUES
(3, 'Titre 1', 'Intro 1 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ', '&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Section 1.10.32 du &quot;De Finibus Bonorum et Malorum&quot; de Ciceron (45 av. J.-C.)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto &lt;strong&gt;beatae vitae dicta sunt explicabo. Nemo eni&lt;/strong&gt;m ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,&lt;/p&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;&lt;/p&gt;\r\n&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Traduction de H. Rackham (1914)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; text-align: justify; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff;&quot;&gt;&quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyo&lt;em&gt;ne who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some grea&lt;/em&gt;t pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;&lt;/p&gt;', NULL, NULL),
(4, 'Titre 2', 'INTRO 2 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ', '&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Section 1.10.32 du &quot;De Finibus Bonorum et Malorum&quot; de Ciceron (45 av. J.-C.)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto&amp;nbsp;&lt;strong&gt;beatae vitae dicta sunt explicabo. Nemo eni&lt;/strong&gt;m ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,&lt;/p&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;&lt;/p&gt;\r\n&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Traduction de H. Rackham (1914)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; text-align: justify; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff;&quot;&gt;&quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyo&lt;em&gt;ne who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some grea&lt;/em&gt;t pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;&lt;/p&gt;', NULL, NULL),
(5, 'Titre 3', 'INTRO 3 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ', '&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Section 1.10.32 du &quot;De Finibus Bonorum et Malorum&quot; de Ciceron (45 av. J.-C.)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto&amp;nbsp;&lt;strong&gt;beatae vitae dicta sunt explicabo. Nemo eni&lt;/strong&gt;m ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,&lt;/p&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;&lt;/p&gt;\r\n&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Traduction de H. Rackham (1914)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; text-align: justify; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff;&quot;&gt;&quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyo&lt;em&gt;ne who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some grea&lt;/em&gt;t pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;&lt;/p&gt;', NULL, NULL),
(6, 'Titre 4', 'INTRO 4 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur ', '&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Section 1.10.32 du &quot;De Finibus Bonorum et Malorum&quot; de Ciceron (45 av. J.-C.)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;&quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto&amp;nbsp;&lt;strong&gt;beatae vitae dicta sunt explicabo. Nemo eni&lt;/strong&gt;m ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,&lt;/p&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff; text-align: center;&quot;&gt;adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&quot;&lt;/p&gt;\r\n&lt;h3 style=&quot;margin: 15px 0px; padding: 0px; font-size: 14px; font-family: &#39;Open Sans&#39;, Arial, sans-serif; background-color: #ffffff;&quot;&gt;Traduction de H. Rackham (1914)&lt;/h3&gt;\r\n&lt;p style=&quot;margin: 0px 0px 15px; padding: 0px; text-align: justify; font-family: &#39;Open Sans&#39;, Arial, sans-serif; font-size: 14px; background-color: #ffffff;&quot;&gt;&quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyo&lt;em&gt;ne who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some grea&lt;/em&gt;t pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;&lt;/p&gt;', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(2) UNSIGNED NOT NULL DEFAULT '0',
  `verified` tinyint(1) UNSIGNED NOT NULL DEFAULT '0',
  `resettable` tinyint(1) UNSIGNED NOT NULL DEFAULT '1',
  `roles_mask` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `registered` int(10) UNSIGNED NOT NULL,
  `last_login` int(10) UNSIGNED DEFAULT NULL,
  `force_logout` mediumint(7) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`, `status`, `verified`, `resettable`, `roles_mask`, `registered`, `last_login`, `force_logout`) VALUES
(8, 'tristan@diabolo-web.com', '$2y$10$bMoqK.9ZyKpW2KLAByrvmOV4dPL.B7N8PXAH56aYur2LhdeO.2BzW', 'diabolo', 0, 1, 1, 0, 1580486829, 1580486851, 1),
(7, 'tristan.florin@gmail.com', '$2y$10$Oc35YTR6l/vD/2bMV8.Rb.EssXXyoyF/iY6SI6vhttsQjukcyMHim', 'Florkin', 0, 1, 1, 0, 1579795287, 1580469403, 7);

-- --------------------------------------------------------

--
-- Structure de la table `users_confirmations`
--

DROP TABLE IF EXISTS `users_confirmations`;
CREATE TABLE IF NOT EXISTS `users_confirmations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `email` varchar(249) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selector` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `selector` (`selector`),
  KEY `email_expires` (`email`,`expires`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users_remembered`
--

DROP TABLE IF EXISTS `users_remembered`;
CREATE TABLE IF NOT EXISTS `users_remembered` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user` int(10) UNSIGNED NOT NULL,
  `selector` varchar(24) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `selector` (`selector`),
  KEY `user` (`user`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users_resets`
--

DROP TABLE IF EXISTS `users_resets`;
CREATE TABLE IF NOT EXISTS `users_resets` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user` int(10) UNSIGNED NOT NULL,
  `selector` varchar(20) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `token` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `selector` (`selector`),
  KEY `user_expires` (`user`,`expires`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users_throttling`
--

DROP TABLE IF EXISTS `users_throttling`;
CREATE TABLE IF NOT EXISTS `users_throttling` (
  `bucket` varchar(44) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `tokens` float UNSIGNED NOT NULL,
  `replenished_at` int(10) UNSIGNED NOT NULL,
  `expires_at` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`bucket`),
  KEY `expires_at` (`expires_at`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
