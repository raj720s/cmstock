import {sql} from 'drizzle-orm'
import {integer, pgEnum, timestamp, pgTable, serial, uniqueIndex, varchar} from 'drizzle-orm/pg-core'

export const category = pgTable(
  'category',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 550}),
    slug: varchar('slug', {length: 256}),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (category) => {
    return {
      nameIndex: uniqueIndex('category_idx').on(category.name),
    }
  }
)
