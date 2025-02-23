### Setup Instructions

1. Clone the repository.
2. Run `yarn install` command in the terminal to install dependencies.
3. Run `docker-compose up` command to spin up the database and adminer instance.
4. Create `.env` file in the root of the project and copy and paste contents of `.env.example` into `.env` file
5. Delete migrations folder in the prisma directory.
6. Run `yarn db:migrate` command to create and apply migrations.
7. Run `yarn dev` command to start the project.
8. Open the browser and go to http://localhost:3000/api/v1/docs to view the docs.
9. Open the browser and go to http://localhost:8080 to view the Postgres GUI.