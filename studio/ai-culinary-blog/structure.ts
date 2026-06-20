import {StructureResolver} from 'sanity/structure'
import {CogIcon, DocumentsIcon, ComponentIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings').title('Settings'))
        .icon(CogIcon),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Om oss')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('Om oss'),
                )
                .icon(DocumentsIcon),
              S.listItem()
                .title('Utforsk utstyr')
                .child(
                  S.document()
                    .schemaType('equipmentPage')
                    .documentId('equipmentPage')
                    .title('Utforsk utstyr'),
                )
                .icon(DocumentsIcon),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Utstyr')
        .icon(ComponentIcon)
        .child(S.documentTypeList('equipment').title('Utstyr')),
      S.divider(),
      // Filter out singleton types and explicitly listed collections from default list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['settings', 'aboutPage', 'equipmentPage', 'equipment'].includes(
            listItem.getId() || '',
          ),
      ),
    ])


