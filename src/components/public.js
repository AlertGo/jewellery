import React from 'react'
import logoimg from '.././img/top_logo.png'
import {
    Link
} from 'react-router-dom'
import '.././css/public.css'

// 通用导航
const Header = () => (
    <div className="detail_nav">
        <img src={logoimg} alt="360珠宝" />
        <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/">查询帮助</Link></li>
            <li><Link to="/">证书知识</Link></li>
        </ul>
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

export { 
    Header,
    CurrBtm
 }