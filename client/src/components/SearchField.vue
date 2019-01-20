<template>
  <a-form-item :label="props.label" :colon="false">  
    <a-auto-complete
      style="width: 100%"
      :value="value" 
      @search="onSearch"
      @change="onChange"
      @blur="onBlur"
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
    return this.$store.getters.getState(this.props);
  }

  onSearch(value: string) {
    this.$store.dispatch('search', {
      ...this.props,
      value
    });
  }

  onChange(value: string) {
    this.$store.commit('setState', {
      ...this.props,
      value
    });
  }

  onBlur() {
    this.$store.dispatch('get', {
      ...this.props,
      value: this.value
    })
  }
}

</script>
