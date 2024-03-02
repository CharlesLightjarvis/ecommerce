import Accueil from './componenets/accueil.vue'
import ListCategories from'./componenets/categories/ListCategories.vue'
import ListArticle from './componenets/Articles/ViewArticle.vue'
import ADDtArticle from'./componenets/Articles/AddArticle.vue'
import EditArticle from './componenets/Articles/EditArticle.vue'
import Viewarticletable from'./componenets/Articles/Viewarticletable.vue'
import HomeCart from'./componenets/cart/HomeCart.vue'
import Cart from'./componenets/cart/Cart.vue'
import Payment from './componenets/cart/Payment.vue';
import Login from'./componenets/authentification/Login.vue';
import Register from './componenets/authentification/Register.vue';
 export const routes=[
 
{
name: 'accueil',
path: '/',
component: Accueil
},
{
    name: 'listCatgories',
    path: '/listcatg',
    component: ListCategories
    },
    {
        name: 'listeArticles',
        path: '/listarticle',
        component: ListArticle
    },
    {
        name: 'AddArticles',
        path: '/addarticle',
        component: ADDtArticle
    },

{
name:"editarticle",
path:"/editarticle/:id",
component:EditArticle
},

{
name:"Viewarticletable.vue",
path:"/articletable",
component:Viewarticletable
},
{
    path:"/HomeCart",
    name:"HomeCart",
    component:HomeCart
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart
        },
        {
            path:'/payment',
            name:'Payment',
            component:Payment
            },
            {
                name: "login",
                path: "/login",
                component: Login,
                },
                {
                    name: "register",
                    path: "/register",
                    component: Register,
                    },
                
];