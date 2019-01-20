<template>
  <a-table
    :columns="columns"
    :dataSource="dataSource"
    :rowSelection="rowSelection"
  >
  </a-table>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { gridColumnDefinition } from '@/views/layout';
import { ObjectProps } from '@/models';

@Component
export default class Grid extends Vue {
  @Prop(Object) props!: ObjectProps;

  data() {
    const columns = [];
    const columnDef = gridColumnDefinition[this.props.cls!];
    if (columnDef) {
      for(let col in columnDef) {
        columns.push({
          title: columnDef[col],
          dataIndex: col,
        });
      }
    }
    return {
      columns,
      rowSelection: {
        onSelect: (record: any, selected: boolean) => {
          this.$store.commit('setState', {
            ...this.props,
            path: this.props.itemPath,
            value: record
          });
        }
      }
    }
  }

  get dataSource() {
    return this.$store.getters.getState(this.props);
  }
}

</script>

