import { defineField, defineType } from 'sanity'

export const certification = defineType({
  name: 'certification',
  title: 'Sertifikasi (Certification)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Sertifikat',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      title: 'Penerbit Sertifikat (misal: Meta, Google, Dicoding)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Tanggal / Bulan Perolehan (misal: April 2024)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Tautan Kredensial Sertifikat',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Foto / Gambar Sertifikat',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text (Deskripsi Gambar)',
          type: 'string',
          initialValue: 'Dokumen Sertifikat',
        }),
      ],
      description: 'Unggah foto sertifikat untuk ditampilkan dalam modal saat kartu diklik',
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
