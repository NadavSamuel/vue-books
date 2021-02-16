<template>
        <footer class="flex space-between align-center ">
            <h2>Bookit</h2>
            <div class="footer-content-container flex  space-between">
            <p class="flex align-center"> <strong>&#169; Nadav Samuel 2021 </strong>  </p>
            <div class="social-btns-container flex">
                <github-btn/>
                  <!-- <a href="https://github.com/NadavSamuel" class="cursor-pointer"><span> <GitHubIcon /></span></a>  -->
                <linkedin-btn />
            </div>
            </div>
        </footer>
</template>

<script>
import LinkedinBtn from '../cmps/socialBtns/LinkedinBtn.vue';
import GithubBtn from '../cmps/socialBtns/GithubBtn.vue';

export default {
    components:{
        LinkedinBtn,GithubBtn
    }
};
</script>

<style>
</style>