import calcPaperIcon from 'public/img/calcPaper.svg';
import successIcon from 'public/img/success.svg';
import telephoneIcon from 'public/img/telephone.svg';
import moneyIcon from 'public/img/money.svg';

export const PAGES = [
  {
    title: 'АВТОВИКУП',
    icon: moneyIcon,
    link: '/main',
  },
  {
    title: 'АВТО В НАЯВНОСТІ',
    icon: successIcon,
    link: '/cars',
  },
  {
    title: 'КОНТАКТИ',
    icon: telephoneIcon,
    link: '#contacts_footer',
  },
  {
    title: 'РОЗРАХУВАТИ ВАРТІСТЬ',
    icon: calcPaperIcon,
    link: '/main#car_form',
  },
];

export const location = {
  address: 'Metra Avto',
  lat: 51.531086616759474,
  lng: 31.31382291304589,
};
