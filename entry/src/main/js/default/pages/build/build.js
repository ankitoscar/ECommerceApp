import router from '@system.router';
export default {
    data: {
        title: 'World',
    },
    index : function(){
        router.push({
            uri:"pages/index/index"
        })
    }
}
