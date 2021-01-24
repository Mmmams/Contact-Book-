<template>
<div class="container">
    <div class="box">
        <div class="box_info">
            <div v-for="item in contacts[contactId]" :key="item.id"><h2>{{item}}</h2></div>
        </div>
        <div class='box_inputs'>
            <input type="text" class="form-control" v-model="fieldName" :placeholder="fieldNamePlaceholder"/>
            <input type="text" class="form-control" v-model="fieldValue" :placeholder="fieldValuePlaceholder"/>
        </div>
        <div class="box_btn">
            <button class="btn btn-primary" 
            @click='contacts[contactId].fieldName = fieldValue;
            fieldName = "";
            fieldValue = "";
            '>Добавить поле</button>
        </div>
    </div>
    
</div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    name: 'contactInfo',
    data() {
        return {
            fieldName: '',
            fieldValue: '',
            fieldNamePlaceholder: 'email',
            fieldValuePlaceholder: 'test@test.com',
            newRecord: null
        }
    },
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