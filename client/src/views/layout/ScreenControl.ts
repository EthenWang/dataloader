export default [
  {
    fieldName: 'screeninfosection',
    type: 'panel',
    children: [
      {
        fieldName: 'screeninfosection1',
        type: 'group',
        children: [
          {
            fieldName: 'screenname',
            type: 'search',
            label: 'Screen Name',
            path: 'metaData.screeninfo.screenname',
            cls: 'screen'
          },
          {
            fieldName: 'screenprogram',
            type: 'textfield',
            label: 'Program Name',
            path: 'metaData.screeninfo.screenprogram'
          },
          {
            fieldName: 'screentype',
            type: 'textfield',
            label: 'Screen Type',
            path: 'metaData.screeninfo.screentype'
          },
          {
            fieldName: 'screentitle',
            type: 'search',
            label: 'Screen Title',
            path: 'metaData.screeninfo.screentitle',
            cls: 'label'
          },
          {
            fieldName: 'helpkey',
            type: 'textfield',
            label: 'Help Text',
            path: 'metaData.screeninfo.helpkey'
          }
        ]
      },
      {
        fieldName: 'virtualdates',
        type: 'checkbox',
        label: 'Virtual Dates',
        path: 'metaData.screeninfo.virtualdates'
      }
    ]
  },
  {
    type: 'text',
    label: 'Screen Object Information'
  },
  {
    fieldName: 'fieldgrid',
    type: 'grid',
    path: 'metaData.screenobject',
    itemPath: 'selectedObject',
    cls: 'screenobject'
  },
  {
    fieldName: 'fieldinfosection',
    type: 'panel',
    label: '',
    children: [
      {
        fieldName: 'screenobjname',
        type: 'textfield',
        label: 'Screen Object Name',
        path: 'selectedObject.screenobjname',
        format: 'string'
      },
      {
        fieldName: 'objtype',
        type: 'combobox',
        label: 'Object Type',
        path: 'selectedObject.objtype',
        format: 'string',
        cls: 'objtype'
      },
      {
        fieldName: 'objparent',
        type: 'textfield',
        label: 'Object Parent',
        path: 'selectedObject.objparent',
        format: 'string'
      },
      {
        fieldName: 'fieldtype',
        type: 'textfield',
        label: 'Field Type',
        path: 'selectedObject.fieldtype',
        format: 'string'
      },
      {
        fieldName: 'specialcase',
        type: 'textfield',
        label: 'Special Case',
        path: 'selectedObject.specialcase',
        format: 'string'
      },
      {
        fieldName: 'objformattype',
        type: 'combobox',
        label: 'Format Type',
        path: 'selectedObject.objformattype',
        format: 'string',
        cls: 'formattype'
      },
      {
        fieldName: 'objformat',
        type: 'textfield',
        label: 'Format',
        path: 'selectedObject.objformat',
        format: 'string'
      },
      {
        fieldName: 'reltabpagepgm',
        type: 'textfield',
        label: 'Related Program',
        path: 'selectedObject.reltabpagepgm',
        format: 'string'
      },
      {
        fieldName: 'userdefnum',
        type: 'textfield',
        label: 'UDF Number',
        path: 'selectedObject.userdefnum',
        format: 'string'
      },
      {
        fieldName: 'userdeftype',
        type: 'combobox',
        label: 'UDF Type',
        path: 'selectedObject.userdeftype',
        format: 'string',
        cls: 'udftype'
      }      
    ]
  },
  {
    fieldName: 'initval',
    type: 'panel',
    label: 'Label and Initial Values',
    children: [
      {
        fieldName: 'objlabelcode',
        type: 'search',
        label: 'Label Code',
        path: 'selectedObject.objlabelcode',
        format: 'string',
        cls: 'label'
      },
      {
        fieldName: 'objinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        path: 'selectedObject.objinitialvalue',
        format: 'string'
      },
      {
        fieldName: 'objimage',
        type: 'combobox',
        label: 'Obj Image',
        path: 'selectedObject.objimage',
        format: 'string'
      },
      {
        fieldName: 'linkedbrowseobj',
        type: 'textfield',
        label: 'Linked Drop Name',
        path: 'selectedObject.linkedbrowseobj',
        format: 'string'
      },
      {
        fieldName: 'dropname',
        type: 'textfield',
        label: 'List Name',
        path: 'selectedObject.dropname',
        format: 'string'
      }
    ]
  },
  {
    fieldName: 'screenlayout',
    type: 'panel',
    label: 'Screen Layout',
    children: [
      {
        fieldName: 'objalign',
        type: 'combobox',
        label: 'Object Align',
        path: 'selectedObject.objalign',
        format: 'number'
      },
      {
        fieldName: 'objcellalign',
        type: 'combobox',
        label: 'Cell Align',
        path: 'selectedObject.objcellalign',
        format: 'number'
      },
      {
        fieldName: 'screenorder',
        type: 'textfield',
        label: 'Screen Order',
        path: 'selectedObject.screenorder',
        format: 'number'
      },
      {
        fieldName: 'objrow',
        type: 'textfield',
        label: 'Object Row',
        path: 'selectedObject.objrow',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Row Span',
        path: 'selectedObject.colspan',
        format: 'number'
      },
      {
        fieldName: 'objcol',
        type: 'textfield',
        label: 'Object Column',
        path: 'selectedObject.objcol',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Column Span',
        path: 'selectedObject.colspan',
        format: 'number'
      }
    ]
  },
  {
    fieldName: 'fieldevents',
    type: 'panel',
    label: 'Fields Response to Event',
    children: [
      {
        fieldName: 'eventchoose',
        type: 'checkbox',
        label: 'CHOOSE',
        path: 'selectedObject.eventchoose',
        format: 'boolean'
      },
      {
        fieldName: 'eventvaluechange',
        type: 'checkbox',
        label: 'VALUE_CHANGED',
        path: 'selectedObject.eventvaluechange',
        format: 'boolean'
      },
      {
        fieldName: 'eventleave',
        type: 'checkbox',
        label: 'LEAVE',
        path: 'selectedObject.eventleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventclick',
        type: 'checkbox',
        label: 'CLICK',
        path: 'selectedObject.eventclick',
        format: 'boolean'
      },
      {
        fieldName: 'evententry',
        type: 'checkbox',
        label: 'ENTRY',
        path: 'selectedObject.evententry',
        format: 'boolean'
      },
      {
        fieldName: 'eventrowleave',
        type: 'checkbox',
        label: 'ROW LEAVE',
        path: 'selectedObject.eventrowleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventdblclick',
        type: 'checkbox',
        label: 'DBL_CLICK',
        path: 'selectedObject.eventdblclick',
        format: 'boolean'
      },
      {
        fieldName: 'eventplus',
        type: 'checkbox',
        label: 'PLUS',
        path: 'selectedObject.eventplus',
        format: 'boolean'
      },
      {
        fieldName: 'eventupdown',
        type: 'checkbox',
        label: 'UP/DOWN',
        path: 'selectedObject.eventupdown',
        format: 'boolean'
      }
    ]
  },
  {
    fieldName: 'initstate',
    type: 'panel',
    label: 'Initial States',
    children: [
      {
        fieldName: 'objactive',
        type: 'checkbox',
        label: 'Obj Active',
        path: 'selectedObject.objactive',
        format: 'boolean'
      },
      {
        fieldName: 'objunlabelled',
        type: 'checkbox',
        label: 'Obj Unlabelled',
        path: 'selectedObject.objunlabelled',
        format: 'boolean'
      },
      {
        fieldName: 'objenabled',
        type: 'checkbox',
        label: 'Obj Enabled',
        path: 'selectedObject.objenabled',
        format: 'boolean'
      },
      {
        fieldName: 'objvisible',
        type: 'checkbox',
        label: 'Obj Visible',
        path: 'selectedObject.objvisible',
        format: 'boolean'
      },
      {
        fieldName: 'objdisplay',
        type: 'checkbox',
        label: 'Obj Display',
        path: 'selectedObject.objdisplay',
        format: 'boolean'
      },
      {
        fieldName: 'objrequired',
        type: 'checkbox',
        label: 'Obj Required',
        path: 'selectedObject.objrequired',
        format: 'boolean'
      },
      {
        fieldName: 'textcolon',
        type: 'checkbox',
        label: 'Text Colon',
        path: 'selectedObject.objcolon',
        format: 'boolean'
      },
      {
        fieldName: 'objneedsvalidation',
        type: 'checkbox',
        label: 'Obj Needs Validation',
        path: 'selectedObject.objneedsvalidation',
        format: 'boolean'
      }
    ]
  },
  {
    fieldName: 'gridattr',
    type: 'panel',
    label: 'Grid Attributes',
    children: [
      {
        fieldName: 'gridattrpanel',
        type: 'group',
        children: [
          {
            fieldName: 'objwidth',
            type: 'textfield',
            label: 'Width',
            path: 'selectedObject.objwidth',
            format: 'number'
          },
          {
            fieldName: 'objheigth',
            type: 'textfield',
            label: 'Heigth',
            path: 'selectedObject.objheight',
            format: 'number'
          },
        ]
      },
      {
        fieldName: 'multrowselect',
        type: 'checkbox',
        label: 'Multi Row Select',
        path: 'selectedObject.multrowselect',
        format: 'boolean'
      },
      {
        fieldName: 'noassign',
        type: 'checkbox',
        label: 'No Assign',
        path: 'selectedObject.noassign',
        format: 'boolean'
      },
      {
        fieldName: 'cachebrowser',
        type: 'checkbox',
        label: 'Cache Browser',
        path: 'selectedObject.cachebrowser',
        format: 'boolean'
      },
      {
        fieldName: 'nosort',
        type: 'checkbox',
        label: 'No Sort',
        path: 'selectedObject.nosort',
        format: 'boolean'
      },
      {
        fieldName: 'nopin',
        type: 'checkbox',
        label: 'No Pin',
        path: 'selectedObject.nopin',
        format: 'boolean'
      },
      {
        fieldName: 'norowpin',
        type: 'checkbox',
        label: 'No Row Assign',
        path: 'selectedObject.norowpin',
        format: 'boolean'
      },
      {
        fieldName: 'nofilter',
        type: 'checkbox',
        label: 'No Filter',
        path: 'selectedObject.nofilter',
        format: 'boolean'
      },
      {
        fieldName: 'nosum',
        type: 'checkbox',
        label: 'No Sum',
        path: 'selectedObject.nosum',
        format: 'boolean'
      },
      {
        fieldName: 'selectcell',
        type: 'checkbox',
        label: 'Select Cell',
        path: 'selectedObject.selectcell',
        format: 'boolean'
      },
      {
        fieldName: 'onecellleave',
        type: 'checkbox',
        label: 'One Cell Leave Proc',
        path: 'selectedObject.onecellleave',
        format: 'boolean'
      },
      {
        fieldName: 'onecelldblclk',
        type: 'checkbox',
        label: 'One Cell Dbl Click Proc',
        path: 'selectedObject.onecellldblclk',
        format: 'boolean'
      },
      {
        fieldName: 'disablesave',
        type: 'checkbox',
        label: 'Disable Save Column Order',
        path: 'selectedObject.disablesave',
        format: 'boolean'
      },
      {
        fieldName: 'disablemygraphs',
        type: 'checkbox',
        label: 'Disable My Graphs',
        path: 'selectedObject.disablemygraphs',
        format: 'boolean'
      }
    ]
  },
  {
    type: 'text',
    label: 'Screen Child Object Information'
  },
  {
    fieldName: 'childobjgrid',
    type: 'grid',
    path: 'metaData.screenchildobject',
    itemPath: 'selectedChildObject',
    cls: 'screenchildobject'
  },
  {
    fieldName: 'childobjinfopanel',
    type: 'panel',
    children: [
      {
        fieldName: 'childobjinfopanel1',
        type: 'group',
        children: [
          {
            fieldName: 'childobjname',
            type: 'textfield',
            label: 'Object Name',
            path: 'selectedChildObject.objname'
          },
          {
            fieldName: 'childobjtype',
            type: 'combobox',
            label: 'Object Type',
            path: 'selectedChildObject.objtype',
            cls: 'childobjtype'
          },
          {
            fieldName: 'childobjparent',
            type: 'combobox',
            label: 'Object Parent',
            path: 'selectedChildObject.objparent'
          },
          {
            fieldName: 'childobjseq',
            type: 'textfield',
            label: 'Object Sequence',
            path: 'selectedChildObject.objseq'
          }
        ]
      },
      {
        fieldName: 'childobjenable',
        type: 'checkbox',
        label: 'Object Enabled',
        path: 'selectedChildObject.objenabled'
      },
      {
        fieldName: 'childobjvisible',
        type: 'checkbox',
        label: 'Object Visible',
        path: 'selectedChildObject.objvisible'
      }
    ]
  },
  {
    fieldName: 'childobjlabelpanel',
    type: 'panel',
    label: 'Label and Initial Value',
    children: [
      {
        fieldName: 'childobjlabelcode',
        type: 'search',
        label: 'Label Code',
        path: 'selectedChildObject.objlabelcode',
        cls: 'label'
      },
      {
        fieldName: 'childobjinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        path: 'selectedChildObject.objinitialvalue'
      },
      {
        fieldName: 'childobjimage',
        type: 'textfield',
        label: 'Image',
        path: 'selectedChildObject.objimage'
      },
      {
        fieldName: 'childobjuserdefnum',
        type: 'textfield',
        label: 'UDF Number',
        path: 'selectedChildObject.userdefnum'
      },
      {
        fieldName: 'childobjuserdeftype',
        type: 'combobox',
        label: 'UDF Type',
        path: 'selectedChildObject.userdeftype',
        cls: 'udftype'
      }
    ]
  },
  {
    fieldName: 'childobjgridattr',
    type: 'panel',
    label: 'Grid Column Attribute',
    children: [
      {
        fieldName: 'childobjrelatedtable',
        type: 'textfield',
        label: 'Related Table',
        path: 'selectedChildObject.relatedtable'
      },
      {
        fieldName: 'childobjrelatedfield',
        type: 'textfield',
        label: 'Related Field',
        path: 'selectedChildObject.relatedfield'
      },
      {
        fieldName: 'childobjformattype',
        type: 'combobox',
        label: 'Format Type',
        path: 'selectedChildObject.objformattype',
        cls: 'formattype'
      },
      {
        fieldName: 'childobjformat',
        type: 'textfield',
        label: 'Format',
        path: 'selectedChildObject.objformat'
      },
      {
        fieldName: 'childobjdropname',
        type: 'textfield',
        label: 'List Name',
        path: 'selectedChildObject.dropname'
      }
    ]
  }
]
