import { useState, useEffect, useRef } from 'react';

//constants
import { setNormBoundaries, setYearList } from 'utils';

import { useForm } from 'react-hook-form';
import Select from 'react-select';

//utils
import { carDataMapping } from '@/utils/carDataMapping';
import { getFilteredAdvertisements } from '@/data/firebase';

//scss styles
import classes from './Search.module.scss';

//mui
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Search = ({ setAdvList }) => {
  const inputRef = useRef();
  const [newAdvertisementsListTrigger, setNewAdvertisementsListTrigger] =
    useState(0);

  const [fromSelectValue, setFromSelectValue] = useState(null);
  const [toSelectValue, setToSelectValue] = useState(null);
  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedTransmition, setSelectedTransmition] = useState(null);

  const [yearsArray, setYearsArray] = useState();
  const [transmissionList, setTransmissionList] = useState();
  const [fuelList, setFuelList] = useState();

  const [fuelType, setFuelType] = useState(null);
  const [transmissionType, setTransmissionType] = useState(null);

  const [selectedYear, setSelectedYear] = useState({
    from: '',
    to: '',
  });

  const [price, setPrice] = useState({
    from: '',
    to: '',
  });

  const {
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', height: 50 }),
  };

  useEffect(() => {
    const filters = [
      { from: selectedYear.from, to: selectedYear.to, attribute: 'year' },
      { from: price.from, to: price.to, attribute: 'price' },
      { value: fuelType, attribute: 'fuel' },
      { value: transmissionType, attribute: 'transmission' },
    ];

    getFilteredAdvertisements(setAdvList, filters);
  }, [newAdvertisementsListTrigger]);

  useEffect(() => {
    const yList = [{ value: '', label: 'Рік' }, ...setYearList(1960)];
    const trList = [
      { value: '', label: 'Коробка передач' },
      ...carDataMapping([
        'Механіка 6 ст.',
        'Механіка 5 ст.',
        'Автомат',
        'Робот',
        'Варіатор',
      ]),
    ];
    const fList = [
      { value: '', label: 'Тип палива' },
      ...carDataMapping(['Бензин', 'Дизель', 'Газ']),
    ];

    setFuelList(fList);
    setTransmissionList(trList);
    setYearsArray(yList);
  }, []);

  const resetFilter = () => {
    setSelectedYear({
      from: '',
      to: '',
    });
    setPrice({
      from: '',
      to: '',
    });

    if (inputRef.current) inputRef.current.reset();
    setFuelType(null);
    setTransmissionType(null);

    setSelectedFuel(null);
    setSelectedTransmition(null);

    setFromSelectValue(null);
    setToSelectValue(null);

    // If you need to refresh the list immediately after clicking the clear filters button, uncomment
    // setNewAdvertisementsListTrigger(newAdvertisementsListTrigger + 1);
  };

  const setLimits = (dependent, from, to, setLim) => {
    const limit = { to, from };
    const newLimit = setNormBoundaries(dependent, limit);
    setLim(newLimit);
    if (dependent === 'from') return newLimit.from;
    else return newLimit.to;
  };

  return (
    <Box sx={{ backgroundColor: '#1E1E1E' }}>
      <Accordion sx={{ border: 0, width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: '#FF8A00',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontWeight: 800 }}>Фільтр</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: '#1E1E1E',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: 420,
              height: 370,
              backgroundColor: '#1E1E1E',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className={classes.form_title}>
              <span className={classes.form_title_text}>Пошук авто</span>
            </div>
            <div className={classes.fromto}>
              <span className={classes.form_select_text}>Паливо</span>
              <Select
                value={selectedFuel}
                placeholder={<div>Оберіть тип палива</div>}
                className={classes.form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
                styles={{ ...colorStyles }}
                options={fuelList}
                onChange={(e) => {
                  if (e) {
                    if (e.value)
                      setSelectedFuel({ value: e.value, label: e.label });
                    else setSelectedFuel(null);
                    setFuelType(e.value);
                  }
                }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />
            </div>

            <div className={classes.fromto}>
              <span className={classes.form_select_text}>Коробка</span>
              <Select
                value={selectedTransmition}
                placeholder={<div>Оберіть коробку передач</div>}
                className={classes.form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
                styles={{ ...colorStyles }}
                options={transmissionList}
                onChange={(e) => {
                  if (e) {
                    if (e.value)
                      setSelectedTransmition({
                        value: e.value,
                        label: e.label,
                      });
                    else setSelectedTransmition(null);
                    setTransmissionType(e.value);
                  }
                }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />
            </div>

            <div className={classes.fromto}>
              <span className={classes.form_select_text}>Рік</span>

              <div className={classes.fromto} style={{ width: '75%' }}>
                <Select
                  value={fromSelectValue}
                  placeholder={<div>Від</div>}
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles }}
                  options={yearsArray}
                  onChange={(e) => {
                    if (e) {
                      const data = setLimits(
                        'from',
                        e.value,
                        selectedYear.to,
                        setSelectedYear
                      );
                      if (data)
                        setFromSelectValue({ value: data, label: data });
                      else setFromSelectValue(null);
                    }
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />

                <span className={classes.form_title_text}>-</span>

                <Select
                  value={toSelectValue}
                  placeholder={<div>До</div>}
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles }}
                  options={yearsArray}
                  onChange={(e) => {
                    if (e) {
                      const data = setLimits(
                        'to',
                        selectedYear.from,
                        e.value,
                        setSelectedYear
                      );
                      if (data) setToSelectValue({ value: data, label: data });
                      else setToSelectValue(null);
                    }
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
            </div>
            <form style={{ width: '100%' }} ref={inputRef}>
              <div className={classes.fromto}>
                <span className={classes.form_select_text}>Ціна</span>

                <div className={classes.fromto} style={{ width: '75%' }}>
                  <input
                    // ref={inputRef}
                    className={classes.form_input}
                    placeholder="Від"
                    style={{ backgroundColor: errors.userName && '#ffc38c' }}
                    type="text"
                    onKeyPress={(event) => {
                      if (!/[0-9+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onBlur={(e) => {
                      if (e) {
                        e.target.value = setLimits(
                          'from',
                          e.target.value,
                          price.to,
                          setPrice
                        );
                      }
                    }}
                  />

                  <span className={classes.form_title_text}>-</span>

                  <input
                    // ref={inputRef}
                    className={classes.form_input}
                    placeholder="До"
                    style={{ backgroundColor: errors.userName && '#ffc38c' }}
                    type="text"
                    onKeyPress={(event) => {
                      if (!/[0-9+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    onBlur={(e) => {
                      if (e) {
                        e.target.value = setLimits(
                          'to',
                          price.from,
                          e.target.value,
                          setPrice
                        );
                      }
                    }}
                  />
                </div>
              </div>
            </form>
            <div className={classes.form_under_section}>
              <button
                className={classes.form_under_section_button}
                onClick={resetFilter}
              >
                Очистити фільтр
              </button>
              <button
                className={classes.form_under_section_button}
                onClick={() =>
                  setNewAdvertisementsListTrigger(
                    newAdvertisementsListTrigger + 1
                  )
                }
              >
                Пошук
              </button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
