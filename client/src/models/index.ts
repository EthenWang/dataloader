import { ScreenModel, ScreenObjectModel, ScreenChildObjectModel } from './screen';
import { Translation } from './translation';
import { Message } from './message';

interface Screen {
    screenInfo: ScreenModel;
    screenObjects?: ScreenObjectModel[];
    screenChildObjects?: ScreenChildObjectModel[];
}

export { Screen, ScreenModel, ScreenObjectModel, ScreenChildObjectModel, Translation, Message }

