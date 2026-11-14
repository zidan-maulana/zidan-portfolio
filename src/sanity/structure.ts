import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Konten Portofolio')
    .items([
      S.listItem()
        .title('Profil & Kontak (Utama)')
        .id('profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
            .title('Profil & Kontak')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== 'profile'
      ),
    ])
