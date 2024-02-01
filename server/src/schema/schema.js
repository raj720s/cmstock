import { integer, text, timestamp, pgEnum, boolean, pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core'
import { category } from '../schema.js'
import { sql } from 'drizzle-orm'

export const category = pgTable(
    'category',
    {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 550 }),
        slug: varchar('slug', { length: 256 }),
        createdAt: timestamp('created_at').defaultNow(),
        updatedAt: timestamp('updated_at').defaultNow(),
    },
    (category) => {
        return {
            nameIndex: uniqueIndex('category_idx').on(category.name),
        }
    }
)

export const article = pgTable(
    'article',
    {
        id: serial('id').primaryKey(),
        isActive: boolean('articleIsActive').default(true),
        title: varchar('articleTitle', { length: 550 }),
        slug: varchar('slug', { length: 256 }),
        category: integer('articleCategory').references(() => category.name),
        thumbnailUrl: text('articleThumbnailSrc'),
        imageSrc: text('articleImageSrc'),
        shortDescription: text('articleShortDescription'),
        publishDate: timestamp('articlePublishDate'),
        hrefURL: varchar('articleHrefURL', { length: 256 }),
        description: text('description'),
        imageTitle: varchar('articleImageTitle', { length: 550 }),
        imageAlt: varchar('articleImageAlt', { length: 550 }),
        createdAt: timestamp('created_at').defaultNow(),
        updatedAt: timestamp('updated_at').defaultNow(),
    },
    (article) => {
        return {
            nameIndex: uniqueIndex('article_idx').on(article.title),
        }
    }
)