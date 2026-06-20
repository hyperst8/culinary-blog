import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutPage',
  title: 'Om oss (Page)',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Om oss',
      readOnly: true,
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'conceptTitle',
      title: 'Concept Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'conceptDescription',
      title: 'Concept Section Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'concepts',
      title: 'Concepts',
      type: 'array',
      validation: (Rule) => Rule.min(1).max(3),
      of: [
        {
          type: 'object',
          name: 'concept',
          title: 'Concept Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              description: 'Select the Lucide icon to display.',
              options: {
                list: [
                  {title: 'Package (Box)', value: 'package'},
                  {title: 'Repeat (Sync)', value: 'repeat'},
                  {title: 'Pencil (Edit)', value: 'pencil'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
})
