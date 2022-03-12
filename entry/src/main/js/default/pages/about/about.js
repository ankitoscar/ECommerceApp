import router from '@system.router';
export default {
    data: {
        title: 'World'
    },
    index : function() {
        router.push({
            uri: "pages/index/index",
        });
    },
    build : function() {
        router.push({
            uri: "pages/build/build",
        });
    },
    contact: function() {
        router.push({
            uri: "pages/contact/contact",
        });
    },
    products: function() {
        router.push({
            uri: "pages/products/products",
        });
    },
};
