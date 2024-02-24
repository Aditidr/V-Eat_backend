"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors_1 = require("./core/cors");
const common_1 = require("@nestjs/common");
const express_1 = require("express");
const config_service_1 = require("./core/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        rawBody: true,
        bodyParser: false
    });
    const config = app.get(config_service_1.AppConfigService);
    const PORT = config.get().app.port;
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.use((0, express_1.urlencoded)({ limit: '50mb', extended: true }));
    app.use;
    app.enableCors(cors_1.corsOptions);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.setGlobalPrefix(config.get().app.rootPrefix);
    await app.listen(PORT, () => console.log(`running at http://localhost:${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map