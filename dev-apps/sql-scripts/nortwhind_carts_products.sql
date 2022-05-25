CREATE TABLE `northwind`.`carts_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cartId` INT NOT NULL,
  `productId` INT NOT NULL,
  `created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `cart_id_idx` (`cartId` ASC) VISIBLE,
  INDEX `product_id_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `cart_id`
    FOREIGN KEY (`cartId`)
    REFERENCES `northwind`.`carts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `product_id`
    FOREIGN KEY (`productId`)
    REFERENCES `northwind`.`products` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
