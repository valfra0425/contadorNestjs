# contadorNestjs

Este é um projeto de um contador que utiliza Nestjs com os recursos de sse(Server Send Event) e cahe redis. Para iniciar o projeto deve primeiro iniciar o redis
no docker com um "docker-composer up" e só assim iniciar o nest com "npm run start:dev".

O projeto tem 3 rotas, a rota de post que cria um contador,  a rota get que busca um contador e atualiza a cada segundo com o sse e o put que atualiza o contador
em 1. O projeto utiliza cache do redis no get e no put.
