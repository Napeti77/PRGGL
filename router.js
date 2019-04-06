
const Wszystko  = {
    template: '#nvidia'
}

const Wszystko2  = {
    template: '#nvidia'
}

const Wiadomosci = {
    template: '#loremips'
}

const Grafika = {
    template: '#loremips'
}

const Zakupy = {
    template: '#loremips'
}

const Filmy = {
    template: '#loremips'
}

const routes = [
      { path: '', component: Wszystko },
      { path: '/main', component: Wszystko2 },
      { path: '/news', component: Wiadomosci },
      { path: '/images', component: Grafika },
      { path: '/shop', component: Zakupy },
      { path: '/movies', component: Filmy }
    ]

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
}).$mount('#router')
