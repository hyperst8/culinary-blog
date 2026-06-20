import {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings').title('Settings'))
        .icon(CogIcon),
      S.divider(),
      // Filter out singleton types from default list
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings'].includes(listItem.getId() || ''),
      ),
    ])
