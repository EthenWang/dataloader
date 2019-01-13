import { ScreenModel, ScreenObjectModel, ScreenChildObjectModel } from './screen';
import { Translation } from './translation';
import { Message } from './message';

interface Screen {
    screeninfo: ScreenModel;
    screenobject?: ScreenObjectModel[];
    screenchildobject?: ScreenChildObjectModel[];
}

export { Screen, ScreenModel, ScreenObjectModel, ScreenChildObjectModel, Translation, Message }

