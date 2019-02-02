import { ScreenModel, ScreenObjectModel, ScreenChildObjectModel } from './screen';
import { Translation } from './translation';
import { Message } from './message';

interface Screen {
    screeninfo: ScreenModel;
    screenobject: ScreenObjectModel[];
    screenchildobject?: ScreenChildObjectModel[];
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
  Translation, Message, ScreenResponse, TranslationResponse, 
  MessageResponse }

