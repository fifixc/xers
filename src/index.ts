import * as dotenv from 'dotenv';
dotenv.config();

import { Elysia, t } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import * as config from '@/config';

import statsController from '@/../api';

const app = new Elysia();

app.use(swagger());
app.get('/', ({ set }) => set.redirect = config.GITHUB_REPOSITORY);
app.get('/stats', statsController, {
  query: t.Object({
      username: t.String(),
      theme: t.Optional(t.String())
  })
});

app.listen(config.PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
