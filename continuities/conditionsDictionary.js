import firstCar from 'public/img/3-1.png';
import secondCar from 'public/img/3-2.png';
import thirdCar from 'public/img/3-3.png';
import fourthCar from 'public/img/3-4.png';

import checkMark from 'public/img/checkMark.svg';
import engine from 'public/img/engine.svg';
import handcuffs from 'public/img/handcuffs.svg';
import paint from 'public/img/paint.svg';

export const conditionsItems = [
  {
    icon: checkMark,
    img: firstCar,
    title: 'Автомобілі у хорошому стані',
    subtitle:
      'Ми працюємо з великою кількістю автомобілів, в тому числі “свіжих” років і в гарному стані',
  },
  {
    icon: engine,
    img: secondCar,
    title: 'Авто після ДТП або не на ходу',
    subtitle:
      'Викуповуємо авто, які втратили свій “товарний вигляд”. Ви можете не перейматися про стан Вашого авта',
  },
  {
    icon: handcuffs,
    img: thirdCar,
    title: 'Авто під арештом, кредитні та заставні',
    subtitle:
      'Автомобілі у заставі, кредиті, лізингу, з автоломбарду чи в арешті також розглядаємо до автовикупу',
  },
  {
    icon: paint,
    img: fourthCar,
    title: 'Авто яким потрібне фарбування',
    subtitle:
      'Наші фахівці проведуть оцінку та викуп транспорту не залежно від стану фарбування',
  },
];
