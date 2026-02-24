CREATE DATABASE fashion;
USE fashion;


CREATE TABLE user(
	user_id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL,
	phone_number VARCHAR(25), 
    avatar VARCHAR(150),
    type TINYINT NOT NULL DEFAULT 1, -- '1=user, 2=admin'
    is_confirmed BOOLEAN NOT NULL DEFAULT 0,
    user_is_deleted BOOLEAN NOT NULL DEFAULT 0
    );
    
CREATE TABLE brand (
  brand_id INT PRIMARY KEY AUTO_INCREMENT,
  brand_name VARCHAR(100) NOT NULL UNIQUE,
  image_url VARCHAR(150) 
);

    
CREATE TABLE product (
  product_id INT  PRIMARY KEY AUTO_INCREMENT,
  category varchar(100),
  brand_id INT NOT NULL,
  image_url VARCHAR(150)  NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  description VARCHAR(255),
  price DECIMAL(10,2) NOT NULL,
  product_is_deleted BOOLEAN NOT NULL DEFAULT 0,
  CONSTRAINT fk_brand_1 FOREIGN KEY (brand_id) REFERENCES brand(brand_id) ON DELETE CASCADE
);
    
 
CREATE TABLE wishlist (
  wishlist_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  product_id INT NOT NULL,
 CONSTRAINT fk_user_1 FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
 CONSTRAINT fk_product_1 FOREIGN KEY (product_id) REFERENCES product(product_id) ON DELETE CASCADE
);

INSERT INTO user (name, lastname, email, password, phone_number, avatar, type, is_confirmed) VALUES
('Carlos','Martínez','carlos@mail.com','$2a$10$test','600111222','https://randomuser.me/api/portraits/men/1.jpg',1,1),
('Laura','García','laura@mail.com','$2a$10$test','600222333','https://randomuser.me/api/portraits/women/2.jpg',1,1),
('Daniel','López','daniel@mail.com','$2a$10$test','600333444','https://randomuser.me/api/portraits/men/3.jpg',1,1),
('Ana','Pérez','ana@mail.com','$2a$10$test','600444555','https://randomuser.me/api/portraits/women/4.jpg',1,1),
('Mario','Santos','mario@mail.com','$2a$10$test','600555666','https://randomuser.me/api/portraits/men/5.jpg',1,1),
('Admin','Fashion','admin@mail.com','$2a$10$test','600999888','https://randomuser.me/api/portraits/men/10.jpg',2,1);


INSERT INTO brand (brand_name, image_url) VALUES
('Jack & Jones','https://images.unsplash.com/photo-1521334884684-d80222895322'),
('Vero Moda','https://images.unsplash.com/photo-1490481651871-ab68de25d43d'),
('Only','https://images.unsplash.com/photo-1483985988355-763728e1935b'),
('Selected','https://images.unsplash.com/photo-1512436991641-6745cdb1723f'),
('Name It','https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'),
('Pieces','https://images.unsplash.com/photo-1496747611176-843222e1e57c'),
('Only & Sons','https://images.unsplash.com/photo-1521334884684-d80222895322'),
('Vila','https://images.unsplash.com/photo-1490481651871-ab68de25d43d'),
('Noisy May','https://images.unsplash.com/photo-1483985988355-763728e1935b'),
('JDY','https://images.unsplash.com/photo-1512436991641-6745cdb1723f'),
('Object','https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'),
('Y.A.S','https://images.unsplash.com/photo-1496747611176-843222e1e57c');


INSERT INTO product (category, brand_id, image_url, product_name, description, price) VALUES

-- JACK & JONES (1)
('T-Shirt',1,'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab','Basic Cotton Tee','Classic soft cotton t-shirt',19.99),
('Jeans',1,'https://images.unsplash.com/photo-1542272604-787c3835535d','Slim Fit Jeans','Slim fit denim jeans',59.99),
('Jacket',1,'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f','Denim Jacket','Classic blue denim jacket',89.99),
('Shirt',1,'https://images.unsplash.com/photo-1520975916090-3105956dac38','Oxford Shirt','Premium oxford cotton shirt',49.99),
('Shoes',1,'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c','Leather Sneakers','Minimal leather sneakers',79.99),
('T-Shirt',1,'https://images.unsplash.com/photo-1618354691229-88d47f285158','Graphic Tee','Printed graphic t-shirt',24.99),
('Jeans',1,'https://images.unsplash.com/photo-1582552938357-32b906df40cb','Straight Jeans','Classic straight leg jeans',64.99),
('Jacket',1,'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9','Winter Parka','Warm padded parka jacket',129.99),

-- VERO MODA (2)
('Dress',2,'https://images.unsplash.com/photo-1539008835657-9e8e9680c956','Floral Summer Dress','Light floral dress',59.99),
('Dress',2,'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e','Elegant Midi Dress','Elegant midi cut',69.99),
('T-Shirt',2,'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb','Soft Cotton Tee','Soft premium cotton',22.99),
('Shirt',2,'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7','Office Blouse','Formal office blouse',45.99),
('Jacket',2,'https://images.unsplash.com/photo-1495121605193-b116b5b09a21','Light Blazer','Elegant casual blazer',89.99),
('Shoes',2,'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c','Classic Heels','Comfort heels',79.99),
('Jeans',2,'https://images.unsplash.com/photo-1582552938357-32b906df40cb','High Waist Jeans','High waist skinny jeans',62.99),
('Dress',2,'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446','Cocktail Dress','Elegant evening dress',79.99),

-- ONLY (3)
('T-Shirt',3,'https://images.unsplash.com/photo-1520974735194-6c5b4a3c9c31','Oversize Tee','Relaxed oversized tee',25.99),
('Jeans',3,'https://images.unsplash.com/photo-1582552938357-32b906df40cb','Mom Fit Jeans','Vintage mom fit jeans',59.99),
('Jacket',3,'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9','Puffer Jacket','Warm puffer jacket',109.99),
('Dress',3,'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e','Casual Dress','Everyday casual dress',49.99),
('Shoes',3,'https://images.unsplash.com/photo-1514989940723-e8e51635b782','Sport Sneakers','Comfort daily sneakers',69.99),
('Shirt',3,'https://images.unsplash.com/photo-1512436991641-6745cdb1723f','Checked Shirt','Checked cotton shirt',44.99),
('T-Shirt',3,'https://images.unsplash.com/photo-1618354691229-88d47f285158','Logo Tee','Minimal logo t-shirt',27.99),
('Jeans',3,'https://images.unsplash.com/photo-1542272604-787c3835535d','Skinny Jeans','Stretch skinny jeans',64.99),

-- SELECTED (4)
('Shirt',4,'https://images.unsplash.com/photo-1520975916090-3105956dac38','Formal Shirt','Premium formal shirt',69.99),
('T-Shirt',4,'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab','Luxury Tee','Premium cotton tee',39.99),
('Jacket',4,'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f','Tailored Jacket','Tailored fit jacket',129.99),
('Jeans',4,'https://images.unsplash.com/photo-1542272604-787c3835535d','Dark Denim','Dark slim jeans',79.99),
('Shoes',4,'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c','Leather Shoes','Premium leather shoes',109.99),
('Shirt',4,'https://images.unsplash.com/photo-1512436991641-6745cdb1723f','Linen Shirt','Breathable linen shirt',74.99),

-- NAME IT (5)
('T-Shirt',5,'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb','Kids Tee','Kids cotton t-shirt',14.99),
('Jeans',5,'https://images.unsplash.com/photo-1582552938357-32b906df40cb','Kids Jeans','Comfort kids jeans',29.99),
('Jacket',5,'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9','Kids Jacket','Warm winter jacket',59.99),
('Dress',5,'https://images.unsplash.com/photo-1539008835657-9e8e9680c956','Kids Dress','Colorful kids dress',39.99),
('Shoes',5,'https://images.unsplash.com/photo-1514989940723-e8e51635b782','Kids Sneakers','Soft sole sneakers',34.99),
('Shirt',5,'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7','Kids Shirt','Formal kids shirt',29.99),

-- PIECES (6)
('Dress',6,'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446','Evening Dress','Elegant night dress',89.99),
('T-Shirt',6,'https://images.unsplash.com/photo-1618354691229-88d47f285158','Basic Tee','Everyday tee',21.99),
('Shoes',6,'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c','Trendy Sneakers','Urban sneakers',79.99),
('Jacket',6,'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9','Urban Jacket','Modern jacket',99.99),
('Jeans',6,'https://images.unsplash.com/photo-1582552938357-32b906df40cb','Wide Jeans','Wide leg jeans',69.99),
('Shirt',6,'https://images.unsplash.com/photo-1512436991641-6745cdb1723f','Satin Blouse','Elegant satin blouse',59.99),

-- ONLY & SONS (brand_id 7)
('T-Shirt', 7, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Basic Cotton Tee', 'Soft cotton t-shirt for everyday wear', 24.99),
('Jeans', 7, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Slim Fit Jeans', 'Comfortable slim fit jeans', 59.99),
('Jacket', 7, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', 'Denim Jacket', 'Classic blue denim jacket', 89.99),
('Shirt', 7, 'https://images.unsplash.com/photo-1520975916090-3105956dac38', 'Oxford Shirt', 'Premium oxford cotton shirt', 49.99),
('Shoes', 7, 'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c', 'Leather Sneakers', 'Minimalist leather sneakers', 79.99),
('Dress', 7, 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', 'Casual Dress', 'Light and comfy casual dress', 59.99),
('T-Shirt', 7, 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', 'Graphic Tee', 'Printed graphic t-shirt', 27.99),
('Jeans', 7, 'https://images.unsplash.com/photo-1542272604-787c3835535d', 'Straight Jeans', 'Classic straight-leg jeans', 64.99),

-- VILA (brand_id 8)
('Dress', 8, 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956', 'Elegant Evening Dress', 'Elegant semi-formal evening dress', 89.99),
('T-Shirt', 8, 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', 'Cotton Tee', 'Soft premium cotton tee', 29.99),
('Jacket', 8, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', 'Leather Jacket', 'Classic fitted leather jacket', 129.99),
('Shoes', 8, 'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c', 'Heeled Boots', 'Elegant heeled ankle boots', 99.99),
('Jeans', 8, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Skinny Jeans', 'Slim fit denim jeans', 64.99),
('Shirt', 8, 'https://images.unsplash.com/photo-1520975916090-3105956dac38', 'Silk Blouse', 'Soft silk blouse', 59.99),
('Dress', 8, 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956', 'Cocktail Dress', 'Chic cocktail dress', 79.99),
('T-Shirt', 8, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Logo Tee', 'Minimal logo t-shirt', 25.99),

-- NOISY MAY (brand_id 9)
('T-Shirt', 9, 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', 'Oversize Tee', 'Relaxed oversized tee', 25.99),
('Jeans', 9, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Mom Fit Jeans', 'Vintage mom fit jeans', 59.99),
('Jacket', 9, 'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9', 'Puffer Jacket', 'Warm puffer jacket', 109.99),
('Dress', 9, 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', 'Casual Dress', 'Everyday casual dress', 49.99),
('Shoes', 9, 'https://images.unsplash.com/photo-1514989940723-e8e51635b782', 'Sport Sneakers', 'Comfort daily sneakers', 69.99),
('Shirt', 9, 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f', 'Checked Shirt', 'Checked cotton shirt', 44.99),
('T-Shirt', 9, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Logo Tee', 'Minimal logo t-shirt', 27.99),
('Jeans', 9, 'https://images.unsplash.com/photo-1542272604-787c3835535d', 'Skinny Jeans', 'Stretch skinny jeans', 64.99),

-- JDY (brand_id 10)
('Shirt', 10, 'https://images.unsplash.com/photo-1520975916090-3105956dac38', 'Formal Shirt', 'Premium formal shirt', 69.99),
('T-Shirt', 10, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', 'Luxury Tee', 'Premium cotton tee', 39.99),
('Jacket', 10, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', 'Tailored Jacket', 'Tailored fit jacket', 129.99),
('Jeans', 10, 'https://images.unsplash.com/photo-1542272604-787c3835535d', 'Dark Denim', 'Dark slim jeans', 79.99),
('Shoes', 10, 'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c', 'Leather Shoes', 'Premium leather shoes', 109.99),
('Shirt', 10, 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f', 'Linen Shirt', 'Breathable linen shirt', 74.99),
('T-Shirt', 10, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Kids Tee', 'Kids cotton t-shirt', 14.99),
('Jeans', 10, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Kids Jeans', 'Comfort kids jeans', 29.99),

-- OBJECT (brand_id 11)
('Dress', 11, 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956', 'Evening Dress', 'Elegant night dress', 89.99),
('T-Shirt', 11, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Basic Tee', 'Everyday tee', 21.99),
('Shoes', 11, 'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c', 'Trendy Sneakers', 'Urban sneakers', 79.99),
('Jacket', 11, 'https://images.unsplash.com/photo-1521223890151-0e8c9c5b50c9', 'Urban Jacket', 'Modern jacket', 99.99),
('Jeans', 11, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Wide Jeans', 'Wide leg jeans', 69.99),
('Shirt', 11, 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f', 'Satin Blouse', 'Elegant satin blouse', 59.99),
('Dress', 11, 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', 'Cocktail Dress', 'Chic cocktail dress', 79.99),
('T-Shirt', 11, 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', 'Logo Tee', 'Minimal logo t-shirt', 24.99),

-- Y.A.S (brand_id 12)
('Shirt', 12, 'https://images.unsplash.com/photo-1520975916090-3105956dac38', 'Performance Shirt', 'Technical fabric shirt', 79.99),
('T-Shirt', 12, 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb', 'Sport Tee', 'Breathable sport t-shirt', 29.99),
('Jacket', 12, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f', 'Windbreaker', 'Lightweight windbreaker', 99.99),
('Jeans', 12, 'https://images.unsplash.com/photo-1582552938357-32b906df40cb', 'Slim Fit Jeans', 'Stretch slim fit jeans', 64.99),
('Shoes', 12, 'https://images.unsplash.com/photo-1528701800489-20be9c9c1b9c', 'Running Shoes', 'Light running sneakers', 79.99),
('Dress', 12, 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e', 'Casual Dress', 'Everyday casual dress', 59.99),
('Shirt', 12, 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f', 'Oxford Shirt', 'Premium oxford shirt', 69.99),
('T-Shirt', 12, 'https://images.unsplash.com/photo-1618354691229-88d47f285158', 'Logo Tee', 'Minimal logo t-shirt', 24.99);



