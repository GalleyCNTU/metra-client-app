import classes from './CheckPrice.module.scss';
import { useState, useEffect, useMemo, useRef } from 'react';

import { carDataMapping } from 'utils';

import Select from 'react-select';
import { toast } from 'react-toastify';
import { formatMakes, getModels } from '@/utils/formatData';

export const CheckPrice = ({ makes }) => {
  const [brand, setBrand] = useState();
  const [modelList, setModelList] = useState();
  const [makeList, setMakeList] = useState(carDataMapping(formatMakes(makes)));
  const [formSwitcher, setFormSwitcher] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [userName, setUserName] = useState('');
  const [userTelephone, setUserTelephone] = useState('');
  const [onCredit, setOnCredit] = useState(false);
  const [notCleared, setNotCleared] = useState(false);
  const [wasPainted, setWasPainted] = useState(false);
  const [notRunning, setNotRunning] = useState(false);
  const [afterAccident, setAfterAccident] = useState(false);

  const selectRef = useRef();

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

  const showCarPrice = () => {
    if (!selectedBrand) {
      notify('Виберіть марку автомобіля');
    } else if (!selectedModel) {
      notify('Виберіть модель авто');
    } else if (!selectedYear) {
      notify('Виберіть модельний рік');
    } else if (!userName) {
      notify("Введіть своє ім'я");
    } else if (!userTelephone) {
      notify('Введіть свій номер телефону');
    } else if (userTelephone.length > 13) {
      notify('Не вірний формат телефону');
    } else {
      sellCar();
      setFormSwitcher(1);
    }
  };

  const sellCar = () => {
    setUserInfo({
      userName: userName,
      userTelephone: userTelephone,
      carBrand: selectedBrand,
      carModel: selectedModel,
      carYear: selectedYear,
      carProperties: {
        onCredit: onCredit,
        notCleared: notCleared,
        wasPainted: wasPainted,
        notRunning: notRunning,
        afterAccident: afterAccident,
      },
    });
  };

  const getModelList = () => {
    setModelList(carDataMapping(getModels(makes, brand)));
  };

  const sendUserInfo = () => {
    if (brand && selectedBrand && selectedModel && selectedYear) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      };
      fetch('https://metra-avto.herokuapp.com/send-message', requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data.message));
    }
  };

  useEffect(() => sendUserInfo(), [userInfo]);

  useEffect(() => {
    if (brand) getModelList();
  }, [brand]);

  const carYears = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i.toString());
    }
    return carDataMapping(years);
  }, []);

  const resetInfo = () => {
    setBrand('');
    setModelList([]);
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedYear('');
    setUserName('');
    setUserTelephone('');
    setFormSwitcher(0);
    setUserInfo({});
    setOnCredit(false);
    setNotCleared(false);
    setWasPainted(false);
    setNotRunning(false);
    setAfterAccident(false);
  };

  const clearValue = () => {
    if (selectRef.current) {
      selectRef.current.clearValue();
      setModelList([]);
      setSelectedModel('');
    }
  };

  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white', height: 50 }),
    valueContainer: (provided) => ({
      ...provided,
      margin: '0px',
      padding: '0px',
    }),
    input: (provided) => ({
      ...provided,
      margin: 'auto',
      padding: '0px',
      textAlign: 'center',
    }),
  };

  return (
    <div className={classes.check_price} id="price">
      <div className={classes.check_price_header}>
        <span className={classes.check_price_header_title}>
          Дізнайся попередню
          <br />
          вартість свого авто
        </span>
      </div>
      {formSwitcher === 0 && (
        <div className={classes.check_price_form}>
          <div className={classes.check_price_form_box}>
            <div className={classes.check_price_form_inputs}>
              <Select
                placeholder={
                  <div className={classes.check_price_form_placeholder}>
                    Марка авто
                  </div>
                }
                className={classes.check_price_form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
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
                  <div className={classes.check_price_form_placeholder}>
                    Модель авто
                  </div>
                }
                className={classes.check_price_form_select}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
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
                  <div className={classes.check_price_form_placeholder}>
                    Модельний рік
                  </div>
                }
                isSearchable={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                })}
                styles={colorStyles}
                className={classes.check_price_form_select}
                options={carYears}
                onChange={(e) => {
                  setSelectedYear(e.label);
                }}
                components={{
                  DropdownIndicator: () => null,
                  IndicatorSeparator: () => null,
                }}
              />

              <input
                type="text"
                placeholder="Ім'я"
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
              />
              <input
                type="text"
                placeholder="Номер телефону"
                onChange={(event) => setUserTelephone(event.target.value)}
                value={userTelephone}
                onKeyPress={(event) => {
                  if (!/[0-9+]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </div>
            <div className={classes.check_price_form_checkboxes}>
              <div className={classes.item_form_checkbox}>
                <input
                  type="checkbox"
                  id="onCredit"
                  onChange={() => {
                    setOnCredit(!onCredit);
                  }}
                />
                <label htmlFor="onCredit">
                  Автомобіль у кредиті чи заставі?
                </label>
              </div>
              <div className={classes.item_form_checkbox}>
                <input
                  type="checkbox"
                  id="notCleared"
                  onChange={() => {
                    setNotCleared(!notCleared);
                  }}
                />
                <label htmlFor="notCleared">Автомобіль не розмитнений?</label>
              </div>
              <div className={classes.item_form_checkbox}>
                <input
                  type="checkbox"
                  id="wasPainted"
                  onChange={() => {
                    setWasPainted(!wasPainted);
                  }}
                />
                <label htmlFor="wasPainted">Автомобіль фарбувався?</label>
              </div>
              <div className={classes.item_form_checkbox}>
                <input
                  type="checkbox"
                  id="notRunning"
                  onChange={() => {
                    setNotRunning(!notRunning);
                  }}
                />
                <label htmlFor="notRunning">Автомобіль не на ходу?</label>
              </div>
              <div className={classes.item_form_checkbox}>
                <input
                  type="checkbox"
                  id="afterAccident"
                  onChange={() => {
                    setAfterAccident(!afterAccident);
                  }}
                />
                <label htmlFor="afterAccident">Авто після ДТП?</label>
              </div>
            </div>
          </div>
          <button onClick={showCarPrice}>Дізнатися вартість</button>
        </div>
      )}
      {formSwitcher === 1 && (
        <div className={classes.check_price_form}>
          <div className={classes.check_price_form_box}>
            <div className={classes.check_price_form_modal}>
              <span>
                Ваша заявка прийнята до розгляду,<br></br>
                після її опрацювання наші фахівці зв'яжуться з вами.
                <br></br>Як правило, це відбувається дуже швидко
              </span>
            </div>
          </div>
          <button onClick={resetInfo}>ДОБРЕ</button>
        </div>
      )}
    </div>
  );
};
