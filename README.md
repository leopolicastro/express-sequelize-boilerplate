# Express Sequelize Template

## Requirements

- Node.js
- PostgreSQL

## Docs

- [Sequelize ORM](https://sequelize.org/v5/manual/migrations.html)
- [Express](https://expressjs.com/)

## Installation and configuration

```bash
git clone
cd <nameofapp>
yarn
cp .env.sample .env
# Fill out environment variables
```

---

- Make sure your PostgreSQL server is running, then in the terminal run:

```
psql
create database <dotenv db_name>
Control + D
yarn dev
```

---

#### After you have generated migrations and or seed files run the respective commands.

```
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

[Heroku](https://id.heroku.com/login)

```
heroku run sequelize db:migrate
heroku run sequelize db:seed:all
```
