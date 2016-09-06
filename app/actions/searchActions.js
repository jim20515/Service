import * as types from './actionTypes';
import Util from '../common/utils';
import UserDefaults from '../common/UserDefaults';
import Common from '../common/constants';

export let setupSearchText = (text) => {
	return {
		type: types.SETUP_SEARCH_TEXT,
		searchText: text,
	}
}

export let selectKeyword = (keyword) => {
	return dispatch => {
		dispatch(setupSearchText(keyword))

		UserDefaults.cachedObject(Common.storeKeys.SEARCH_HISTORY_KEY)
			.then((historyKeywords) => {
				let history = historyKeywords ? historyKeywords : [];

				if (history.indexOf(keyword) != -1) return;

				history.push(keyword);

				UserDefaults.setObject(Common.storeKeys.SEARCH_HISTORY_KEY, history);

				dispatch(cacheHistory(history))
			});
	}
}

let cacheHistory = (history) => {
	return {
		type: types.CACHE_HISTORY,
		history: history,
	}
}

export let fetchSearchResults = (keyword, ...params) => {

	// 请求参数:q、order_asc、page、order_by、health_mode(血糖)、health_light(推荐)、tags
	// http://food.boohee.com/fb/v1/search?page=1&order_asc=asc&q=&tags=&order_by=calory&health_mode=1

	const [page, order_by, order_asc, tags, health_light, isLoadMore, isLoading, health_mode] = params;

	// let URL = 'http://food.boohee.com/fb/v1/search?page=' + page + '&order_asc=' + order_asc + '&q=' + keyword;
	let URL = 'http://food.boohee.com/fb/v1/foods/extra_search?page=' + page +
		'&order_asc=' + order_asc + '&q=' + keyword + '&tags=' + tags;

	// 如无参数则不拼接
	if (order_by) URL += '&order_by=' + order_by;
	if (health_light) URL += '&health_light=' + health_light;
	if (health_mode) URL += '&health_mode=' + health_mode;
	console.log(URL)

	return dispatch => {
		dispatch(fetchSearchResultList(isLoading, isLoadMore));

		Util.get(URL, (reponse) => {

			dispatch(receiveSearchResultList(response.tags, response.foods));

		}, (error) => {
			console.log('Fetch search result error: ' + error);
			dispatch(receiveSearchResultList([], []));
		})
	}
}

let fetchSearchResultList = (isLoading, isLoadMore) => {
	return {
		type: types.FETCH_SEARCH_RESULT_LIST,
		isLoading: isLoading,
		isLoadMore: isLoadMore
	}
}

let receiveSearchResultList = (tags, foods) => {
	return {
		type: types.RECEIVE_SEARCH_RESULT_LIST,
		tags: tags,
		searchResultList: foods,
	}
}