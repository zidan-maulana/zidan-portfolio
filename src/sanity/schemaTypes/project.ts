import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Proyek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline Pengerjaan',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Tahun',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Gambar Sampul (Cover)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Teks Alternatif (Alt)',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Ringkasan Singkat',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Bagian Konten Detail (Sections)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'tag', title: 'Tag (misal: Ideation & Conceptual)', type: 'string' }),
            defineField({ name: 'title', title: 'Judul Bagian', type: 'string' }),
            defineField({ name: 'description', title: 'Deskripsi', type: 'text', rows: 3 }),
            defineField({
              name: 'images',
              title: 'Galeri Gambar Bagian',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    defineField({ name: 'alt', title: 'Teks Alternatif (Alt)', type: 'string' }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Konten Tambahan (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Tautan Live Demo',
      type: 'url',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Tautan Repository GitHub',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Tampilkan di Beranda (Featured)',
      type: 'boolean',
      initialValue: true,
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
      title: 'Urutan Custom',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
