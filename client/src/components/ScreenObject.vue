<template>
  <a-form-item v-if="props.type === 'checkbox'" label=''>
    <a-checkbox 
      :checked="value" 
      @change="onInputChange"
    >
      {{ props.label }}
    </a-checkbox>
  </a-form-item>
  <search-field v-else-if="props.type === 'label' || props.type === 'search'" :props="props" />
  <a-form-item v-else :label="props.label" :colon="false">
    <a-select 
      v-if="props.type === 'combobox'" 
      :value="value" 
      style="width: 100%" 
      @change="onSelectChange"
    >
      <a-select-option v-for="item in selectItems" :key="item.value" :value="item.value">{{ item.text }}</a-select-option>
    </a-select>
    <a-input 
      v-else 
      :value="value" 
      style="width: 100%" 
      @change="onInputChange"
    />
  </a-form-item>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import SearchField from './SearchField.vue';
import { ObjectProps } from '@/models';

@Component({
  components: { SearchField }
})
export default class ScreenObject extends Vue {
  @Prop(Object) props!: ObjectProps;

  data() {
    let items: string[] = [];
    if (this.props.type === 'combobox') {
      switch(this.props.cls) {
        case 'objtype':
          items = ['SECTION', 'GROUP', 'COMBO-BOX', 'FILL-IN', 'CHECKBOX', 'BUTTON', 'TEXT', 'RADIOSET', 'LISTVIEW',
           'TEXT-EDITOR', 'GRID', 'Toolbar', 'Tabcontrol', 'TabPage', 'Timer', 'WORKFLOW-SURFACE', 'SCHEDULER-SURFACE',
           'MainList', 'Image', 'User-Defined', 'User-Deefined-Checkbox', 'CollectionScr', 'TreeView', 'Toolbar-group',
           'EDI-MAP', 'menu-obj', 'GEOMAP-CONTROL', 'CONTEXT-MENU', 'CONTEXT-MENU-ITEM', 'WEB-BROWSER', 'INK-PANEL',
           'HTML-EDITOR'];
          break;
        case 'childobjtype':
          items = ['Link', 'RadioButton', 'GridColumn'];
          break;
        case 'formattype':
          items = ['CHARACTER', 'DECIMAL', 'INTEGER', 'LOGICAL', 'DATE', 'HYPERLINK', 'PASSWORD'];
          break;
        case 'udftype':
          items = ['supplier', 'sales rep', 'credit task', 'wo-header', 'style', 'po-header', 'bank', 'contact',
            'wo-trailer', 'inventory reservation', 'product', 'oe-header', 'lot', 'oe-contract', 'um', 'po-trailer',
            'container', 'customer', 'market', 'oe-trailer', 'chargeback', 'contract manufacturing', 'shipment', 'ar-mandate'];
          break;
        default:
          break;
      }
    }
    return {
      selectItems: items.map(item => ({ value: item, text: item }))
    };
  }

  get value() {
    if (this.props.model) {
      return this.$_.get(this.$store.state.screen, this.props.model);
    }
    return null;
  }

  onInputChange(e:  { 
    target: { 
      checked: boolean,
      value: string
    } 
  }) {
    this.$store.commit('setScreenModel', {
      ...this.props,
      value: this.props.type === 'checkbox' ? e.target.checked : e.target.value
    });
  }

  onSelectChange(value: string) {
    this.$store.commit('setScreenModel', {
      ...this.props,
      value
    });
  }

  onSearch(value: string) {

  }
}
</script>

