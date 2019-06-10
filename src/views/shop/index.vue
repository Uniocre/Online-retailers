<template>
  <div>
    <div class="el-col-12" @mouseenter="selectcol()" @mouseleave="outcol()">
      <div class="Propaganda_left fl">
        <ul>
          <li v-for=' (value,index) in pro_name'
          :key="index"
          :class="thisIndex == index? 'p_l_claHover':'p_l_cla'"
          class="p_l"
          @mouseenter.stop="selectStyle(index)">
            {{value.p_name}}
          </li>
        </ul>
      </div>
      <div class="Propaganda_right"
          :class="paganda_right"
          v-for=' (value,_index) in pro_name'
          :key="_index"
          v-if="thisIndex == _index">
          <div :class="isshow">
            <p>{{value.p_name}}</p>
            <div class="ul clearfix" v-for="(val,ind) in value.children" :key="ind">
              <span class="b_name fl">{{val.b_name}}</span>
              <ul>
                <li v-for="(item,__index) in val.data"
                :key="__index">
                  {{item.name}}
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* 商品全信息 */
      thisIndex: 2,
      isshow: 'noshow',
      paganda_right: '',
      pro_name: [
        {
          p_name: '机械/五金工具',
          id: '0',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' },
                { id: 5, name: 'AAAA' },
                { id: 6, name: 'AAAA' },
                { id: 7, name: 'AAAA' },
                { id: 8, name: 'AAAA' },
                { id: 9, name: 'AAAA' },
                { id: 10, name: 'AAAA' },
                { id: 4, name: 'AAAA' },
                { id: 4, name: 'AAAA' },
                { id: 4, name: 'AAAA' },
                { id: 4, name: 'AAAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: '计算机设备',
          id: '1',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: '办公设备',
          id: '2',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: '电器设备',
          id: '3',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: '网络设备',
          id: '4',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: 'OA耗材',
          id: '5',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        },
        {
          p_name: '运维服务',
          id: '6',
          children: [
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            },
            {
              b_name: '农业食品',
              data: [
                { id: 1, name: 'A' },
                { id: 2, name: 'AA' },
                { id: 3, name: 'AAA' },
                { id: 4, name: 'AAAA' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectStyle (v) {
      this.thisIndex = v
    },
    selectcol () {
      this.isshow = 'isshow'
    },
    outcol () {
      this.thisIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col-12{
  position: fixed;
  top: 20%;
  left: 10%;
}
.Propaganda_left {
  display: inline-block;
  height: 350px;
  width: 150px;
  z-index: 200;
  .p_l{
    height: 50px;
    width: 150px;
    color: white;
    text-align: left;
    line-height: 50px;
    font-size: 14px;
    padding-left: 15px;
  }
  /* 鼠标移入移除样式 */
  .p_l_cla {
    background-color: rgb(24, 27, 26);
  }
  .p_l_claHover {
    background-color: red;
  }
}
.Propaganda_right{
  min-height: 350px;
  // overflow-y: scroll;
  text-align: left;
  font-size: 12px;
  overflow-x: hidden;
  max-width: 800px;
  position: relative;
  .noshow{
    padding: 20px;
    display: none;
    width: 100%;
    position:absolute;
    top: 0;
    left: -100%;
    background: ghostwhite;
    height: 100%;
  }
  .isshow{
    padding: 20px;
    width: 100%;
    position:absolute;
    top: 0;
    left: 0%;
    background: ghostwhite;
    height: 100%;
    // animation: rightshow 1s;
  }
  p {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .ul{
    margin-top: 10px;
    border-bottom: 1px dashed #ccc;
    padding: 10px;
    .b_name{
      color: red;
      display: inline-block;
      width: 80px;
      padding: 10px 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li{
        padding: 10px 15px;
      }
    }
  }
}
@keyframes rightshow{
  from{left:-100%}
  to{left:0}
}
</style>
