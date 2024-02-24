import { AppService } from './app.service';
import { TestDto } from './feature/users/users.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    testing(): string;
    postTest(payload: TestDto, request: Request): boolean;
}
