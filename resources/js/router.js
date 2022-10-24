import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import ContactPage from './pages/ContactPage.vue';
import AboutUs     from './pages/AboutUs.vue';
import HomePage    from './pages/HomePage.vue';
import BlogPage    from './pages/BlogPage.vue';




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
                    name:'Home',
                    component:HomePage
                },
                {
                    path:'/Blog',
                    name:'Blog',
                    component:BlogPage
                },
            ]

});


export default router;