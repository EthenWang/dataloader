<script lang="ts">
import Vue from 'vue'
import { CreateElement } from 'vue';
import { Prop } from 'vue-property-decorator';

interface ScreenControlModel {
  fieldName: string;
  type: 'panel' | 'textfield' | 'checkbox' | 'combobox';
  label?: string;
  model?: string;
  format?: string;
  children?: ScreenControlModel[]
}

export default class Layout extends Vue {
  @Prop() data!: ScreenControlModel[];

  render(h: CreateElement) {   
  }
}
</script>
