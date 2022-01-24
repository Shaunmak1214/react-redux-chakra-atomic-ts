import { useState } from 'react';

interface Props {
  data: any;
}

const useSearch = ({ data }: Props) => {
  const [filteredData, setFilteredData] = useState<any>([]);

  const handleFilter = (event: any) => {
    const searchWords = event.target.value;

    const result = data.filter((value: any) =>
      value.service_name.toLowerCase().includes(searchWords.toLowerCase()),
    );

    if (searchWords === '') {
      setFilteredData([]);
    } else if (result.length === 0) {
      setFilteredData([
        {
          service_name: 'No Such Service',
        },
      ]);
    } else {
      setFilteredData(result);
    }
  };

  return { filteredData, handleFilter };
};

export default useSearch;
