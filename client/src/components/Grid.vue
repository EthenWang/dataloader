<template>
  <a-table
    :columns="columns"
    :dataSource="dataSource"
    :rowSelection="rowSelection"
    :key="props.cls"
  >
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import screenDef from '@/views/layout';
import { ObjectProps } from '@/models';

@Component
export default class Grid extends Vue {
  @Prop(Object) props!: ObjectProps;

  data() {
    return {
      rowSelection: {
        onSelect: this.onSelect.bind(this)
      }
    }
  }

  get columns() {
    const columns = [];
    const columnDef = screenDef[this.props.module].grids[this.props.cls!];
    if (columnDef) {
      for(let col in columnDef) {
        columns.push({
          title: columnDef[col],
          dataIndex: col,
        });
      }
    }
    return columns;
  }

  get dataSource() {
    return this.$store.getters.getState(this.props);
  }

  onSelect(record: any, selected: boolean) {
    this.$store.commit('setState', {
      ...this.props,
      path: this.props.itemPath,
      value: selected ? record : null
    });
  }
}

</script>

