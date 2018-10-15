import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '../MainPage'


import Index from '../components/main/index'
import AboutUs from '../components/main/about-us/about-us'
import TecnicalService from '../components/main/technical-service/technical-service'
import NewsBulletin from '../components/main/news-bulletin/news-bulletin'
import AircraftWorld from '../components/main/aircraft-world/aircraft-world'
import ProductsCenter from '../components/main/products-center/products-center'
import News from '../components/main/news-bulletin/news'
import Bulletin from '../components/main/news-bulletin/bulletin'


//数据请求
//import Axios from 'axios'
//Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
//Vue.prototype.$ajax = Axios
//Vue.prototype.dataURL = function(file,title,id){
//	id = (id === undefined)? '':id;
//	return file + '?title' + title + id;
//}

//Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//Muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//Mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//Jquery
import $ from 'jquery'
Vue.prototype.$jq = $

//vue-resource
import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

Vue.use(Router)



export default new Router({
  routes: [
    {
  		path: '/',
		name: 'mainpage',
		component: MainPage,
		children: [
			{
				path: '/',
				name: 'index',
				component: Index
			},
			{
				path: '/products-center',
				name: 'products.center',
				component: ProductsCenter
			},
			{
				path: '/about-us',
				name: 'about.us',
				component: AboutUs
			},
			{
				path: '/technical-service',
				name: 'technical.service',
				component: TecnicalService
			},
			{
				path: '/news-bulletin',
				name: 'news.bulletin',
				component: NewsBulletin,
				children:[
					{
						path: '/news-bulletin/news',
						name: 'news',
						component: News
					},
					{
						path: '/news-bulletin/bulletin',
						name: 'bulletin',
						component: Bulletin
					}
				]
			},
			{
				path: '/aircraft-world',
				name: 'aircraft.world',
				component: AircraftWorld
			},			
		]
  
    }
  ]
})
