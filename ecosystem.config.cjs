module.exports = {
  apps: [
    {
      name: 'davinci-web',
      script: 'npx',
      args: 'wrangler pages dev dist --ip 0.0.0.0 --port 4000',
      cwd: '/home/user/davinci-web',
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
