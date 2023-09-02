import 'dotenv/config';

export const variables = {
    DATABASE: process.env.DATABASE_URL,
    HEADER_ALLOWED: process.env.HEADER_ALLOWED
}