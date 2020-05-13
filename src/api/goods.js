import axios from '@/api/common.js'
// 秒杀商品
export const getSeckillList = () => {
    return axios({
        url:'/seckill/index',
        method: 'post',
    })
}

// 热销商品
export const getHotgoodsList = () => {
    return axios({
        url:'/hotgoods/index',
        method: 'post',
    })
}

// 分类列表
export const getCategoryList = () => {
    return axios({
        url:'/categorydata/index',
        method: 'post',
    })
}