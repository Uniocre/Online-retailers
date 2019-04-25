<template>
  <div>
    <Operation></Operation>
    <div class="b_home">
      <!-- 搜索框 -->
      <search></search>
      <!-- 分类 -->
      <div class="type">
        <p>所有分类</p>
        <div v-for="(value,index) in datalist1"
             :key="index">
          <p class="one di">{{value.type_name}}</p>
          <ul v-for="(value1, index1) in value.children"
              :key="index1"
              class="di ulc">
            <li :id="value1.type_id">{{value1.name}}</li>
          </ul>
        </div>
      </div>
      <!-- 销量比较 -->
      <ul class="lis">
        <li>总和排序</li>
        <li>销量</li>
        <li>价格</li>
      </ul>
      <!-- 商品 -->
      <ul class="mail">
        <li v-for="( value, index) in datalist"
            :key='index'
            class="di">
          <img :src="value.img"
               alt="">
          <p>{{value.name}}</p>
          <p class="M_price">{{value.price}}</p>
        </li>
      </ul>
      <!-- 分页器 -->
      <el-pagination layout="prev, pager, next"
                     :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Operation from '../../components/Operation'
import search from '../../components/search'
export default {
  components: {
    Operation,
    search
  },
  data () {
    return {
      datalist: [
        {
          /* 商品id */
          id: '1001',
          /* 类型id  */
          type_id: '1',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1002',
          type_id: '2',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1003',
          type_id: '3',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1004',
          type_id: '4',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1005',
          type_id: '1',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1006',
          type_id: '2',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1007',
          type_id: '3',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1008',
          type_id: '4',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1009',
          type_id: '1',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1010',
          type_id: '2',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1011',
          type_id: '3',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1012',
          type_id: '4',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },

        {
          id: '1013',
          type_id: '1',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1014',
          type_id: '2',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1015',
          type_id: '3',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1016',
          type_id: '4',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        },
        {
          id: '1017',
          type_id: '1',
          img: '../../../static/server/6.jpg',
          name: '刀片服务器 E900',
          price: 3494
        }
      ],
      datalist1: [
        {
          type_name: '服务器',
          children: [
            {
              name: '刀片服务器',
              type_id: '1'
            },
            {
              name: '机架服务器',
              type_id: '2'
            },
            {
              name: '异构服务器',
              type_id: '3'
            },
            {
              name: '多节点服务器',
              type_id: '4'
            }
          ]
        }, {
          type_name: '存储',
          children: [
            {
              name: '全闪存储',
              type_id: '5'
            },
            {
              name: '混合存储',
              type_id: '6'
            },
            {
              name: '云存储',
              type_id: '7'
            }
          ]
        }, {
          type_name: '路由器',
          children: [
            {
              name: 'AR1200 S',
              type_id: '8'
            },
            {
              name: 'AR2200 S',
              type_id: '9'
            },
            {
              name: 'NE20E',
              type_id: '10'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.tcall()
  },
  methods: {
    tcall () {
    }
  }
}
</script>

<style lang = 'scss'>
.b_home {
  width: 1200px;
  margin: 0 auto;
}
/* 商品分类 */
.type {
}
/*  */
.lis {
  li {
    display: inline-block;
    margin-right: 10px;
    margin: 10px;
  }
}
/* 商品 */
.mail {
  li {
    height: 230px;
    width: 220px;
    padding: 15px 10px;
    img {
      height: 170px;
      width: 100%;
    }
    p {
      height: 30px;
      display: -webkit-box;
      text-align: center;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 15px;
      display: block;
      width: 180px;
      margin: 5px auto;
    }
  }
}
/* 商品分类 */
.ulc {
  li {
    margin-top: 10px;
    margin-right: 10px;
  }
}
.one {
  width: 80px;
}
.di {
  display: inline-block;
}
</style>
