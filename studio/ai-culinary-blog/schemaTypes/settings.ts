import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload the logo for the website.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Alternative text description of the logo for accessibility (alt text).',
        }),
      ],
    }),
    defineField({
      name: 'navbarMenu',
      title: 'Navbar Menu',
      type: 'array',
      description: 'The links to display in the main navigation menu.',
      of: [
        {
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link / URL',
              type: 'string',
              description:
                'e.g. "/" for home, "/oppskrifter" for recipes, or an external link like "https://example.com".',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'array',
      description: 'The links to display in the footer navigation menu.',
      of: [
        {
          type: 'object',
          name: 'footerItem',
          title: 'Footer Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'href',
              title: 'Link / URL',
              type: 'string',
              description: 'e.g. "/kontakt" or "https://example.com".',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'href',
            },
          },
        },
      ],
    }),
  ],
})
