import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
const { Meta } = Card;

export default class PCPlantsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	// componentWillMount() {
	// 	var myFetchOptions = {
	// 		method: 'GET'
	// 	};
	// 	fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
	// };
	render() {
		const plantsList = this.props.plantsList
		const plantsImgs = []
		const style = { width: 200 , height: 200, padding: 10}
		for(var i =0; i < plantsList.length; i++){
				plantsImgs.push(
					 <img src ={plantsList[i]} style={style}/>

					)
				console.log(plantsList[i])
		}

		

		return (
			<div class="topNewsList">
				{plantsImgs}
			</div>
		);
	};
}
