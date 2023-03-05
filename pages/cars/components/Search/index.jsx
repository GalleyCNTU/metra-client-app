import { useState, useEffect, useRef } from "react";

//constants
import { setYearList } from "@/utils/getCarData"

import { useForm } from 'react-hook-form';
import Select from 'react-select';

//utils
import { carDataMapping } from "@/utils/carDataMapping";
import { getFilteredAdvertisements } from "@/data/firebase";

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
  const fuelSelectRef = useRef();
  const fromSelectRef = useRef();
  const toSelectRef = useRef();
  const inputRef = useRef();

  const [filterTrigger, setFilterTrigger] = useState(0);
  const [fuelType, setFuelType] = useState(null);
  const [yearsArray, setYearsArray] = useState(setYearList(1960));

  const [selectedYear, setSelectedYear] = useState({
    from: '',
    to: ''
  })

  const [mileage, setMileage] = useState({
    from: '',
    to: ''
  });

  const [price, setPrice] = useState({
    from: '',
    to: ''
  });


  const {
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', height: 50 }),
  };

  useEffect(() => {
    const filters = [
      { from: selectedYear.from, to: selectedYear.to, attribute: "year" },
      { from: mileage.from, to: mileage.to, attribute: "odometer" },
      { from: price.from, to: price.to, attribute: "price" },
      { value: fuelType, attribute: "fuel" },
    ]

    getFilteredAdvertisements(setAdvList, filters)
  }, [filterTrigger])

  const resetFilter = () => {
    setSelectedYear({
      from: '',
      to: ''
    })
    setMileage({
      from: '',
      to: ''
    })
    setPrice({
      from: '',
      to: ''
    })
    setFuelType(null)

    
    if (fuelSelectRef.current && 
      inputRef.current && 
      fromSelectRef.current && 
      toSelectRef.current) {

      fuelSelectRef.current.clearValue();
      fromSelectRef.current.clearValue();
      toSelectRef.current.clearValue();
      inputRef.current.reset();
    }
    setFilterTrigger(filterTrigger + 1)
  };

  return (
    <Box sx={{ backgroundColor: "#1E1E1E", }}>
      <Accordion sx={{ border: 0, width: "100%", }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white", }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "#FF8A00", color: "white", display: "flex", justifyContent: "center" }}
        >
          <Typography sx={{ fontWeight: 800 }}>Фільтр</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: "#1E1E1E", display: "flex", justifyContent: "center" }}
        >

          <Box
            sx={{
              width: 420,
              height: 430,
              backgroundColor: "#1E1E1E",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div className={classes.form_title}>
              <span className={classes.form_title_text}>
                Пошук авто
              </span>
            </div>
            <div className={classes.fromto}>
              <span className={classes.form_select_text}>Паливо</span>
              <Select
                ref={fuelSelectRef}
                placeholder={
                  <div>Оберіть тип палива</div>
                }
                className={classes.form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
                styles={{ ...colorStyles, }}
                options={carDataMapping(["Бензин", "Дизель", "Газ"])}
                onChange={(e) => { if (e) setFuelType(e.label) }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />

            </div>

            <div className={classes.fromto}>

              <span className={classes.form_select_text}>Рік</span>

              <div className={classes.fromto} style={{ width: "75%" }}>
                <Select
                  ref={fromSelectRef}
                  placeholder={
                    <div>Від</div>
                  }
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles, }}
                  options={yearsArray}
                  onChange={(e) => {
                    if (e) {
                      const to = selectedYear.to;
                      setSelectedYear({
                        to,
                        from: e.label
                      })
                    }
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />

                <span className={classes.form_title_text}>
                  -
                </span>

                <Select
                  ref={toSelectRef}
                  placeholder={
                    <div>До</div>
                  }
                  className={classes.form_select_fromto}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                  })}
                  styles={{ ...colorStyles, }}
                  options={yearsArray}
                  onChange={(e) => {
                    if (e) {
                      const from = selectedYear.from;
                      setSelectedYear({
                        from,
                        to: e.label
                      })
                    }
                  }}
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
              </div>
            </div>
            <form style={{ width: "100%" }} ref={inputRef}>
              <div className={classes.fromto}>

                <span className={classes.form_select_text}>Пробіг</span>

                <div className={classes.fromto} style={{ width: "75%" }}>
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
                    onChange={(e) => {
                      if (e) {
                        const to = mileage.to;
                        setMileage({
                          from: e.target.value,
                          to
                        })
                      }
                    }}
                  />

                  <span className={classes.form_title_text}>
                    -
                  </span>

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
                    onChange={(e) => {
                      if (e) {
                        const from = mileage.from;
                        setMileage({
                          from,
                          to: e.target.value
                        })
                      }
                    }}
                  />
                </div>
              </div>
              <div className={classes.fromto}>

                <span className={classes.form_select_text}>Ціна</span>

                <div className={classes.fromto} style={{ width: "75%" }}>
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
                    onChange={(e) => {
                      if (e) {
                        const to = price.to;
                        setPrice({
                          from: e.target.value,
                          to
                        })
                      }
                    }}
                  />

                  <span className={classes.form_title_text}>
                    -
                  </span>

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
                    onChange={(e) => {
                      if (e) {
                        const from = price.from;
                        setPrice({
                          from,
                          to: e.target.value
                        })
                      }
                    }}
                  />
                </div>
              </div>
            </form>
            <div className={classes.form_under_section}>
              <button className={classes.form_under_section_button} onClick={() => setFilterTrigger(filterTrigger + 1)}>Пошук</button>
              <button className={classes.form_under_section_button} onClick={resetFilter}>Очистити фільтр</button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}