import React from 'react'
import {
	Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import '.././css/detail.css'
import {
	 Header,
	 CurrBtm 
} from './public.js'
import logoimg from '.././img/top_logo.png'
import loading from '.././img/loading.svg';

class Result extends React.Component {
	constructor (props,context){
		super(props,context) ;
		this.state = {
			resultname:'' ,//鉴定机构名称
			resultconclusion:'正在查询，请稍等...' ,//鉴定机构结论
			isloding:true,   //进入加载loding页
			resultstate:10,  // 10 20 有无结果
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
				resultimg:logoimg,
				result:'正在查询，请稍等...' //鉴定机构结论

			}
		}
		console.log(props,context)

	}
	componentDidMount (){
		var _self = this ;
		// console.log(this.context)
		var data = this.context.router.route.location.state ;
		this.setState({
			resultname:data.idname 
		})
		if(data.idname!='北大宝石鉴定中心'){
			setTimeout(function (){
				_self.setState({
					isloding:false,
					resultstate:20,
					data:{list:[],result:'无',resultimg:logoimg}
				}) 
			},3e3)
			return false ;
		}

		var strData = 'numbercode='+data.idnumer+'&weight='+data.idweight ;
		this.postAjax('/public/login',strData,function (d){
			console.log(d)
			if(d.errcode==0){
				var data = {} ;
				data.list = [] ;
				for(var k in d.data){
					console.log(k)
					switch(k){
						case 'number':
							data.list.push({name:'检测编号',value:d.data[k]}) ;
							break ;
						case 'weight':
							data.list.push({name:'总重量',value:d.data[k]}) ;
							break ;

						case 'shape':
							data.list.push({name:'形状',value:d.data[k]}) ;
							break ;
						case 'jname':
							data.list.push({name:'主石名称',value:d.data[k]}) ;
							break ;
						case 'coloe':
							data.list.push({name:'颜色',value:d.data[k]}) ;
							break ;
						case 'refractive':
							data.list.push({name:'折射率',value:d.data[k]}) ;
							break ;
						case 'density':
							data.list.push({name:'密度',value:d.data[k]}) ;
							break ;
						case 'enlarge':
							data.list.push({name:'放大检查',value:d.data[k]}) ;
							break ;
						case 'remarks':
							data.list.push({name:'备注',value:d.data[k]}) ;
							break ;
						case 'gemmologist':
							data.list.push({name:'鉴定师',value:d.data[k]}) ;
							break ;
						case 'auditor':
							data.list.push({name:'审核人',value:d.data[k]}) ;
							break ;
						case 'imgurl':
							data.resultimg = d.data[k] ;
							break ;
						case 'result':
							data.result = d.data[k] ;
							break ;
					}

				}
				console.log(data)
				_self.setState({
					isloding:false,
					resultstate:10,
					data:data
				}) 
			}else{
				_self.setState({
					isloding:false,
					resultstate:20,
					data:{list:[],result:'无',resultimg:logoimg}
				}) 
			}
		})
	}
	gotoHomepage (){
		this.context.router.history.push({
			pathname:'/'
		})
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
								<span>{this.state.resultname}</span>
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
								<span>{this.state.data.result}</span>
							</li>
						</ul>
					</div>
					<div className="result_company" style={{paddingTop:'20px',paddingBottom:'50px'}}>
						<div className={!this.state.isloding?'show':'hide'}>
							{/*获取鉴定信息成功*/}
							<div className={this.state.resultstate==10?'show':'hide'}>	
								<div className="result_company_logo result_company_logo_img">
									<div className={this.state.data.resultimg?'hide':''}></div>
									<img src={this.state.data.resultimg} className={!this.state.data.resultimg?'hide':''} />
								</div>
								<ul>
									{
										this.state.data.list.map((v,i) => {
											// console.log(this.state.data.resultimg?'1':'2')
											return (
												<li key={i}>
													<span className="spaninit">{v.name}:</span>
													<span>{v.value}</span>
												</li>
											)
										})
									}
								</ul>
							</div>
							{/*获取鉴定信息失败*/}
							<div className={'result_fail'+' '+(this.state.resultstate==20?'show':'hide')}>
								<p>抱歉，暂时没有找到该证书信息，请您确认您的信息是否输入正确， 并尝试重新查询。</p>
								<p style={{fontSize:'12px',color:'#999999',paddingBottom:'10px'}}>小提示：请确认您所选鉴定机构是否与证书对应</p>
								<button onClick={() => this.gotoHomepage()}>重新查询</button>
							</div>

						</div>
						<div className={'result_loading'+" "+(this.state.isloding?'show':'hide')}>
							<img src={loading} alt='loading' />
							<p>正在查询,请稍后...</p>
						</div>
				
					</div>
				</div>
				<div className='result_right'>
					<div>
						<h4><a href='javascript:;'>Q：翡翠价格的评估方法</a></h4>
						<p><b>A：</b>翡翠价格的评估方法</p>
					</div>
					<div>
						<h4><a href='javascript:;'>Q：什么是珠宝鉴定证书?</a></h4>
						<p><b>A：</b>珠宝鉴定证书是由具有一定资质的鉴定机构给送检的珠宝出具的一种证书，通过这个特殊的“身份证”，我们可以很轻松的了解到这个珠宝的真实信息，从而避免被商家迷惑。</p>
					</div>
					<div>
						<h4><a href='javascript:;'>Q：国内主要珠宝质检机构列表 [新]</a></h4>
						<p><b>A：</b>国内主要珠宝质检机构列表</p>
					</div>
				</div>
			</div>
		)
	}
	
	postAjax (url,data,callback){
        fetch('http://localhost:8006'+url,{
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
        .catch((x)=>{
            console.log(x)
        })
    }
}
Result.contextTypes = {
    router:PropTypes.object
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