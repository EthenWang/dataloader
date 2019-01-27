export default [
  {
    type: 'text',
    label: 'Message Control'
  },
  {
    fieldName: 'messagesection',
    type: 'panel',
    children: [
      {
        fieldName: 'messagenumber',
        label: 'Message Number',
        type: 'search',
        path: 'selected.messagenumber',
        format: 'string',
        cls: 'code'
      },
      {
        fieldName: 'messagetype',
        label: 'Message Type',
        type: 'textfield',
        path: 'selected.messagetype',
        format: 'string'
      },
      {
        fieldName: 'messagedescription',
        label: 'Message Description',
        type: 'search',
        path: 'selected.messagedescription',
        format: 'string',
        cls: 'text',
        colspan: 16
      }
    ]
  },
  {
    fieldName: 'messagegrid',
    type: 'grid',
    path: 'metaData',
    itemPath: 'selected',
    cls: 'messages'
  }
]
