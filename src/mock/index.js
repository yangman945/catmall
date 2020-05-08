
import Mock from 'mockjs' // 引入mockjs

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// let data = [] // 用于接受生成数据的数组
// for(let i = 0; i < 10; i ++) { // 可自定义生成的个数
//   let template = {
//     'Boolean': Random.boolean, // 可以生成基本数据类型
//     'Natural': Random.natural(1, 10), // 生成1到100之间自然数
//     'Integer': Random.integer(1, 100), // 生成1到100之间的整数
//     'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
//     'Character': Random.character(), // 生成随机字符串,可加参数定义规则
//     'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
//     'Range': Random.range(0, 10, 2), // 生成一个随机数组
//     'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
//     'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
//     'Color': Random.color(), // 生成一个颜色随机值
//     'Paragraph':Random.paragraph(2, 5), //生成2至5个句子的文本
//     'Name': Random.name(), // 生成姓名
//     'Url': Random.url(), // 生成web地址
//     'Address': Random.province() // 生成地址
//   }
//   data.push(template)
// }

// 秒杀商品
function seckillGoodFn() {
    let data = [
        {
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/1.webp')
        },{
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/2.webp')
        },{
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/3.webp')
        },{
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/4.webp')
        },{
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/5.webp')
        },{
            'goodsID':Random.integer(1, 1000),
            'oldPrice': Random.float(99, 999, 0, 1),
            'secPrice': Random.float(99, 999, 0, 1),
            'img': require('@/assets/icons/sec/6.webp')
        },
    ] 
    return data
}
//  三个参数 接口地址 请求方法 数据模板
Mock.mock('/seckill/index', 'post', seckillGoodFn()) // 根据数据模板生成模拟数据