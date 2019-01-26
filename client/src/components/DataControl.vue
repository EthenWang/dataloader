<script lang="ts">
import Vue, { CreateElement } from 'vue';
import { Render } from '@/utils/Render';
import screenDef from '@/views/layout';
import { Component, Prop } from 'vue-property-decorator';
import ScreenObject from './ScreenObject.vue';
import Grid from './Grid.vue';
import { ModuleType } from '@/models';

@Component ({
  components: { ScreenObject, Grid }
})
export default class DataControl extends Vue {
  @Prop(String) module!: ModuleType;

  render(h: CreateElement) {
    return new Render(this.module, h).render(screenDef[this.module].metaData);
  } 
}

</script>
