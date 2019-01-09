import { CreateElement, VNode } from 'vue';

export interface ObjectDefinition {
  fieldName: string;
  type: 'panel' | 'textfield' | 'checkbox' | 'combobox' | 'grid' | 'text';
  label?: string;
  model?: string;
  format?: string;
  colspan?: number;
  children?: ObjectDefinition[];
}

const ComponentMap = {
  panel: 'v-card',
  textfield: 'v-text-field',
  combobox: 'v-combobox',
  checkbox: 'v-checkbox',
  grid: 'v-data-table',
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
    const containerAttrs: NodeData = {};
    const colspan = data.colspan || (data.type === 'panel' ? 12 : 3);
    containerAttrs[`md${colspan}`] = true;

    const componentAttrs: NodeData = {};
    if (data.model) {
      componentAttrs['v-model'] = data.model;
    }

    const componentProps: NodeData = {};
    if (data.label && data.type !== 'panel') {
      componentProps.label = data.label;
    }

    if (data.type === 'grid') {
      componentProps.rowsPerPage = 10;
      componentProps.items = [];
    }

    switch (data.type) {
      case 'panel':
        return this.createElement(
          ComponentMap[data.type],
          { attrs: containerAttrs },
          [
            this.createElement(
              'v-card-title',
              { attrs: { 'primary-title': true } },
              [
                this.createElement('h3', [ data.label || '' ]),
              ]
            ),
            this.createElement(
              'v-container',
              { attrs: { 'grid-list-md': true, 'fluid': true } },
              [
                this.createElement(
                  'v-layout',
                  { attrs: { row: true, wrap: true } },
                  children
                )
              ]
            ),
            this.createElement('v-divider')
          ]
        );
      case 'grid':
        return this.createElement(
          'div',
          [
            this.createElement(
              ComponentMap[data.type],
              { props: componentProps }
            ),
            this.createElement('v-divider')
          ]
        );
      case 'text':
        return this.createElement(ComponentMap[data.type], [ data.label || '' ]);
          /*return this.createElement(
            ComponentMap[data.type],
            [
              this.createElement('h2', [ data.label || '' ]),
            ]
          );*/
      default:
        return this.createElement(
          'v-flex',
          {
            attrs: {
              ...containerAttrs,
              lg2: true,
              sm6: true,
              xs12: true
            }
          },
          [
            this.createElement(
              ComponentMap[data.type],
              {
                attrs: { ...componentAttrs },
                props: { ...componentProps }
              },
              children
            )
          ]
        );
    }
  }
}
