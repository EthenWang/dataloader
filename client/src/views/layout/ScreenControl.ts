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
            model: 'screeninfo.screenname'
          },
          {
            fieldName: 'screenprogram',
            type: 'textfield',
            label: 'Program Name',
            model: 'screeninfo.screenprogram'
          },
          {
            fieldName: 'screentype',
            type: 'textfield',
            label: 'Screen Type',
            model: 'screeninfo.screentype'
          },
          {
            fieldName: 'screentitle',
            type: 'label',
            label: 'Screen Title',
            model: 'screeninfo.screentitle'
          },
          {
            fieldName: 'helpkey',
            type: 'textfield',
            label: 'Help Text',
            model: 'screeninfo.helpkey'
          }
        ]
      },
      {
        fieldName: 'virtualdates',
        type: 'checkbox',
        label: 'Virtual Dates',
        model: 'screeninfo.virtualdates'
      }
    ]
  },
  {
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
        model: 'screenobject.screenobjname',
        format: 'string'
      },
      {
        fieldName: 'objtype',
        type: 'combobox',
        label: 'Object Type',
        model: 'screenobject.objtype',
        format: 'string',
        cls: 'objtype'
      },
      {
        fieldName: 'objparent',
        type: 'textfield',
        label: 'Object Parent',
        model: 'screenobject.objparent',
        format: 'string'
      },
      {
        fieldName: 'fieldtype',
        type: 'textfield',
        label: 'Field Type',
        model: 'screenobject.fieldtype',
        format: 'string'
      },
      {
        fieldName: 'specialcase',
        type: 'textfield',
        label: 'Special Case',
        model: 'screenobject.specialcase',
        format: 'string'
      },
      {
        fieldName: 'objformattype',
        type: 'combobox',
        label: 'Format Type',
        model: 'screenobject.objformattype',
        format: 'string',
        cls: 'formattype'
      },
      {
        fieldName: 'objformat',
        type: 'textfield',
        label: 'Format',
        model: 'screenobject.objformat',
        format: 'string'
      },
      {
        fieldName: 'reltabpagepgm',
        type: 'textfield',
        label: 'Related Program',
        model: 'screenobject.reltabpagepgm',
        format: 'string'
      },
      {
        fieldName: 'userdefnum',
        type: 'textfield',
        label: 'UDF Number',
        model: 'screenobject.userdefnum',
        format: 'string'
      },
      {
        fieldName: 'userdeftype',
        type: 'combobox',
        label: 'UDF Type',
        model: 'screenobject.userdeftype',
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
        type: 'label',
        label: 'Label Code',
        model: 'screenobject.objlabelcode',
        format: 'string'
      },
      {
        fieldName: 'objinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        model: 'screenobject.objinitialvalue',
        format: 'string'
      },
      {
        fieldName: 'objimage',
        type: 'combobox',
        label: 'Obj Image',
        model: 'screenobject.objimage',
        format: 'string'
      },
      {
        fieldName: 'linkedbrowseobj',
        type: 'textfield',
        label: 'Linked Drop Name',
        model: 'screenobject.linkedbrowseobj',
        format: 'string'
      },
      {
        fieldName: 'dropname',
        type: 'textfield',
        label: 'List Name',
        model: 'screenobject.dropname',
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
        model: 'screenobject.objalign',
        format: 'number'
      },
      {
        fieldName: 'objcellalign',
        type: 'combobox',
        label: 'Cell Align',
        model: 'screenobject.objcellalign',
        format: 'number'
      },
      {
        fieldName: 'screenorder',
        type: 'textfield',
        label: 'Screen Order',
        model: 'screenobject.screenorder',
        format: 'number'
      },
      {
        fieldName: 'objrow',
        type: 'textfield',
        label: 'Object Row',
        model: 'screenobject.objrow',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Row Span',
        model: 'screenobject.colspan',
        format: 'number'
      },
      {
        fieldName: 'objcol',
        type: 'textfield',
        label: 'Object Column',
        model: 'screenobject.objcol',
        format: 'number'
      },
      {
        fieldName: 'colspan',
        type: 'textfield',
        label: 'Column Span',
        model: 'screenobject.colspan',
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
        model: 'screenobject.eventchoose',
        format: 'boolean'
      },
      {
        fieldName: 'eventvaluechange',
        type: 'checkbox',
        label: 'VALUE_CHANGED',
        model: 'screenobject.eventvaluechange',
        format: 'boolean'
      },
      {
        fieldName: 'eventleave',
        type: 'checkbox',
        label: 'LEAVE',
        model: 'screenobject.eventleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventclick',
        type: 'checkbox',
        label: 'CLICK',
        model: 'screenobject.eventclick',
        format: 'boolean'
      },
      {
        fieldName: 'evententry',
        type: 'checkbox',
        label: 'ENTRY',
        model: 'screenobject.evententry',
        format: 'boolean'
      },
      {
        fieldName: 'eventrowleave',
        type: 'checkbox',
        label: 'ROW LEAVE',
        model: 'screenobject.eventrowleave',
        format: 'boolean'
      },
      {
        fieldName: 'eventdblclick',
        type: 'checkbox',
        label: 'DBL_CLICK',
        model: 'screenobject.eventdblclick',
        format: 'boolean'
      },
      {
        fieldName: 'eventplus',
        type: 'checkbox',
        label: 'PLUS',
        model: 'screenobject.eventplus',
        format: 'boolean'
      },
      {
        fieldName: 'eventupdown',
        type: 'checkbox',
        label: 'UP/DOWN',
        model: 'screenobject.eventupdown',
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
        model: 'screenobject.objactive',
        format: 'boolean'
      },
      {
        fieldName: 'objunlabelled',
        type: 'checkbox',
        label: 'Obj Unlabelled',
        model: 'screenobject.objunlabelled',
        format: 'boolean'
      },
      {
        fieldName: 'objenabled',
        type: 'checkbox',
        label: 'Obj Enabled',
        model: 'screenobject.objenabled',
        format: 'boolean'
      },
      {
        fieldName: 'objvisible',
        type: 'checkbox',
        label: 'Obj Visible',
        model: 'screenobject.objvisible',
        format: 'boolean'
      },
      {
        fieldName: 'objdisplay',
        type: 'checkbox',
        label: 'Obj Display',
        model: 'screenobject.objdisplay',
        format: 'boolean'
      },
      {
        fieldName: 'objrequired',
        type: 'checkbox',
        label: 'Obj Required',
        model: 'screenobject.objrequired',
        format: 'boolean'
      },
      {
        fieldName: 'textcolon',
        type: 'checkbox',
        label: 'Text Colon',
        model: 'screenobject.objcolon',
        format: 'boolean'
      },
      {
        fieldName: 'objneedsvalidation',
        type: 'checkbox',
        label: 'Obj Needs Validation',
        model: 'screenobject.objneedsvalidation',
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
            model: 'screenobject.objwidth',
            format: 'number'
          },
          {
            fieldName: 'objheigth',
            type: 'textfield',
            label: 'Heigth',
            model: 'screenobject.objheight',
            format: 'number'
          },
        ]
      },
      {
        fieldName: 'multrowselect',
        type: 'checkbox',
        label: 'Multi Row Select',
        model: 'screenobject.multrowselect',
        format: 'boolean'
      },
      {
        fieldName: 'noassign',
        type: 'checkbox',
        label: 'No Assign',
        model: 'screenobject.noassign',
        format: 'boolean'
      },
      {
        fieldName: 'cachebrowser',
        type: 'checkbox',
        label: 'Cache Browser',
        model: 'screenobject.cachebrowser',
        format: 'boolean'
      },
      {
        fieldName: 'nosort',
        type: 'checkbox',
        label: 'No Sort',
        model: 'screenobject.nosort',
        format: 'boolean'
      },
      {
        fieldName: 'nopin',
        type: 'checkbox',
        label: 'No Pin',
        model: 'screenobject.nopin',
        format: 'boolean'
      },
      {
        fieldName: 'norowpin',
        type: 'checkbox',
        label: 'No Row Assign',
        model: 'screenobject.norowpin',
        format: 'boolean'
      },
      {
        fieldName: 'nofilter',
        type: 'checkbox',
        label: 'No Filter',
        model: 'screenobject.nofilter',
        format: 'boolean'
      },
      {
        fieldName: 'nosum',
        type: 'checkbox',
        label: 'No Sum',
        model: 'screenobject.nosum',
        format: 'boolean'
      },
      {
        fieldName: 'selectcell',
        type: 'checkbox',
        label: 'Select Cell',
        model: 'screenobject.selectcell',
        format: 'boolean'
      },
      {
        fieldName: 'onecellleave',
        type: 'checkbox',
        label: 'One Cell Leave Proc',
        model: 'screenobject.onecellleave',
        format: 'boolean'
      },
      {
        fieldName: 'onecelldblclk',
        type: 'checkbox',
        label: 'One Cell Dbl Click Proc',
        model: 'screenobject.onecellldblclk',
        format: 'boolean'
      },
      {
        fieldName: 'disablesave',
        type: 'checkbox',
        label: 'Disable Save Column Order',
        model: 'screenobject.disablesave',
        format: 'boolean'
      },
      {
        fieldName: 'disablemygraphs',
        type: 'checkbox',
        label: 'Disable My Graphs',
        model: 'screenobject.disablemygraphs',
        format: 'boolean'
      }
    ]
  },
  {
    type: 'text',
    label: 'Screen Child Object Information'
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
            model: 'screenchildobject.objname'
          },
          {
            fieldName: 'childobjtype',
            type: 'combobox',
            label: 'Object Type',
            model: 'screenchildobject.objtype',
            cls: 'childobjtype'
          },
          {
            fieldName: 'childobjparent',
            type: 'combobox',
            label: 'Object Parent',
            model: 'screenchildobject.objparent'
          },
          {
            fieldName: 'childobjseq',
            type: 'textfield',
            label: 'Object Sequence',
            model: 'screenchildobject.objseq'
          }
        ]
      },
      {
        fieldName: 'childobjenable',
        type: 'checkbox',
        label: 'Object Enabled',
        model: 'screenchildobject.objenabled'
      },
      {
        fieldName: 'childobjvisible',
        type: 'checkbox',
        label: 'Object Visible',
        model: 'screenchildobject.objvisible'
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
        type: 'label',
        label: 'Label Code',
        model: 'screenchildobject.objlabelcode'
      },
      {
        fieldName: 'childobjinitialvalue',
        type: 'textfield',
        label: 'Initial Value',
        model: 'screenchildobject.objinitialvalue'
      },
      {
        fieldName: 'childobjimage',
        type: 'textfield',
        label: 'Image',
        model: 'screenchildobject.objimage'
      },
      {
        fieldName: 'childobjuserdefnum',
        type: 'textfield',
        label: 'UDF Number',
        model: 'screenchildobject.userdefnum'
      },
      {
        fieldName: 'childobjuserdeftype',
        type: 'combobox',
        label: 'UDF Type',
        model: 'screenchildobject.userdeftype',
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
        model: 'screenchildobject.relatedtable'
      },
      {
        fieldName: 'childobjrelatedfield',
        type: 'textfield',
        label: 'Related Field',
        model: 'screenchildobject.relatedfield'
      },
      {
        fieldName: 'childobjformattype',
        type: 'combobox',
        label: 'Format Type',
        model: 'screenchildobject.objformattype',
        cls: 'formattype'
      },
      {
        fieldName: 'childobjformat',
        type: 'textfield',
        label: 'Format',
        model: 'screenchildobject.objformat'
      },
      {
        fieldName: 'childobjdropname',
        type: 'textfield',
        label: 'List Name',
        model: 'screenchildobject.dropname'
      }
    ]
  }
]
