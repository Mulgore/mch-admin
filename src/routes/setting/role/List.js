import React from 'react'
import {Table, Icon} from 'antd'
import styles from './List.less'
import {globalPayType, globalSettleType, feeRateFormat} from '../../../utils'
const status = (key) => {
  switch (key) {
    case 1:
      return <Icon style={{color: 'blue'}} type="check"/>
    case 0:
      return <Icon style={{color: 'red'}} type="close"/>
  }
}

const List = ({...tableProps}) => {
  const columns = [
    {
      title: '等级',
      dataIndex: 'name',
    }, {
      title: '级别',
      dataIndex: 'sort',
    }, {
      title: '备注',
      dataIndex: 'description',
    },
  ]

  return (
    <div>
      <Table
        {...tableProps}
        bordered
        scroll={{x: 1200}}
        columns={columns}
        simple
        className={styles.table}
        rowKey={record => record.id}
      />
    </div>
  )
}

export default List