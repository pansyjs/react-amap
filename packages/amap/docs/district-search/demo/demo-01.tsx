import { useState } from 'react';
import { Input } from 'antd';
import { APILoader, DistrictSearch } from '@pansy/react-amap';

export default () => {
  const [districtSearch, setDistrictSearch] = useState<AMap.DistrictSearch>();

  const handleSearch = (value: string) => {
    console.log(value);
    if (!districtSearch) return;

    districtSearch.search(value, (status, info) => {
      if (status === 'complete') {
        console.log(info);
      }
    })
  }

  return (
    <APILoader>
      <Input.Search
        onSearch={handleSearch}
        style={{ width: 300 }}
        placeholder="请输入搜索城市"
      />

      <DistrictSearch
        extensions="all"
        events={{
          created: (obj) => {
            setDistrictSearch(obj);
          }
        }}
      />
    </APILoader>
  )
}
