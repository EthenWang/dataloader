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
        model: 'screenobj.screenobjname',
        format: 'string'
      },
      {
        fieldName: 'objtype',
        type: 'textfield',
        label: 'Object Type',
        model: 'screenobj.objtype',
        format: 'string'
      },
      {
        fieldName: 'objparent',
        type: 'textfield',
        label: 'Object Parent',
        model: 'screenobj.objparent',
        format: 'string'
      },
      {
        fieldName: 'fieldtype',
        type: 'textfield',
        label: 'Field Type',
        model: 'screenobj.fieldtype',
        format: 'string'
      },
      {
        fieldName: 'specialcase',
        type: 'textfield',
        label: 'Special Case',
        model: 'screenobj.specialcase',
        format: 'string'
      },
      {
        fieldName: 'objformattype',
        type: 'textfield',
        label: 'Format Type',
        model: 'screenobj.objformattype',
        format: 'string'
      },
      {
        fieldName: 'objformat',
        type: 'textfield',
        label: 'Format',
        model: 'screenobj.objformat',
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
        model: 'screenobj.objlabelcode',
        format: 'string'
      },
      {
        fieldName: 'objinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        model: 'screenobj.objinitialvalue',
        format: 'string'
      },
      {
        fieldName: 'objimage',
        type: 'combobox',
        label: 'Obj Image',
        model: 'screenobj.objimage',
        format: 'string'
      },
      {
        fieldName: 'linkedbrowseobj',
        type: 'textfield',
        label: 'Linked Drop Name',
        model: 'screenobj.linkedbrowseobj',
        format: 'string'
      },
      {
        fieldName: 'dropname',
        type: 'textfield',
        label: 'List Name',
        model: 'screenobj.dropname',
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
        model: 'screenobj.objalign',
        format: 'number'
      },
      {
        fieldName: 'objcellalign',
        type: 'combobox',
        label: 'Cell Align',
        model: 'screenobj.objcellalign',
        format: 'number'
      },
      {
        fieldName: 'screenorder',
        type: 'textfield',
        label: 'Screen Order',
        model: 'screenobj.screenorder',
        format: 'number'
      },
      {
        fieldName: 'objrow',
        type: 'textfield',
        label: 'Object Row',
        model: 'screenobj.objrow',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Row Span',
        model: 'screenobj.colspan',
        format: 'number'
      },
      {
        fieldName: 'objcol',
        type: 'textfield',
        label: 'Object Column',
        model: 'screenobj.objcol',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Column Span',
        model: 'screenobj.colspan',
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
        model: 'screenobj.eventchoose',
        format: 'boolean'
      },
      {
        fieldName: 'eventvaluechange',
        type: 'checkbox',
        label: 'VALUE_CHANGED',
        model: 'screenobj.eventvaluechange',
        format: 'boolean'
      },
      {
        fieldName: 'eventleave',
        type: 'checkbox',
        label: 'LEAVE',
        model: 'screenobj.eventleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventclick',
        type: 'checkbox',
        label: 'CLICK',
        model: 'screenobj.eventclick',
        format: 'boolean'
      },
      {
        fieldName: 'evententry',
        type: 'checkbox',
        label: 'ENTRY',
        model: 'screenobj.evententry',
        format: 'boolean'
      },
      {
        fieldName: 'eventrowleave',
        type: 'checkbox',
        label: 'ROW LEAVE',
        model: 'screenobj.eventrowleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventdblclick',
        type: 'checkbox',
        label: 'DBL_CLICK',
        model: 'screenobj.eventdblclick',
        format: 'boolean'
      },
      {
        fieldName: 'eventplus',
        type: 'checkbox',
        label: 'PLUS',
        model: 'screenobj.eventplus',
        format: 'boolean'
      },
      {
        fieldName: 'eventupdown',
        type: 'checkbox',
        label: 'UP/DOWN',
        model: 'screenobj.eventupdown',
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
        model: 'screenobj.objactive',
        format: 'boolean'
      },
      {
        fieldName: 'objunlabelled',
        type: 'checkbox',
        label: 'Obj Unlabelled',
        model: 'screenobj.objunlabelled',
        format: 'boolean'
      },
      {
        fieldName: 'objenabled',
        type: 'checkbox',
        label: 'Obj Enabled',
        model: 'screenobj.objenabled',
        format: 'boolean'
      },
      {
        fieldName: 'objvisible',
        type: 'checkbox',
        label: 'Obj Visible',
        model: 'screenobj.objvisible',
        format: 'boolean'
      },
      {
        fieldName: 'objdisplay',
        type: 'checkbox',
        label: 'Obj Display',
        model: 'screenobj.objdisplay',
        format: 'boolean'
      },
      {
        fieldName: 'objrequired',
        type: 'checkbox',
        label: 'Obj Required',
        model: 'screenobj.objrequired',
        format: 'boolean'
      },
      {
        fieldName: 'textcolon',
        type: 'checkbox',
        label: 'Text Colon',
        model: 'screenobj.objcolon',
        format: 'boolean'
      },
      {
        fieldName: 'objneedsvalidation',
        type: 'checkbox',
        label: 'Obj Needs Validation',
        model: 'screenobj.objneedsvalidation',
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
            model: 'screenobj.objwidth',
            format: 'number'
          },
          {
            fieldName: 'objheigth',
            type: 'textfield',
            label: 'Heigth',
            model: 'screenobj.objheight',
            format: 'number'
          },
        ]
      },
      {
        fieldName: 'multrowselect',
        type: 'checkbox',
        label: 'Multi Row Select',
        model: 'screenobj.multrowselect',
        format: 'boolean'
      },
      {
        fieldName: 'noassign',
        type: 'checkbox',
        label: 'No Assign',
        model: 'screenobj.noassign',
        format: 'boolean'
      },
      {
        fieldName: 'cachebrowser',
        type: 'checkbox',
        label: 'Cache Browser',
        model: 'screenobj.cachebrowser',
        format: 'boolean'
      },
      {
        fieldName: 'nosort',
        type: 'checkbox',
        label: 'No Sort',
        model: 'screenobj.nosort',
        format: 'boolean'
      },
      {
        fieldName: 'nopin',
        type: 'checkbox',
        label: 'No Pin',
        model: 'screenobj.nopin',
        format: 'boolean'
      },
      {
        fieldName: 'norowpin',
        type: 'checkbox',
        label: 'No Row Assign',
        model: 'screenobj.norowpin',
        format: 'boolean'
      },
      {
        fieldName: 'nofilter',
        type: 'checkbox',
        label: 'No Filter',
        model: 'screenobj.nofilter',
        format: 'boolean'
      },
      {
        fieldName: 'nosum',
        type: 'checkbox',
        label: 'No Sum',
        model: 'screenobj.nosum',
        format: 'boolean'
      },
      {
        fieldName: 'selectcell',
        type: 'checkbox',
        label: 'Select Cell',
        model: 'screenobj.selectcell',
        format: 'boolean'
      },
      {
        fieldName: 'onecellleave',
        type: 'checkbox',
        label: 'One Cell Leave Proc',
        model: 'screenobj.onecellleave',
        format: 'boolean'
      },
      {
        fieldName: 'onecelldblclk',
        type: 'checkbox',
        label: 'One Cell Dbl Click Proc',
        model: 'screenobj.onecellldblclk',
        format: 'boolean'
      },
      {
        fieldName: 'disablesave',
        type: 'checkbox',
        label: 'Disable Save Column Order',
        model: 'screenobj.disablesave',
        format: 'boolean'
      },
      {
        fieldName: 'disablemygraphs',
        type: 'checkbox',
        label: 'Disable My Graphs',
        model: 'screenobj.disablemygraphs',
        format: 'boolean'
      }
    ]
  }
]
