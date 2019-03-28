module.exports = {
  apps: [
    {
      name: 'sample-project',
      script: 'dist/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'sample-user',
      host: ['123.456.789.0'],
      key: '~/.ssh/sample.pem',
      ssh_options: [
        'StrictHostKeyChecking=no',
        'PasswordAuthentication=no',
        'ForwardAgent=yes'
      ],
      ref: 'origin/master',
      repo: 'git@github.com:maruware/nodejs-ts-project-sample.git',
      path: '/var/www/sample-project',
      'post-deploy':
        'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
