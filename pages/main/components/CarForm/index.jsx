// React Hooks
import { useState, useEffect, useMemo, useRef } from 'react';

// React libs
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from 'react-select';

// Style file
import classes from './CarForm.module.scss';

// Utils
import { makesToList, getModelList, setYearList } from 'utils';
import { Box, Button, Typography } from '@mui/material';

export const CarForm = ({ makes }) => {
  const [brand, setBrand] = useState();
  const [modelList, setModelList] = useState();
  const [makeList, setMakeList] = useState();
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [formSwitcher, setFormSwitcher] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const selectRef = useRef();

  useEffect(() => sendUserInfo(), [userInfo]);

  useEffect(() => {
    if (makes) setMakeList(makesToList(makes));
  }, []);

  useEffect(() => {
    if (brand) setModelList(getModelList(makes, brand));
  }, [brand]);

  const carYears = useMemo(() => {
    return setYearList(1960);
  }, []);
  const notify = (text) =>
    toast.error(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' });

  const showCarPrice = () => {
    if (!selectedBrand) {
      notify('Виберіть марку автомобіля');
    } else if (!selectedModel) {
      notify('Виберіть модель авто');
    } else if (!selectedYear) {
      notify('Виберіть модельний рік');
    } else setFormSwitcher(1);
  };

  const sendUserInfo = () => {
    if (brand && selectedBrand && selectedModel && selectedYear) {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(userInfo),
      };
      fetch('/api/telegram', requestOptions)
        .then((res) => res.json())
        .then((data) => console.log(data.message));
    }
  };

  const resetInfo = () => {
    setBrand('');
    setModelList([]);
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYear('');
    setFormSwitcher(0);
    setUserInfo({});
  };

  const sellCar = ({ userName, userTelephone }) => {
    setUserInfo({
      userName: userName,
      userTelephone: userTelephone,
      carBrand: selectedBrand,
      carModel: selectedModel,
      carYear: selectedYear,
    });
    reset();
    setFormSwitcher(2);
  };

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
    }),
    option: (provided) => ({
      ...provided,
      borderRadius: 10,
      padding: 15,
    }),
    menu: (provided) => ({
      ...provided,
      zIndex:9999,
    }),
    menuList: (provided) => ({
      ...provided,
      padding:0,
    }),
  };

  const clearValue = () => {
    if (selectRef.current) {
      selectRef.current.clearValue();
      setModelList([]);
      setSelectedModel('');
    }
  };

  return (
    <div className={classes.car_form}>
      {formSwitcher === 0 && (
        <Box className={classes.car_form_body}>
          <Typography className={classes.car_form_title}>
            Онлайн розрахунок попередньої вартості авто
          </Typography>
          <Box className={classes.car_form_action}>
            <Select
              placeholder={
                <div className={classes.car_form_placeholder}>Марка авто</div>
              }
              className={classes.car_form_action_select}
              theme={(theme) => ({
                ...theme,
                borderRadius: 10,
              })}
              styles={colorStyles}
              options={makeList}
              onFocus={clearValue}
              onChange={(e) => {
                setBrand(e.label);
                setSelectedBrand(e.label);
              }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />

            <Select
              ref={selectRef}
              placeholder={
                <div className={classes.car_form_placeholder}>Модель авто</div>
              }
              className={classes.car_form_action_select}
              theme={(theme) => ({
                ...theme,
                borderRadius: 10,
              })}
              styles={colorStyles}
              options={modelList}
              onChange={(e) => {
                if (e) setSelectedModel(e.label);
              }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />

            <Select
              placeholder={
                <div className={classes.car_form_placeholder}>
                  Модельний рік
                </div>
              }
              isSearchable={false}
              theme={(theme) => ({
                ...theme,
                borderRadius: 10,
              })}
              styles={colorStyles}
              className={classes.car_form_action_select}
              options={carYears}
              onChange={(e) => {
                setSelectedYear(e.label);
              }}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
            <Button
              className={classes.car_form_action_button}
              onClick={showCarPrice}
            >
              РОЗРАХУВАТИ
            </Button>
          </Box>
        </Box>
      )}
      {formSwitcher === 1 && (
        <Box className={classes.car_form_body}>
          <Typography className={classes.car_form_title}>
            Онлайн розрахунок попередньої вартості авто
          </Typography>
          <form
            className={classes.car_form_action}
            onSubmit={handleSubmit(sellCar)}
          >
            <div className={classes.car_form_send}>
              <input
                {...register('userName', {
                  required: "Введіть своє ім'я",
                })}
                className={classes.car_form_send_input}
                placeholder="Ім'я"
                style={{ backgroundColor: errors.userName && '#ffc38c' }}
                type="text"
              />
              <input
                {...register('userTelephone', {
                  required: 'Введіть свій номер телефону',
                  maxLength: {
                    value: 13,
                    message: 'Не вірний формат телефону',
                  },
                })}
                onKeyPress={(event) => {
                  if (!/[0-9+]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={classes.car_form_send_input}
                placeholder="Номер телефону"
                style={{ backgroundColor: errors.userTelephone && '#ffc38c' }}
                type="text"
              />
            </div>
            {(errors.userName && (
              <p className={classes.car_form_errors}>
                {errors.userName.message}
              </p>
            )) ||
              (errors.userTelephone && (
                <p className={classes.car_form_errors}>
                  {errors.userTelephone.message}
                </p>
              ))}

            <Button className={classes.car_form_send_button} type="submit">
              ПРОДАТИ АВТО
            </Button>
          </form>
        </Box>
      )}
      {formSwitcher === 2 && (
        <Box className={classes.car_form_body}>
          <div
            className={`${classes.car_form_action} ${classes.car_form_modal}`}
          >
            <Typography className={classes.car_form_title}>
              Ваша заявка прийнята до розгляду, після її опрацювання наші
              фахівці зв&#39;яжуться з вами. Як правило, це відбувається дуже
              швидко
            </Typography>
            <Button
              className={classes.car_form_action_button}
              onClick={() => resetInfo()}
            >
              ДОБРЕ
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
};
