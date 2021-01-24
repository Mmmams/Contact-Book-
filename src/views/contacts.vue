<template>
  <div class="container" >
    <div class="box" v-for="(item, i) in allContacts" :key='item.id'>
      <div class="box_info">
        <Contact 
          :key='item.id' 
          :Name='item.name' 
          :Phone='item.phone' 
          :Email='item.email' 
          :Birthday="item.birthday"
          :id="item.id">
        </Contact>
      </div>
      <div class="box_btns" >
          <button class="btn btn-primary" @click="goToLink(item.id)">Показать ифнормацию</button>
          <button class="btn btn-danger" @click='deleteContact(i)'>Удалить контакт</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Contact from '../components/contact.vue'


export default {
  name: 'contacts',
  computed:{
    allContacts(){
      return this.$store.getters.allContacts
    }
  },
  components: {
    Contact
  },
  methods:{
    ...mapActions(['deleteContact']),
    goToLink(link){
      this.$router.push('/contacts/' + link);
    }
  }
}
</script>

<style scoped lang="scss">
.box{
    &_btns-wrapper{
      display: flex;
      flex-direction: column;
    }
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