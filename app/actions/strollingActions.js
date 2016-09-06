import * as types from './actionTypes';
import Util from '../common/utils';

export let fetchBanners = () => {
	let URL = 'http://food.boohee.com/fb/v1/home/banners';

	return dispatch => {
		dispatch(fetchBannerList());

		return Util.get(URL, (response) => {
			dispatch(receiveBannerList(response.banners));
		}, (error) => {
			console.log('Fetch banner list error: ' + error);
			dispatch(receiveBannerList([]));
		});
	}
}

let fetchBannerList = () => {
	return {
		type: types.FETCH_BANNER_LIST,
	}
}

let receiveBannerList = (bannerList) => {
	return {
		type: types.RECEIVE_BANNER_LIST,
		bannerList: bannerList,
	}
}

export let fetchFeeds = (page, isLoadMore, isRefreshing, isLoading) => {
	let URL = 'http://food.boohee.com/fb/v1/feeds?page=' + page + '&per=10';

	return dispatch => {
		dispatch(fetchFeedList(isLoadMore, isRefreshing, isLoading));

		return Util.get(URL, (response) => {
			dispatch(receiveFeedList(response.feeds));
		}, (error) => {
			console.log('Fetch feed list error: ' + error);
			dispatch(receiveFeedList([]));
		});
	}
}

let fetchFeedList = (isLoadMore, isRefreshing, isLoading) => {
	return {
		type: types.FETCH_FEED_LIST,
		isLoadMore: isLoadMore,
		isRefreshing: isRefreshing,
		isLoading: isLoading,
	}
}

let receiveFeedList = (feeds) => {
	return {
		type: types.RECEIVE_FEED_LIST,
		feedList: feeds,
	}
}