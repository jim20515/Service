'use strict';

import React, {
	Component
} from 'react';

import {
	TabBarIOS,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DemandContainer from '../containers/DemandContainer';
import SupplyContainer from '../containers/SupplyContainer';
import ChatContainer from '../containers/ChatContainer';
import UserContainer from '../containers/UserContainer';
import Constants from '../common/constants';

const tabBarItems = [{
	title: '需求列表',
	icon: 'navicon',
	component: DemandContainer
}, {
	title: '供給列表',
	icon: 'briefcase',
	component: SupplyContainer
}, {
	title: '聊天室',
	icon: 'comments',
	component: ChatContainer
}, {
	title: '我的',
	icon: 'user',
	component: UserContainer
}]

class TabBarView extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: tabBarItems[0].title,
		};
	}

	render() {
		return (
			<TabBarIOS tintColor={Constants.colors.themeColor}>
				{
					tabBarItems.map((controller, i) => {
						let Component = controller.component;

						return (
							<FontAwesome.TabBarItem
								key={i}
								title={controller.title}
								iconName={controller.icon}
								selectedIconName={controller.icon}
								selected={this.state.selectedTab === controller.title}
								onPress={() => {
									this.setState({
										selectedTab: controller.title
									})
								}}
							>
								<Component navigator = {this.props.navigator} {...this.props}/>
							</FontAwesome.TabBarItem>
						)
					})
				}

			</TabBarIOS>
		);
	}
}

export default TabBarView;
