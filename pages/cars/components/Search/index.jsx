import { useState, useEffect, useRef } from 'react';

//constants
import { getSliderMarks, setNormBoundaries, setYearList } from 'utils';

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
import Slider from '@mui/material/Slider';

const minDistance = 500;

export const Search = ({ setAdvList }) => {
  const inputRef = useRef();

  const [yearsList, setYearsList] = useState([]);
  const [transmissionList, setTransmissionList] = useState([]);
  const [fuelList, setFuelList] = useState([]);
  const [makeList, setMakeList] = useState([]);

  const [selectedYearFrom, setSelectedYearFrom] = useState(null);
  const [selectedYearTo, setSelectedYearTo] = useState(null);

  const [selectedFuel, setSelectedFuel] = useState(null);
  const [selectedTransmition, setSelectedTransmition] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);

  const [price, setPrice] = useState([0, 30000]);
  const [sliderMarks, setSliderMarks] = useState(getSliderMarks(30000, 10000));

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
        from: price[0],
        to: price[1],
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
    setSelectedFuel(null);
    setSelectedMake(null);
    setSelectedTransmition(null);
    setPrice([0, 500000]);
    // If you need to refresh the list immediately after clicking the clear filters button, uncomment
    // searchHandler();
  };

  const sliderChangeHandle = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
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
        ></AccordionDetails>
      </Accordion>
    </Box>
  );
};

/* <div className={classes.fromto} style={{ width: '75%' }}>
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
</div> */
