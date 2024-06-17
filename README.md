### Getting started
before run the appilcation set the .env file for the following information
```
MYSQL_USER = root
MYSQL_PASSWORD = 
MYSQL_DB_NAME = staffManagement
MYSQL_HOST = localhost
MYSQL_PORT =
```
### Run application 

After clone the project run the following command 
```
npm install 

```
after install in the all package run the develpment application using below cammand

```
npm run watch 
```
or
```
npm run start
```

## Migration with Sequelize

```
npx sequelize-cli init
```
This will create following folders

 - `config`, contains config file, which tells CLI how to connect with database
 - `models`, contains all models for your project
 - `migrations`, contains all migration files
 - `seeders`, contains all seed files

### Table Migration

To create a new migration file, it’s recommended to use the sequelize-cli. This will simplify the process and ensure that the file is created correctly. To create a new migration file using the sequelize-cli, use the following command:


```
npx sequelize-cli migration:generate --name table-name
```

#### Finally run the db migration:
```
npm run migrate
```
 