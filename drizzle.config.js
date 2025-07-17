
export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_f7GSgPhX1xek@ep-small-breeze-a8oshvns-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
    connectionString:
       'postgresql://neondb_owner:npg_f7GSgPhX1xek@ep-small-breeze-a8oshvns-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
}};
