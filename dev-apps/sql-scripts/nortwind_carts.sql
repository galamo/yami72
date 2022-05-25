CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_cart_idx` (`emp_id`),
  CONSTRAINT `emp_cart` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
