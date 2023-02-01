// React Hooks
import { useState, useEffect, useMemo, useRef } from "react";

// React libs
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from "react-select";

// Style file
import classes from "./CarForm.module.scss";

// Utils
import { carDataMapping } from 'utils';

export const CarForm = () => {

    const [brand, setBrand] = useState();
    const [modelList, setModelList] = useState();
    const [makeList, setMakeList] = useState();
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [formSwitcher, setFormSwitcher] = useState(0);
    const [userInfo, setUserInfo] = useState({});

    const selectRef = useRef();

    const notify = (text) => toast.error(text, {
        position: "top_right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm({ mode: "onSubmit" });

    const showCarPrice = () => {
        if (!selectedBrand) {
            notify('Виберіть марку автомобіля');
        } else if (!selectedModel) {
            notify('Виберіть модель авто');
        } else if (!selectedYear) {
            notify('Виберіть модельний рік');
        } else setFormSwitcher(1);
    }

    const getMakeList = () => {
        fetch("https://metra-avto.herokuapp.com/makeList")
            .then(response => response.json())
            .then(data => {
                setMakeList(carDataMapping(data));
            })
    }

    const getModelList = () => {
        fetch(`https://metra-avto.herokuapp.com/models/${brand}`)
            .then(response => response.json())
            .then(data => setModelList(carDataMapping(data)))
    }

    const sendUserInfo = () => {
        if (brand && selectedBrand && selectedModel && selectedYear) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo)
            };
            fetch('https://metra-avto.herokuapp.com/send-message', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data.message));
        }
    }

    const resetInfo = () => {
        setBrand('');
        setModelList([]);
        setSelectedBrand('');
        setSelectedModel('');
        setSelectedYear('');
        setFormSwitcher(0);
        setUserInfo({});
    }

    const sellCar = ({ userName, userTelephone }) => {
        setUserInfo({
            "userName": userName,
            "userTelephone": userTelephone,
            "carBrand": selectedBrand,
            "carModel": selectedModel,
            "carYear": selectedYear
        })
        reset();
        setFormSwitcher(2)
    }

    useEffect(() => sendUserInfo(), [userInfo]);

    useEffect(() => getMakeList(), []);

    useEffect(() => {
        if (brand) getModelList()
    }, [brand]);

    const carYears = useMemo(() => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i >= 1900; i--) {
            years.push(i.toString());
        }
        return carDataMapping(years);
    }, [])

    const colorStyles = {
        control: styles => ({ ...styles, backgroundColor: 'white', height: 50 })
    }

    const clearValue = () => {
        if (selectRef.current) {
            selectRef.current.clearValue();
            setModelList([]);
            setSelectedModel('');
        }
    };

    return (
        <div >
            {formSwitcher === 0 && (
                <div className={classes.car_form}>
                    <span className={classes.car_form_title}>Онлайн розрахунок попередньої вартості вашого авто</span>
                    <div className={classes.car_form_action}>
                        <Select
                            placeholder={<div className={classes.car_form_placeholder}>Марка авто</div>}
                            className={classes.car_form_action_select}
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
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />

                        <Select
                            ref={selectRef}
                            placeholder={<div className={classes.car_form_placeholder}>Модель авто</div>}
                            className={classes.car_form_action_select}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                            })}
                            styles={colorStyles}
                            options={modelList}
                            onChange={(e) => {
                                if (e) setSelectedModel(e.label);
                            }}
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                        />


                        <Select
                            placeholder={<div className={classes.car_form_placeholder}>Модельний рік</div>}
                            isSearchable={false}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 0,
                            })}
                            styles={colorStyles}
                            className={classes.car_form_action_select}
                            options={carYears}
                            onChange={(e) => { setSelectedYear(e.label); }}
                            components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
                        <button className={classes.car_form_action_button} onClick={showCarPrice} >ДАЛІ</button>
                    </div>
                </div>
            )}
            {formSwitcher === 1 && (
                <div className={classes.car_form}>
                    <span className={classes.car_form_title}>Онлайн розрахунок попередньої вартості вашого авто</span>
                    <form className={classes.car_form_action} onSubmit={handleSubmit(sellCar)}>
                        <div className={classes.car_form_send}>
                            <input {...register('userName', {
                                required: "Введіть своє ім'я",
                            })}
                                className={classes.car_form_send_input}
                                placeholder="Ім'я"
                                style={{ backgroundColor: errors.userName && "#ffc38c" }}
                                type="text" />
                            <input {...register('userTelephone', {
                                required: "Введіть свій номер телефону",
                                maxLength: {
                                    value: 13,
                                    message: 'Не вірний формат телефону'
                                },
                            })}
                            onKeyPress={(event) => {
                                if (!/[0-9+]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                                className={classes.car_form_send_input}
                                placeholder="Номер телефону"
                                style={{ backgroundColor: errors.userTelephone && "#ffc38c" }}
                                type="text" />
                        </div>
                        {errors.userName && <p className={classes.car_form_errors}>{errors.userName.message}</p>
                            || errors.userTelephone && <p className={classes.car_form_errors}>{errors.userTelephone.message}</p>}

                        <button
                            className={classes.car_form_action_button}
                            type="submit"
                        >ПРОДАТИ АВТО</button>
                    </form>
                </div>
            )}
            {formSwitcher === 2 && (
                <div className={classes.car_form}>
                    <div className={`${classes.car_form_action} ${classes.car_form_modal}`}>
                        <span className={classes.car_form_title}>Ваша заявка прийнята до розгляду, після її опрацювання наші фахівці зв'яжуться з вами. Як правило, це відбувається дуже швидко</span>
                        <button
                            className={classes.car_form_action_button}
                            onClick={() => resetInfo()}>ДОБРЕ</button>
                    </div>
                </div>
            )}
        </div>
    )
}