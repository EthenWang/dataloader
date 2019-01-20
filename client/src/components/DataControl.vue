<script lang="ts">
import Vue, { CreateElement } from 'vue';
import { Render } from '@/utils/Render';
import * as metaData from '@/views/layout';
import { Component, Prop } from 'vue-property-decorator';
import ScreenField from './ScreenField.vue';
import Grid from './Grid.vue';
import { ModuleType } from '@/models';

@Component ({
  components: { ScreenField, Grid }
})
export default class DataControl extends Vue {
  @Prop(String) module!: ModuleType;

  render(h: CreateElement) {
    const engine = new Render(this.module, h);
    switch (this.module) {
      case 'screen':
        return engine.render(metaData.screenData);
    }
  } 
}

</script>
