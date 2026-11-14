import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { projectId, dataset } from './src/sanity/env'
import { schemaTypes } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'zidan-portfolio',
  title: 'Zidan Portfolio Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
  ],
  schema: {
    types: schemaTypes,
  },
})
