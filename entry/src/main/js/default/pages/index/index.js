import router from '@system.router';

export default {
    data: {
        title: "Ecommerce App"
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    about : function() {
        router.push({
            uri: "pages/about/about",
        });
    },
    build : function() {
        router.push({
            uri: "pages/build/build",
        });
    },
    contact : function() {
        router.push({
            uri: "pages/contact/contact",
        });
    },
    products : function() {
        router.push({
            uri: "pages/products/products",
        });
    },
    cart : function() {
        router.push({
            uri: "pages/cart/cart",
        });
    },
};
