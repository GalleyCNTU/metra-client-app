import { useState, useEffect } from 'react';
import Select from 'react-select';

import { getYearList, getPriceList, formatForSelect, setLimits } from 'utils';

import classes from './Search.module.scss';

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    height: 50,
  }),
};

export const SearchForm = ({ setAdvList }) => {
  const [filters, setFilters] = useState(null);

  const [yearList, setYearList] = useState([]);
  const [priceList, setPriceList] = useState([]);

  const [nameList, setNameList] = useState([]);
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);

  const [fuelList, setFuelList] = useState([]);
  const [transmissionList, setTransmissionList] = useState([]);

  const [selectedYearTo, setSelectedYearTo] = useState(null);
  const [selectedYearFrom, setSelectedYearFrom] = useState(null);

  const [selectedPriceTo, setSelectedPriceTo] = useState(null);
  const [selectedPriceFrom, setSelectedPriceFrom] = useState(null);

  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedTransmition, setSelectedTransmition] = useState(null);

  useEffect(() => {
    fetch('/api/firebase/getAvailableMakes')
      .then((res) => res.json())
      .then(({ names }) => {
        if (names) {
          setNameList(names);
          setMakeList(formatForSelect(Object.keys(names), 'Марка'));
        }
      });
    setYearList(getYearList(1960));
    setPriceList(getPriceList(3 * 10 ** 4));
    setFuelList(formatForSelect(['Бензин', 'Дизель', 'Газ'], 'Тип палива'));
    setTransmissionList(
      formatForSelect(
        ['Механіка 6 ст.', 'Механіка 5 ст.', 'Автомат', 'Робот', 'Варіатор'],
        'Коробка передач'
      )
    );
  }, []);

  useEffect(() => {
    if (selectedMake?.value) {
      setModelList(formatForSelect(nameList[selectedMake.label], 'Марка'));
    } else setModelList([]);
    setSelectedModel(null);
  }, [selectedMake]);

  useEffect(() => {
    if (filters) {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(filters),
      };
      fetch('/api/firebase/getAdvertisementList', requestOptions)
        .then((res) => res.json())
        .then(({ advList }) => {
          setAdvList(advList);
        });
    }
  }, [filters, setAdvList]);

  const resetHandler = () => {
    setSelectedYearFrom(null);
    setSelectedYearTo(null);

    setSelectedPriceFrom(null);
    setSelectedPriceTo(null);

    setSelectedFuel(null);
    setSelectedMake(null);
    setSelectedModel(null);
    setSelectedTransmition(null);

    // Uncomment if you need to refresh the list immediately after clicking the clear filters button
    // searchHandler();
  };

  const searchHandler = () => {
    setFilters([
      {
        from: selectedYearFrom?.value,
        to: selectedYearTo?.value,
        attribute: 'year',
      },
      {
        from: selectedPriceFrom?.value,
        to: selectedPriceTo?.value,
        attribute: 'price',
      },
      { value: selectedFuel?.value, attribute: 'fuel' },
      { value: selectedMake?.value, attribute: 'make' },
      { value: selectedModel?.value, attribute: 'model' },
      { value: selectedTransmition?.value, attribute: 'transmission' },
    ]);

    window.location.href = '#purchased_cars';
  };

  return (
    <div className={classes.form_body}>
      <div className={classes.fromto}>
        <span className={classes.form_select_text}>Марка</span>
        <Select
          placeholder={<div>Оберіть марку авто</div>}
          className={classes.form_select}
          styles={{ ...colorStyles }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
          })}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          value={selectedMake}
          options={makeList}
          onChange={(e) => {
            if (e?.value) setSelectedMake({ value: e.value, label: e.label });
            else setSelectedMake(null);
          }}
        />
      </div>

      <div className={classes.fromto}>
        <span className={classes.form_select_text}>Модель</span>
        <Select
          placeholder={<div>Оберіть модель авто</div>}
          className={classes.form_select}
          styles={{ ...colorStyles }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
          })}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          value={selectedModel}
          options={modelList}
          onChange={(e) => {
            if (e?.value) setSelectedModel({ value: e.value, label: e.label });
            else setSelectedModel(null);
          }}
        />
      </div>

      <div className={classes.fromto}>
        <span className={classes.form_select_text}>Паливо</span>
        <Select
          placeholder={<div>Оберіть тип палива</div>}
          className={classes.form_select}
          styles={{ ...colorStyles }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
          })}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          value={selectedFuel}
          options={fuelList}
          onChange={(e) => {
            if (e?.value) setSelectedFuel({ value: e.value, label: e.label });
            else setSelectedFuel(null);
          }}
        />
      </div>

      <div className={classes.fromto}>
        <span className={classes.form_select_text}>Коробка</span>
        <Select
          placeholder={<div>Оберіть коробку передач</div>}
          className={classes.form_select}
          styles={{ ...colorStyles }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 10,
          })}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          value={selectedTransmition}
          options={transmissionList}
          onChange={(e) => {
            if (e?.value)
              setSelectedTransmition({
                value: e.value,
                label: e.label,
              });
            else setSelectedTransmition(null);
          }}
        />
      </div>

      <div className={classes.fromto}>
        <span className={classes.fromto_text}>Рік</span>

        <div className={classes.fromto_mobileWrap}>
          <Select
            placeholder={<div>Від</div>}
            className={classes.form_select_fromto}
            styles={{ ...colorStyles }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 10,
            })}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            value={selectedYearFrom}
            options={yearList}
            onChange={(e) => {
              if (e) {
                setLimits(
                  'from',
                  e.value,
                  selectedYearTo?.value,
                  setSelectedYearFrom
                );
              }
            }}
          />

          {/* <span className={classes.form_title_text}>-</span> */}

          <Select
            placeholder={<div>До</div>}
            className={classes.form_select_fromto}
            styles={{ ...colorStyles }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 10,
            })}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            value={selectedYearTo}
            options={yearList}
            onChange={(e) => {
              if (e) {
                setLimits(
                  'to',
                  selectedYearFrom?.value,
                  e.value,
                  setSelectedYearTo
                );
              }
            }}
          />
        </div>
      </div>
      <div className={classes.fromto}>
        <span className={classes.fromto_text}>Ціна</span>

        <div className={classes.fromto_mobileWrap}>
          <Select
            placeholder={<div>Від</div>}
            className={classes.form_select_fromto}
            styles={{ ...colorStyles }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 10,
            })}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            value={selectedPriceFrom}
            options={priceList}
            onChange={(e) => {
              if (e) {
                setLimits(
                  'from',
                  e.value,
                  selectedPriceTo?.value,
                  setSelectedPriceFrom
                );
              }
            }}
          />

          {/* <span className={classes.form_title_text}>-</span> */}

          <Select
            placeholder={<div>До</div>}
            className={classes.form_select_fromto}
            styles={{ ...colorStyles }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 10,
            })}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            value={selectedPriceTo}
            options={priceList}
            onChange={(e) => {
              if (e) {
                setLimits(
                  'to',
                  selectedPriceFrom?.value,
                  e.value,
                  setSelectedPriceTo
                );
              }
            }}
          />
        </div>
      </div>
      <div className={classes.form_under_section}>
        {/* <button
          className={classes.form_under_section_button}
          onClick={resetHandler}
        >
          Очистити
        </button> */}
        <span
          className={classes.form_under_section_reset}
          onClick={resetHandler}
        >
          Очистити фільтр
        </span>
        <button
          className={classes.form_under_section_button}
          onClick={searchHandler}
        >
          Пошук
        </button>
      </div>
    </div>
  );
};
