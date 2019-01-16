<template>
  <a-form-item :label="props.label" :colon="false">  
    <a-auto-complete
      style="width: 100%"
      :value="value" 
      @search="onSearch"
      @change="onSelectChange"
    >
      <a-input>
        <a-icon slot="suffix" type="search" />
      </a-input>
    </a-auto-complete>
  </a-form-item>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ObjectProps } from '@/models';

@Component
export default class SearchField extends Vue {
  @Prop(Object) props!: ObjectProps;

  get value() {
    if (this.props.model) {
      return this.$_.get(this.$store.state.screen, this.props.model);
    }
    return null;
  }

  onSearch(value: string) {
    this.$store.dispatch('search', {
      obj: this.props,
      value
    })
  }

  onSelectChange(value: string) {
    this.$store.commit('setScreenModel', {
      path: this.props.model,
      type: this.props.type,
      value
    });
  }
}

</script>
