module.exports = {
  apps: [
    {
      name: 'my-nuxt-app',
      port: '3000',
      exec_mode: 'cluster', // Enables clustering across CPUs
      instances: 'max',      // Use all available CPU cores
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}