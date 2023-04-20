//upper block svg
import speed from 'public/img/speed.svg';
import smileFace from 'public/img/smileFace.svg';
import time from 'public/img/time.svg';
import transmission from 'public/img/transmission.svg';

//bottom block svg
import payments from 'public/img/payments.svg';
import schedule from 'public/img/schedule.svg';
import bar_chart from 'public/img/bar_chart.svg';
import approval_delegation from 'public/img/approval_delegation.svg';

export const TITLE = {
  beginning: 'METRA AVTO',
  end: ' - ЦЕ',
};

export const UPPER_ITEMS = [
  {
    svg: speed,
    title: 'Доступно',
    subtitle: 'БУДЬ-ЯКИЙ СТАН ТА ПРОБІГ',
  },
  {
    svg: transmission,
    title: 'Просто',
    subtitle: 'РІЗНИХ РОКІВ ТА БУДЬ-ЯКИХ МАРОК',
  },
  {
    svg: time,
    title: 'Швидко',
    subtitle: 'ЕКОНОМІЯ ЧАСУ У ХОДІ ПРОДАЖУ',
  },
  {
    svg: smileFace,
    title: 'Швидко',
    subtitle: 'ЕКОНОМІЯ ЧАСУ У ХОДІ ПРОДАЖУ',
  },
];

export const BOTTOM_ITEMS = [
  {
    svg: bar_chart,
    title: 'Безкоштовна оцінка автомобіля',
    subtitle:
      'Наш оцінник приїде у зручне для вас місце та час для абсолютно безкоштовної оцінки вашого авто',
  },
  {
    svg: payments,
    title: 'Пропонуємо найкращу ціну',
    subtitle:
      'Ми постійно перевіряємо ціни конкурентів i пропонуємо найкращу пропозицію',
  },
  {
    svg: approval_delegation,
    title: 'Допомога при оформленні',
    subtitle:
      'При оформленні угоди ви можете розраховувати на консультацію нашого фахівця з продажу',
  },
  {
    svg: schedule,
    title: 'Виплати за авто від 30 хв.',
    subtitle:
      'Ви отримаєте гроші від 30хв. після документального оформлення угоди i переоформлення авто',
  },
];
