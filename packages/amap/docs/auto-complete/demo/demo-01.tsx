import { useState } from 'react';
import { AutoComplete as AntAutoComplete, Input } from 'antd';
import { APILoader, AutoComplete } from '@pansy/react-amap';

export default () => {
  const [autoComplete, setAutoComplete] = useState<AMap.AutoComplete>();
  const [options, setOptions] = useState([]);

  const handleSearch = (value: string) => {
    if (!autoComplete) return;

    autoComplete.search(value, (status, results) => {
      if (status === 'complete') {
        setOptions(results.tips.filter((item) => item.id).map(renderItem));
      }
    })
  }

  const renderItem = (item: AMap.AutoComplete.Tip) => {
    return {
      ...item,
      value: item.name,
      key: item.id,
      label: (
        <div>
          {item.name}
          <span style={{ paddingLeft: 4, color: 'rgba(0, 0, 0, 0.45)' }}>{item.district}</span>
        </div>
      )
    };
  };

  return (
    <APILoader>
      <AutoComplete
        events={{
          created: (obj) => {
            setAutoComplete(obj);
          }
        }}
      />

      <AntAutoComplete
        onSearch={handleSearch}
        options={options}
      >
        <Input.Search size="small" placeholder="请输入地址" />
      </AntAutoComplete>
    </APILoader>
  )
}
