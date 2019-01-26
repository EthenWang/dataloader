import screenData from '@/views/layout/ScreenControl';
import translationData from '@/views/layout/TranslationControl';
import messageData from '@/views/layout/MessageControl';

export default {
  screen: {
    metaData: screenData,
    grids: {
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
  },
  translation: {
    metaData: translationData,
    grids: {
      translation: {
        sdcode: 'Translation Code',
        sdtext: 'Translation Text',
        sdabbreviation: 'Abbreviation'
      }
    }
  },
  messages: {
    metaData: messageData,
    grids: {
      messages: {
        messagenumber: 'Message Number',
        messagedescription: 'Description',
        messagetype: 'Type'
      }
    }
  }
} as unknown as { [k: string]: {
  metaData: object[],
  grids: { [k: string]: { [k: string]: string} }
}}

