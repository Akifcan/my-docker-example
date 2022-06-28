`docker compose -f .\docker-compose.yml -f .\docker-compose.prod.yml up -d --build`

`docker ps`

`docker image rm :id -f`

`docker exec -it :id bash`

`docker run -v C:\Users\user\Desktop\express-calismalari\dock\:/app:ro -d -p 3000:3000 --env-file ./.env  node-app-image`

`docker build -t node-app-image .`

`docker logs 831e934d98cb -f`

`docker tag imagename:latest akifcan/reponame:tagname`

