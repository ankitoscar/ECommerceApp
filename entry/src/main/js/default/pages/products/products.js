import router from '@system.router';
export default {
    data: {
        title: 'World'
    },
    build: function(){
        router.push({
            uri: "pages/build/build",
        });
    },
    index: function(){
        router.push({
            uri: "pages/index/index",
        });
    },
    cart: function(){
        router.push({
            uri: "pages/cart/cart",
        });
    },
    filter: function(){
        router.push({
            uri: "pages/filter/filter",
        });
    },
}
