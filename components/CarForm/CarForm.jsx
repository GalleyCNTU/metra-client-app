// React Hooks
import { useState, useEffect, useMemo, useRef } from 'react';

// React libs
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from 'react-select';

// Style file
import classes from './CarForm.module.scss';

// Utils
import { getYearList, formatForSelect } from 'utils';

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
  }),
  option: () => ({
    // ...provided,
    cursor: 'pointer',
    borderRadius: 10,
    padding: 15,
    color: '#999999',
    textAlign: 'start',
    fontWeight: 500,
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 999,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};

export const CarForm = ({ makes, hideMediaQuery, setForm }) => {
  const [brand, setBrand] = useState(null);
  const [modelList, setModelList] = useState([]);
  const [makeList, setMakeList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [formSwitcher, setFormSwitcher] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [userName, setUserName] = useState('');
  const [userTelephone, setUserTelephone] = useState('');

  const selectRef = useRef();

  useEffect(() => sendUserInfo(), [userInfo]);

  useEffect(() => {
    if (makes) setMakeList(formatForSelect(Object.keys(makes)));
  }, []);

  useEffect(() => {
    if (brand) setModelList(formatForSelect(makes[brand]));
  }, [brand]);

  const carYears = useMemo(() => {
    return getYearList(1960);
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

  const showUserInfo = () => {
    if (!userName) {
      notify("Введіть своє ім'я");
    } else if (!userTelephone) {
      notify('Введіть свій номер телефону');
    } else if (userTelephone.length > 13) {
      notify('Не вірний формат телефону');
    } else sellCar();
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
    setUserName('');
    setUserTelephone('');
    setUserInfo({});
  };

  const sellCar = () => {
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

  const clearValue = () => {
    if (selectRef.current) {
      selectRef.current.clearValue();
      setModelList([]);
      setSelectedModel('');
    }
  };

  return (
    <>
      {!setForm && (
        <div
          id="car_form"
          className={
            hideMediaQuery
              ? `${classes.car_form} ${classes.car_form_media}`
              : classes.car_form
          }
        >
          {formSwitcher === 0 && (
            <div className={classes.car_form_body}>
              <span className={classes.car_form_title}>
                Онлайн розрахунок попередньої вартості авто
              </span>
              <div className={classes.car_form_action}>
                <Select
                  placeholder={
                    <div className={classes.car_form_placeholder}>
                      Марка авто
                    </div>
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
                    <div className={classes.car_form_placeholder}>
                      Модель авто
                    </div>
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
                <button
                  className={classes.car_form_action_button}
                  onClick={showCarPrice}
                >
                  Розрахувати
                </button>
              </div>
            </div>
          )}
          {formSwitcher === 1 && (
            <div className={classes.car_form_body}>
              <span className={classes.car_form_title}>
                Онлайн розрахунок попередньої вартості авто
              </span>
              <div className={classes.car_form_action}>
                <div className={classes.car_form_send}>
                  <input
                    className={classes.car_form_send_input}
                    placeholder="Ім'я"
                    type="text"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <input
                    onKeyPress={(event) => {
                      if (!/[0-9+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    className={classes.car_form_send_input}
                    placeholder="Номер телефону"
                    type="text"
                    onChange={(e) => {
                      setUserTelephone(e.target.value);
                    }}
                  />
                </div>
                <button
                  className={classes.car_form_send_button}
                  onClick={showUserInfo}
                >
                  Продати авто
                </button>
              </div>
            </div>
          )}
          {formSwitcher === 2 && (
            <div className={classes.car_form_body}>
              <div
                className={`${classes.car_form_action} ${classes.car_form_modal}`}
              >
                <span className={classes.car_form_end_title}>
                  Ваша заявка прийнята до розгляду, після її опрацювання наші
                  фахівці зв&#39;яжуться з вами. Як правило, це відбувається
                  дуже швидко
                </span>
                <button
                  className={classes.car_form_action_button}
                  onClick={() => resetInfo()}
                >
                  Добре
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
