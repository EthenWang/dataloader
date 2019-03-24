<template>
  <a-form-item :label="props.label" :colon="false">  
    <a-auto-complete
      style="width: 100%"
      :value="props.value" 
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
import { FieldProps } from '@/views/layout';

interface SearchResult {
  key: string,
  value: string,
}

@Component
export default class SearchField extends Vue {
  @Prop(Object) props!: FieldProps;
  @Prop(Function) onChange!: (val: string) => void;

  private dataSource = null;

  data() {
    return {
      dataSource: this.dataSource
    }
  }

  onSearch(value: string) {
    let url = '';
    switch (this.props.cls) {
      case 'label':
        url = `api/translation/searchvalue/${value}`;
        break;
      case 'screenname':
        url = `api/screen/searchcode/${value}`;
        break;
    }
    if (url !== '') {
      this.$axios.get(url).then(res => {
        this.dataSource = res.data
      });
    }
  }

  onBlur() {
    this.$store.dispatch('get', this.props);
  }
}

</script>
