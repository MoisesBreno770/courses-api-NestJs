module.exports = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgress',
  password: 'docker',
  database: 'cursonestjs',
  entites: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};