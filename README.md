# Mr. Broccoli - E-Commerce app
## The idea of the project:
***Mr. Broccoli*** is an online fruit & vegetables grocery ordering app. Made as a final project for the WEPPO (Chosen elements of practical software development) course. <br>
The primary implementation uses **Postgres** Database to store the data, **React** for frontend and **Express.js** for backend.

## Application allows you to:
*Without account:*
1. Browse through products: search by name or tags
2. Add products to cart
3. See what is in the cart
4. Delete products from cart or change their weight
5. Registrate <br>

*With account:* <br>
All of the above +
1. Log in
2. Order products
3. See admin panel (with the right permissions)

![](https://i.imgur.com/O0JmfFN.gif)
<img width="1064" alt="image" src="https://user-images.githubusercontent.com/74939070/217286955-09135e3b-2f6d-4ccd-b2ef-3956886f478f.png">
<img width="1057" alt="image" src="https://user-images.githubusercontent.com/74939070/217286100-3b17f5f1-0a78-4c36-815a-0134a86a71b3.png">
<img width="1073" alt="image" src="https://user-images.githubusercontent.com/74939070/217287393-9d377eb3-a229-4d31-a52b-becb05a0dd0e.png">
<img width="1063" alt="image" src="https://user-images.githubusercontent.com/74939070/217287505-ae66ee03-2b23-4344-b383-5b38942eb375.png">
<img width="1072" alt="image" src="https://user-images.githubusercontent.com/74939070/217287577-7f00d0cd-4ac9-4344-891c-61d4ab384ea7.png">

## Install dependencies:
First, **install Postgres** <br>
**For Linux:**
`sudo apt install postgresql` <br>
Then write 

<code>sudo service postgresql start
sudo passwd postgres
sudo -u postgres psql
CREATE DATABASE shopdb</code><br>

**For Windows:**
manual installation [here](https://www.postgresql.org/download/windows/) <br>
After that please create shopdb database manually.

Then, **install all other packages**:<br>
Run this command `npm install` in the project root directory as well as in /greengrocers.

## Start the app:
`npm start` in /greengrocers to start frontend server and <br>
`npm start` in / to start backend


