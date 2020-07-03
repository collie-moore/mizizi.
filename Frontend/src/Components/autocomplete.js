import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import './sigg.css'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
const multiplebool = true;


  React.useEffect(() => {
    const qp = '?language=en-gb';
    const uri = 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms' + qp;
    let h = new Headers();
    h.append('x-rapidapi-host', 'priaid-symptom-checker-v1.p.rapidapi.com');
    h.append('x-rapidapi-key', '8384a30b45mshd82923e01e66c7fp1d4035jsn9cc1bd51e260');
    h.append('useQueryString', 'true');
    
    let req = new Request( uri, {
      method: 'GET',
      headers: h
    });
    let active = true;

    if (!loading) {
      return undefined;
    }
    
    (async () => {
        const response = await fetch(req);
        await sleep(1e3); // For demo purposes.
        const countries = await response.json();
  
        if (active) {
          setOptions(countries);
        }
      })();

   
    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete className="sympt"
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.Name === value.Name}
      getOptionLabel={(option) => option.Name}
      options={options}
      multiple={multiplebool}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}