<template>
  <div>
        <div>Name:<span>{{Name}}</span></div>
        <div>Email:<span>{{Email}}</span></div>
        <div>Birthday:<span>{{Birthday}}</span></div>
        <div>Phone:<span>{{Phone}}</span></div>
  </div>
</template>

<script>


export default {
  name: 'Contact',
  props: {
      Name : null,
      Email : null,
      Birthday : null,
      Phone: null
  },

}
</script>

<style scoped lang="scss">
.box{
    &_info{
        width: 250px;
        text-align: left;
        border-right: solid 1px black;
        div{
            margin: 3px 0px 3px 0px;
            span{
                font-weight: bold;
            }
        }
    }
    &_btns{
        .btn{
            margin: 4px;
        }
        display: flex;
        align-items: center;
    }
    display: flex;
    flex-direction: row;
    margin: 15px;
}
</style>