import { ScreenModel, ScreenObjectModel, ScreenChildObjectModel } from './screen';
import { Translation } from './translation';
import { Message } from './message';

interface Screen {
    screeninfo: ScreenModel;
    screenobject?: ScreenObjectModel[];
    screenchildobject?: ScreenChildObjectModel[];
}

interface ObjectProps {
  label: string,
  model: string,
  type: 'panel' | 'collapse' | 'collapse-panel' | 'group' | 'textfield' |
        'search' | 'label' | 'checkbox' | 'combobox' | 'grid' | 'text',
  cls?: string
}

export { Screen, ScreenModel, ScreenObjectModel, ScreenChildObjectModel, Translation, Message, ObjectProps }

