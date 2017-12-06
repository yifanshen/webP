import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router'
const { Meta } = Card;

export default class PCNewsBlock extends React.Component {
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
		const plantsImgs = [
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
  </Card>

		]
{/*		for(var i =0; i < plantsList.length; i++){
			plantsImgs.push(
				  <Card
				    hoverable
				    style={{ width: 240 }}
				    cover={<img alt="example" src={plantsList[i]}/>}
				  >
				    <Meta
				      title={i}
				      description="www.instagram.com"
				    />
				  </Card>

				)

*/}
		}

		return (
			<div class="topNewsList">
				{plantsImgs}
			</div>
		);
	};
}
