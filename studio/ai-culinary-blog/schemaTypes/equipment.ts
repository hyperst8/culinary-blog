import {defineType, defineField} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export default defineType({
  name: 'equipment',
  title: 'Utstyr (Item)',
  type: 'document',
  icon: ComponentIcon,
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
      name: 'image',
      title: 'Image',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categorySlug',
      title: 'Category Slug',
      type: 'string',
      description: 'The URL slug for this category to filter recipes (e.g. "airfryer" or "jerngryte").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'useAreas',
      title: 'Common Use Areas',
      type: 'array',
      validation: (Rule) => Rule.min(1),
      of: [
        {
          type: 'object',
          name: 'useArea',
          title: 'Use Area',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon Type',
              type: 'string',
              description: 'Select the Lucide icon to display.',
              options: {
                list: [
                  {title: 'Cookie', value: 'Cookie'},
                  {title: 'Zap (Fast)', value: 'Zap'},
                  {title: 'Leaf (Healthy)', value: 'Leaf'},
                  {title: 'Flame (Heat)', value: 'Flame'},
                  {title: 'Soup', value: 'Soup'},
                  {title: 'Beef', value: 'Beef'},
                  {title: 'Utensils', value: 'Utensils'},
                  {title: 'Sprout', value: 'Sprout'},
                  {title: 'Coffee', value: 'Coffee'},
                  {title: 'CookingPot', value: 'CookingPot'},
                  {title: 'Egg', value: 'Egg'},
                  {title: 'Snowflake', value: 'Snowflake'},
                  {title: 'Cloud', value: 'Cloud'},
                  {title: 'Droplet', value: 'Droplet'},
                  {title: 'Timer', value: 'Timer'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'icon',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
