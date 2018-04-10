<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
     <p>hello</p>
    <router-link :to="{ name: 'Chapter1' }">跳转</router-link>-->
    <table>
      <thead>
      <tr>
        <td></td>
        <td>商品名称</td>
        <td>商品单价</td>
        <td>购买数量</td>
        <td>操作</td>
      </tr>
      </thead>
      <tbody v-for="p in products">
      <tr>
        <td>{{ p.id }}</td>
        <td>{{ p.productName }}</td>
        <td>{{ p.price }}</td>
        <td class="t-float">
          <a href="javascript:;" @click.prevent="reduceProduct(p.id)">-</a>
          <input type="text" v-model="p.count"/>
          <a href="javascript:;" @click.prevent="addProduct(p.id)">+</a>
        </td>
        <td><a href="javascript:;" @click.prevent="deleteProduct(p.id)">删除</a></td>
      </tr>
      </tbody>
    </table>

    <div class="m-total-price">总价：￥<span>{{ totalPrice }}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        products: [{
          id: 1,
          productName: 'iPhone7',
          price: 6188,
          count: 1
        }, {
          id: 2,
          productName: 'iPad Pro',
          price: 5188,
          count: 1
        }, {
          id: 3,
          productName: 'MackBook Pro',
          price: 21188,
          count: 1
        }]
      }
    },
    computed: {
      totalPrice: function() {
        var sum = 0;
        for (var i = 0; i < this.products.length; i++) {
          sum += this.products[i].price * this.products[i].count;
        }
        return sum;
      }
    },
    methods: {
      deleteProduct: function(n){
         for(var i=0;i<this.products.length;i++){
           if(n == this.products[i].id){
               this.products.splice(n-1,1);
           }
         }
      },
      reduceProduct: function(n){
        for(var i=0;i<this.products.length;i++){
          if(n == this.products[i].id){
             if(this.products[i].count == 1){
               return;
             }else{
               this.products[i].count--;
             }
          }
        }
      },
      addProduct: function(n){
        for(var i=0;i<this.products.length;i++){
          if(n == this.products[i].id){
              this.products[i].count++;
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  /*build/until   下修改px2rem*/
  /*h2 {
    span {
      color: red;
      font-size: 12px;
    }
  }
  p {
    font-size: 40px;
  }*/
  .hello {
    border: 1px solid #c5c5c5;
    padding: 20px;
    color: #333;
    font-family: "Microsoft YaHei", SimSun, verdana;
    font-size: 14px;
  }

  td {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #f1f1f1;

    input {
      border: 1px solid #cacbcb;
      width: 40px;
      text-align: center;
    }

    .t-float {
      a, input {
        float: left;
      }
    }
  }

  .m-total-price {
    text-align: left;
    margin-top: 10px;
  }


</style>
