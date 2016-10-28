/**
  author: sailing
  date: 2016-10-28
  fun:
**/

<style>
.block{
  margin-top:10px;
  height:41px;
  background:#fff;
}
</style>

<template>
  <div class="block">
    <elpagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-sizes="[pageMessage.pageCount]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageMessage.total">
    </elpagination>
  </div>
</template>

<script>
  import elpagination from 'element-ui/lib/pagination/index'
  export default{
    computed: {},
    data () {},
    props: {
      pageMessage: Object
    },
    methods: {
      handleCurrentChange (val) {
        this.$parent.handleCurrentChange(val)
      },
      handleSizeChange (val) {
        this.$parent.handleSizeChange(val)
      }
    },
    components: {elpagination}
  }
</script>