<template>
  <a-form-item :label="props.label" :colon="false">  
    <a-auto-complete
      style="width: 100%"
      :value="value" 
      optionLabelProp="value" 
      @search="onSearch"
      @change="onChange"
      @blur="onBlur"
    >
      <template slot="dataSource">
        <a-select-option
          v-for="item in dataSource"
          :key="item.key"
          :value="item.key"
        >
          <div>
            <b>{{ item.key }}</b>
            <template v-if="item.value !== item.key">
              <br>
              {{ item.value }}
            </template>
          </div>
        </a-select-option>
      </template>
      <a-input>
        <a-icon slot="suffix" type="search" />
      </a-input>
    </a-auto-complete>
  </a-form-item>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ObjectProps } from '@/views/layout';

interface SearchResult {
  key: string,
  value: string,
}

@Component
export default class SearchField extends Vue {
  @Prop(Object) props!: ObjectProps;

  private dataSource = null;

  data() {
    return {
      dataSource: this.dataSource
    }
  }

  get value() {
    return this.$store.getters.getState(this.props);
  }

  onSearch(value: string) {
    switch (this.props.cls) {
      case 'label':
        this.$axios.get(`/api/translation/searchvalue/${value}`)
          .then(res => {
            this.dataSource = res.data
          });
        break;
      case 'screenname':
        this.$axios.get(`/api/screen/searchcode/${value}`)
          .then(res => {
            this.dataSource = res.data
          });
        break;
    }
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
    });
  }
}

</script>
