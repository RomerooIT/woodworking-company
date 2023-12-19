/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/index.ts":
/*!*************************!*\
  !*** ./config/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./interfaces */ "./config/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./loaders */ "./config/loaders/index.ts"), exports);


/***/ }),

/***/ "./config/interfaces/app-config.interface.ts":
/*!***************************************************!*\
  !*** ./config/interfaces/app-config.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./config/interfaces/config.interface.ts":
/*!***********************************************!*\
  !*** ./config/interfaces/config.interface.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./config/interfaces/file-storage-config.interface.ts":
/*!************************************************************!*\
  !*** ./config/interfaces/file-storage-config.interface.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./config/interfaces/index.ts":
/*!************************************!*\
  !*** ./config/interfaces/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./config.interface */ "./config/interfaces/config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./app-config.interface */ "./config/interfaces/app-config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./postgres-config.interface */ "./config/interfaces/postgres-config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./jwt-config.interface */ "./config/interfaces/jwt-config.interface.ts"), exports);
__exportStar(__webpack_require__(/*! ./file-storage-config.interface */ "./config/interfaces/file-storage-config.interface.ts"), exports);


/***/ }),

/***/ "./config/interfaces/jwt-config.interface.ts":
/*!***************************************************!*\
  !*** ./config/interfaces/jwt-config.interface.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./config/interfaces/postgres-config.interface.ts":
/*!********************************************************!*\
  !*** ./config/interfaces/postgres-config.interface.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./config/loaders/app-config.loader.ts":
/*!*********************************************!*\
  !*** ./config/loaders/app-config.loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadAppConfig = void 0;
const fs_1 = __webpack_require__(/*! fs */ "fs");
const path_1 = __webpack_require__(/*! path */ "path");
const loadAppConfig = () => ({
    app: {
        host: process.env.APP_HOST,
        port: Number(process.env.APP_PORT),
        protocol: process.env.APP_PROTOCOL,
        ssl: {
            key: (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '..', 'ssl', 'key.pem'), 'utf8'),
            cert: (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '..', 'ssl', 'cert.pem'), 'utf8'),
        },
    },
});
exports.loadAppConfig = loadAppConfig;


/***/ }),

/***/ "./config/loaders/config.loader.ts":
/*!*****************************************!*\
  !*** ./config/loaders/config.loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loaders = void 0;
const app_config_loader_1 = __webpack_require__(/*! ./app-config.loader */ "./config/loaders/app-config.loader.ts");
const file_storage_config_loader_1 = __webpack_require__(/*! ./file-storage-config.loader */ "./config/loaders/file-storage-config.loader.ts");
const jwt_config_loader_1 = __webpack_require__(/*! ./jwt-config.loader */ "./config/loaders/jwt-config.loader.ts");
const postgres_config_loader_1 = __webpack_require__(/*! ./postgres-config.loader */ "./config/loaders/postgres-config.loader.ts");
exports.loaders = [
    app_config_loader_1.loadAppConfig,
    postgres_config_loader_1.loadPostgresConfig,
    jwt_config_loader_1.loadJwtConfig,
    file_storage_config_loader_1.loadFileStorageConfig,
];


/***/ }),

/***/ "./config/loaders/file-storage-config.loader.ts":
/*!******************************************************!*\
  !*** ./config/loaders/file-storage-config.loader.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadFileStorageConfig = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
const loadFileStorageConfig = () => ({
    filestorage: {
        pathToDir: (0, path_1.resolve)(process.cwd(), 'storage'),
    },
});
exports.loadFileStorageConfig = loadFileStorageConfig;


/***/ }),

/***/ "./config/loaders/index.ts":
/*!*********************************!*\
  !*** ./config/loaders/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./config.loader */ "./config/loaders/config.loader.ts"), exports);


/***/ }),

/***/ "./config/loaders/jwt-config.loader.ts":
/*!*********************************************!*\
  !*** ./config/loaders/jwt-config.loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadJwtConfig = void 0;
const loadJwtConfig = () => ({
    jwt: {
        accessTokenExpiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN),
        accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
        refreshTokenExpiresIn: Number(process.env.REFRESH_TOKEN_EXPIRES_IN),
        refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY,
        emailTokenExpiresIn: Number(process.env.EMAIL_TOKEN_EXPIRES_IN),
        emailTokenSecretKey: process.env.EMAIL_TOKEN_SECRET_KEY,
    },
});
exports.loadJwtConfig = loadJwtConfig;


/***/ }),

/***/ "./config/loaders/postgres-config.loader.ts":
/*!**************************************************!*\
  !*** ./config/loaders/postgres-config.loader.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadPostgresConfig = void 0;
const loadPostgresConfig = () => ({
    postgres: {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        password: process.env.POSTGRES_PASSWORD,
        username: process.env.POSTGRES_USER,
    },
});
exports.loadPostgresConfig = loadPostgresConfig;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const config_2 = __webpack_require__(/*! ../config */ "./config/index.ts");
const middlewares_1 = __webpack_require__(/*! ./auth/middlewares */ "./src/auth/middlewares/index.ts");
const users_1 = __webpack_require__(/*! ./users */ "./src/users/index.ts");
const auth_1 = __webpack_require__(/*! ./auth */ "./src/auth/index.ts");
const user_entity_1 = __webpack_require__(/*! ./users/entity/user.entity */ "./src/users/entity/user.entity.ts");
const auth_entity_1 = __webpack_require__(/*! ./auth/entity/auth.entity */ "./src/auth/entity/auth.entity.ts");
const ioredis_1 = __webpack_require__(/*! @nestjs-modules/ioredis */ "@nestjs-modules/ioredis");
const refreshTokens_entity_1 = __webpack_require__(/*! ./auth/entity/refreshTokens.entity */ "./src/auth/entity/refreshTokens.entity.ts");
const session_entity_1 = __webpack_require__(/*! ./sessions/session.entity */ "./src/sessions/session.entity.ts");
const session_module_1 = __webpack_require__(/*! ./sessions/session.module */ "./src/sessions/session.module.ts");
const product_entity_1 = __webpack_require__(/*! ./product/product.entity */ "./src/product/product.entity.ts");
const support_entity_1 = __webpack_require__(/*! ./support/support.entity */ "./src/support/support.entity.ts");
const worker_entity_1 = __webpack_require__(/*! ./worker/worker.entity */ "./src/worker/worker.entity.ts");
const request_entity_1 = __webpack_require__(/*! ./request/request.entity */ "./src/request/request.entity.ts");
const request_module_1 = __webpack_require__(/*! ./request/request.module */ "./src/request/request.module.ts");
const product_module_1 = __webpack_require__(/*! ./product/product.module */ "./src/product/product.module.ts");
const support_module_1 = __webpack_require__(/*! ./support/support.module */ "./src/support/support.module.ts");
const worker_module_1 = __webpack_require__(/*! ./worker/worker.module */ "./src/worker/worker.module.ts");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(middlewares_1.JwtMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: config_2.loaders,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (config) => {
                    const { host, password, port, username } = config.get('postgres');
                    return {
                        synchronize: true,
                        port,
                        host,
                        type: 'postgres',
                        migrations: [],
                        entities: [
                            refreshTokens_entity_1.RefreshTokenEntity,
                            session_entity_1.SessionEntity,
                            user_entity_1.UserEntity,
                            auth_entity_1.AuthEntity,
                            request_entity_1.RequestEntity,
                            product_entity_1.ProductEntity,
                            support_entity_1.SupportEntity,
                            worker_entity_1.WorkerEntity
                        ],
                        username,
                        password,
                    };
                },
                inject: [config_1.ConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot({
                global: true,
                newListener: true,
                removeListener: true,
                verboseMemoryLeak: true,
            }),
            users_1.UsersModule,
            auth_1.AuthModule,
            jwt_1.JwtModule,
            session_module_1.SessionModule,
            request_module_1.RequestModule,
            product_module_1.ProductModule,
            support_module_1.SupportModule,
            worker_module_1.WorkerModule,
            ioredis_1.RedisModule.forRoot({
                config: {
                    url: 'redis://localhost:8379',
                },
            }),
        ],
        providers: [middlewares_1.JwtMiddleware],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/auth/auth.module.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const controller_1 = __webpack_require__(/*! ./controller */ "./src/auth/controller/index.ts");
const repository_1 = __webpack_require__(/*! ./repository */ "./src/auth/repository/index.ts");
const auth_repository_1 = __webpack_require__(/*! ./repository/auth.repository */ "./src/auth/repository/auth.repository.ts");
const mailer_2 = __webpack_require__(/*! ./mailer */ "./src/auth/mailer/index.ts");
const middlewares_1 = __webpack_require__(/*! ./middlewares */ "./src/auth/middlewares/index.ts");
const users_1 = __webpack_require__(/*! ../users */ "./src/users/index.ts");
const path_1 = __webpack_require__(/*! path */ "path");
const refresh_tokens_repository_1 = __webpack_require__(/*! ./repository/refresh-tokens.repository */ "./src/auth/repository/refresh-tokens.repository.ts");
const session_module_1 = __webpack_require__(/*! ../sessions/session.module */ "./src/sessions/session.module.ts");
let AuthModule = class AuthModule {
    configure(consumer) {
        consumer.apply(middlewares_1.RefreshJwtMiddleware).forRoutes('*');
    }
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [controller_1.AuthController],
        providers: [
            repository_1.AuthService,
            auth_repository_1.AuthRepository,
            mailer_2.EmailService,
            refresh_tokens_repository_1.RefreshTokensRepository,
        ],
        imports: [
            users_1.UsersModule,
            session_module_1.SessionModule,
            jwt_1.JwtModule,
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'igrakkaunt@gmail.com',
                        pass: 'nbcroowkjsdyewxd',
                    },
                },
                defaults: {
                    from: '"Gallery Support',
                },
                template: {
                    dir: (0, path_1.resolve)(process.cwd(), 'templates'),
                    adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/auth/controller/auth.controller.ts":
/*!************************************************!*\
  !*** ./src/auth/controller/auth.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const express_1 = __webpack_require__(/*! express */ "express");
const repository_1 = __webpack_require__(/*! ../repository */ "./src/auth/repository/index.ts");
const core_1 = __webpack_require__(/*! ../core */ "./src/auth/core/index.ts");
const refresh_token_guard_1 = __webpack_require__(/*! ../guards/refresh-token.guard */ "./src/auth/guards/refresh-token.guard.ts");
const inputs_1 = __webpack_require__(/*! ./inputs */ "./src/auth/controller/inputs/index.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async singUp(input) {
        await this.authService.signUp(input);
    }
    async verifyEmail(token) {
        await this.authService.verifyEmail({ token });
        return;
    }
    async singIn(input, response) {
        const { data } = await this.authService.singIn(input);
        const { sessionId, refreshToken } = data;
        this.setSessionId(response, sessionId);
        this.setRefreshToken(response, refreshToken);
        return { refreshToken: refreshToken };
    }
    async signOut(response, request) {
        const { id, sessionId } = request.refresh;
        await this.authService.signOut({
            sessionId,
            userId: id,
        });
        this.clearCookies(response);
    }
    async refresh(response, request) {
        const { refreshToken } = request.refresh;
        const { data } = await this.authService.refresh({
            refreshToken,
        });
        this.setSessionId(response, data.sessionId);
        this.setRefreshToken(response, data.refreshToken);
        return data.refreshToken;
    }
    setRefreshToken(response, refreshToken) {
        response.cookie(core_1.REFRESH_TOKEN_COOKIE_NAME_TOKEN, refreshToken);
    }
    setSessionId(response, sessionId) {
        response.cookie(core_1.SESSION_ID_COOKIE_NAME_TOKEN, sessionId);
    }
    clearCookies(response) {
        response.clearCookie(core_1.REFRESH_TOKEN_COOKIE_NAME_TOKEN);
        response.clearCookie(core_1.SESSION_ID_COOKIE_NAME_TOKEN);
    }
};
__decorate([
    (0, common_1.Post)('/sign-up'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof inputs_1.UserSignUpInput !== "undefined" && inputs_1.UserSignUpInput) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singUp", null);
__decorate([
    (0, swagger_1.ApiExcludeEndpoint)(),
    (0, common_1.Get)('/verify'),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('/sign-in'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof inputs_1.UserSignInInput !== "undefined" && inputs_1.UserSignInInput) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "singIn", null);
__decorate([
    (0, common_1.Post)('/sign-out'),
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object, typeof (_f = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, common_1.Post)('/refresh'),
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _g : Object, typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.AuthService !== "undefined" && repository_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./src/auth/controller/index.ts":
/*!**************************************!*\
  !*** ./src/auth/controller/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.controller */ "./src/auth/controller/auth.controller.ts"), exports);


/***/ }),

/***/ "./src/auth/controller/inputs/index.ts":
/*!*********************************************!*\
  !*** ./src/auth/controller/inputs/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user-sign-up.input */ "./src/auth/controller/inputs/user-sign-up.input.ts"), exports);
__exportStar(__webpack_require__(/*! ./user-sign-in.input */ "./src/auth/controller/inputs/user-sign-in.input.ts"), exports);


/***/ }),

/***/ "./src/auth/controller/inputs/user-sign-in.input.ts":
/*!**********************************************************!*\
  !*** ./src/auth/controller/inputs/user-sign-in.input.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignInInput = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserSignInInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserSignInInput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 10),
    __metadata("design:type", String)
], UserSignInInput.prototype, "password", void 0);
exports.UserSignInInput = UserSignInInput;


/***/ }),

/***/ "./src/auth/controller/inputs/user-sign-up.input.ts":
/*!**********************************************************!*\
  !*** ./src/auth/controller/inputs/user-sign-up.input.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSignUpInput = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserSignUpInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserSignUpInput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserSignUpInput.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserSignUpInput.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 10),
    __metadata("design:type", String)
], UserSignUpInput.prototype, "password", void 0);
exports.UserSignUpInput = UserSignUpInput;


/***/ }),

/***/ "./src/auth/core/enums/index.ts":
/*!**************************************!*\
  !*** ./src/auth/core/enums/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./role.enum */ "./src/auth/core/enums/role.enum.ts"), exports);


/***/ }),

/***/ "./src/auth/core/enums/role.enum.ts":
/*!******************************************!*\
  !*** ./src/auth/core/enums/role.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["User"] = "USER";
    Roles["Admin"] = "ADMIN";
})(Roles = exports.Roles || (exports.Roles = {}));


/***/ }),

/***/ "./src/auth/core/index.ts":
/*!********************************!*\
  !*** ./src/auth/core/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./enums */ "./src/auth/core/enums/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./src/auth/core/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./tokens */ "./src/auth/core/tokens/index.ts"), exports);


/***/ }),

/***/ "./src/auth/core/interfaces/index.ts":
/*!*******************************************!*\
  !*** ./src/auth/core/interfaces/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-payload.interface */ "./src/auth/core/interfaces/jwt-payload.interface.ts"), exports);


/***/ }),

/***/ "./src/auth/core/interfaces/jwt-payload.interface.ts":
/*!***********************************************************!*\
  !*** ./src/auth/core/interfaces/jwt-payload.interface.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/auth/core/tokens/index.ts":
/*!***************************************!*\
  !*** ./src/auth/core/tokens/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./refresh-cookie.token */ "./src/auth/core/tokens/refresh-cookie.token.ts"), exports);


/***/ }),

/***/ "./src/auth/core/tokens/refresh-cookie.token.ts":
/*!******************************************************!*\
  !*** ./src/auth/core/tokens/refresh-cookie.token.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SESSION_ID_COOKIE_NAME_TOKEN = exports.REFRESH_TOKEN_COOKIE_NAME_TOKEN = void 0;
exports.REFRESH_TOKEN_COOKIE_NAME_TOKEN = 'REFRESH_TOKEN';
exports.SESSION_ID_COOKIE_NAME_TOKEN = 'SESSION_ID';


/***/ }),

/***/ "./src/auth/decorators/current-user.decorator.ts":
/*!*******************************************************!*\
  !*** ./src/auth/decorators/current-user.decorator.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log({ user: request.user });
    return request.user;
});


/***/ }),

/***/ "./src/auth/entity/auth.entity.ts":
/*!****************************************!*\
  !*** ./src/auth/entity/auth.entity.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entity/user.entity */ "./src/users/entity/user.entity.ts");
let AuthEntity = class AuthEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AuthEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], AuthEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], AuthEntity.prototype, "isActivated", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], AuthEntity.prototype, "password", void 0);
AuthEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Auth' })
], AuthEntity);
exports.AuthEntity = AuthEntity;


/***/ }),

/***/ "./src/auth/entity/refreshTokens.entity.ts":
/*!*************************************************!*\
  !*** ./src/auth/entity/refreshTokens.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../users/entity/user.entity */ "./src/users/entity/user.entity.ts");
const session_entity_1 = __webpack_require__(/*! ../../sessions/session.entity */ "./src/sessions/session.entity.ts");
let RefreshTokenEntity = class RefreshTokenEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RefreshTokenEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], RefreshTokenEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => session_entity_1.SessionEntity, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof session_entity_1.SessionEntity !== "undefined" && session_entity_1.SessionEntity) === "function" ? _b : Object)
], RefreshTokenEntity.prototype, "session", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], RefreshTokenEntity.prototype, "refreshToken", void 0);
RefreshTokenEntity = __decorate([
    (0, typeorm_1.Entity)()
], RefreshTokenEntity);
exports.RefreshTokenEntity = RefreshTokenEntity;


/***/ }),

/***/ "./src/auth/guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/auth/guards/auth.guard.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthGuard = class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.user ? true : false;
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/auth/guards/index.ts":
/*!**********************************!*\
  !*** ./src/auth/guards/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.guard */ "./src/auth/guards/auth.guard.ts"), exports);


/***/ }),

/***/ "./src/auth/guards/refresh-token.guard.ts":
/*!************************************************!*\
  !*** ./src/auth/guards/refresh-token.guard.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let RefreshTokenGuard = class RefreshTokenGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return request.refresh != null;
    }
};
RefreshTokenGuard = __decorate([
    (0, common_1.Injectable)()
], RefreshTokenGuard);
exports.RefreshTokenGuard = RefreshTokenGuard;


/***/ }),

/***/ "./src/auth/index.ts":
/*!***************************!*\
  !*** ./src/auth/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.module */ "./src/auth/auth.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./repository */ "./src/auth/repository/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./guards */ "./src/auth/guards/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./middlewares */ "./src/auth/middlewares/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./mailer */ "./src/auth/mailer/index.ts"), exports);


/***/ }),

/***/ "./src/auth/mailer/index.ts":
/*!**********************************!*\
  !*** ./src/auth/mailer/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./mailer.service */ "./src/auth/mailer/mailer.service.ts"), exports);


/***/ }),

/***/ "./src/auth/mailer/mailer.service.ts":
/*!*******************************************!*\
  !*** ./src/auth/mailer/mailer.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
let EmailService = class EmailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendAuthMail(params) {
        const { email, name, surname, redirectUri } = params;
        await this.mailerService.sendMail({
            to: email,
            subject: 'TreeShop',
            template: './auth-message',
            context: {
                redirectUri,
                name,
                surname,
            },
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], EmailService);
exports.EmailService = EmailService;


/***/ }),

/***/ "./src/auth/middlewares/index.ts":
/*!***************************************!*\
  !*** ./src/auth/middlewares/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt.middleware */ "./src/auth/middlewares/jwt.middleware.ts"), exports);
__exportStar(__webpack_require__(/*! ./refresh-jwt.middleware */ "./src/auth/middlewares/refresh-jwt.middleware.ts"), exports);


/***/ }),

/***/ "./src/auth/middlewares/jwt.middleware.ts":
/*!************************************************!*\
  !*** ./src/auth/middlewares/jwt.middleware.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtMiddleware = void 0;
const ioredis_1 = __webpack_require__(/*! @nestjs-modules/ioredis */ "@nestjs-modules/ioredis");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! ../core */ "./src/auth/core/index.ts");
let JwtMiddleware = class JwtMiddleware {
    constructor(redis) {
        this.redis = redis;
    }
    async use(req, res, next) {
        const sessionId = req.cookies[core_1.SESSION_ID_COOKIE_NAME_TOKEN];
        if (!sessionId) {
            return next();
        }
        const text = await this.redis.get(sessionId);
        if (!text) {
            return next();
        }
        try {
            const user = JSON.parse(text);
            req.user = Object.assign({ sessionId }, user);
        }
        catch (_a) { }
        return next();
    }
};
JwtMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, ioredis_1.InjectRedis)()),
    __metadata("design:paramtypes", [typeof (_a = typeof ioredis_1.Redis !== "undefined" && ioredis_1.Redis) === "function" ? _a : Object])
], JwtMiddleware);
exports.JwtMiddleware = JwtMiddleware;


/***/ }),

/***/ "./src/auth/middlewares/refresh-jwt.middleware.ts":
/*!********************************************************!*\
  !*** ./src/auth/middlewares/refresh-jwt.middleware.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshJwtMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const core_1 = __webpack_require__(/*! ../core */ "./src/auth/core/index.ts");
let RefreshJwtMiddleware = class RefreshJwtMiddleware {
    constructor(configService, jwtService) {
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async use(req, res, next) {
        const token = req.cookies[core_1.REFRESH_TOKEN_COOKIE_NAME_TOKEN];
        const sessionId = req.cookies[core_1.SESSION_ID_COOKIE_NAME_TOKEN];
        if (!token) {
            return next();
        }
        const { refreshTokenSecretKey } = this.configService.get('jwt');
        try {
            const isVerify = await this.jwtService.verifyAsync(token, {
                secret: refreshTokenSecretKey,
                ignoreExpiration: true,
            });
            req.refresh = Object.assign(Object.assign({}, isVerify), { refreshToken: token, sessionId });
        }
        catch (error) { }
        next();
    }
};
RefreshJwtMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], RefreshJwtMiddleware);
exports.RefreshJwtMiddleware = RefreshJwtMiddleware;


/***/ }),

/***/ "./src/auth/repository/auth.repository.ts":
/*!************************************************!*\
  !*** ./src/auth/repository/auth.repository.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_entity_1 = __webpack_require__(/*! ../entity/auth.entity */ "./src/auth/entity/auth.entity.ts");
let AuthRepository = class AuthRepository extends typeorm_1.Repository {
    constructor(entityManager) {
        super(auth_entity_1.AuthEntity, entityManager);
    }
};
AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], AuthRepository);
exports.AuthRepository = AuthRepository;


/***/ }),

/***/ "./src/auth/repository/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/auth/repository/auth.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const bcrypt_1 = __webpack_require__(/*! bcrypt */ "bcrypt");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const users_1 = __webpack_require__(/*! ../../users */ "./src/users/index.ts");
const auth_repository_1 = __webpack_require__(/*! ./auth.repository */ "./src/auth/repository/auth.repository.ts");
const mailer_1 = __webpack_require__(/*! ../mailer */ "./src/auth/mailer/index.ts");
const core_1 = __webpack_require__(/*! ../core */ "./src/auth/core/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const refresh_tokens_repository_1 = __webpack_require__(/*! ./refresh-tokens.repository */ "./src/auth/repository/refresh-tokens.repository.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const session_service_1 = __webpack_require__(/*! ../../sessions/session.service */ "./src/sessions/session.service.ts");
let AuthService = class AuthService {
    constructor(userService, authRepository, jwtService, configService, emailService, refreshTokenRepository, sessionService) {
        this.userService = userService;
        this.authRepository = authRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.emailService = emailService;
        this.refreshTokenRepository = refreshTokenRepository;
        this.sessionService = sessionService;
    }
    async signUp(params) {
        const { email, name, surname, password } = params;
        try {
            const { data } = await this.userService.createUser({
                email,
                name,
                surname,
            });
            const hashedPassword = await this.hashPassword(password);
            const auth = await this.authRepository.save({
                password: hashedPassword,
                user: data,
            });
            const redirectUri = await this.generateAuthViaEmailRedirectUri({
                id: auth.id,
                role: core_1.Roles.User,
            });
            this.emailService.sendAuthMail({
                email,
                name,
                surname,
                redirectUri,
            });
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError) {
                const { message } = error;
                if (message.includes('duplicate key value')) {
                    throw new common_1.BadRequestException('user already exists');
                }
            }
            throw new common_1.InternalServerErrorException('try again later');
        }
        return;
    }
    async singIn(params) {
        const { email, password } = params;
        const userCreds = await this.authRepository.findOne({
            where: {
                user: {
                    email,
                },
            },
            relations: {
                user: true,
            },
        });
        if (!userCreds) {
            throw new common_1.BadRequestException('email or password is invalid');
        }
        if (userCreds.isActivated) {
            const isCompared = await this.comparePasswords(password, userCreds.password);
            if (isCompared) {
                const countSessions = await this.sessionService.countSessions(userCreds.user.id);
                if (countSessions >= 10) {
                    await this.sessionService.deleteLastSession(userCreds.user.id);
                }
                const sessionId = `session-${Date.now()}-${(0, uuid_1.v4)()}`;
                const payload = JSON.stringify({
                    id: userCreds.user.id,
                    role: core_1.Roles.User,
                });
                const tokens = await this.generateTokens({
                    id: userCreds.user.id,
                    role: core_1.Roles.User,
                });
                const newSession = await this.sessionService.createSession(sessionId, userCreds.user, payload);
                await this.refreshTokenRepository.save({
                    refreshToken: tokens.refreshToken,
                    session: newSession,
                    user: userCreds.user,
                });
                return {
                    data: {
                        sessionId,
                        refreshToken: tokens.refreshToken,
                    },
                };
            }
            throw new common_1.BadRequestException('email or password is invalid');
        }
        throw new common_1.UnauthorizedException('email is not activated');
    }
    async signOut(params) {
        const { userId, sessionId } = params;
        const userCreds = await this.authRepository.findOne({
            where: {
                user: {
                    id: userId,
                },
            },
            relations: {
                user: true,
            },
        });
        if (!userCreds) {
            throw new common_1.BadRequestException('email or password is invalid');
        }
        await this.sessionService.deleteSessionById(userId, sessionId);
        await this.refreshTokenRepository.delete({
            session: { sessionId },
            user: { id: userId },
        });
        return;
    }
    async refresh(params) {
        const { refreshToken } = params;
        const refresh = await this.refreshTokenRepository.findOne({
            where: {
                refreshToken: refreshToken,
            },
            relations: {
                user: true,
                session: true,
            },
        });
        if (!refresh) {
            throw new common_1.UnauthorizedException();
        }
        const isVerified = await this.verifyRefreshToken(refreshToken);
        await this.sessionService.deleteSessionById(refresh.user.id, refresh.session.sessionId);
        await this.refreshTokenRepository.delete({
            id: refresh.id,
        });
        if (!isVerified) {
            throw new common_1.UnauthorizedException();
        }
        const payload = {
            id: refresh.user.id,
            role: core_1.Roles.User,
        };
        const tokens = await this.generateTokens(payload);
        const sessionId = `session-${Date.now()}-${(0, uuid_1.v4)()}`;
        const newSession = await this.sessionService.createSession(sessionId, refresh.user, JSON.stringify(payload));
        await this.refreshTokenRepository.save({
            refreshToken: tokens.refreshToken,
            session: newSession,
            user: refresh.user,
        });
        return {
            data: {
                sessionId,
                refreshToken: tokens.refreshToken,
            },
        };
    }
    async verifyEmail(params) {
        const { token } = params;
        const isVerified = await this.verifyTokenFromEmail(token);
        if (isVerified) {
            const { id } = isVerified;
            await this.authRepository.update({ id }, { isActivated: true });
        }
        return;
    }
    async hashPassword(password) {
        const salt = await (0, bcrypt_1.genSalt)(8);
        const hashPassword = await (0, bcrypt_1.hash)(password, salt);
        return `${salt}--${hashPassword}`;
    }
    async comparePasswords(comparePassword, hashedPassword) {
        const [salt, password] = hashedPassword.split('--');
        return (await (0, bcrypt_1.hash)(comparePassword, salt)) === password;
    }
    async generateAuthViaEmailRedirectUri(payload) {
        const { host, port, protocol } = this.configService.get('app');
        const { emailTokenExpiresIn, emailTokenSecretKey } = this.configService.get('jwt');
        const token = await this.jwtService.sign(payload, {
            secret: emailTokenSecretKey,
            expiresIn: emailTokenExpiresIn,
        });
        const redirectUri = `${protocol}://${host}:${port}/api/auth/verify?token=${token}`;
        return redirectUri;
    }
    async verifyTokenFromEmail(token) {
        try {
            const { emailTokenSecretKey } = this.configService.get('jwt');
            const paylaod = await this.jwtService.verify(token, {
                secret: emailTokenSecretKey,
            });
            return paylaod;
        }
        catch (error) {
            return null;
        }
    }
    async verifyRefreshToken(token) {
        try {
            const { refreshTokenSecretKey } = this.configService.get('jwt');
            await this.jwtService.verify(token, {
                secret: refreshTokenSecretKey,
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async generateTokens(payload) {
        const { accessTokenExpiresIn, accessTokenSecretKey, refreshTokenExpiresIn, refreshTokenSecretKey, } = this.configService.get('jwt');
        const accessToken = await this.jwtService.sign(payload, {
            secret: accessTokenSecretKey,
            expiresIn: accessTokenExpiresIn,
        });
        const refreshToken = await this.jwtService.sign(payload, {
            secret: refreshTokenSecretKey,
            expiresIn: refreshTokenExpiresIn,
        });
        return {
            accessToken,
            refreshToken,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof auth_repository_1.AuthRepository !== "undefined" && auth_repository_1.AuthRepository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _d : Object, typeof (_e = typeof mailer_1.EmailService !== "undefined" && mailer_1.EmailService) === "function" ? _e : Object, typeof (_f = typeof refresh_tokens_repository_1.RefreshTokensRepository !== "undefined" && refresh_tokens_repository_1.RefreshTokensRepository) === "function" ? _f : Object, typeof (_g = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _g : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/auth/repository/index.ts":
/*!**************************************!*\
  !*** ./src/auth/repository/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./auth.service */ "./src/auth/repository/auth.service.ts"), exports);


/***/ }),

/***/ "./src/auth/repository/refresh-tokens.repository.ts":
/*!**********************************************************!*\
  !*** ./src/auth/repository/refresh-tokens.repository.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokensRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const refreshTokens_entity_1 = __webpack_require__(/*! ../entity/refreshTokens.entity */ "./src/auth/entity/refreshTokens.entity.ts");
let RefreshTokensRepository = class RefreshTokensRepository extends typeorm_1.Repository {
    constructor(entityManager) {
        super(refreshTokens_entity_1.RefreshTokenEntity, entityManager);
    }
};
RefreshTokensRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], RefreshTokensRepository);
exports.RefreshTokensRepository = RefreshTokensRepository;


/***/ }),

/***/ "./src/product/input/product.input.ts":
/*!********************************************!*\
  !*** ./src/product/input/product.input.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDto.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProductDto.prototype, "materialType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
exports.ProductDto = ProductDto;


/***/ }),

/***/ "./src/product/product.constroller.ts":
/*!********************************************!*\
  !*** ./src/product/product.constroller.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const product_service_1 = __webpack_require__(/*! ./product.service */ "./src/product/product.service.ts");
const product_input_1 = __webpack_require__(/*! ./input/product.input */ "./src/product/input/product.input.ts");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(params) {
        const { material, materialType, price } = params;
        console.log(params.materialType);
        if (isNaN(price)) {
            throw new common_1.BadRequestException('Invalid price value');
        }
        const product = {
            material,
            materialtype: materialType,
            price: price
        };
        const result = await this.productService.createProduct(product);
        return result;
    }
    async getProducts() {
        return this.productService.getProducts();
    }
    async getProduct(id) {
        return this.productService.getProduct(id);
    }
    async updateProduct(id, productDto) {
        const currentProduct = await this.productService.getProduct(id);
        if (!currentProduct) {
            return null;
        }
        return this.productService.updateProduct(id, Object.assign(Object.assign({}, currentProduct), productDto));
    }
    async deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof product_input_1.ProductDto !== "undefined" && product_input_1.ProductDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ProductController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ProductController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof product_input_1.ProductDto !== "undefined" && product_input_1.ProductDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ProductController.prototype, "deleteProduct", null);
ProductController = __decorate([
    (0, swagger_1.ApiTags)('Product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);
exports.ProductController = ProductController;


/***/ }),

/***/ "./src/product/product.entity.ts":
/*!***************************************!*\
  !*** ./src/product/product.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var MaterialTypeEnum;
(function (MaterialTypeEnum) {
    MaterialTypeEnum["tree"] = "tree";
    MaterialTypeEnum["metal"] = "metal";
})(MaterialTypeEnum || (MaterialTypeEnum = {}));
let ProductEntity = class ProductEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ProductEntity.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: MaterialTypeEnum.tree, name: 'materialtype' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "materialtype", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "price", void 0);
ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Product' })
], ProductEntity);
exports.ProductEntity = ProductEntity;


/***/ }),

/***/ "./src/product/product.module.ts":
/*!***************************************!*\
  !*** ./src/product/product.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const product_constroller_1 = __webpack_require__(/*! ./product.constroller */ "./src/product/product.constroller.ts");
const product_service_1 = __webpack_require__(/*! ./product.service */ "./src/product/product.service.ts");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_constroller_1.ProductController],
        exports: [product_service_1.ProductService],
        providers: [product_service_1.ProductService]
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/product/product.service.ts":
/*!****************************************!*\
  !*** ./src/product/product.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let ProductService = class ProductService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async createProduct(product) {
        const query = `
      INSERT INTO "Product" (material, materialtype, price)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
        const values = [product.material, product.materialtype, product.price];
        const result = await this.entityManager.query(query, values);
        return result[0];
    }
    async getProduct(id) {
        const query = `
      SELECT * FROM "Product"
      WHERE id = $1
    `;
        const values = [id];
        const result = await this.entityManager.query(query, values);
        return result[0];
    }
    async getProducts() {
        const query = `
      SELECT * FROM "Product"
    `;
        const result = await this.entityManager.query(query);
        return result;
    }
    async updateProduct(id, updateProductDto) {
        const currentProduct = await this.getProduct(id);
        if (!currentProduct) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        const { material, materialType, price } = updateProductDto;
        const query = `
        UPDATE "Product"
        SET material = $1, materialtype = $2, price = $3
        WHERE id = $4
        RETURNING *
    `;
        const values = [material || currentProduct.material, materialType || currentProduct.materialtype, price || currentProduct.price, id];
        const result = await this.entityManager.query(query, values);
        if (result.length > 0) {
            return result[0];
        }
        else {
            throw new common_1.NotFoundException(`Product with id ${id} not found after update`);
        }
    }
    async deleteProduct(id) {
        const query = `
      DELETE FROM "Product"
      WHERE id = $1
    `;
        const values = [id];
        await this.entityManager.query(query, values);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/request/inputs/create-request.input.ts":
/*!****************************************************!*\
  !*** ./src/request/inputs/create-request.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRequestDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRequestDto.prototype, "clientId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRequestDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRequestDto.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: false, default: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRequestDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRequestDto.prototype, "requirements", void 0);
exports.CreateRequestDto = CreateRequestDto;


/***/ }),

/***/ "./src/request/inputs/update-request.input.ts":
/*!****************************************************!*\
  !*** ./src/request/inputs/update-request.input.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserRequestDto = exports.UpdateAdminRequestDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateAdminRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: false }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateAdminRequestDto.prototype, "workerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAdminRequestDto.prototype, "status", void 0);
exports.UpdateAdminRequestDto = UpdateAdminRequestDto;
class UpdateUserRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "customerAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: false, default: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateUserRequestDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: false }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserRequestDto.prototype, "requirements", void 0);
exports.UpdateUserRequestDto = UpdateUserRequestDto;


/***/ }),

/***/ "./src/request/request.controller.ts":
/*!*******************************************!*\
  !*** ./src/request/request.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const request_service_1 = __webpack_require__(/*! ./request.service */ "./src/request/request.service.ts");
const create_request_input_1 = __webpack_require__(/*! ./inputs/create-request.input */ "./src/request/inputs/create-request.input.ts");
const users_1 = __webpack_require__(/*! src/users */ "./src/users/index.ts");
const product_service_1 = __webpack_require__(/*! src/product/product.service */ "./src/product/product.service.ts");
const update_request_input_1 = __webpack_require__(/*! ./inputs/update-request.input */ "./src/request/inputs/update-request.input.ts");
let RequestController = class RequestController {
    constructor(requestService, userService, productService) {
        this.requestService = requestService;
        this.userService = userService;
        this.productService = productService;
    }
    async createRequest(params) {
        const { amount, clientId, customerAddress, productId, requirements } = params;
        const user = await this.userService.getById({ userId: clientId });
        const product = await this.productService.getProduct(productId);
        const request = {
            amount,
            client: user.data,
            customerAddress,
            product,
            requirements,
        };
        const result = await this.requestService.createRequest(request);
        return result;
    }
    async getRequests(clientId) {
        return await this.requestService.getAllUserRequests(clientId);
    }
    async getAllRequests() {
        return this.requestService.getRequests();
    }
    async updateRequest(id, updateRequestDto) {
        const currentRequest = await this.requestService.getRequest(id);
        if (!currentRequest) {
            return null;
        }
        return this.requestService.updateUserRequest(id, Object.assign(Object.assign({}, currentRequest), updateRequestDto));
    }
    async updateUserRequest(id, updateRequestDto) {
        const currentRequest = await this.requestService.getRequest(id);
        if (!currentRequest) {
            return null;
        }
        return this.requestService.updateAdminRequest(id, Object.assign(Object.assign({}, currentRequest), updateRequestDto));
    }
    async deleteRequest(id) {
        return this.requestService.deleteRequest(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof create_request_input_1.CreateRequestDto !== "undefined" && create_request_input_1.CreateRequestDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], RequestController.prototype, "createRequest", null);
__decorate([
    (0, common_1.Get)('/getUserRequests'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], RequestController.prototype, "getRequests", null);
__decorate([
    (0, common_1.Get)('/getAllRequests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], RequestController.prototype, "getAllRequests", null);
__decorate([
    (0, common_1.Put)('/putForUsers'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_h = typeof update_request_input_1.UpdateUserRequestDto !== "undefined" && update_request_input_1.UpdateUserRequestDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "updateRequest", null);
__decorate([
    (0, common_1.Put)('/putForAdmins'),
    __param(0, (0, common_1.Query)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_j = typeof update_request_input_1.UpdateAdminRequestDto !== "undefined" && update_request_input_1.UpdateAdminRequestDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "updateUserRequest", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], RequestController.prototype, "deleteRequest", null);
RequestController = __decorate([
    (0, swagger_1.ApiTags)('Request'),
    (0, common_1.Controller)('request'),
    __metadata("design:paramtypes", [typeof (_a = typeof request_service_1.RequestService !== "undefined" && request_service_1.RequestService) === "function" ? _a : Object, typeof (_b = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _b : Object, typeof (_c = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _c : Object])
], RequestController);
exports.RequestController = RequestController;


/***/ }),

/***/ "./src/request/request.entity.ts":
/*!***************************************!*\
  !*** ./src/request/request.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestEntity = void 0;
const product_entity_1 = __webpack_require__(/*! src/product/product.entity */ "./src/product/product.entity.ts");
const user_entity_1 = __webpack_require__(/*! src/users/entity/user.entity */ "./src/users/entity/user.entity.ts");
const worker_entity_1 = __webpack_require__(/*! src/worker/worker.entity */ "./src/worker/worker.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let RequestEntity = class RequestEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RequestEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], RequestEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.ProductEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof product_entity_1.ProductEntity !== "undefined" && product_entity_1.ProductEntity) === "function" ? _b : Object)
], RequestEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RequestEntity.prototype, "customerAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 1 }),
    __metadata("design:type", Number)
], RequestEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RequestEntity.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => worker_entity_1.WorkerEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_c = typeof worker_entity_1.WorkerEntity !== "undefined" && worker_entity_1.WorkerEntity) === "function" ? _c : Object)
], RequestEntity.prototype, "worker", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'Awaiting confirmation..' }),
    __metadata("design:type", String)
], RequestEntity.prototype, "status", void 0);
RequestEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Request' })
], RequestEntity);
exports.RequestEntity = RequestEntity;


/***/ }),

/***/ "./src/request/request.module.ts":
/*!***************************************!*\
  !*** ./src/request/request.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const request_controller_1 = __webpack_require__(/*! ./request.controller */ "./src/request/request.controller.ts");
const request_service_1 = __webpack_require__(/*! ./request.service */ "./src/request/request.service.ts");
const users_1 = __webpack_require__(/*! src/users */ "./src/users/index.ts");
const product_module_1 = __webpack_require__(/*! src/product/product.module */ "./src/product/product.module.ts");
let RequestModule = class RequestModule {
};
RequestModule = __decorate([
    (0, common_1.Module)({
        imports: [users_1.UsersModule, product_module_1.ProductModule],
        controllers: [request_controller_1.RequestController],
        exports: [request_service_1.RequestService],
        providers: [request_service_1.RequestService]
    })
], RequestModule);
exports.RequestModule = RequestModule;


/***/ }),

/***/ "./src/request/request.service.ts":
/*!****************************************!*\
  !*** ./src/request/request.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let RequestService = class RequestService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async createRequest(request) {
        try {
            const query = `
        INSERT INTO "Request" ("clientId", "productId", "customerAddress", "amount", "requirements")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
            const values = [
                request.client.id,
                request.product.id,
                request.customerAddress,
                request.amount,
                request.requirements,
            ];
            const result = await this.entityManager.query(query, values);
            return result[0];
        }
        catch (error) {
            console.error(error);
            throw new Error('An error occurred while creating a request.');
        }
    }
    async getRequest(id) {
        const query = `
      SELECT * FROM "Request"
      WHERE id = $1
    `;
        const values = [id];
        const result = await this.entityManager.query(query, values);
        return result[0];
    }
    async getRequests() {
        const query = `
      SELECT * FROM "Request"
    `;
        const result = await this.entityManager.query(query);
        return result;
    }
    async updateUserRequest(id, updateRequestDto) {
        const currentRequest = await this.getRequest(id);
        if (!currentRequest) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        const { amount, customerAddress, requirements } = updateRequestDto;
        const query = `
        UPDATE "Request"
        SET "amount" = $1, "customerAddress" = $2, "requirements" = $3
        WHERE "id" = $4
        RETURNING *
    `;
        const values = [amount || currentRequest.amount, customerAddress || currentRequest.customerAddress, requirements || currentRequest.requirements, id];
        const result = await this.entityManager.query(query, values);
        if (result.length > 0) {
            return result[0];
        }
        else {
            throw new common_1.NotFoundException(`Request with id ${id} not found after update`);
        }
    }
    async updateAdminRequest(id, updateRequestDto) {
        var _a;
        const currentRequest = await this.getRequest(id);
        if (!currentRequest) {
            throw new common_1.NotFoundException(`Request with id ${id} not found`);
        }
        const { workerId, status } = updateRequestDto;
        const query = `
    UPDATE "Request"
    SET "workerId" = $1, "status" = $2
    WHERE "id" = $3
    RETURNING *
  `;
        const values = [workerId || ((_a = currentRequest.worker) === null || _a === void 0 ? void 0 : _a.id), status || currentRequest.status, id];
        const result = await this.entityManager.query(query, values);
        if (result.length > 0) {
            return result[0];
        }
        else {
            throw new common_1.NotFoundException(`Request with id ${id} not found after update`);
        }
    }
    async deleteRequest(id) {
        const query = `
      DELETE FROM "Request"
      WHERE id = $1
    `;
        const values = [id];
        await this.entityManager.query(query, values);
    }
    async getAllUserRequests(userId) {
        const query = `
      SELECT *
      FROM "Request" r
      WHERE r."clientId" = $1
    `;
        const values = [userId];
        const result = await this.entityManager.query(query, values);
        return result;
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], RequestService);
exports.RequestService = RequestService;


/***/ }),

/***/ "./src/sessions/session.entity.ts":
/*!****************************************!*\
  !*** ./src/sessions/session.entity.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionEntity = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../users/entity/user.entity */ "./src/users/entity/user.entity.ts");
let SessionEntity = class SessionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SessionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], SessionEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SessionEntity.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], SessionEntity.prototype, "expiredAt", void 0);
SessionEntity = __decorate([
    (0, typeorm_1.Entity)()
], SessionEntity);
exports.SessionEntity = SessionEntity;


/***/ }),

/***/ "./src/sessions/session.module.ts":
/*!****************************************!*\
  !*** ./src/sessions/session.module.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const session_repository_1 = __webpack_require__(/*! ./session.repository */ "./src/sessions/session.repository.ts");
const session_service_1 = __webpack_require__(/*! ./session.service */ "./src/sessions/session.service.ts");
const sessions_controller_1 = __webpack_require__(/*! ./sessions.controller */ "./src/sessions/sessions.controller.ts");
let SessionModule = class SessionModule {
};
SessionModule = __decorate([
    (0, common_1.Module)({
        controllers: [sessions_controller_1.SessionController],
        providers: [session_service_1.SessionService, session_repository_1.SessionRepository],
        exports: [session_service_1.SessionService],
    })
], SessionModule);
exports.SessionModule = SessionModule;


/***/ }),

/***/ "./src/sessions/session.repository.ts":
/*!********************************************!*\
  !*** ./src/sessions/session.repository.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const session_entity_1 = __webpack_require__(/*! ./session.entity */ "./src/sessions/session.entity.ts");
let SessionRepository = class SessionRepository extends typeorm_1.Repository {
    constructor(entityManager) {
        super(session_entity_1.SessionEntity, entityManager);
    }
};
SessionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], SessionRepository);
exports.SessionRepository = SessionRepository;


/***/ }),

/***/ "./src/sessions/session.service.ts":
/*!*****************************************!*\
  !*** ./src/sessions/session.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionService = void 0;
const ioredis_1 = __webpack_require__(/*! @nestjs-modules/ioredis */ "@nestjs-modules/ioredis");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ioredis_2 = __webpack_require__(/*! ioredis */ "ioredis");
const session_repository_1 = __webpack_require__(/*! ./session.repository */ "./src/sessions/session.repository.ts");
let SessionService = class SessionService {
    constructor(sessionRepository, redis) {
        this.sessionRepository = sessionRepository;
        this.redis = redis;
    }
    async createSession(sessionId, user, payload) {
        const expriedAt = Date.now() + 100000000000000;
        const session = await this.sessionRepository.save({
            user,
            expiredAt: new Date(expriedAt),
            sessionId,
        });
        await this.redis.set(sessionId, payload);
        return session;
    }
    async deleteLastSession(userId) {
        const sessions = await this.sessionRepository.find({
            where: {
                user: {
                    id: userId,
                },
            },
            order: {
                id: {
                    direction: 'DESC',
                },
            },
        });
        if (sessions.length > 0) {
            const [session] = sessions;
            await this.sessionRepository.delete({ id: session.id });
            await this.redis.del(session.sessionId);
        }
    }
    async deleteSessionById(userId, sessionId) {
        await this.sessionRepository.delete({
            sessionId,
            user: { id: userId },
        });
        await this.redis.del(sessionId);
    }
    async getAll(userId) {
        const sessions = await this.sessionRepository.find({
            where: {
                user: {
                    id: userId,
                },
            },
        });
        return sessions;
    }
    async deleteAllSessions(userId) {
        const sessions = await this.sessionRepository.find({
            where: {
                user: {
                    id: userId,
                },
            },
        });
        if (sessions.length) {
            await this.sessionRepository.delete(sessions.map((session) => session.id));
            for (const session of sessions) {
                await this.redis.del(session.sessionId);
            }
        }
    }
    async countSessions(userId) {
        const countSession = await this.sessionRepository.count({
            where: {
                user: {
                    id: userId,
                },
            },
        });
        return countSession;
    }
};
SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, ioredis_1.InjectRedis)()),
    __metadata("design:paramtypes", [typeof (_a = typeof session_repository_1.SessionRepository !== "undefined" && session_repository_1.SessionRepository) === "function" ? _a : Object, typeof (_b = typeof ioredis_2.Redis !== "undefined" && ioredis_2.Redis) === "function" ? _b : Object])
], SessionService);
exports.SessionService = SessionService;


/***/ }),

/***/ "./src/sessions/sessions.controller.ts":
/*!*********************************************!*\
  !*** ./src/sessions/sessions.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const core_1 = __webpack_require__(/*! ../auth/core */ "./src/auth/core/index.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../auth/decorators/current-user.decorator */ "./src/auth/decorators/current-user.decorator.ts");
const guards_1 = __webpack_require__(/*! ../auth/guards */ "./src/auth/guards/index.ts");
const session_service_1 = __webpack_require__(/*! ./session.service */ "./src/sessions/session.service.ts");
let SessionController = class SessionController {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    getAllSessions(user) {
        return this.sessionService.getAll(user.id);
    }
    deleteSessionById(user, sessionId) {
        return this.sessionService.deleteSessionById(user.id, sessionId);
    }
    deleteAll(user) {
        return this.sessionService.deleteAllSessions(user.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.JwtPayload !== "undefined" && core_1.JwtPayload) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "getAllSessions", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof core_1.JwtPayload !== "undefined" && core_1.JwtPayload) === "function" ? _c : Object, String]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "deleteSessionById", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.JwtPayload !== "undefined" && core_1.JwtPayload) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], SessionController.prototype, "deleteAll", null);
SessionController = __decorate([
    (0, swagger_1.ApiTags)('Sessions'),
    (0, common_1.Controller)('sessions'),
    (0, common_1.UseGuards)(guards_1.AuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof session_service_1.SessionService !== "undefined" && session_service_1.SessionService) === "function" ? _a : Object])
], SessionController);
exports.SessionController = SessionController;


/***/ }),

/***/ "./src/support/support.controller.ts":
/*!*******************************************!*\
  !*** ./src/support/support.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const support_service_1 = __webpack_require__(/*! ./support.service */ "./src/support/support.service.ts");
const users_1 = __webpack_require__(/*! src/users */ "./src/users/index.ts");
let SupportController = class SupportController {
    constructor(supportService, userService) {
        this.supportService = supportService;
        this.userService = userService;
    }
    async createRequest(clientId, message) {
        const user = await this.userService.getById({ userId: clientId });
        const messge = {
            client: user.data,
            message,
        };
        const result = await this.supportService.createMessage(messge);
        return result;
    }
    async getUserSupportDialog(clientId) {
        return await this.supportService.getUserSupportDialog(clientId);
    }
    async createMessageToUser(clientId, message, replyToClient) {
        const me = await this.userService.getById({ userId: clientId });
        const user = await this.userService.getById({ userId: replyToClient });
        const messageEnt = {
            client: me.data,
            message,
            replyToClient: user.data,
        };
        const result = await this.supportService.createMessageToUser(messageEnt);
        return result;
    }
};
__decorate([
    (0, common_1.Post)('/createMessage'),
    __param(0, (0, common_1.Query)('clientId')),
    __param(1, (0, common_1.Query)('message')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SupportController.prototype, "createRequest", null);
__decorate([
    (0, common_1.Get)('/getUserSupportDialog'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], SupportController.prototype, "getUserSupportDialog", null);
__decorate([
    (0, common_1.Post)('/createMessageToUser'),
    __param(0, (0, common_1.Query)('clientId')),
    __param(1, (0, common_1.Query)('message')),
    __param(2, (0, common_1.Query)('replyToClientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], SupportController.prototype, "createMessageToUser", null);
SupportController = __decorate([
    (0, swagger_1.ApiTags)('Support'),
    (0, common_1.Controller)('support'),
    __metadata("design:paramtypes", [typeof (_a = typeof support_service_1.SupportService !== "undefined" && support_service_1.SupportService) === "function" ? _a : Object, typeof (_b = typeof users_1.UsersService !== "undefined" && users_1.UsersService) === "function" ? _b : Object])
], SupportController);
exports.SupportController = SupportController;


/***/ }),

/***/ "./src/support/support.entity.ts":
/*!***************************************!*\
  !*** ./src/support/support.entity.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportEntity = void 0;
const user_entity_1 = __webpack_require__(/*! src/users/entity/user.entity */ "./src/users/entity/user.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let SupportEntity = class SupportEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SupportEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _a : Object)
], SupportEntity.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], SupportEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof user_entity_1.UserEntity !== "undefined" && user_entity_1.UserEntity) === "function" ? _b : Object)
], SupportEntity.prototype, "replyToClient", void 0);
SupportEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Support' })
], SupportEntity);
exports.SupportEntity = SupportEntity;


/***/ }),

/***/ "./src/support/support.module.ts":
/*!***************************************!*\
  !*** ./src/support/support.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const support_controller_1 = __webpack_require__(/*! ./support.controller */ "./src/support/support.controller.ts");
const support_service_1 = __webpack_require__(/*! ./support.service */ "./src/support/support.service.ts");
const users_1 = __webpack_require__(/*! src/users */ "./src/users/index.ts");
let SupportModule = class SupportModule {
};
SupportModule = __decorate([
    (0, common_1.Module)({
        imports: [users_1.UsersModule],
        controllers: [support_controller_1.SupportController],
        exports: [support_service_1.SupportService],
        providers: [support_service_1.SupportService]
    })
], SupportModule);
exports.SupportModule = SupportModule;


/***/ }),

/***/ "./src/support/support.service.ts":
/*!****************************************!*\
  !*** ./src/support/support.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let SupportService = class SupportService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async createMessage(message) {
        try {
            const query = `
        INSERT INTO "Support" ("clientId", "message")
        VALUES ($1, $2)
        RETURNING *
      `;
            const values = [
                message.client.id,
                message.message,
            ];
            const result = await this.entityManager.query(query, values);
            return result[0];
        }
        catch (error) {
            console.error(error);
            throw new Error('An error occurred while creating a message.');
        }
    }
    async getUserSupportDialog(userId) {
        const query = `
      SELECT *
      FROM "Support" r
      WHERE r."clientId" = $1 OR r."replyToClientId" = $1
    `;
        const values = [userId];
        const result = await this.entityManager.query(query, values);
        return result;
    }
    async createMessageToUser(message) {
        try {
            const query = `
        INSERT INTO "Support" ("clientId", "message", "replyToClientId")
        VALUES ($1, $2, $3)
        RETURNING *
      `;
            const values = [
                message.client.id,
                message.message,
                message.replyToClient.id,
            ];
            const result = await this.entityManager.query(query, values);
            return result[0];
        }
        catch (error) {
            console.error(error);
            throw new Error('An error occurred while creating a message.');
        }
    }
};
SupportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], SupportService);
exports.SupportService = SupportService;


/***/ }),

/***/ "./src/users/controller/users.controller.ts":
/*!**************************************************!*\
  !*** ./src/users/controller/users.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const repository_1 = __webpack_require__(/*! ../repository */ "./src/users/repository/index.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUserById(userId) {
        const { data } = await this.usersService.getById({ userId: +userId });
        return data;
    }
    async getUserByName(name) {
        const { data } = await this.usersService.getByName({ name: name });
        return data;
    }
};
__decorate([
    (0, common_1.Get)('/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)('/:name/username'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByName", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof repository_1.UsersService !== "undefined" && repository_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./src/users/entity/user.entity.ts":
/*!*****************************************!*\
  !*** ./src/users/entity/user.entity.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = void 0;
const core_1 = __webpack_require__(/*! src/auth/core */ "./src/auth/core/index.ts");
const support_entity_1 = __webpack_require__(/*! src/support/support.entity */ "./src/support/support.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserEntity = class UserEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: core_1.Roles.User }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => support_entity_1.SupportEntity, (entity) => entity.client),
    __metadata("design:type", typeof (_a = typeof support_entity_1.SupportEntity !== "undefined" && support_entity_1.SupportEntity) === "function" ? _a : Object)
], UserEntity.prototype, "supportMessage", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'User' })
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./src/users/index.ts":
/*!****************************!*\
  !*** ./src/users/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./users.module */ "./src/users/users.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./repository */ "./src/users/repository/index.ts"), exports);


/***/ }),

/***/ "./src/users/repository/index.ts":
/*!***************************************!*\
  !*** ./src/users/repository/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./users.service */ "./src/users/repository/users.service.ts"), exports);


/***/ }),

/***/ "./src/users/repository/user.repository.ts":
/*!*************************************************!*\
  !*** ./src/users/repository/user.repository.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../entity/user.entity */ "./src/users/entity/user.entity.ts");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(entityManager) {
        super(user_entity_1.UserEntity, entityManager);
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),

/***/ "./src/users/repository/users.service.ts":
/*!***********************************************!*\
  !*** ./src/users/repository/users.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const user_repository_1 = __webpack_require__(/*! ../repository/user.repository */ "./src/users/repository/user.repository.ts");
let UsersService = class UsersService {
    constructor(usersRepository, eventEmitter) {
        this.usersRepository = usersRepository;
        this.eventEmitter = eventEmitter;
    }
    async createUser(params) {
        const newUser = this.usersRepository.create(Object.assign({}, params));
        const user = await this.usersRepository.save(newUser);
        return {
            data: user,
        };
    }
    async getById(params) {
        const { userId } = params;
        const user = await this.usersRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.BadRequestException(`user with id <${userId}> not found`);
        }
        return {
            data: user,
        };
    }
    async getByName(params) {
        const { name } = params;
        const user = await this.usersRepository.findOne({ where: { name: name } });
        if (!user) {
            throw new common_1.BadRequestException(`user with name <${name}> not found`);
        }
        return {
            data: user,
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_repository_1.UserRepository !== "undefined" && user_repository_1.UserRepository) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "./src/users/users.module.ts":
/*!***********************************!*\
  !*** ./src/users/users.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_controller_1 = __webpack_require__(/*! ./controller/users.controller */ "./src/users/controller/users.controller.ts");
const repository_1 = __webpack_require__(/*! ./repository */ "./src/users/repository/index.ts");
const user_repository_1 = __webpack_require__(/*! ./repository/user.repository */ "./src/users/repository/user.repository.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [repository_1.UsersService, user_repository_1.UserRepository],
        imports: [],
        exports: [repository_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./src/worker/input/worker.input.ts":
/*!******************************************!*\
  !*** ./src/worker/input/worker.input.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class WorkerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkerDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WorkerDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, nullable: false, required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], WorkerDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkerDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, nullable: false, required: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], WorkerDto.prototype, "currentstate", void 0);
exports.WorkerDto = WorkerDto;


/***/ }),

/***/ "./src/worker/worker.controller.ts":
/*!*****************************************!*\
  !*** ./src/worker/worker.controller.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const worker_service_1 = __webpack_require__(/*! ./worker.service */ "./src/worker/worker.service.ts");
const worker_input_1 = __webpack_require__(/*! ./input/worker.input */ "./src/worker/input/worker.input.ts");
let WorkerController = class WorkerController {
    constructor(workerService) {
        this.workerService = workerService;
    }
    async createProduct(params) {
        const { name, surname, age, salary, category, currentstate } = params;
        const worker = {
            name,
            surname,
            age,
            salary,
            category,
            currentstate
        };
        const result = await this.workerService.createWorker(worker);
        return result;
    }
    async getProducts() {
        return this.workerService.getWorkers();
    }
    async updateProduct(id, updatedWorker) {
        if (!id) {
            throw new common_1.BadRequestException('Invalid id parameter');
        }
        const result = await this.workerService.updateWorker(id, updatedWorker);
        return result;
    }
    async deleteProduct(id) {
        if (!id) {
            throw new common_1.BadRequestException('Invalid id parameter');
        }
        await this.workerService.deleteWorker(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof worker_input_1.WorkerDto !== "undefined" && worker_input_1.WorkerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], WorkerController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], WorkerController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof worker_input_1.WorkerDto !== "undefined" && worker_input_1.WorkerDto) === "function" ? _e : Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], WorkerController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], WorkerController.prototype, "deleteProduct", null);
WorkerController = __decorate([
    (0, swagger_1.ApiTags)('Worker'),
    (0, common_1.Controller)('worker'),
    __metadata("design:paramtypes", [typeof (_a = typeof worker_service_1.WorkerService !== "undefined" && worker_service_1.WorkerService) === "function" ? _a : Object])
], WorkerController);
exports.WorkerController = WorkerController;


/***/ }),

/***/ "./src/worker/worker.entity.ts":
/*!*************************************!*\
  !*** ./src/worker/worker.entity.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerEntity = void 0;
const request_entity_1 = __webpack_require__(/*! src/request/request.entity */ "./src/request/request.entity.ts");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let WorkerEntity = class WorkerEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WorkerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], WorkerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], WorkerEntity.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], WorkerEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], WorkerEntity.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], WorkerEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], WorkerEntity.prototype, "currentstate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => request_entity_1.RequestEntity, (entity) => entity.worker),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof request_entity_1.RequestEntity !== "undefined" && request_entity_1.RequestEntity) === "function" ? _a : Object)
], WorkerEntity.prototype, "request", void 0);
WorkerEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Worker' })
], WorkerEntity);
exports.WorkerEntity = WorkerEntity;


/***/ }),

/***/ "./src/worker/worker.module.ts":
/*!*************************************!*\
  !*** ./src/worker/worker.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const worker_controller_1 = __webpack_require__(/*! ./worker.controller */ "./src/worker/worker.controller.ts");
const worker_service_1 = __webpack_require__(/*! ./worker.service */ "./src/worker/worker.service.ts");
let WorkerModule = class WorkerModule {
};
WorkerModule = __decorate([
    (0, common_1.Module)({
        controllers: [worker_controller_1.WorkerController],
        exports: [worker_service_1.WorkerService],
        providers: [worker_service_1.WorkerService]
    })
], WorkerModule);
exports.WorkerModule = WorkerModule;


/***/ }),

/***/ "./src/worker/worker.service.ts":
/*!**************************************!*\
  !*** ./src/worker/worker.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkerService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const typeorm_2 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
let WorkerService = class WorkerService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async createWorker(worker) {
        const query = `
      INSERT INTO "Worker" (name, surname, age, salary, category, currentState)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
        const values = [worker.name, worker.surname, worker.age, worker.salary, worker.category, worker.currentstate];
        const result = await this.entityManager.query(query, values);
        return result[0];
    }
    async getWorkers() {
        const query = `
      SELECT * FROM "Worker"
    `;
        const result = await this.entityManager.query(query);
        return result;
    }
    async deleteWorker(workerId) {
        const query = `
      DELETE FROM "Worker"
      WHERE id = $1
    `;
        const values = [workerId];
        await this.entityManager.query(query, values);
    }
    async updateWorker(workerId, updatedWorker) {
        const query = `
      UPDATE "Worker"
      SET name = $2, surname = $3, age = $4, salary = $5, category = $6, currentState = $7
      WHERE id = $1
      RETURNING *
    `;
        const values = [workerId, updatedWorker.name, updatedWorker.surname, updatedWorker.age, updatedWorker.salary, updatedWorker.category, updatedWorker.currentstate];
        const result = await this.entityManager.query(query, values);
        return result[0];
    }
};
WorkerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.EntityManager !== "undefined" && typeorm_1.EntityManager) === "function" ? _a : Object])
], WorkerService);
exports.WorkerService = WorkerService;


/***/ }),

/***/ "@nestjs-modules/ioredis":
/*!******************************************!*\
  !*** external "@nestjs-modules/ioredis" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/ioredis");

/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "ioredis":
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("ioredis");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const express = __webpack_require__(/*! express */ "express");
const https = __webpack_require__(/*! https */ "https");
const http = __webpack_require__(/*! http */ "http");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const requestListener = express();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(requestListener));
    app.use(cookieParser());
    app.setGlobalPrefix('/api');
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        skipUndefinedProperties: false,
        skipMissingProperties: false,
        forbidUnknownValues: false,
    }));
    const builder = new swagger_1.DocumentBuilder()
        .setTitle('TreeShop')
        .setDescription('Some description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, builder);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    await app.init();
    const configService = app.get(config_1.ConfigService);
    const { host, port, ssl, protocol } = configService.get('app');
    let server;
    if (protocol === 'https') {
        server = https.createServer(Object.assign(Object.assign({}, ssl), { passphrase: 'my secret' }), requestListener);
    }
    else {
        server = http.createServer(requestListener);
    }
    server.listen(port, host, () => {
        console.log(`Server listens to ${protocol}://${host}:${port}`);
    });
}
bootstrap();

})();

/******/ })()
;