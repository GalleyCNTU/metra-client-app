import PurchasedCarBox from './PurchasedCarBox/PurchasedCarBox';
import classes from "./PurchasedCars.module.scss";


import { getRandomKey } from '../utils/getRandomKey';

import img1 from "../../public/img/purchased_cars/1-1.jpg";
import img2 from "../../public/img/purchased_cars/1-2.jpg";
import img3 from "../../public/img/purchased_cars/1-3.jpg";
import img4 from "../../public/img/purchased_cars/1-4.jpg";
import img5 from "../../public/img/purchased_cars/2-1.jpg";
import img6 from "../../public/img/purchased_cars/2-2.jpg";
import img7 from "../../public/img/purchased_cars/2-3.jpg";
import img8 from "../../public/img/purchased_cars/2-4.jpg";
import img9 from "../../public/img/purchased_cars/3-1.jpg";
import img10 from "../../public/img/purchased_cars/3-2.jpg";
import img11 from "../../public/img/purchased_cars/3-3.jpg";
import img12 from "../../public/img/purchased_cars/3-4.jpg";
import img13 from "../../public/img/purchased_cars/4-1.jpg";
import img14 from "../../public/img/purchased_cars/4-2.jpg";
import img15 from "../../public/img/purchased_cars/4-3.jpg";
import img16 from "../../public/img/purchased_cars/4-4.jpg";
import img17 from "../../public/img/purchased_cars/5-1.jpg";
import img18 from "../../public/img/purchased_cars/5-2.jpg";
import img19 from "../../public/img/purchased_cars/5-3.jpg";
import img20 from "../../public/img/purchased_cars/5-4.jpg";
import img21 from "../../public/img/purchased_cars/6-1.jpg";
import img22 from "../../public/img/purchased_cars/6-2.jpg";
import img23 from "../../public/img/purchased_cars/6-3.jpg";
import img24 from "../../public/img/purchased_cars/6-4.jpg";

import img25 from "../../public/img/purchased_cars/7-1.jpg";
import img26 from "../../public/img/purchased_cars/7-2.jpg";
import img27 from "../../public/img/purchased_cars/7-3.jpg";
import img28 from "../../public/img/purchased_cars/7-4.jpg";
import img29 from "../../public/img/purchased_cars/7-5.jpg";

import img30 from "../../public/img/purchased_cars/8-1.jpg";
import img31 from "../../public/img/purchased_cars/8-2.jpg";
import img32 from "../../public/img/purchased_cars/8-3.jpg";
import img33 from "../../public/img/purchased_cars/8-4.jpg";

import img34 from "../../public/img/purchased_cars/9-1.jpg";
import img35 from "../../public/img/purchased_cars/9-3.jpg";

import img36 from "../../public/img/purchased_cars/10-1.jpg";
import img40 from "../../public/img/purchased_cars/10-5.jpg";

import img41 from "../../public/img/purchased_cars/11-1.jpg";

import img42 from "../../public/img/purchased_cars/12-1.jpg";
import img43 from "../../public/img/purchased_cars/12-2.jpg";
import img44 from "../../public/img/purchased_cars/12-3.jpg";

import img45 from "../../public/img/purchased_cars/13-1.jpg";
import img46 from "../../public/img/purchased_cars/13-2.jpg";
import img47 from "../../public/img/purchased_cars/13-3.jpg";

import img48 from "../../public/img/purchased_cars/14-1.jpg";
import img49 from "../../public/img/purchased_cars/14-2.jpg";
import img50 from "../../public/img/purchased_cars/14-3.jpg";

import img51 from "../../public/img/purchased_cars/15-1.jpg";
import img52 from "../../public/img/purchased_cars/15-2.jpg";

import img53 from "../../public/img/purchased_cars/16-1.jpg";
import img54 from "../../public/img/purchased_cars/16-2.jpg";
import img55 from "../../public/img/purchased_cars/16-3.jpg";
import img56 from "../../public/img/purchased_cars/16-4.jpg";

const PurchasedCars = () => {

    const items = [
        {
            title: "Renault Megane",
            desc: "2013 р., 213000 тис., Дизель, 1,5 л., Механіка, 6 ступінчата коробка, Передній",
            usd: "$7 700",
            uah: "₴323 400",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img13, placeholder: "firstImage" },
                { img: img14, placeholder: "secondImage" },
                { img: img15, placeholder: "thirdImage" },
                { img: img16, placeholder: "fourthImage" },
            ]

        },
        {
            title: "Renault Kangoo",
            desc: "2012 р., 250000 тис., Механіка, 5 ступінчата коробка, Передній",
            usd: "$7 600",
            uah: "₴319 200",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img17, placeholder: "firstImage" },
                { img: img18, placeholder: "secondImage" },
                { img: img19, placeholder: "thirdImage" },
                { img: img20, placeholder: "fourthImage" },
            ]
        },
        {
            title: "Renault Megane",
            desc: "2014 р., 116000 тис., Дизель, 1,5 л.,  Механіка, 6 ступінчата коробка, Передній",
            usd: "$8 000",
            uah: "₴336 000",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img5, placeholder: "firstImage" },
                { img: img6, placeholder: "secondImage" },
                { img: img7, placeholder: "thirdImage" },
                { img: img8, placeholder: "fourthImage" },
            ]
        },
        {
            title: "Nissan Qashqai",
            desc: "2007 р., 225000 тис., Автомат, Повний, Панорама",
            usd: "$9 800",
            uah: "₴411 600",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img9, placeholder: "firstImage" },
                { img: img10, placeholder: "secondImage" },
                { img: img11, placeholder: "thirdImage" },
                { img: img12, placeholder: "fourthImage" },
            ]
        },
        {
            title: "Ford Grand C-MAX",
            desc: "2012 р., Механіка, 6 ступінчата коробка, Передній, Кондиціонер, Клімат Контроль, Ідеальний стан",
            usd: "$7 900",
            uah: "₴331 800",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img1, placeholder: "firstImage" },
                { img: img2, placeholder: "secondImage" },
                { img: img3, placeholder: "thirdImage" },
                { img: img4, placeholder: "fourthImage" },
            ]
        },
        {
            title: "Nissan Qashqai",
            desc: "2008 р., 307000 тис., Механіка, 6 ступінчата коробка, Передній, 1.6 Дизель",
            usd: "$7 700",
            uah: "₴323 400",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img21, placeholder: "firstImage" },
                { img: img22, placeholder: "secondImage" },
                { img: img23, placeholder: "thirdImage" },
                { img: img24, placeholder: "fourthImage" },
            ]
        },
        {
            title: "BMW 318i",
            desc: "2003 р., 232000 тис., Механіка 5кпп, Чудовий стан, 1.8 Бензин",
            usd: "$5 200",
            uah: "₴210 600",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img25, placeholder: "firstImage" },
                { img: img26, placeholder: "secondImage" },
                { img: img27, placeholder: "thirdImage" },
                { img: img28, placeholder: "fourthImage" },
                { img: img29, placeholder: "fifthImage" },
            ]
        },
        {
            title: "Volkswagen Polo",
            desc: "2006 р., 173000 тис., Ел. підйомники, Кондиціонер, Музика, 1.4 Дизель",
            usd: "$5 200",
            uah: "₴210 600",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img30, placeholder: "firstImage" },
                { img: img31, placeholder: "secondImage" },
                { img: img32, placeholder: "thirdImage" },
                { img: img33, placeholder: "fourthImage" },
            ]
        },
        {
            title: "Nissan Micra",
            desc: "2008 р., 132000 тис., автомат, кондиціонер, підігрів сидінь, ідеальний стан, 1.4 бензин",
            usd: "$6 200",
            uah: "₴251 100",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img34, placeholder: "firstImage" },
                { img: img35, placeholder: "secondImage" },
            ]
        },
        {
            title: "Volkswagen Passat B6",
            desc: "2008 р., 267000 тис., механічна 6ст, клімат контроль, підігрів сидінь, 2.0 дизель",
            usd: "$6 800",
            uah: "₴275 400",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img36, placeholder: "firstImage" },
                { img: img40, placeholder: "secondImage" },
            ]
        },
        {
            title: "INFINITI G35X",
            desc: "2008 р., 212000 тис., максимальна комплектація",
            usd: "$10 000",
            uah: "₴405 000",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img41, placeholder: "firstImage" },
            ]
        },
        {
            title: "ACURA TSX",
            desc: "2008 р., повний привід, максимальна комплектація, 2.4 газ/бензин",
            usd: "$11 000",
            uah: "₴445 500",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img42, placeholder: "firstImage" },
                { img: img43, placeholder: "firstImage" },
                { img: img44, placeholder: "firstImage" },
            ]
        },
        {
            title: "AUDI A4",
            desc: "2009 р., автомат, кожа, 2.0TFSI GAZ",
            usd: "$8 500",
            uah: "₴344 250",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img45, placeholder: "firstImage" },
                { img: img46, placeholder: "firstImage" },
                { img: img47, placeholder: "firstImage" },
            ]
        },
        {
            title: "CHEVROLET LACETTI",
            desc: "2008 р., механіка 5ст, 1.8 бензин",
            usd: "$5 300",
            uah: "₴214 650",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img48, placeholder: "firstImage" },
                { img: img49, placeholder: "firstImage" },
                { img: img50, placeholder: "firstImage" },
            ]
        },
        {
            title: "Hyundai Accent",
            desc: "2008 р., механіка 5ст, кондиціонер, підігрів сидінь, електро підйомники, сигналізація, зимова гума, 1.4 бензин",
            usd: "$5 200",
            uah: "₴210 600",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img51, placeholder: "firstImage" },
                { img: img52, placeholder: "firstImage" },
            ]
        },
        {
            title: "Volkswagen Bora",
            desc: "2005 р., 245 тис., 1.6 газ/бензин, електро пакет, клімат контроль, підігрів сидінь, магнитола",
            usd: "$4 900",
            uah: "₴198 450",
            key: getRandomKey(Math.random() * 100),
            images: [
                { img: img53, placeholder: "firstImage" },
                { img: img54, placeholder: "firstImage" },
                { img: img55, placeholder: "firstImage" },
                { img: img56, placeholder: "firstImage" },
            ]
        },
    ];

    return (
        <div className={classes.purchased_cars}>
            <div className={classes.purchased_cars_top}>
                <span className={classes.purchased_cars_top_title}>
                    Останні викуплені автомобілі
                </span>
            </div>

            <div className={classes.purchased_cars_bottom}>
                <div className={classes.purchased_cars_bottom_list}>
                    {
                        items.map((item, i) => {
                            return (
                                <PurchasedCarBox
                                    items={item.images}
                                    purchasedCarTitle={item.title}
                                    purchasedCarSubtitle={item.desc}
                                    purchasedCarPriceUSD={item.usd}
                                    purchasedCarPriceUAH={item.uah}
                                    key={getRandomKey(item[i])}
                                />
                            )
                        })
                    }
                </div>
                <div className={classes.purchased_cars_bottom_button}>
                    <a href="#price"><button>ДІЗНАТИСЯ ВАРТІСТЬ</button></a>
                </div>

            </div>
        </div>
    )
}

export default PurchasedCars;            