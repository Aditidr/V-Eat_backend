import { Repository } from "typeorm";
import { Base } from "./entity";


export default class BaseRepository<T extends Base> extends Repository<T> {
    constructor(private repo: Repository<T>) {
        super(repo.target, repo.manager, repo.queryRunner);
    }
}
