import React from 'react'
import {Link} from 'react-router-dom'
import logoimg from '.././img/logo.png'
import '.././css/home.css'

const Header = () => (
	<div>
		<img src={logoimg} alt="360珠宝" />
		<ul>
			<li><Link to="/">首页</Link></li>
			<li><Link to="/">查询帮助</Link></li>
			<li><Link to="/">证书知识</Link></li>
		</ul>
	</div>
)
class Details extends React.Component {
	constructor (){
		super() ;
		this.state = {} ;
	}
	render (){
		return (
			<div>
				<Header/>
				
			</div>
		)
	}
}
export default Details