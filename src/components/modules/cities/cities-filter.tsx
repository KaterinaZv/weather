import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { City } from '../../../store/model/city';
import { Nullable } from '../../../types/generic/Nullable';

type Props = {
  cities: City[];
  onChange: (city: Nullable<City>) => void;
}

const CitiesFilter: React.FC<Props> = ({ cities, onChange }) => {

  const onChangeHandle = (e: React.ChangeEvent<{}>, city: Nullable<City>) => {
    onChange(city);
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={cities}
      getOptionLabel={(option) => option.name}
      fullWidth
      renderInput={(params) => <TextField {...params} label="Выберите город" variant="outlined" />}
      onChange={onChangeHandle}
    />
  )
}

export default CitiesFilter;