import modelExtend from 'dva-model-extend'
import {
  query,
  queryUserList,
} from '../../services/user/userManage'
import {pageModel} from '../common'

export default modelExtend(pageModel, {

  namespace: 'userManage',
  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'InfoView',
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        if (location.pathname === '/userManage') {
          dispatch({
            type: 'query',
            payload: {
              ...location.query,
            }
          })
        }
      })
    },
  },

  effects: {
    * query({payload = {}}, {call, put}) {
      const data = yield call(query, payload)
      if (data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
    * queryUserList({payload = {}}, {call, put}) {
      const data = yield call(queryUserList, payload)
      if (data.success) {
        yield put({
          type: 'showModal',
          payload: {
            listUser: data.data,
            refUid: payload.uid,
            paginationUserList: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {

    showModal(state, {payload}) {
      return {...state, ...payload, modalVisible: true}
    },

    hideModal(state) {
      return {...state, modalVisible: false}
    },
  },
})
