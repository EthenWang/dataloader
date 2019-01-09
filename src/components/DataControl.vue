<script lang="ts">
import Vue, { VNode } from 'vue';
import { CreateElement } from 'vue';
import { Render } from '@/utils/Render';
import * as metaData from '@/views/layout';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class DataControl extends Vue {
  @Prop(String) type!: string;

  render(h: CreateElement) {
    const render = new Render(h);
    switch (this.type) {
      case 'screen':
        return render.render(metaData.screenData);
    }
  } 
}

// export default {
//   render(h: CreateElement) {
//     const engine = new Render(h);
//     return engine.render(metaData as ObjectDefinition[]);
//   }
// }

// export default Vue.extend({
//   render(h: CreateElement): VNode {
//     const engine = new Render(h);
//     return engine.render(metaData as ObjectDefinition[]);
//   }
// });

</script>
