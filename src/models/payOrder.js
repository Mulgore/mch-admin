import modelExtend from 'dva-model-extend'
import { query } from '../services/payOrder'
import { pageModel } from './common'

export default modelExtend(pageModel, {

  namespace: 'payOrder',

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/payOrder') {
          dispatch({ type: 'query', payload: {
            ...location.query,
          } })
        }
      })
    },
  },

  effects: {
    *query ({
              payload,
            }, { call, put }) {
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
  },
})