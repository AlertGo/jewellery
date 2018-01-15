import React from 'react'
import { render, findDOMNode } from 'react-dom'
import {
  	browserHistory, Router, Route, IndexRoute, Link
} from 'react-router'
import '.././css/home.css'
import logoimg from '.././img/logo.png'
// 无状态组件 LOGO
const HomeLogo = () => (
	<div className="home_logo">
		<img src={logoimg} alt="360珠宝" />
	</div>	
)
// 通用底部
const CurrBtm = () => (
	<div className="wrap footer">
    	<div>
    	<a href="javascript:;">关于我们</a>
    	<span className="grad01">|</span>
    	<a href="javascript:;">珠宝鉴定证书查询</a>
    	<span className="grad01">|</span>
    	<a href="javascript:;">GIA证书查询</a>
    	<span className="grad01">|</span>
    	<a>友情链接</a>
    	<span className="grad01">|</span>
    	<a href="http://www.duizhuang.com/downloadApp_PC?from=360DD1" target="_blank">对庄</a>
    	<span className="grad01">|</span>
    	<a href="http://www.duizhuang.com/downloadApp_PC?from=360DD2" target="_blank">翡翠微商</a>
    	<span className="grad01">|</span>
    	<a href="javascript:;">意见建议</a></div>
		<div>@2012-2014 360GEM，All Rights Reserved.&nbsp;&nbsp;&nbsp;桂ICP备12005823号-3</div>
	</div>
)
class UserSelect extends React.Component {
	constructor (){
		super() ;
		this.state = {
			c_state:0
		}
	}
	componentDidMount(){
		console.log(this)
	}
	render (){
		return (
			<div className={'allorg'+" "+(this.props.pState!=0?'show':'hide')}>
					<h4>
						<span id="tabtext">常用</span>鉴定机构
					</h4>
					<div id="hot_ctg" className="hot_ctg">
						<ul>
							<li className="citeon">常用<span className="arrow"></span></li>
							<li m="in">国内<span></span></li>
							<li m="out">国外<span></span></li>
						</ul>
						<p className="al"><a style={{color:'#333'}} href="http://www.aizhubao.com/" target="_blank">专业鉴定师估价</a></p>
						<div className="clearfix"></div>
					</div>
					<div className="often_org t orgarea" m="常用">
						<div className="stock_org">
							<ul>
							<li><a href="javascript:;" no="005">北大宝石鉴定中心</a></li>
							
							<li><a href="javascript:;" no="037">北京大学宝石鉴定中心深圳实验室</a></li>
							
							<li><a href="javascript:;" no="007">北京地大宝石检验中心</a></li>
							
							<li><a href="javascript:;" no="033">北京协宝珠宝检测中心(BXB)</a></li>
							
							<li><a href="javascript:;" no="017">比利时钻石高层议会(HRD)</a></li>
							 							</ul>
						</div>
					</div>
					<div className="domestic_org orgarea" m="国内" style={{display: 'none'}}>
						<div className="cat">
							<ul>
								<li m="a">A-F<span className="citeon"></span></li>
								<li m="g">G-I<span></span></li>
								<li m="j">J-X<span></span></li>
								<li m="y">Y-Z<span></span></li>
								<div className="clearfix"></div>
							</ul>
						</div>
						<div className="stock_org gn">
							<ul>
							<li><a href="javascript:;" no="005" name="b">北大宝石鉴定中心</a></li>
							<li><a href="javascript:;" no="037" name="b">北京大学宝石鉴定中心深圳实验室</a></li>
							<li><a href="javascript:;" no="007" name="b">北京地大宝石检验中心</a></li>
							<li><a href="javascript:;" no="033" name="b">北京协宝珠宝检测中心(BXB)</a></li>
							<li><a href="javascript:;" no="035" name="f">福建省贵金属和珠宝玉石产品质量监督检验中心</a></li>
							<li><a href="javascript:;" no="029" name="g">广东省地质科学研究所珠宝玉石鉴定中心</a></li>
							<li><a href="javascript:;" no="008" name="g">广东省金银珠宝检测中心(GDTC)</a></li>
							<li><a href="javascript:;" no="009" name="g">广东省珠宝玉石及贵金属检测中心(GTC)</a></li>
							<li><a href="javascript:;" no="023" name="g">广东省珠海市金银珠宝检测中心</a></li>
							<li><a href="javascript:;" no="013" name="g">国家黄金钻石制品质量监督检验中心(NGDTC)</a></li>
							<li><a href="javascript:;" no="003" name="g">国家金银制品质量鉴督检验中心(南京)(NGSTC)</a></li>
							<li><a href="javascript:;" no="002" name="g">国家首饰质量监督检验中心(NJQSIC)</a></li>
							<li><a href="javascript:;" no="001" name="g">国家珠宝玉石质量监督检验中心(NGTC)</a></li>
							<li><a href="javascript:;" no="022" name="g">国土资源部广州矿产资源监督检测中心</a></li>
							<li><a href="javascript:;" no="041" name="g">国土资源部郑州矿产资源利用评价中心</a></li>
							<li><a href="javascript:;" no="043" name="g">国土资源部贵阳矿产资源监督检测中心(GGIC)</a></li>
							<li><a href="javascript:;" no="024" name="h">华东理工大学宝石检测中心</a></li>
							<li><a href="javascript:;" no="032" name="j">江苏省黄金珠宝检测中心</a></li>
							<li><a href="javascript:;" no="025" name="l">辽宁省宝玉石质量监督检验中心</a></li>
							<li><a href="javascript:;" no="036" name="s">上海珠宝测试鉴定处</a></li>
							<li><a href="javascript:;" no="039" name="s">陕西省宝玉石金银首饰质量监督检验站</a></li>
							<li><a href="javascript:;" no="014" name="x">新疆岩矿宝玉石产品质量监督检验站</a></li>
							<li><a href="javascript:;" no="034" name="y">燕山大学珠宝玉石鉴定研究中心</a></li>
							<li><a href="javascript:;" no="027" name="y">云南省德宏州质量技术监督瑞丽监测站</a></li>
							<li><a href="javascript:;" no="011" name="y">云南省珠宝玉石质量监督检验研究院</a></li>
							<li><a href="javascript:;" no="012" name="z">浙江省黄金珠宝饰品质量检测中心(GGC)</a></li>
							<li><a href="javascript:;" no="004" name="z">中国地质大学(武汉)珠宝检测中心(GIC)</a></li>
							<li><a href="javascript:;" no="021" name="z">中国商业联合会珠宝首饰质量监督检测中心(CGJC)</a></li>
							<li><a href="javascript:;" no="006" name="z">中华全国工商联珠宝业商会珠宝检测研究中心(CCGTC)</a></li>
							<li><a href="javascript:;" no="010" name="z">中检质技(北京)金银珠宝质量检验中心(CQT)</a></li>
							<li><a href="javascript:;" no="030" name="z">中维珠宝玉石质量检测中心(JWJC)</a></li>
							</ul>
						</div>
					</div>
					<div className="abroad_org orgarea" m="国外" style={{display: 'none'}}>
						<div className="stock_org">
							<ul>
							<li><a href="javascript:;" no="017">比利时钻石高层议会(HRD)</a></li>
							<li><a href="javascript:;" no="019">国际宝石学院(IGI)</a></li>
							<li><a href="javascript:;" no="016">美国宝石学院(GIA)</a></li>
							<li><a href="javascript:;" no="018">美国宝玉石协会(AGS)</a></li>
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
			p_state:0, //一级选项状态
		}
	}
	showSelect (e){
		// console.log(e)
		e.stopPropagation() ;
		// e.nativeEvent.stopImmediatePropagation()
		this.setState({
			p_state:1
		})
	}
	render (){
		return (
			<div className="home_operation">
				<div className="operation_head">
					<span className="operation_head_bg"></span>
					<span>{this.state.loginState}</span>
				</div>
				<div className="operation_main">
					<div className="operation_m_first" onClick={(e) => this.showSelect(e)}>
						<div className="operation_m_firstdiv">
							<span className="operation_m_firstspan"></span>					
							<input type="text" placeholder="请输入或选择鉴定机构名称" readOnly="readOnly" />
						</div>
						<UserSelect pState = {this.state.p_state}/>
					</div>
					<div className="operation_m_last">
						<div>
							<input type="text" placeholder="证书编号" />
						</div>
						<div>
							<input type="text" placeholder="重量" />
						</div>
						<button className="query_btn">查询</button>
					</div>
				</div>
			</div>
		)
	}
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

