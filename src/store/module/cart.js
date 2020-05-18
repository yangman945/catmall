export  default {
    namespaced: true,
    state:{
        // 购物车商品数量
        totalCartNum:0
    },
    getters: {
        getTotalCart:function(state){
            return state.totalCartNum
        }
    },
    mutations:{
        totalCart:function(state,value){
            state.totalCartNum = value
        },
        addCart:function(state){
            state.totalCartNum++
        },
    },
    actions:{
        changeTotalCart:function({commit},value){
            commit('totalCart',value)
        }
    }
}