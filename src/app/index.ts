import type { Elysia } from 'elysia';
import { Elysia as Server } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import * as config from '@/config';

export class ElysiaApp {
    _app!: Elysia;
    
    constructor() {
        this._app = new Server();

        this._app.use(swagger());
        this._app.get('/', ({ set }) => set.redirect = config.GITHUB_REPOSITORY);
        
    }

    async listen(): Promise<void> {
        this._app.listen(config.PORT);
        console.log(
            `🦊 Elysia is running at ${this._app.server?.hostname}:${this._app.server?.port}`
        );        
    }
}