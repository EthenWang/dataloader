import screenData from '@/views/layout/ScreenControl';
import translationData from '@/views/layout/TranslationControl';
import messageData from '@/views/layout/MessageControl';

export type ModuleType = 'screen' | 'translation' | 'messages';

export interface ObjectProps {
  module: ModuleType,
  type: 'panel' | 'collapse' | 'collapse-panel' | 'group' | 'textfield' |
        'search' | 'label' | 'checkbox' | 'combobox' | 'grid' | 'text',
  label?: string,
  path?: string,
  itemPath?: string,
  cls?: string,
  format?: string,
  [k: string]: any
}

export interface ObjectDefinition extends ObjectProps {
  fieldName: string;
  colspan?: number;
  children?: ObjectDefinition[];
}

export interface Indexable<T> { 
  [k: string]: T 
}

export interface MetaDataItem {
  metaData: ObjectDefinition[],
  grids: Indexable<any>,
  [k: string]: any
}

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
} as unknown as Indexable<MetaDataItem>;

