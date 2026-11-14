import { defineField, defineType } from 'sanity'

export const tool = defineType({
  name: 'tool',
  title: 'Alat & Teknologi (Tools)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Tool / Teknologi (misal: Next.js, React)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Identifier Ikon (misal: typescript, react, tailwind, nodejs, figma)',
      type: 'string',
    }),
    defineField({
      name: 'descriptor',
      title: 'Deskripsi Singkat (misal: Frontend framework)',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'File Ikon / Gambar Kustom (Opsional)',
      type: 'image',
    }),
    defineField({
      name: 'url',
      title: 'Tautan Dokumentasi Resmi (Opsional)',
      type: 'url',
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
