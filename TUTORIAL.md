Чтобы запустить приложение необходимо установить:
- docker
- docker compose
- yarn + nodejs
- react
- git

1. Клонируется репозиторий

```
git clone https://github.com/RomerooIT/woodworking-company
```
2. Переход в папку /backend
В ней запускаюся контейнеры в фоновом режиме

```
docker compose up -d
```
3. В этой же папке /backend запускается сам бэкенд командой _yarn run start:dev_

```
romanknyrko45_gmail_com@test-vm:~/woodworking-company/backend$ yarn run start:dev &
[1] 6167
yarn run v1.22.22
warning ../package.json: No license field
$ nest start --watch

 Info  Webpack is building your sources...

webpack 5.74.0 compiled successfully in 3864 ms
Type-checking in progress...
(node:6217) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [NestFactory] Starting Nest application...
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +270ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] MailerModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] RedisModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] RedisCoreModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] MailerCoreModule dependencies initialized +2ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] JwtModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] DiscoveryModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] AppModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] EventEmitterModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +368ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] ProductModule dependencies initialized +3ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] WorkerModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] SupportModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] RequestModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] UsersModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] SessionModule dependencies initialized +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [InstanceLoader] AuthModule dependencies initialized +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] UsersController {/api/users}: +117ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/users/:userId, GET} route +4ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/users/:name/username, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] AuthController {/api/auth}: +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/auth/sign-up, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/auth/verify, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/auth/sign-in, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/auth/sign-out, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/auth/refresh, POST} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] SessionController {/api/sessions}: +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/sessions, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/sessions/:id, DELETE} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/sessions, DELETE} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] RequestController {/api/request}: +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request, POST} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request/getUserRequests, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request/getAllRequests, GET} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request/putForUsers, PUT} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request/putForAdmins, PUT} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/request/:id, DELETE} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] ProductController {/api/product}: +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/product, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/product, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/product/:id, GET} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/product/:id, PUT} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/product/:id, DELETE} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] SupportController {/api/support}: +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/support/createMessage, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/support/getUserSupportDialog, GET} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/support/createMessageToUser, POST} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/support/getUserIdsWithActiveChat, GET} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RoutesResolver] WorkerController {/api/worker}: +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/worker, POST} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/worker, GET} route +1ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/worker/:id, PUT} route +0ms
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [RouterExplorer] Mapped {/api/worker/:id, DELETE} route +1ms
[]
[Nest] 6217  - 10/01/2024, 5:20:08 PM     LOG [NestApplication] Nest application successfully started +35ms
Server listens to https://127.0.0.1:7891
No errors found
```

4. Далее необходимо запустить фронтенд
Выходим из папки backend и заходим в папку /client
Там необходимо запустить команду
npm install - установить зависимости
npm audit fix --force
npm start

если не работает:

Для Linux/macOS выполните:

```
export NODE_OPTIONS=--openssl-legacy-provider
```
Для Windows выполните:

```
set NODE_OPTIONS=--openssl-legacy-provider
```

Потом заного запустить npm start
