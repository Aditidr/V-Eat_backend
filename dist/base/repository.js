"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class BaseRepository extends typeorm_1.Repository {
    constructor(repo) {
        super(repo.target, repo.manager, repo.queryRunner);
        this.repo = repo;
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=repository.js.map