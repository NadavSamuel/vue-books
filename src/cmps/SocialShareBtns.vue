<template>
<div class="social-btns-wrapper">
    <facebook-btn :url="url" :book="book" />
    <whatsapp-btn :url="url" :book="book"/>
    <linkedin-btn :url="url"  />
</div>
  
</template>

<script>
import FacebookBtn from '../cmps/socialBtns/FacebookBtn.vue';
import LinkedinBtn from '../cmps/socialBtns/LinkedinBtn.vue';
import WhatsappBtn from '../cmps/socialBtns/WhatsappBtn.vue';

export default {
    props:{
        book:Object,
        url:String
    },

    components:{
        FacebookBtn,LinkedinBtn,WhatsappBtn
    }

}
</script>

<style>

</style>