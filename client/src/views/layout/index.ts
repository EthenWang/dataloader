import screenData from '@/views/layout/ScreenControl';

const gridColumnDefinition: { [k: string]: any } = {
  screenobject: {
    screenobjname: 'Object Name',
    objtype: 'Type',
    objlabelcode: 'Label Code',
    objformattype: 'Format Type',
    objformat: 'Format',
    screenorder: 'Order',
    objparent: 'Parent',
    objrow: 'Row',
    rowspan: 'Row Span',
    objcol: 'Column',
    colspan: 'Column Span'
  },
  screenchildobject: {
    objname: 'Object Name',
    objparent: 'Parent',
    objtype: 'Type',
    objlabelcode: 'Label Code',
    objformattype: 'Format Type',
    objformat: 'Format',
    objseq: 'Sequence',
    objwidth: 'Width'
  }
}

export { screenData, gridColumnDefinition }
