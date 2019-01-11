<template>
  <a-form-item v-if="props.type === 'checkbox'">
    <a-checkbox :checked="model">
      {{ props.label }}
    </a-checkbox>
  </a-form-item>
  <a-form-item v-else :label="props.label" :colon="false">
    <template v-if="props.type === 'combobox'">
      <a-select :value="model" style="width: 100%" />
    </template>
    <template v-else>
      <a-input :value="model" style="width: 100%" />
    </template>
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
    type: string,
  };

  get model() {
    if (this.props.model) {
      return this.$_.get(this.$store.state.screen, this.props.model);
    }
  }
}
</script>

