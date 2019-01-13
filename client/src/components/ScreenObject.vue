<template>
  <a-form-item v-if="props.type === 'checkbox'">
    <a-checkbox 
      :checked="model" 
      @change="onInputChange"
    >
      {{ props.label }}
    </a-checkbox>
  </a-form-item>
  <a-form-item v-else :label="props.label" :colon="false">
    <a-auto-complete
      v-if="props.type === 'search'"
      style="width: 100%"
      @search="onSearch"
      @change="onSelectChange"
    >
      <a-input>
        <a-icon slot="suffix" type="search" />
      </a-input>
    </a-auto-complete>
    <a-select 
      v-else-if="props.type === 'combobox'" 
      :value="model" 
      style="width: 100%" 
      @change="onSelectChange"
    />
    <a-input 
      v-else 
      :value="model" 
      style="width: 100%" 
      @change="onInputChange"
    />
  </a-form-item>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Model } from 'vue-property-decorator';

@Component
export default class ScreenObject extends Vue {
  @Prop(Object) props!: {
    label: string,
    model: string,
    type: 'textfield' | 'search' | 'checkbox' | 'combobox',
  };

  get model() {
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
      path: this.props.model,
      type: this.props.type,
      value: this.props.type === 'checkbox' ? e.target.checked : e.target.value
    });
  }

  onSelectChange(value: string) {
    this.$store.commit('setScreenModel', {
      path: this.props.model,
      type: this.props.type,
      value
    });
  }

  onSearch(value: string) {

  }
}
</script>

