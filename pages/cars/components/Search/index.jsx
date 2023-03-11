import { useState, useEffect, useRef } from 'react';

//constants
import { setNormBoundaries, setYearList } from 'utils';

import { useForm } from 'react-hook-form';
import Select from 'react-select';

//utils
import { carDataMapping } from '@/utils/carDataMapping';
import { getFilteredAdvertisements, setAdvMakes } from '@/data/firebase';

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

  const [yearsList, setYearsList] = useState([]);
  const [transmissionList, setTransmissionList] = useState([]);
  const [fuelList, setFuelList] = useState([]);
  const [makeList, setMakeList] = useState([]);

  const [selectedYearFrom, setSelectedYearFrom] = useState(null);
  const [selectedYearTo, setSelectedYearTo] = useState(null);

  const [selectedPriceFrom, setSelectedPriceFrom] = useState(null);
  const [selectedPriceTo, setSelectedPriceTo] = useState(null);

  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedTransmition, setSelectedTransmition] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);

  useEffect(() => {
    setAdvMakes(setMakeList);
    setYearsList([{ value: '', label: 'Рік' }, ...setYearList(1960)]);

    setFuelList([
      { value: '', label: 'Тип палива' },
      ...carDataMapping(['Бензин', 'Дизель', 'Газ']),
    ]);

    setTransmissionList([
      { value: '', label: 'Коробка передач' },
      ...carDataMapping([
        'Механіка 6 ст.',
        'Механіка 5 ст.',
        'Автомат',
        'Робот',
        'Варіатор',
      ]),
    ]);
  }, []);

  const searchHandler = () => {
    const filters = [
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
      { value: selectedTransmition?.value, attribute: 'transmission' },
    ];

    getFilteredAdvertisements(setAdvList, filters);
  };

  const resetHandler = () => {
    if (inputRef.current) inputRef.current.reset();
    setSelectedYearFrom(null);
    setSelectedYearTo(null);
    setSelectedPriceFrom(null);
    setSelectedPriceTo(null);
    setSelectedFuel(null);
    setSelectedMake(null);
    setSelectedTransmition(null);

    // If you need to refresh the list immediately after clicking the clear filters button, uncomment
    // searchHandler();
  };

  const setLimits = (dependent, oldFrom, oldTo, setLim) => {
    const { to, from } = setNormBoundaries(dependent, {
      from: oldFrom,
      to: oldTo,
    });

    if (dependent === 'from') {
      setLim(from ? { value: from, label: from } : null);
      return from;
    } else {
      setLim(to ? { value: to, label: to } : null);
      return to;
    }
  };

  const {
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', height: 50 }),
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
              height: 470,
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
              <span className={classes.form_select_text}>Марка</span>
              <Select
                value={selectedMake}
                placeholder={<div>Оберіть марку авто</div>}
                className={classes.form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
                styles={{ ...colorStyles }}
                options={makeList}
                onChange={(e) => {
                  if (e) {
                    if (e.value)
                      setSelectedMake({ value: e.value, label: e.label });
                    else setSelectedMake(null);
                  }
                }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />
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
                  value={selectedYearFrom}
                  placeholder={<div>Від</div>}
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles }}
                  options={yearsList}
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
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />

                <span className={classes.form_title_text}>-</span>

                <Select
                  value={selectedYearTo}
                  placeholder={<div>До</div>}
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles }}
                  options={yearsList}
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
                          selectedPriceTo?.value,
                          setSelectedPriceFrom
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
                          selectedPriceFrom?.value,
                          e.target.value,
                          setSelectedPriceTo
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
                onClick={resetHandler}
              >
                Очистити фільтр
              </button>
              <button
                className={classes.form_under_section_button}
                onClick={searchHandler}
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
