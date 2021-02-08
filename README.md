Node.js Practice

$ docker-compose up -d
$ docker-compose run --rm app npx sequelize db:migrate
$ docker-compose run --rm app npx sequelize db:seed:all
$ docker-compose down -v
