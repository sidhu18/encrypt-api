import express from "express";
import debug from "debug";
import userService from "../services/user.service";
import argon2 from "argon2";

const log: debug.IDebugger = debug("app:user-controller");

class UserController {

    async listUsers(req: express.Request, res: express.Response) {
        const users = userService.list(100, 0);
        res.status(200).send(users);
    }

    async getUserById(req: express.Request, res: express.Response) {
        const user = userService.readById(req.body.id);
        res.status(200).send(user);
    }

    async createUser(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        const userId = userService.create(req.body);
        res.send(201).send({ id: userId });
    }

    async patch(req: express.Request, res: express.Response) {
        if (req.body.password) {
            req.body.password = await argon2.hash(req.body.password);
        }
        log(await userService.patchById(req.body.id, req.body));
        res.send(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = argon2.hash(req.body.password);
        log(await userService.putById(req.body.id, req.body));
        res.send(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await userService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new UserController();