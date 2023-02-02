//NextJS components
import Image from 'next/image';

import classes from './BuyingInfo.module.scss';
import arrow from "public/img/arrow.png"

export const BuyingInfo = () => {
    return (
        <div className={classes.buying_info}>
            <div className={classes.buying_info_background}>
                <div className={classes.buying_info_background_arrow}>
                    <Image src={arrow} alt="" />
                </div>
            </div>
            <div className={classes.buying_info_header}>
                <span className={`${classes.buying_info_header} ${classes.title}`}>
                    ЯК ВІДБУВАЄТЬСЯ
                    <br />
                    ВИКУП АВТО?
                </span>
            </div>
            <div className={classes.buying_info_row}>
                <div className={classes.buying_info_column}>
                    <div className={classes.item_buying_info_number}>
                        <svg width="27" height="56" viewBox="0 0 27 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8072 -3.8147e-06L0.167188 5.28L3.28719 16.24L13.2072 13.52V56H26.0072V-3.8147e-06H14.8072Z" fill="#FF8A00" />
                        </svg>
                    </div>
                    <div className={classes.item_buying_info_title}>
                        <span>Дзвінок <br />або заявка</span>
                    </div>
                    <div className={classes.item_buying_info_text}>
                        <span>Приймаємо повідомлення
                            <br />на Viber, заявки на сайті
                            <br />та телефонні дзвінки</span>
                    </div>
                </div>

                <div className={classes.item_buying_info_arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" width="350" height="100">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 3 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                            <marker id="endarrow" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                        </defs>
                        <line x1="0" y1="50" x2="240" y2="50" stroke="#FF8A00"
                            strokeWidth="9" markerEnd="url(#arrowhead)" />
                    </svg>
                </div>

                <div className={classes.buying_info_column}>
                    <div className={classes.item_buying_info_number}>
                        <svg width="40" height="58" viewBox="0 0 40 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.931875 58H39.0119V45.68H20.2119L29.4919 36.32C34.6119 31.2 38.2119 25.44 38.2119 18.72C38.2119 7.44 29.2519 0.879996 19.2519 0.879996C11.4919 0.879996 3.97188 4.8 0.371875 13.12L11.1719 19.44C12.6919 15.92 15.4919 13.36 19.4119 13.36C23.1719 13.36 25.4119 15.76 25.4119 19.28C25.4119 22.56 23.0119 25.84 19.7319 29.2L0.931875 48.72V58Z" fill="#FF8A00" />
                        </svg>
                    </div>
                    <div className={classes.item_buying_info_title}>
                        <span>Розгляд <br />вашого авто</span>
                    </div>
                    <div className={classes.item_buying_info_text}>
                        <span>Попередньо оцінюємо
                            <br />ваше авто за телефоном
                            <br />або онлайн</span>
                    </div>
                </div>

                <div className={classes.item_buying_info_arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" width="350" height="100">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 3 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                            <marker id="endarrow" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                        </defs>
                        <line x1="0" y1="50" x2="240" y2="50" stroke="#FF8A00"
                            strokeWidth="9" markerEnd="url(#arrowhead)" />
                    </svg>
                </div>

                <div className={classes.buying_info_column}>
                    <div className={classes.item_buying_info_number}>
                        <svg width="41" height="58" viewBox="0 0 41 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.1878 22.72L37.8678 10.4V-3.8147e-06H1.86781V12H22.3478L12.1878 24.88L17.0678 32.16H19.7078C24.9878 32.16 27.3078 34.96 27.3078 38.4C27.3078 41.84 24.9878 44.64 19.7078 44.64C14.8278 44.64 12.4278 42.4 11.1478 38.72L0.107813 45.12C3.54781 53.36 11.2278 57.12 19.7078 57.12C30.5078 57.12 40.1078 50.72 40.1078 38.4C40.1078 30.64 35.0678 25.12 28.1878 22.72Z" fill="#FF8A00" />
                        </svg>
                    </div>
                    <div className={classes.item_buying_info_title}>
                        <span>Оцінка <br />нашим вахівцем</span>
                    </div>
                    <div className={classes.item_buying_info_text}>
                        <span>До вас виїжджає
                            <br />наш оцінник та безкоштовно
                            <br />оцінює авто</span>
                    </div>
                </div>

                <div className={classes.item_buying_info_arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100" width="350" height="100">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 3 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                            <marker id="endarrow" markerWidth="10" markerHeight="7"
                                refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#FF8A00" />
                            </marker>
                        </defs>
                        <line x1="0" y1="50" x2="240" y2="50" stroke="#FF8A00"
                            strokeWidth="9" markerEnd="url(#arrowhead)" />
                    </svg>
                </div>

                <div className={classes.buying_info_column}>
                    <div className={classes.item_buying_info_number}>
                        <svg width="45" height="56" viewBox="0 0 45 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.8969 35.2H39.2969V23.2H26.3369V35.2H14.6569L32.4969 -3.8147e-06H18.7369L0.896875 35.2V47.04H26.3369V56H39.2969V47.04H44.8969V35.2Z" fill="#FF8A00" />
                        </svg>
                    </div>
                    <div className={classes.item_buying_info_title}>
                        <span>Отримання
                            <br />розрахунку</span>
                    </div>
                    <div className={classes.item_buying_info_text}>
                        <span>Після підготовки документів
                            <br />і переоформленя
                            <br />ви отримуєте гроші</span>
                    </div>
                </div>
            </div>
        </div>
    )
}