import React from 'react'
import {Link} from 'react-router-dom'
import '.././css/detail.css'
import {
	 Header,
	 CurrBtm 
} from './public.js'
class Result extends React.Component {
	constructor (){
		super() ;
	}
	render (){
		return (
			<div className='detail_result'>
				<div className='result_left'>
					<div className="result_company">
						<div className="result_company_logo">
							<div></div>
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
					<div className="result_company">
						<div className="result_company_logo">
							<div></div>
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