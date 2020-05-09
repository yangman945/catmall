import axios from '@/api/common.js'
export const getSeckillList = () => {
    return axios({
        url:'/seckill/index',
        method: 'post',
    })
}

export const getHotgoodsList = () => {
    return axios({
        url:'/hotgoods/index',
        method: 'post',
    })
}

export const getCategoryList = () => {
    return axios({
        url:'/categorydata/index',
        method: 'post',
    })
}