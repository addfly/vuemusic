import { request } from '@/tools/request'

// banner 轮播图的数据接口
export function getBanner() {
    let res = request('/banner', 'GET')
    return res
}