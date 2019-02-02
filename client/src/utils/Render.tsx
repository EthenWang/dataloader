import { CreateElement, VNode } from 'vue';
import { ModuleType, ObjectProps, ObjectDefinition } from '@/views/layout';
import Grid from '@/components/Grid.vue';
import ScreenObject from '@/components/ScreenObject.vue';

export default class Render {
  constructor(private module: ModuleType, protected $createElement: CreateElement) { }

  processMetaData(data: ObjectDefinition[]) {
    return (
      <div>
        { this.processData(data) }
      </div>
    );
  }

  private processData(data: ObjectDefinition[] | undefined): VNode[] {
    if (!data) return [];
    return data.map((item) => this.createNode(item));
  }

  private createNode(data: ObjectDefinition) {
    const children = this.processData(data.children);
    const params = {
      /* here variable name must be "props" to match Vue render rules 
        https://vuejs.org/v2/guide/render-function.html#createElement-Arguments */
      props: {
        props: {
          ...data,
          module: this.module
        } as ObjectProps
      }
    };
    switch (data.type) {
      case 'panel':
        return (
          <div>
            <h3>
              { data.label || '' }
            </h3>
            <a-row gutter={16}>
              { children }
            </a-row>
            <a-divider />
          </div>
        )
      case 'group':
        return (
          <div style='padding-left: 8px'>
            <a-row span={24} gutter={16}>
              { children }
            </a-row>
          </div>
        )
      case 'grid':
        return (
          <div>
            <Grid {...params} />
          </div>
        )
      case 'text':
        return <h2>{ data.label || '' }</h2>
      default:
        return (
          <a-col span={data.colspan || 4}> 
            <ScreenObject {...params} />
          </a-col>
        )
    }
  }
}
