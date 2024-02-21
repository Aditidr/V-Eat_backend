import { Repository } from "typeorm";
import { Base } from "./entity";
export default class BaseRepository<T extends Base> extends Repository<T> {
    private repo;
    constructor(repo: Repository<T>);
}
