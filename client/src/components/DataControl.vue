<script lang="ts">
import Vue, { CreateElement } from 'vue';
import Render from '@/utils/Render';
import screenDef, { ModuleType } from '@/views/layout';
import { Component, Prop } from 'vue-property-decorator';

@Component 
export default class DataControl extends Vue {
  @Prop(String) module!: ModuleType;

  render(h: CreateElement) {
    return new Render(this.module, h).processMetaData(screenDef[this.module].metaData);
  } 
}

</script>
