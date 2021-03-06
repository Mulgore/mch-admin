import { request, config } from 'utils'

const { api } = config
const { settingPermission } = api

export async function query (params) {
  return request({
    url: settingPermission.replace('/:id', ''),
    method: 'get',
    data: params,
  })

}

export async function queryChild (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/child/:id',
    method: 'get',
    data: params,
  })

}

export async function update (params) {
  return request({
    url: settingPermission,
    method: 'get',
    data: params,
  })

}

export async function updatePerm (params) {
  return request({
    url: settingPermission.replace('/:id', ''),
    method: 'post',
    data: params,
  })

}

export async function deletePer (params) {
  return request({
    url: settingPermission,
    method: 'delete',
    data: params,
  })
}

export async function startPerm (params) {
  return request({
    url: settingPermission,
    method: 'post',
    data: params,
  })
}

export async function getBankData (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/getBank',
    method: 'get',
    data: params,
  })

}

export async function stateChild (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/state/child',
    method: 'post',
    data: params,
  })
}

export async function addChildPerm (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/add/child',
    method: 'post',
    data: params,
  })

}
export async function queryProfit (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/profit/:id',
    method: 'get',
    data: params,
  })

}

export async function queryProfitWithdraw (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/profit/withdraw',
    method: 'get',
    data: params,
  })

}

export async function queryProfitRecord (params) {
  return request({
    url: settingPermission.replace('/:id', '')+'/profit/record',
    method: 'get',
    data: params,
  })

}
