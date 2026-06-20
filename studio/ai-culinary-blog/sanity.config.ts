import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

const singletons = ['settings', 'aboutPage']

export default defineConfig({
  name: 'default',
  title: 'ai-culinary-blog',

  projectId: 'yz18h2wk',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from new document templates
    templates: (prev) => prev.filter((template) => !singletons.includes(template.id)),
  },

  document: {
    // For singleton types, filter out actions that are not allowed
    actions: (prev, context) =>
      singletons.includes(context.schemaType)
        ? prev.filter(
            ({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        : prev,
  },
})
