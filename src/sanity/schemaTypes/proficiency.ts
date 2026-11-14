import { defineField, defineType } from 'sanity'

export const proficiency = defineType({
  name: 'proficiency',
  title: 'Kemampuan Utama (Proficiencies 01-04)',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Nomor Kartu (misal: 01, 02, 03, 04)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Judul Kemampuan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampilan',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Urutan Tampilan',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
