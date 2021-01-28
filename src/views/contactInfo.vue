<template>
<div class="container">
    <div class="box">
        <div class="box_info">
            <div v-for="item in contacts[contactId]" :key="item.id"><h2>{{item}}</h2></div>
        </div>
    </div>
    
</div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    name: 'contactInfo',
    props: {
        contactId: {
            requied: true
        } 
    },
    computed:{
       ...mapState(['contacts'])
        },
       
    }
</script>

<style scoped lang="scss">
.box{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    &_inputs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        input{
            margin: 10px;
            width: 190px;
        }
    }
    &_info{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 400px;
        border-bottom: 1px solid black;
    }
}
</style>