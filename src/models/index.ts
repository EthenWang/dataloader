import { ScreenInfo, ScreenObject, ScreenChildObject } from './screen';
import { Translation } from './translation';
import { Message } from './message';

interface Screen {
    screenInfo: ScreenInfo;
    screenObjects?: ScreenObject[];
    screenChildObjects?: ScreenChildObject[];
}

export { Screen, ScreenInfo, ScreenObject, ScreenChildObject, Translation, Message }

