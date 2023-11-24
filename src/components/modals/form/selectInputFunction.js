const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: `1px solid ${state.isFocused ? '#b7b9bb' : '#b7b9bb'}`,
      height: '42px',
      width: '422px',
      color: '#9c9e9e',
      boxShadow: 'none',
      '&:hover': {
        border: `1px solid ${state.isFocused ? '#b7b9bb' : '#b7b9bb'}`,
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none',
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isSelected ? '#b7b9bb' : '#fff',
        '&:hover': {
          background: '#b7b9bb',
          color: '#fff'
        },
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        padding: '5px',
        ':hover': {
          background: '#b1b1b1',
          color: '#fff'
        },
    }),
    input: (provided) => ({
        ...provided,
        color: '#9c9e9e',
    }),
};

const options = [
    { value: '1', label: 'فرهاد غفاری' },
    { value: '2', label: 'محمد امینی' },
]

export { customStyles, options }