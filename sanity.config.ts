import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'em9mpr4h',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-06',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
