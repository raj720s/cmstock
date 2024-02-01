import 'dotenv/config';
export default {
    schema: '../dist/src/schema/schema.js',
    out: './drizzle',
    driver: 'pg',
    breakpoints: true,
    dbCredentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};
// https://orm.drizzle.team/docs/migrations
