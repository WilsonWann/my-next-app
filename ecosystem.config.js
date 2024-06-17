const dotenv = require('dotenv');
const path = require('path');

// 加载 .env 文件
dotenv.config({ path: path.resolve(__dirname, '.env.production.local') });

const name = 'my-next-app';
const logRoot = '/mnt/e/path/to/my-next-app'

module.exports = {
  apps: [
    {
      name: name,
      script: 'yarn',
      args: 'start',
      cwd: `/mnt/e/${name}`,
      env: {
        NODE_ENV: 'production',
        ...process.env,
      },
      output: `${logRoot}/output.log`,
      error: `${logRoot}/error.log`,
      log: `${logRoot}/combined.log`,
    },
  ],
  events: {
    exit: './pm2-hook.js',
    error: './pm2-hook.js',
  },
};
