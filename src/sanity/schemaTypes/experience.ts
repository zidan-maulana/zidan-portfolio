import { defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Pengalaman (Experience)',
  type: 'document',
  fields: [
    defineField({
      name: 'organization',
      title: 'Nama Perusahaan / Organisasi',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Posisi / Peran',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Tanggung Jawab',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Tanggal Mulai (misal: September 2024)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Tanggal Selesai (Kosongkan jika masih berlangsung / Present)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi (misal: Jakarta, ID)',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Perusahaan / Organisasi',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Teks Alternatif (Alt)',
          type: 'string',
        }),
      ],
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
