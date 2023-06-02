# welcome to flightservice

## PROJECT SETUP
- clone the project on your local
- execute `npm install` on the same path as of your root direcoty pproject
- create `.env` file in the root directory and add the following enviroment vairable
    -   `PORT = 3000`
-  Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": <YOUR DB LOGIN>,
    "password": <YOUR DB PASSWORD>,
    "database": <YOUR DB NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

-   once you are done with the above step do `npx sequelize init` and then `npx db:create`