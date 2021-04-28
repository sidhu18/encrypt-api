import { CRUD } from "../../common/interfaces/crud.interface";
import UserDao from "../dao/user.dao";
import { CreateUserDto } from "../dto/create.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";
import { PutUserDto } from "../dto/put.user.dto";

class UserService implements CRUD {

    async list(limit: number, page: number): Promise<any> {
        return UserDao.getUsers();
    };

    async create(resource: CreateUserDto): Promise<any> {
        return UserDao.addUser(resource);
    };

    async putById(id: string, resource: PutUserDto): Promise<string> {
        return UserDao.putUserById(id, resource);
    };

    async readById(id: string): Promise<any> {
        return UserDao.getUserById(id);
    };

    async deleteById(id: string): Promise<string> {
        return UserDao.removeUserById(id);
    };

    async patchById(id: string, resource: PatchUserDto): Promise<string> {
        return UserDao.patchUserById(id, resource);
    };

    async getUserByEmail(email: string): Promise<any> {
        return UserDao.getUserByEmail(email);
    };

}

export default new UserService();