<template>
  <div class="container">
  <div class="container_block">
  <span>Name <input type="text" class="form-control" v-model="FullName"/></span>
  </div> 
  <div class="container_block">
    <span>Email</span>
    <input type="text" class="form-control" v-model="Email"/>
  </div>
  <div class="container_block">
    <span>Phone</span>
    <input type="text" class="form-control" v-model="Phone"/>
  </div>
  <div class="container_block">
    <span>Birthday</span>
    <input type="date" class="form-control" v-model="Birthday"/>
  <div>
    <button class="btn btn-primary" v-on:click="addContact">Add contact</button>
  </div>
    </div>   
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import {mapMutations} from 'vuex'
export default {
  name: 'create',
    //  computed:
    //   mapMutations(['createContact']),
  data() {
    return {
      FullName : 'Name',
      Phone: 'Phone',
      Email: 'Mail',
      Birthday: '',
      newContact: null,
      index: 1,
    };
  },
  methods:{
    addContact(){
      this.index = this.$store.getters.allContacts.length;
      this.newContact = {
        id : this.index,
        name: this.FullName,
        phone: this.Phone,
        email: this.Email,
        birthday: this.Birthday
      }
      if(this.FullName == '' || this.Phone=='' || this.Email=='' || this.Birthday==''){
        alert('Some fields are empty')
      }else{
        this.$store.getters.allContacts.push(this.newContact);
        this.FullName ='';
        this.Phone='';
        this.Email='';
        this.Birthday='';
        console.log(this.newContact)
    }
    }
  },
}

</script>
<style scoped lang="scss">
.container_block{
  span{
  font-size: 20px;
  font-weight: bold;
}
text-align: left;
margin: 5px 0px 5px 0px;
}
.btn{
 margin: 20px 0px 0px 0px; 
}

</style>