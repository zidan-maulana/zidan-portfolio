import { defineField, defineType } from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Pendidikan (Education)',
  type: 'document',
  fields: [
    defineField({
      name: 'institution',
      title: 'Institusi / Universitas / Sekolah',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      title: 'Gelar / Jurusan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Pendidikan',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Tahun Mulai (misal: September 2022)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Tahun Selesai (misal: Present atau Juni 2026)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi (misal: Jakarta, ID)',
      type: 'string',
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
