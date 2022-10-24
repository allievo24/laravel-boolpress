import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import ContactPage from './pages/contactPage.vue';
import AboutUs from './pages/AboutUs.vue';
import HomePage from './pages/HomePage.vue';



const router =new VueRouter({
    mode:'history',
    routes: [
                {
                    path:'/contact',
                    name:'contact',
                    component:ContactPage
                },
                {
                    path:'/AboutUs',
                    name:'AboutUs',
                    component:AboutUs
                },
                {
                    path:'/',
                    name:'HomePage',
                    component:HomePage
                },
            ]

});


export default router;