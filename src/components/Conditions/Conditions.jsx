import './Conditions.scss';
import firstCar from '../../img/3-1.png';
import secondCar from '../../img/3-2.png';
import thirdCar from '../../img/3-3.png';
import fourthCar from '../../img/3-4.png';

const Conditions = () => {
    return (
        <div className='what_cars'>
            <div className='what_cars_background'>
                <span>?</span>
            </div>
            <div className='what_cars_top'>
                <span className='what_cars_top_title'>Які авто <br /> ми купуємо?</span>
            </div>
            <div className='what_cars_bottom'>
                <div className='what_cars_bottom_block'>
                    <img src={thirdCar} alt="firstCar" className='what_cars_bottom_block_image' />
                    <span className='what_cars_bottom_block_title'>
                        Автомобілі у хорошому стані
                    </span>
                    <span className='what_cars_bottom_block_subtitle'>
                        Ми працюємо з великою кількістю автомобілів, в тому числі "свіжих" років і в гарному стані
                    </span>
                </div>

                <div className='what_cars_bottom_block'>
                    <img src={firstCar} alt="secondCar" className='what_cars_bottom_block_image' />
                    <span className='what_cars_bottom_block_title'>
                        Авто після ДТП або не на ходу
                    </span>
                    <span className='what_cars_bottom_block_subtitle'>
                        Викупаємо авто, які втратили свій «товарний вигляд». Ви можете не перейматися стан вашого авто
                    </span>
                </div>

                <div className='what_cars_bottom_block'>
                    <img src={fourthCar} alt="thirdCar" className='what_cars_bottom_block_image' />
                    <span className='what_cars_bottom_block_title'>
                        Авто під арештом, кредитні, заставні
                    </span>
                    <span className='what_cars_bottom_block_subtitle'>
                        Автомобілі у заставі, кредиті, лізингу, з автоломбарду чи в арешті також розглядаємо до автовикупу
                    </span>
                </div>

                <div className='what_cars_bottom_block'>
                    <img src={secondCar} alt="fourthCar" className='what_cars_bottom_block_image' />
                    <span className='what_cars_bottom_block_title'>
                        Авто яким потрібне фарбування
                    </span>
                    <span className='what_cars_bottom_block_subtitle'>
                        Наші фахівці проведуть оцінку та викуп транспорту, незалежно від косметичного стану
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Conditions;