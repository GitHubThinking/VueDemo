<template>
	<div>
		
		
		<!--头部开始-->
  	<header class="clearfix">
  		
  		<!--PC端头部-->
  		<div class="pc">
  			
  			<div class="header-img fl">
  				<mu-button @click="PCclickNav(-1)" flat :to="{name:'index'}">
  					<img src="../static/img/index/pc/qiyuanlogo.png" alt="" />
  				</mu-button>
  			</div>
  			
  			
  			<div class="header-nav fl">
  			
  				<mu-tabs :value.sync="active" style="background: rgba(0,0,0,0);color:#fff;"  inverse color="secondary" text-color="#fff" indicator-color="rgba(0,0,0,0)"  center>
  					<mu-tab @click="PCclickNav(0)"  :to="{name:'index'}">
  						<div class="nav-title clearfix">
  							<div class="fl">
  								<img :src=PCnavbtnImg[0] alt="" />
  							</div>
  							<div class="fl" style="margin-top:0.2rem;margin-left:0.5rem;">
  								<p>何许</p>
  								<p>Who&nbspwe&nbspare</p>
  							</div>
  						</div>		
  					</mu-tab>
  					<mu-tab @click="PCclickNav(1)" :to="{name:'products.center'}">
  						<div class="nav-title clearfix">
  							<div class="fl">
  								<img :src=PCnavbtnImg[1] alt="" />
  							</div>
  							<div class="fl" style="margin-top:0.2rem;margin-left:0.5rem;">
  								<p>何为</p>
  								<p>What&nbspwe&nbspdo</p>
  							</div>
  						</div>	
  					</mu-tab>
  					<mu-tab @click="PCclickNav(2)" >
  						<div class="nav-title clearfix">
  							<div class="fl">
  								<img :src=PCnavbtnImg[2] alt="" />
  							</div>
  							<div class="fl" style="margin-top:0.2rem;margin-left:0.5rem;">
  								<p>&nbsp&nbsp&nbsp何辞</p>
  								<p>&nbsp&nbsp&nbspiKnow</p>
  							</div>
  						</div>	
  					</mu-tab>
  					<mu-tab @click="PCclickNav(3)">
  						<div class="nav-title clearfix">
  							<div class="fl">
  								<img :src=PCnavbtnImg[3] alt="" />
  							</div>
  							<div class="fl" style="margin-top:0.2rem;margin-left:0.5rem;">
  								<p>&nbsp&nbsp&nbsp何如</p>
  								<p>&nbsp&nbsp&nbspTrust&nbspme</p>
  							</div>
  						</div>	
  					</mu-tab>
  				</mu-tabs>
		<!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  background-color="#000"
 text-color="#fff" active-text-color="red">
  					<el-menu-item index="1">
  						<router-link class='h-router' :to="{name:'index'}">
  							公司首页
  						</router-link>						
  					</el-menu-item>

  					<el-menu-item index="2">
  						<router-link class='h-router' :to="{name:'products.center'}">
  							产品中心
  						</router-link>	
  					</el-menu-item>
  					
  					<el-menu-item index="3">
  						<router-link class='h-router' :to="{name:'aircraft.world'}">
  							战机世界
  						</router-link>	
  					</el-menu-item>
  					<el-menu-item index="4">
  						<router-link class='h-router' :to="{name:'technical.service'}">
  							技术服务
  						</router-link>
  					</el-menu-item>
  					<el-menu-item index="5">
  						<router-link class='h-router' :to="{name:'news.bulletin'}">
  							新闻公告
  						</router-link>
  					</el-menu-item>
  					<el-menu-item index="6">
  						<router-link class='h-router' :to="{name:'about.us'}">
  							关于我们
  						</router-link>
  					</el-menu-item>		
  				</el-menu>-->
  			</div>
  			  			
  			<div class="header-search fr">
  				<mu-button flat>
  					<img src="../static/img/index/pc/headsearch.png" alt="" />
  				</mu-button>
  			</div>
  		</div>
  		
  		<!--移动端头部-->
		<div class='mobile'>
			
			<mt-header class="mobile-nav"  title="">
			  <router-link  slot="left" :to="{name:'index'}" >
			    <img src="../static/img/index/mobile/u14.png"/>
			  </router-link>
			  <mt-button class="more" icon="more" slot="right" @click="mobileManue()" :style=moreBtn></mt-button>
			</mt-header>
			
			<!--移动端侧边栏导航开始-->
			<div class="sidebar" :style=Manueright>
				<ul>
					<li @click="clickNav(0)">
						<router-link :to="{name:'index'}"   :style=clickColor[0]>
							公司首页
						</router-link>
					</li>
					<li @click="clickNav(1)">
						<router-link :to="{name:'products.center'}"  :style=clickColor[1]>
							产品中心
						</router-link>
					</li>
					<li @click="clickNav(2)">
						<router-link  :to="{name:'aircraft.world'}"  :style=clickColor[2]>
						战机世界
						</router-link>
					</li>
					<li @click="clickNav(3)">
						<router-link  :to="{name:'technical.service'}" :style=clickColor[3]>
						技术服务
						</router-link>
					</li>
					
				</ul>
			</div>
		<!-- 移动端侧边栏导航栏结束 -->

		</div>
  		
  			
  	</header>
	<!--头部结束-->	
		
	<!--网页跳转内容开始-->
  	<router-view></router-view>
	
		
	<!-- 尾部版权开始 -->
	<footer>
	  	
	  	<div class="pc">
			<div class="box-footer classfix">
				<div class="footer-contain classfix">
					
					<mu-tabs :value.sync="active" style="background: rgba(0,0,0,0);color:#fff;" inverse color="secondary" text-color="#fff" indicator-color="rgba(0,0,0,0)" center>
						<mu-tab @click="PCclickNav(0)" :to="{name:'index'}">
							<div class="nav-title clearfix">
								<div class="fl">
									<img :src=PCnavbtnImg[0] alt="" />
								</div>
								<div class="fl" style="margin-top:0.2rem;margin-left:1rem;">
									<p>何许</p>
									<p>Who&nbspwe&nbspare</p>
								</div>
							</div>
						</mu-tab>
						<mu-tab @click="PCclickNav(1)" :to="{name:'products.center'}">
							<div class="nav-title clearfix">
								<div class="fl">
									<img :src=PCnavbtnImg[1] alt="" />
								</div>
								<div class="fl" style="margin-top:0.2rem;margin-left:1rem;">
									<p>何为</p>
									<p>What&nbspwe&nbspdo</p>
								</div>
							</div>
						</mu-tab>
						<mu-tab @click="PCclickNav(2)">
							<div class="nav-title clearfix">
								<div class="fl">
									<img :src=PCnavbtnImg[2] alt="" />
								</div>
								<div class="fl" style="margin-top:0.2rem;margin-left:1rem;">
									<p>&nbsp&nbsp&nbsp何辞</p>
									<p>&nbsp&nbsp&nbspiKnow</p>
								</div>
							</div>
						</mu-tab>
						<mu-tab @click="PCclickNav(3)">
							<div class="nav-title clearfix">
								<div class="fl">
									<img :src=PCnavbtnImg[3] alt="" />
								</div>
								<div class="fl" style="margin-top:0.2rem;margin-left:1rem;">
									<p>&nbsp&nbsp&nbsp何如</p>
									<p>&nbsp&nbsp&nbspTrust&nbspme</p>
								</div>
							</div>
						</mu-tab>
					</mu-tabs>
					
					<div class="footer-img ">
						<img src="../static/img/index/pc/u115.png" alt="">
						<span>025-83241</span><br>
						<span>0178</span>
					</div>
			
				</div>
				
				<div class="footer-copy">
					<p>Copyright © 2013 - 2018 Origin. All Right Reserved. 起源信息版权所有</p>
					<p>南京起源信息技术有限公司</p>
				</div>
			</div>
			<!--尾部版权 结束-->
  			
	  	</div>
	  		
	  		
	  		
  		<div class="mobile"> 			
  			<div class="footer-copy">
				<p>Copyright © 2013 - 2018 Origin. All Right Reserved. 起源信息版权所有</p>
				<p>南京起源信息技术有限公司</p>
			</div>
  		</div>
	  		
	  		
			
	  		
	  </footer>	
	</div>
</template>

<script>
	import '../static/css/common.css'
	
	export default {
		data(){
			return{
				active:-1,		//pc端默认的选项
				PCnavbtnImg:[
					"../static/img/index/pc/1.png",
					"../static/img/index/pc/2.png",
					"../static/img/index/pc/3.png",
					"../static/img/index/pc/4.png"
				],					//	pc端导航按钮选择数组
				PClastNavBtn:-1,	// pc端已选上的按钮，此变量是为了变换图片
				
				
				tabPosition:'right',	
				flag:1,	//移动端侧边导航栏响应
				Manueright:"right:-28%",//控制侧边栏和更多按钮的两个操作
				moreBtn:"right:0rem",
				clickColor:["color:red","color:#fff","color:#fff","color:#fff","color:#fff","color:#fff","color:#fff","color:#fff"],//侧边栏的点击响应按钮设置
				lastBtn:0,//默认响应的按钮
			}
		},
		created() {
			//响应式布局
			remChange();
			window.addEventListener('resize', remChange);
			
			function remChange() {
				var html = document.getElementsByTagName('html')[0];
				var witdh = html.getBoundingClientRect().width;
				if(witdh <= 750) {
					witdh = Math.max(html.clientWidth, html.clientHeight);
				}
				console.log(witdh)
				html.style.fontSize = 10 * (witdh / 750) + 'px';
				console.log(html.style.fontSize)
			}
			
				
		},
		methods: {
			
			
			//点击后出现侧边导航栏（移动端）
			mobileManue(){
				if(this.flag == 1){
					this.moreBtn = "right:100%";
					this.Manueright = "right:-3px";
				}
				else{
					this.moreBtn = "right:0rem"
					this.Manueright = "right:-28%";

				}
				this.flag = !this.flag;
			},
			
			//PC端点击导航栏项目更换图片
			PCclickNav(index){
				
				if(index != this.PClastNavBtn){
					if(index != -1){
						this.PCnavbtnImg[index] = "../static/img/index/pc/"+(index+1)+".1.png";
					}else{
						this.active = -1;
					}

					this.PCnavbtnImg[this.PClastNavBtn] = "../static/img/index/pc/"+(this.PClastNavBtn+1)+".png";
					this.PClastNavBtn = index;
				}
			},
			
			//移动端点击导航栏项目变成红色
			clickNav(index){

				if(index != this.lastBtn){
					this.clickColor[index] = "color:red";
					this.clickColor[this.lastBtn] = "color:#fff";
					this.lastBtn = index;
				}
				
			},
		}
	}
</script>

<style>
</style>