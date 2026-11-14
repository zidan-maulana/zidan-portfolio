import { defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profil & Kontak',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Jabatan Utama',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roles',
      title: 'Daftar Role / Headline Roles (Rolling Title)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'avatar',
      title: 'Foto Profil',
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
      name: 'headline',
      title: 'Pernyataan Utama (Hero Headline)',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Bio Singkat (Hero)',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutText',
      title: 'Teks About / Overview',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'overview',
      title: 'Overview (Portable Text)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Alamat Email',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi Kota',
      type: 'string',
      initialValue: 'Jakarta',
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone Jam Live',
      type: 'string',
      initialValue: 'Asia/Jakarta',
    }),
    defineField({
      name: 'availability',
      title: 'Teks Status Ketersediaan',
      type: 'string',
      initialValue: 'Open for new projects',
    }),
    defineField({
      name: 'showAvailability',
      title: 'Tampilkan Badge Ketersediaan',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'cv',
      title: 'File Dokumen CV (PDF)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'socials',
      title: 'Tautan Media Sosial',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Platform (LinkedIn, GitHub, dll)', type: 'string' }),
            defineField({ name: 'url', title: 'Tautan URL', type: 'url' }),
            defineField({ name: 'handle', title: 'Username / Handle (misal @zidanmaulana)', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'bookingUrl',
      title: 'Tautan Get in Touch / Kontak',
      type: 'string',
      initialValue: 'mailto:zidan@example.com',
    }),
    defineField({
      name: 'projectsUrl',
      title: 'Tautan Tombol Proyek',
      type: 'string',
      initialValue: '#projects',
    }),
  ],
})
