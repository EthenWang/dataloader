export default [
  {
    fieldName: 'translationsection',
    type: 'panel',
    children: [
      {
        fieldName: 'sdcode',
        label: 'Translation Code',
        type: 'search',
        path: 'selected.sdcode',
        format: 'string',
        cls: 'code'
      },
      {
        fieldName: 'sdtext',
        label: 'Translation Text',
        type: 'search',
        path: 'selected.sdtext',
        format: 'string',
        cls: 'text'
      },
      {
        fieldName: 'sdabbreviation',
        label: 'Abbreviation',
        type: 'textfield',
        path: 'selected.sdabbreviation',
        format: 'string'
      }
    ]
  },
  {
    fieldName: 'translationgrid',
    type: 'grid',
    path: 'metaData',
    itemPath: 'selected',
    cls: 'translation'
  }
]
