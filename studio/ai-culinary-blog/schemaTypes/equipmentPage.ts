import {defineType, defineField} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'equipmentPage',
  title: 'Utforsk utstyr (Page)',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Utforsk utstyr',
      readOnly: true,
    }),
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerDescription',
      title: 'Header Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'equipmentList',
      title: 'Equipment List',
      description: 'Order and select which equipment items to display on the page.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'equipment'}],
        },
      ],
      validation: (Rule) => Rule.required().unique(),
    }),
  ],
})
