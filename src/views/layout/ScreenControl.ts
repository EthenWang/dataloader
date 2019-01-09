export default [
  {
    fieldName: 'screenobjpanel',
    type: 'text',
    label: 'Screen Object Information'
  },
  {
    fieldName: 'fieldgrid',
    type: 'grid'
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
        model: 'screenobjname',
        format: 'string'
      },
      {
        fieldName: 'objtype',
        type: 'textfield',
        label: 'Object Type',
        model: 'objtype',
        format: 'string'
      },
      {
        fieldName: 'objparent',
        type: 'textfield',
        label: 'Object Parent',
        model: 'objparent',
        format: 'string'
      },
      {
        fieldName: 'fieldtype',
        type: 'textfield',
        label: 'Field Type',
        model: 'fieldtype',
        format: 'string'
      },
      {
        fieldName: 'specialcase',
        type: 'textfield',
        label: 'Special Case',
        model: 'specialcase',
        format: 'string'
      },
      {
        fieldName: 'objformattype',
        type: 'textfield',
        label: 'Format Type',
        model: 'objformattype',
        format: 'string'
      },
      {
        fieldName: 'objformat',
        type: 'textfield',
        label: 'Format',
        model: 'objformat',
        format: 'string'
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
        type: 'combobox',
        label: 'Label Code',
        model: 'objlabelcode',
        format: 'string'
      },
      {
        fieldName: 'objinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        model: 'objinitialvalue',
        format: 'string'
      },
      {
        fieldName: 'objimage',
        type: 'combobox',
        label: 'Obj Image',
        model: 'objimage',
        format: 'string'
      },
      {
        fieldName: 'linkedbrowseobj',
        type: 'textfield',
        label: 'Linked Drop Name',
        model: 'linkedbrowseobj',
        format: 'string'
      },
      {
        fieldName: 'dropname',
        type: 'textfield',
        label: 'List Name',
        model: 'dropname',
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
        model: 'objalign',
        format: 'number'
      },
      {
        fieldName: 'objcellalign',
        type: 'combobox',
        label: 'Cell Align',
        model: 'objcellalign',
        format: 'number'
      },
      {
        fieldName: 'screenorder',
        type: 'textfield',
        label: 'Screen Order',
        model: 'screenorder',
        format: 'number'
      },
      {
        fieldName: 'objrow',
        type: 'textfield',
        label: 'Object Row',
        model: 'objrow',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Row Span',
        model: 'colspan',
        format: 'number'
      },
      {
        fieldName: 'objcol',
        type: 'textfield',
        label: 'Object Column',
        model: 'objcol',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Column Span',
        model: 'colspan',
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
        model: 'eventchoose',
        format: 'boolean'
      },
      {
        fieldName: 'eventvaluechange',
        type: 'checkbox',
        label: 'VALUE_CHANGED',
        model: 'eventvaluechange',
        format: 'boolean'
      },
      {
        fieldName: 'eventleave',
        type: 'checkbox',
        label: 'LEAVE',
        model: 'eventleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventclick',
        type: 'checkbox',
        label: 'CLICK',
        model: 'eventclick',
        format: 'boolean'
      },
      {
        fieldName: 'evententry',
        type: 'checkbox',
        label: 'ENTRY',
        model: 'evententry',
        format: 'boolean'
      },
      {
        fieldName: 'eventrowleave',
        type: 'checkbox',
        label: 'ROW LEAVE',
        model: 'eventrowleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventdblclick',
        type: 'checkbox',
        label: 'DBL_CLICK',
        model: 'eventdblclick',
        format: 'boolean'
      },
      {
        fieldName: 'eventplus',
        type: 'checkbox',
        label: 'PLUS',
        model: 'eventplus',
        format: 'boolean'
      },
      {
        fieldName: 'eventupdown',
        type: 'checkbox',
        label: 'UP/DOWN',
        model: 'eventupdown',
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
        model: 'objactive',
        format: 'boolean'
      },
      {
        fieldName: 'objunlabelled',
        type: 'checkbox',
        label: 'Obj Unlabelled',
        model: 'objunlabelled',
        format: 'boolean'
      },
      {
        fieldName: 'objenabled',
        type: 'checkbox',
        label: 'Obj Enabled',
        model: 'objenabled',
        format: 'boolean'
      },
      {
        fieldName: 'objvisible',
        type: 'checkbox',
        label: 'Obj Visible',
        model: 'objvisible',
        format: 'boolean'
      },
      {
        fieldName: 'objdisplay',
        type: 'checkbox',
        label: 'Obj Display',
        model: 'objdisplay',
        format: 'boolean'
      },
      {
        fieldName: 'objrequired',
        type: 'checkbox',
        label: 'Obj Required',
        model: 'objrequired',
        format: 'boolean'
      },
      {
        fieldName: 'textcolon',
        type: 'checkbox',
        label: 'Text Colon',
        model: 'objcolon',
        format: 'boolean'
      },
      {
        fieldName: 'objneedsvalidation',
        type: 'checkbox',
        label: 'Obj Needs Validation',
        model: 'objneedsvalidation',
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
            model: 'objwidth',
            format: 'number'
          },
          {
            fieldName: 'objheigth',
            type: 'textfield',
            label: 'Heigth',
            model: 'objheight',
            format: 'number'
          },
        ]
      },
      {
        fieldName: 'multrowselect',
        type: 'checkbox',
        label: 'Multi Row Select',
        model: 'multrowselect',
        format: 'boolean'
      },
      {
        fieldName: 'noassign',
        type: 'checkbox',
        label: 'No Assign',
        model: 'noassign',
        format: 'boolean'
      },
      {
        fieldName: 'cachebrowser',
        type: 'checkbox',
        label: 'Cache Browser',
        model: 'cachebrowser',
        format: 'boolean'
      },
      {
        fieldName: 'nosort',
        type: 'checkbox',
        label: 'No Sort',
        model: 'nosort',
        format: 'boolean'
      },
      {
        fieldName: 'nopin',
        type: 'checkbox',
        label: 'No Pin',
        model: 'nopin',
        format: 'boolean'
      },
      {
        fieldName: 'norowpin',
        type: 'checkbox',
        label: 'No Row Assign',
        model: 'norowpin',
        format: 'boolean'
      },
      {
        fieldName: 'nofilter',
        type: 'checkbox',
        label: 'No Filter',
        model: 'nofilter',
        format: 'boolean'
      },
      {
        fieldName: 'nosum',
        type: 'checkbox',
        label: 'No Sum',
        model: 'nosum',
        format: 'boolean'
      },
      {
        fieldName: 'selectcell',
        type: 'checkbox',
        label: 'Select Cell',
        model: 'selectcell',
        format: 'boolean'
      },
      {
        fieldName: 'onecellleave',
        type: 'checkbox',
        label: 'One Cell Leave Proc',
        model: 'onecellleave',
        format: 'boolean'
      },
      {
        fieldName: 'onecelldblclk',
        type: 'checkbox',
        label: 'One Cell Dbl Click Proc',
        model: 'onecellldblclk',
        format: 'boolean'
      },
      {
        fieldName: 'disablesave',
        type: 'checkbox',
        label: 'Disable Save Column Order',
        model: 'disablesave',
        format: 'boolean'
      },
      {
        fieldName: 'disablemygraphs',
        type: 'checkbox',
        label: 'Disable My Graphs',
        model: 'disablemygraphs',
        format: 'boolean'
      }
    ]
  }
]
