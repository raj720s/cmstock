import {drizzle} from 'drizzle-orm/node-postgres'
import {Pool} from 'pg'
import {article} from '../schema/article.js'
import {faker} from '@faker-js/faker'
import {db} from './dbConnection.js'

if (!('DB_URL' in process.env)) throw new Error('DATABASE_URL not found on .env.development')

const seed = async () => {
  const client = new Pool({
    connectionString: process.env.DB_URL,
  })
  const data: (typeof article.$inferInsert)[] = []
  for (let i = 0; i < 20; i++) {
    data.push({
      id: faker.datatype.number(),
      isActive: faker.datatype.boolean(),
      title: faker.lorem.words(5),
      slug: faker.lorem.slug(),
      category: faker.datatype.number(),
      thumbnailUrl: faker.image.imageUrl(),
      imageSrc: faker.image.imageUrl(),
      shortDescription: faker.lorem.sentences(2),
      publishDate: faker.date.past(),
      hrefURL: faker.internet.url(),
      description: faker.lorem.paragraphs(3),
      imageTitle: faker.lorem.sentence(),
      imageAlt: faker.lorem.sentence(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    })
  }

  console.log('Seed start')
  await db.insert(article).values(data)
  console.log('Seed done')
}

seed()
