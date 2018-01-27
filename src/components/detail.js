import React from 'react'
import {Link} from 'react-router-dom'
import '.././css/detail.css'
import {
	 Header,
	 CurrBtm 
} from './public.js'
import logoimg from '.././img/top_logo.png'

class Result extends React.Component {
	constructor (){
		super() ;
		this.state = {
			data:{
				list:[
					{name:'检测编号:',state:0,value:'c1711727272'},
					{name:'检测编号:',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},				
					{name:'检测编号',state:0,value:'c1711727272'},
					{name:'检测编号',state:0,value:'c1711727272'},
					{name:'检测编号',state:0,value:'c1711727272'},
					{name:'检测编号',state:0,value:'c1711727272'},
					{name:'检测编号',state:1,value:'c1711766662'},
				],
				resultimg:logoimg
			}
		}
	}
	render (){
		return (
			<div className='detail_result'>
				<div className='result_left'>
					<div className="result_company">
						<div className="result_company_logo">
							<div>
								
							</div>
						</div>
						<ul>
							<li>
								<span>鉴定机构</span>
								<span>123</span>
							</li>
							<li>
								<span>机构资质</span>
								<span className="Qualifications">
									<img src={require('.././img/institution01.jpg')}/>
									<img src={require('.././img/institution05.jpg')}/>
								</span>
							</li>
							<li>
								<span>鉴定结论</span>
								<span>123</span>
							</li>
						</ul>
					</div>
					<div className="result_company" style={{paddingTop:'20px',paddingBottom:'50px'}}>
						<div className="result_company_logo result_company_logo_img">
							<div className={this.state.data.resultimg?'hide':''}></div>
							<img src={this.state.data.resultimg} className={!this.state.data.resultimg?'hide':''} />
						</div>
						<ul>
							{
								this.state.data.list.map((v,i) => {
									console.log(this.state.data.resultimg?'1':'2')
									return (
										<li className={v.state==0?'':'hide'} key={i}>
											<span>{v.name}</span>
											<span>{v.value}</span>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
				<div className='result_right'>

				</div>
			</div>
		)
	}
}

class Details extends React.Component {
	constructor (){
		super() ;
		this.state = {} ;
	}
	render (){
		return (
			<div>
				<Header />
				<Result />
				<CurrBtm />
			</div>
		)
	}
}
export default Details