import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCPlantsBlock from './pc_plants_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};

		const images = [
		"http://res.cloudinary.com/yifanshen/image/upload/v1512513547/Screen_Shot_2017-10-30_at_3.42.10_PM_wanfvk.png",
		"http://res.cloudinary.com/yifanshen/image/upload/v1512513548/Screen_Shot_2017-10-30_at_3.49.28_PM_rveuha.png",
		"http://res.cloudinary.com/yifanshen/image/upload/v1512513548/Screen_Shot_2017-10-30_at_3.48.54_PM_oyrqps.png",
		"http://res.cloudinary.com/yifanshen/image/upload/v1512513548/Screen_Shot_2017-10-30_at_3.43.44_PM_ukn6fj.png",
		]
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">

{/*						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div>
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"/>
						</div>
*/}
						<Tabs class="tabs_news">
							<TabPane tab="single" key="1">
								<PCPlantsBlock plantsList={images} type="top" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="semi-double" key="2">
								<PCNewsBlock count={50} type="guoji" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="double" key="3">
								<PCNewsBlock count={50} type="guoji" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>


{/*						<Tabs class="tabs_product">
							<TabPane tab="ReactNews 产品" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>


						<div>
							<PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"/>
						</div>
*/}

					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
