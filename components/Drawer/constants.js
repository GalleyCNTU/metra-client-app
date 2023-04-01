import calcPaperIcon from 'public/img/calcPaper.svg';
import successIcon from 'public/img/success.svg';
import telephoneIcon from 'public/img/telephone.svg';
import moneyIcon from 'public/img/money.svg';

export const PAGES = [
    {
        title: "АВТОВИКУП",
        icon: moneyIcon,
        link: "/"
    },
    {
        title: "АВТО В НАЯВНОСТІ",
        icon: successIcon,
        link: "/cars"
    },
    {
        title: "КОНТАКТИ",
        icon: telephoneIcon,
        link: "#contacts"
    },
    {
        title: "РОЗРАХУВАТИ ВАРТІСТЬ",
        icon: calcPaperIcon,
        link: "/"
    }
]