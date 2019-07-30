<template>
    <div id="index">
        <!-- 轮播图 -->
        <MusicBanner :json="bannerJson"></MusicBanner>
        <!-- 推荐音乐 -->
        <div class="recomment">
            <div>每天推荐</div>
            <div>
                <div class="my-icon-arrow playAll-icon"></div>
                <div>一键播放</div>
            </div>
            <!-- 音乐列表 -->
            <MusicList></MusicList>
        </div>
        <!-- 底部的加载 -->
        <BottomLoading></BottomLoading>
    </div>
</template>

<script>
import MusicBanner from "@/components/MusicBanner"
import MusicList from "@/components/MusicList"
import BottomLoading from "@/components/BottomLoading"

import { getBanner } from '@/api'

export default{
    data(){
        return{
            bannerJson:[]  // 轮播图的数据
        }
    },
    components:{
        MusicBanner,MusicList,BottomLoading
    },
    // 挂载
    mounted() {
        this.getBannerData();
    },
    methods:{
        getBannerData(){
            // getBanner()返回promise
            getBanner().then(res=>{
                if(res.data && res.data.length > 0){
                    this.bannerJson = res.data;
                }
            })
        }
    }
}
</script>

<style lang='stylus'>
#index {
    position: relative;
    width: 100%;
    background: #fff;
    .recommend {
        width: 100%;
        position: relative;
        .recommen-title {
            display: flex;
            align-items: center;
            justify-content: center;
            width: toRem(120);
            height: toRem(26);
            color: $darkColor;
            font-size: toRem(12);
            margin: toRem(20) auto;
            border-radius: toRem(13);
            background-color: $shallowColor;
        }
        .playAll {
            position: absolute;
            left: 0;
            top: toRem(60);
            z-index: 22;
            display: flex;
            align-items: center;
            font-size: toRem(14);
            height: toRem(28);
            padding-left: toRem(10);
            padding-right: toRem(16);
            border-radius: toRem(16);
            background-color: $appColor;
            .playAll-icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: toRem(18);
                height: toRem(18);
                color: $appColor;
                margin-right: toRem(5);
                background: #fff;
                border-radius: 100%;
            }
            .playAll-label {
                color: #fff;
            }
        }
    }
    .loading-container {
        width: 100%;
        height: toRem(50);
        display: flex;
        align-items: center;
        justify-content: center;
        .loading, .nothing, .error {
            font-size: toRem(14);
            color: #999;
            text-align: center;
        }
        .error {
            color: $redColor;
        }
    }
}
</style>

