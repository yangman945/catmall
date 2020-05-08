import axios from '@/api/common.js'
export const getSeckillList = () => {
    return axios({
        url:'/seckill/index',
        method: 'post',
    })
}