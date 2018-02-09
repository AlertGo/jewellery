import React from 'react'
import {
  Route,
  NavLink,
  Link,
  Switch
} from 'react-router-dom'
import PropTypes from 'prop-types'
import '.././css/home.css'
import logoimg from '.././img/logo.png'
import { CurrBtm } from './public.js'
// 移除空白符
String.prototype.Trim = function()  {  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}  

// 无状态组件 LOGO
const HomeLogo = () => (
	<div className="home_logo">
		<img src={logoimg} alt="360珠宝" />
	</div>	
)

class UserSelect extends React.Component {
	constructor (){
		super() ;
		this.state = {
			c_state:0,
			f_state:0,
			appraisal_title:"常用",
			list_msg:{
				Common:['北大宝石鉴定中心','北京大学宝石鉴定中心深圳实验室','北京地大宝石检验中心','北京协宝珠宝检测中心','比利时钻石高层议会(HRD)'],
				Domestic:[	'北大宝石鉴定中心',
							'北京大学宝石鉴定中心深圳实验室',
							'北京地大宝石检验中心',
							'北京协宝珠宝检测中心(BXB)',
							'福建省贵金属和珠宝玉石产品质量监督检验中心',
							'广东省地质科学研究所珠宝玉石鉴定中心',
							'广东省金银珠宝检测中心(GDTC)',
							'广东省珠宝玉石及贵金属检测中心(GTC)',
							'广东省珠海市金银珠宝检测中心',
							'国家黄金钻石制品质量监督检验中心(NGDTC)',
							'国家金银制品质量鉴督检验中心(南京)(NGSTC)',
							'国家首饰质量监督检验中心(NJQSIC)',
							'国家珠宝玉石质量监督检验中心(NGTC)',
							'国土资源部广州矿产资源监督检测中心',
							'国土资源部郑州矿产资源利用评价中心',
							'国土资源部贵阳矿产资源监督检测中心(GGIC)',
							'华东理工大学宝石检测中心',
							'江苏省黄金珠宝检测中心',
							'辽宁省宝玉石质量监督检验中心',
							'上海珠宝测试鉴定处',
							'陕西省宝玉石金银首饰质量监督检验站',
							'新疆岩矿宝玉石产品质量监督检验站',
							'燕山大学珠宝玉石鉴定研究中心',
							'云南省德宏州质量技术监督瑞丽监测站',
							'云南省珠宝玉石质量监督检验研究院',
							'浙江省黄金珠宝饰品质量检测中心(GGC)',
							'中国地质大学(武汉)珠宝检测中心(GIC)',
							'中国商业联合会珠宝首饰质量监督检测中心(CGJC)',
							'中华全国工商联珠宝业商会珠宝检测研究中心(CCGTC)',
							'中检质技(北京)金银珠宝质量检验中心(CQT)',
							'中维珠宝玉石质量检测中心(JWJC)'
				],
				Abroad:[
					'比利时钻石高层议会',
					'国际宝石学院',
					'美国宝石学院',
					'美国宝玉石协会'
				]

			}
		}
	}
	componentDidMount (){

	}
	showTabState (x,title){
		this.setState({
			c_state:x,
			appraisal_title:title
		})
	}
	showFindTabState (x){
		var _self = this ;
		var s_T = 0 ;
		var active_dom = this.refs.activeScroll ;
		this.setState({
			f_state:x
		},function (){
			console.log(x)
			if(x == 0) {
				s_T = 0 ;
			}else if(x == 1) {
				s_T = 25 * 5 ;
			}else if(x == 2) {
				s_T = 25 * 17 ;
			}else if(x == 3) {
				s_T = 25 * 22 ;
			}
			// console.log(s_T,active_dom.scrollTop)
			active_dom.scrollTop = s_T ;
		})
	}
	getNodeTop(obj){
        var L=0;
        while(obj){
            L += obj.offsetTop ;
            obj = obj.offsetParent ;
        }
        return L
    }
	render (){
		return (
			<div className={'allorg'+" "+(this.props.pState!=0?'show':'hide')}>
					<h4>
						<span id="tabtext">{this.state.appraisal_title}</span>鉴定机构
					</h4>
					<div id="hot_ctg" className="hot_ctg">
						<ul>
							<li className={this.state.c_state==0?'citeon':''} onClick={() => {this.showTabState(0,'常用')}}>常用<span className={this.state.c_state==0?'arrow':''}></span></li>
							<li className={this.state.c_state==1?'citeon':''} onClick={() => {this.showTabState(1,'国内')}} m="in">国内<span className={this.state.c_state==1?'arrow':''}></span></li>
							<li className={this.state.c_state==2?'citeon':''} onClick={() => {this.showTabState(2,'国外')}} m="out">国外<span className={this.state.c_state==2?'arrow':''}></span></li>
						</ul>
						<p className="al"><a style={{color:'#333'}} href="http://www.aizhubao.com/" target="_blank">专业鉴定师估价</a></p>
						<div className="clearfix"></div>
					</div>
					<div className={"often_org t orgarea"+" "+(this.state.c_state==0?'show':'hide')} m="常用">
						<div className="stock_org">
							<ul>
								{
									this.state.list_msg.Common.map((val,i) => {
										return (
											<li key={i} onClick={(e) => this.props.selectApp(e,val)} ><a href="javascript:;">{val}</a></li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className={"domestic_org orgarea"+" "+(this.state.c_state==1?'show':'hide')} m="国内">
						<div className="cat">
							<ul>
								<li onClick={() => {this.showFindTabState(0)}} m="a">A-F<span className={this.state.f_state==0?"citeon":''}></span></li>
								<li onClick={() => {this.showFindTabState(1)}} m="g">G-I<span className={this.state.f_state==1?"citeon":''}></span></li>
								<li onClick={() => {this.showFindTabState(2)}} m="j">J-X<span className={this.state.f_state==2?"citeon":''}></span></li>
								<li onClick={() => {this.showFindTabState(3)}} m="y">Y-Z<span className={this.state.f_state==3?"citeon":''}></span></li>
							</ul>
						</div>
						<div className="stock_org gn">
							<ul ref="activeScroll">
								{
									this.state.list_msg.Domestic.map((val,i) => {
										return (
											<li key={i} onClick={(e) => this.props.selectApp(e,val)} ><a href="javascript:;">{val}</a></li>
										)
									})
								}
							</ul>
						</div>
					</div>
					<div className={"abroad_org orgarea"+" "+(this.state.c_state==2?'show':'hide')} m="国外">
						<div className="stock_org">
							<ul>
								{
									this.state.list_msg.Abroad.map((val,i) => {
										return (
											<li key={i} onClick={(e) => this.props.selectApp(e,val)} ><a href="javascript:;">{val}</a></li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</div>
		)
	}
}
// 有状态组件 登录系统
class HomeLogin extends React.Component {
	constructor (){
		super() ;
		this.state = {
			loginState:'珠宝玉石鉴定证书真伪查询，让你放心买珠宝',
			loginStateCode:0,
			appraisal:'', // 选中鉴定机构名称
			id_number:'', // 证书编号
			id_weight:'', // 证书重量
			p_state:0, // 选择菜单显示状态
		}
		console.log(PropTypes)
	}
	componentDidMount (){
		var _self = this ;
		document.addEventListener('click',function (){
			_self.setState({
				p_state:0
			})
		})
	}
	showSelect (e){
		
		e.stopPropagation() ;
		e.nativeEvent.stopImmediatePropagation()
		this.setState({
			p_state:1
		})
	}
	selectAppraisal (e,val){
		e.stopPropagation()
		this.setState({
			appraisal:val,
			p_state:0
		})
	}
	loginIptChange (e,flag){
		console.log(e.currentTarget.value,flag)
		var val = e.currentTarget.value ;
		if(flag==1){
			this.setState({
				id_number:val
			})
		}else{
			this.setState({
				id_weight:val
			})
		}
	}
	queryNext (){
		var _self = this ;
		var data = {
			idname:this.state.appraisal.Trim(),
			idnumer:this.state.id_number.Trim(),
			idweight:this.state.id_weight.Trim()
		}
		if(data.idname==''){
			this.setState({
				loginState:'请选择本站支持的鉴定机构',
				loginStateCode:1
			}) ;
			return false 
		}
		if(data.idnumer==''){
			this.setState({
				loginState:'请输入证书编号',
				loginStateCode:1
			}) ;
			return false 
		}
		if(data.idweight==''){
			this.setState({
				loginState:'请输入证书详细质量',
				loginStateCode:1
			}) ;
			return false 
		}
		this.context.router.history.push({
			pathname:'/detail',
			state:data
		})
	}
	render (){
		return (
			<div className="home_operation">
				<div className="operation_head">
					<span className="operation_head_bg"></span>
					<span className={this.state.loginStateCode?'col_red':''}>{this.state.loginState}</span>
				</div>
				<div className="operation_main">
					<div className="operation_m_first" onClick={(e) => this.showSelect(e)}>
						<div className="operation_m_firstdiv">
							<span className="operation_m_firstspan"></span>					
							<input type="text" placeholder="请输入或选择鉴定机构名称" readOnly="readOnly" value={this.state.appraisal} />
						</div>
						<UserSelect pState={this.state.p_state} selectApp={this.selectAppraisal.bind(this)}/>
					</div>
					<div className="operation_m_last">
						<div>
							<input type="text" placeholder="证书编号" onChange={(e) => this.loginIptChange(e,1)} />
						</div>
						<div>
							<input type="text" placeholder="重量" onChange={(e) => this.loginIptChange(e,2)} />
						</div>
						<button className="query_btn" onClick={() => {this.queryNext()}}>查询</button>
					</div>
				</div>
			</div>
		)
	}
	postAjax (url,data,callback){
        fetch(url,{
        	method:"POST",
        	headers:{
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
			},
        	body:data
        })
        .then((data)=>data.json())
        .then((data)=>{ 
        	callback(data) 		
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}


HomeLogin.contextTypes = {
    router:PropTypes.object
}

// 渲染
class Login extends React.Component {
	constructor (){
		super() ;
	}
	render (){
		return (
			<div className="home_body">
				<HomeLogo />
				<HomeLogin />
				<CurrBtm />
			</div>
		)
	}
}
export default Login

