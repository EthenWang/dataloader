import { CreateElement, VNode } from 'vue';
import { ModuleType } from '@/models';

export interface ObjectDefinition {
  fieldName: string;
  type: 'panel' | 'collapse' | 'collapse-panel' | 'group' | 'textfield' |
        'search' | 'label' | 'checkbox' | 'combobox' | 'grid' | 'text';
  label?: string;
  path?: string;
  itemPath?: string;
  format?: string;
  cls?: string;
  colspan?: number;
  children?: ObjectDefinition[];
}

const ComponentMap = {
  'panel': 'div',
  'group': 'div',
  'grid': 'Grid',
  'text': 'h2',
  'collapse': 'a-collapse',
  'collapse-panel': 'a-collapse-panel'
}

export class Render {
  constructor(private module: ModuleType, protected createElement: CreateElement) {}

  render(data: object[]) {
    return this.createElement('div', this.processData(data as ObjectDefinition[]));
  }

  private processData(data: ObjectDefinition[] | undefined): VNode[] {
    if (!data) return [];
    return data.map((item) => this.createNode(item));
  }

  private createNode(data: ObjectDefinition) {
    const children = this.processData(data.children);

    switch (data.type) {
      case 'collapse':
        return this.createElement(
          ComponentMap[data.type],
          { 
            props: { 
              defaultActiveKey: 1,
              bordered: false
            }
          },
          [ children ]
        );
      case 'collapse-panel': 
        return this.createElement(ComponentMap[data.type], { props: { header: data.label || '' } }, [ children ]);
      case 'panel':
        return this.createElement(
          ComponentMap[data.type],
          [
            this.createElement('h3', [ data.label || '' ]),
            this.createElement(
              'a-row', 
              { attrs: { gutter: 16 } }, 
              [ children ]
            ),
            this.createElement('a-divider')
          ]
        );
      case 'group':
        return this.createElement(
          ComponentMap[data.type],
          { style: { 'padding-left': '8lpx' } },
          [ 
            this.createElement(
              'a-row', 
              { 
                attrs: {
                  span: 24,
                  gutter: 16
                } 
              },
              [ children ]
            ) 
          ]
        );
      case 'grid':
        return this.createElement(
          'div', 
          [ 
            this.createElement(
              ComponentMap[data.type], 
              { 
                props: { 
                  props: {
                    ...data,
                    module: this.module
                  } 
                } 
              }
            ) 
          ]
        );
      case 'text':
        return this.createElement(ComponentMap[data.type], [ data.label || '' ]);
      default:
        return this.createElement(
          'a-col', 
          { attrs: { span: 4 } }, 
          [ 
            this.createElement(
              'ScreenObject', 
              { 
                props: { 
                  props: {
                    ...data,
                    module: this.module
                  } 
                } 
              } 
            )
          ]
        );
    }
  }
}
