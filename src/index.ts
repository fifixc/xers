import * as dotenv from 'dotenv';
dotenv.config();

import { ElysiaApp } from '@/app';

const main = async (): Promise<void> => {
  const server = new ElysiaApp();
  await server.listen();
};

main();