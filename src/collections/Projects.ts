import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'n', 'year', 'featured'],
  },
  fields: [
    // Non-localized fields
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'n',
      type: 'text',
      required: true,
      label: 'Project Number (e.g. 01)',
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'stack',
      type: 'text',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      label: 'External Link',
    },
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'duration',
      type: 'text',
    },
    {
      name: 'status',
      type: 'select',
      options: ['In Production', 'In Development', 'Completed'],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
    // Localized fields
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'tagline',
      type: 'text',
      localized: true,
    },
    {
      name: 'overview',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'challenges',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'approach',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'outcomes',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'label',
          type: 'text',
        },
      ],
    },
    {
      name: 'gallery',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
  ],
}
