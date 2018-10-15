<template>
	<div class="box">

		<div class="pc">
			<!-- 轮播图开始 -->
			<div class="swiper1">
			
				<el-carousel class="swiper-box1" trigger="click">
					<el-carousel-item class="swiper-item" v-for="(item,index) in bannerImg" v-if="index<3" :key="index">
						<!--  <h3>{{title}}</h3>-->
						<img :src="item.url" :title="item.type" :alt="item.type">
			
					</el-carousel-item>
			
				</el-carousel>
			</div>
			<!-- 轮播图结束 -->
		
			
			<div class="border">
				<div class="line"></div>
			</div>
			
			<!-- 起源信息概况开始 -->
			<div class="box-survey">
				<div class="survey-title">
					<p>起源信息概况</p>
					<p>COMPANY PROFILE</p>
				</div>
				<div class="survey-bg">
					<div class="bg-left"></div>
					<div class="bg-right"></div>
				</div>
				<div class="survey-contain">
					<div class="contain-intruduction">
						<div class="message">
							<p>COMPANY PROFILE</p>
							<p>企业概况</p>
							<p></p>
							<p>起源信息</p>
						</div>
					</div>
				</div>
			</div>
			<!-- 起源信息概况结束 -->
			
			<!--产品中心开始-->
			<div class="swiper2">
				<p class="products-title">产品中心</p>
				<el-carousel trigger="click" indicator-position="outside">
					<el-carousel-item v-for="(item1,index1) in productImg" :key="index1">
						<ul>
							<li v-for="(item2,index2) in item1 " :key="index2">
								<img :src="item2.url" :title="item2.type" :alt="item2.type">
							</li>
						</ul>
					</el-carousel-item>
			
				</el-carousel>
			</div>
			<!--产品中心结束-->
			
			<!-- 服务支持开始 -->
			<div class="box-service">
				<div class="service clearfix">
					<p class="service-title">服务支持</p>
					<div class="service-img fl">
						<img :src="serviceImg">
					</div>
					<div class="service-service fl">
						<p class="service-title">我们的服务</p>
						<p></p>
					</div>
				</div>
			</div>
			<!-- 服务支持结束 -->
			
			<!-- 新闻公告开始 -->
			<div class="box-news clearfix">
				<p class="news-title">新闻公告</p>
				<p class="news-title2">News bulletin</p>
				<!--新闻公告轮播图-->
				<div class="swiper3 fl">
					<el-carousel trigger="click">
						<el-carousel-item v-for="(item,index) in newsImg" v-if="index<4" :key="index">
							<!--v-for="item in 4" :key="item"-->
							<a href="#"><img :src="item"></a>
						</el-carousel-item>
			
					</el-carousel>
				</div>
			
				<div class="news-contain fr">
					<div class="n-container">
						<p class="clearfix">
							<span class="fl">公司新闻</span>
							<a class="English fr" href="#">more</a>
							<a class="Chinese fr" href="#">更多</a>
						</p>
						<ul>
							<li v-for="(item,index) in newsTitle" v-if="index<4" :key="index">
								<a href="#">{{item}}</a>
							</li>
			
						</ul>
					</div>
					<div class="n-container">
						<p class="clearfix">
							<span class="fl">通知公告</span>
							<a class="English fr" href="#">more</a>
							<a class="Chinese fr" href="#">更多</a>
						</p>
						<ul>
							<li v-for="(item,index) in newsTitle" v-if="index>=4" :key="index">
								<a href="#">{{item}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- 新闻公告结束 -->
			
			<!-- 联系我们开始 -->
			<div class="box-contact">
				<p class="contact-title">联系我们</p>
				<div class="contact-map">
					<div class="contact-way">
						<p>
							<img src="../../../static/img/index/pc/u74.png" alt="">
							<span>江苏省南京市雨花台区花神大道23号东区7栋4层</span>
						</p>
						<p>
							<img src="../../../static/img/index/pc/u72.png" alt="">
							<span>江苏省南京市雨花台区花神大道23号东区7栋4层</span>
						</p>
						<p>
							<img src="../../../static/img/index/pc/u76.png" alt="">
							<span>江苏省南京市雨花台区花神大道23号东区7栋4层</span>
						</p>
					</div>
				</div>
			</div>
			<!--联系我们结束-->
		</div>
		
		<div class="mobile">
			<!-- 轮播图开始 -->
			<mu-container class="swiper1">
				<mu-card style="width: 100%;height:100%;">
					<mt-swipe class="swiper-box" :auto="4000">
					  <mt-swipe-item class="swiper-item" v-for="(item,index) in bannerImg" v-if="index<3" :key="index">
					  		<img :src="item.url" :title="item.type" :alt="item.type">
					  </mt-swipe-item>	
					</mt-swipe>
				</mu-card>
			</mu-container>		
					
			<div >
			
				
					
			</div>
			<!-- 轮播图结束 -->
			
			<!--企业概况开始-->
			<mu-container class="mobile-service">
				<mu-card class="service-intruduction" :style=backGround>
					<div class="message">
						<h5>COMPANY PROFILE</h5>
						<h5>企业概况</h5	>
					</div>
				</mu-card>
			</mu-container>
			<!--企业概况结束-->
			
			<!--产品中心开始-->
			
			<mu-container class="mobile-products" >
			<mu-card style="width: 100%;padding-top:2rem; ">
				<p>产品中心</p>
				<p>Product center</p>
				<div class="swiper2">
					<mt-swipe class="swiper-box" :auto="4000">
						<mt-swipe-item class="swiper-item" v-for="(item,index) in bannerImg" v-if="index<3" :key="index" >
							<el-row class="item">
							  	<el-col :span="12"><div class="products-img">
							  		<div>
							  			<img :src="item.url" alt="" />
							  		</div>
							 	</div></el-col>
							  	<el-col :span="10"><div class="products-feature">
							  		<div class="clearfix" >
							  			<img src="../../../build/logo.png" alt="" class="fl" />
							  			<span>特点一</span>
							  		</div class="clearfix" >
							  		<div>
							  			<img src="../../../build/logo.png" alt="" class="fl" />
							  			<span>特点一</span>
							  		</div>
							  		<div class="clearfix" >
							  			<img src="../../../build/logo.png" alt="" class="fl" />
							  			<span>特点一</span>
							  		</div>
							  	</div></el-col>
							</el-row>
						</mt-swipe-item>
					</mt-swipe>
				</div>			
			</mu-card>
			</mu-container>
			<!--产品中心结束-->
			
			
			<!--新闻公告开始-->
			<mu-container class="mobile-news">
				<mu-card style="width: 100%;padding-top:2rem;">
				  	<p>新闻公告</p>
					<p>News bulletin</p>
					<div class="news clearfix">
						<div class="swiper3 fl">
							<el-carousel indicator-position="none">
								<el-carousel-item v-for="(item,index) in newsImg" v-if="index<4" :key="index">
									<!--v-for="item in 4" :key="item"-->
									<a href="#"><img :src="item"></a>
								</el-carousel-item>
					
							</el-carousel>
						</div>
				
						<div class="news-contain fr">
							<div class="n-container">
								<p class="clearfix">
									<span class="fl">公司新闻</span>
									<a class="English fr" href="#">more</a>
									<a class="Chinese fr" href="#">更多</a>
								</p>
								<ul>
									<li v-for="(item,index) in newsTitle" v-if="index<4" :key="index">
										<a href="#">{{item}}</a>
									</li>
					
								</ul>
							</div>
							<div class="n-container">
								<p class="clearfix">
									<span class="fl">通知公告</span>
									<a class="English fr" href="#">more</a>
									<a class="Chinese fr" href="#">更多</a>
								</p>
								<ul>
									<li v-for="(item,index) in newsTitle" v-if="index>=4" :key="index">
										<a href="#">{{item}}</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</mu-card>
			</mu-container>
			<!--新闻公告结束-->
			
			<!--联系方式开始-->
			<mu-container class="mobile-contact">
				<mu-card style="width: 100%; margin: 0 auto;" class="clearfix">
				 	<div class="contact-img fl">
				 		<img src="../../../static/img/index/pc/u115.png" alt="">
				 	</div>
				  	<ul class="contact-msg fr">
				  		<li>
				  			<p>电话</p>
				  			<p>025-8324 0178</p>
				  		</li>
				  		<li>
				  			<p>地址</p>
				  			<p>江苏省南京市雨花台区花神大道23号东区7栋4层</p>
				  		</li>
				  		<li>
				  			<p>邮箱</p>
				  			<p>qiyuan@origin.com</p>
				  		</li>
				  	</ul>
				</mu-card>
			</mu-container>
			<!--联系方式结束-->
			
		</div>
	</div>
</template>

<script>
	import "../../../static/css/index/index.css"
	import "../../../static/css/base.css"

	export default {
		data() {
			return {
				//pc端
				banner:'banner',
				bannerImg:'',//第一个轮播图的图片内容
				productImg:[],//产品中心轮播图的图片内容
				serviceImg:'',//服务支持图片内容
				newsImg:[],//新闻公告轮播图内容
				newsTitle:[],//新闻公告右侧标题
				
				//移动端（pc端已有的内容就不再添加）
				backGround:'',//企业概况背景图片
			}
		},
		created() {

			this.$http.get('https://www.apiopen.top/meituApi?page=1').then(function(result){
	  			//大轮播图
	  			this.bannerImg = result.data.data;
						
				//产品中心轮播图
				for(var i = 0 ; i < this.bannerImg.length; i+=4){
					this.productImg.push( this.bannerImg.slice(i,i+4) ) ;
				}
				
				
			});
			
			
			this.$http.get('https://www.apiopen.top/journalismApi').then(function(result){
				//服务图片
				this.serviceImg = result.data.data.tech[0].picInfo[0].url;
				//移动端企业概况图片
				this.backGround = "width: 100%; margin: 0 auto;background:url("+ result.data.data.tech[0].picInfo[0].url + ") no-repeat center/cover;"  ;
			})

			this.$http.get('https://www.apiopen.top/journalismApi').then(function(result){
				var length = result.data.data.sports.length;
				for(var i = 0; i<length; i++){
									
					this.newsImg.push(result.data.data.sports[i].picInfo[0].url);
					this.newsTitle.push(result.data.data.sports[i].title);

				}
				console.log(this.newsTitle)
			})
		},

	}
</script>

<style>

</style>