/**
 * Created by ljunb on 16/6/5.
 */
import * as types from '../actions/actionTypes';

const initialState = {
	history: [], // 搜索历史
	keywordsList: [], // 热搜词
	searchText: null, // 搜索文本
	tags: [], // 标签数组
	searchResultList: [], // 搜索结果
	sortTypesList: [], // 营养素数组
	currentSortType: null, // 当前营养素
	currentTag: null, // 当前tag
	showSortTypeView: false, // 显示营养素视图
	orderByAsc: false, // 升降序
	isHealthLight: false, // 是否推荐食物
	isLoading: true,
	isLoadMore: false,
}

let searchReducer = (state = initialState, action) => {

	switch (action.type) {
		case types.SETUP_SEARCH_TEXT:
			return Object.assign({}, state, {
				searchText: action.searchText,
			})
		case types.CACHE_HISTORY:
			return Object.assign({}, state, {
				history: action.history,
			})
		case types.FETCH_SEARCH_RESULT_LIST:
			return Object.assign({}, state, {
				tags: [],
				isLoading: action.isLoading,
				isLoadMore: action.isLoadMore,
			})
		case types.RECEIVE_SEARCH_RESULT_LIST:
			return Object.assign({}, state, {
				tags: action.tags,
				searchResultList: state.isLoadMore ? state.searchResultList.concat(action.searchResultList) : action.searchResultList,
				isLoading: false,
			})
		default:
			return state;
	}
}

export default searchReducer;