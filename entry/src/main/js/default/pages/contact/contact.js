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
}
