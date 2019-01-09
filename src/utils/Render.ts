import { CreateElement, VNode } from 'vue';

export interface ObjectDefinition {
  fieldName: string;
  type: 'panel' | 'group' | 'textfield' | 'checkbox' | 'combobox' | 'grid' | 'text';
  label?: string;
  model?: string;
  format?: string;
  colspan?: number;
  children?: ObjectDefinition[];
}

const ComponentMap = {
  panel: 'div',
  group: 'div',
  textfield: 'a-input',
  combobox: 'a-select',
  checkbox: 'a-checkbox',
  grid: 'a-table',
  text: 'h2'
}

interface NodeData {
  [k: string]: any;
}

export class Render {
  constructor(protected createElement: CreateElement) {}

  render(data: object[]) {
    return this.createElement('div', this.processData(data as ObjectDefinition[]));
  }

  private processData(data: ObjectDefinition[] | undefined): VNode[] {
    if (!data) {
      return [];
    }
    return data.map((item) => this.createNode(item));
  }

  private createNode(data: ObjectDefinition) {
    const children = this.processData(data.children);

    if (data.type === 'grid') {
    }

    switch (data.type) {
      case 'panel':
        return this.createElement(
          ComponentMap[data.type],
          [
            this.createElement('h3', [ data.label || '' ]),
            this.createElement(
              'a-row',
              { 
                attrs: {
                  gutter: 16
                } 
              }, 
              [ children ]
            ),
            this.createElement('a-divider')
          ]
        );
      case 'group':
        return this.createElement(
          ComponentMap[data.type],
          { style: { 'padding-left': '8px' } },
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
        return this.createElement('div', [ this.createElement(ComponentMap[data.type]) ]);
      case 'text':
        return this.createElement(ComponentMap[data.type], [ data.label || '' ]);
      default:
        return this.createElement(
          'a-col',
          { attrs: { span: 4 } },
          [
            this.createElement(
              'a-form-item',
              {
                attrs: { label: data.type === 'checkbox' ? '' : data.label || '' },
                props: { span: 5, colon: false },
              },
              [
                this.createElement(
                  ComponentMap[data.type],
                  {
                    attrs: { 'v-model': data.model },
                    class: { 'gutter-row': true },
                    style: { width: '100%' }
                  },
                  data.type === 'checkbox' ? data.label || '' : children
                )
              ]
            )
          ]
        );
    }
  }
}
