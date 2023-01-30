import './CarBuying.scss';
import CarForm from "../CarForm/CarForm"

const CarBuying = () => {
    return (
        <div className='car_buying'>
            <div className='car_buying_upper'>
                <div className='car_buying_upper_title'>
                    <span className='car_buying_upper_title_text'>ТЕРМІНОВИЙ ВИКУП АВТО</span>
                </div>
                <div className='car_buying_upper_form'>
                    <CarForm />
                </div>
            </div>
            <div className='car_buying_lower'>
                <div className='car_buying_lower_info'>
                    <span style={{marginTop: 20}}>БУДЬ-ЯКИЙ<br />СТАН ТА ПРОБІГ</span>
                    <span>РІЗНИХ РОКІВ<br />ТА БУДЬ-ЯКИХ МАРОК</span>
                    <span>ЕКОНОМІЯ<br />ЧАСУ ПІД ЧАС ПРОДАЖУ</span>
                    <span>ОФІЦІЙНЕ<br />ОФОРМЛЕННЯ УГОДИ</span>
                </div>
            </div>
        </div>
    )
}

export default CarBuying;