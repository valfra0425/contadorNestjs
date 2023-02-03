# contadorNestjs

Este é um projeto de um contador que utiliza Nestjs com os recursos de sse(Server Send Event) e cahe redis. Para iniciar o projeto deve primeiro iniciar o redis
no docker com um "docker-composer up" e mudar as variaveis de acesso ao banco em app.module, e só assim iniciar o nest com "npm run start:dev".

O projeto tem a rota contador com get(pega um contador), post(cria um contador zerado), put(incrementa em 1 o valor do contador) e sse(está rota faz o mesmo do get só que atualiza a cada 1 segundo). Além da rota contador tem a http://localhost:3000/render/1, está rota utiliza o sse para exibir um valor em uma pagina html que atualiza automaticamente. está rota utiliza o id do contador que vc deseja apos o /render/.
