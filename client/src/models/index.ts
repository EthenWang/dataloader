import { ScreenModel, ScreenObjectModel, ScreenChildObjectModel } from './screen';
import { Translation } from './translation';
import { Message } from './message';

type ModuleType = 'screen' | 'translation' | 'messages';

interface Screen {
    screeninfo: ScreenModel;
    screenobject: ScreenObjectModel[];
    screenchildobject?: ScreenChildObjectModel[];
}

interface ObjectProps {
  label: string,
  module: ModuleType,
  path?: string,
  itemPath?: string,
  type: 'panel' | 'collapse' | 'collapse-panel' | 'group' | 'textfield' |
        'search' | 'label' | 'checkbox' | 'combobox' | 'grid' | 'text',
  cls?: string,
  format?: string,
}

interface ScreenResponse {
  dsscreen: {
    ttscreen: ScreenModel[],
    ttscreenobj: ScreenObjectModel[],
    ttscreenchildobj: ScreenChildObjectModel[]
  }
}

interface TranslationResponse {
  dstranslation: {
    tttranslation: Translation[]
  }
}

interface MessageResponse {
  dsmessages: {
    ttmessages: Message[]
  }
}

export { Screen, ScreenModel, ScreenObjectModel, ScreenChildObjectModel, 
  Translation, Message, ObjectProps, ScreenResponse, TranslationResponse, 
  MessageResponse, ModuleType }

