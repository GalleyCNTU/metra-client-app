import classes from './AboutUs.module.scss';

export const AboutUs = () => {
    return (
        <div className={classes.about_us}>
            <div className={`${classes.about_us_bar_chart} ${classes.about_us_block}`}>
                <svg fill="orange" className={classes.about_us_image} xmlns="http://www.w3.org/2000/svg" ><path d="M6.5 33.542v-18.75h6.458v18.75Zm10.292 0V6.458h6.416v27.084Zm10.25 0V21.458H33.5v12.084Z" className='about_us_image' /></svg>
                <span className={classes.about_us_title}>
                    Безкоштовна оцінка автомобіля
                </span>
                <span className={classes.about_us_subtitle}>
                    Наш оцінник приїде у зручне для вас місце та час для абсолютно безкоштовної оцінки вашого авто
                </span>
            </div>

            <div className={`${classes.about_us_payments} ${classes.about_us_block}`}>
                <svg fill='orange' className={classes.about_us_image} xmlns="http://www.w3.org/2000/svg"><path d="M22.917 21.958q-2.084 0-3.542-1.458-1.458-1.458-1.458-3.542 0-2.083 1.458-3.541 1.458-1.459 3.542-1.459 2.083 0 3.541 1.459 1.459 1.458 1.459 3.541 0 2.084-1.459 3.542-1.458 1.458-3.541 1.458Zm-12.542 5.834q-1.292 0-2.229-.938-.938-.937-.938-2.229V9.333q0-1.333.938-2.25.937-.916 2.229-.916h25.042q1.333 0 2.25.916.916.917.916 2.25v15.292q0 1.292-.916 2.229-.917.938-2.25.938Zm3.75-3.042h17.542q0-1.625 1.125-2.75t2.75-1.125v-7.792q-1.625 0-2.75-1.145-1.125-1.146-1.125-2.73H14.125q0 1.584-1.125 2.73-1.125 1.145-2.75 1.145v7.792q1.625 0 2.75 1.125t1.125 2.75Zm19.208 8.833H4.583q-1.333 0-2.25-.916-.916-.917-.916-2.25v-18.75h3.166v18.75h28.75ZM10.25 24.75V9.208 24.75Z" /></svg>
                <span className={classes.about_us_title}>
                    Пропонуємо найкращу ціну
                </span>
                <span className={classes.about_us_subtitle}>
                    Ми постійно перевіряємо ціни конкурентів i пропонуємо найкращу пропозицію
                </span>
            </div>

            <div className={`${classes.about_us_approval_delegation} ${classes.about_us_block}`}>
                <svg className={classes.about_us_image} fill='orange' xmlns="http://www.w3.org/2000/svg" ><path d="m21.542 17.75-7.167-7.208 2.25-2.209 4.917 4.959 9.666-9.625 2.209 2.166Zm1.875 20.083-12.375-3.541v2.333H1.333V19.083h13.292l10.583 3.959q1.292.458 2.125 1.562.834 1.104.834 2.854h4.041q1.959 0 3.292 1.271 1.333 1.271 1.333 3.479v1.5ZM4.375 33.625h3.583v-11.5H4.375Zm18.917 1.042 10.416-3.209q-.208-.666-.604-.937t-.896-.271h-8.416q-1.25 0-2.334-.167-1.083-.166-2.083-.5l-3.208-1.041.916-2.667 3.084 1.042q1 .291 1.958.416t2.917.125q0-.458-.23-.916-.229-.459-.645-.667l-10.042-3.75h-3.083v9ZM7.958 27.875Zm17.084-.417Zm-17.084.417Zm3.084 0Z" /></svg>
                <span className={classes.about_us_title}>
                    Допомога при оформленні
                </span>
                <span className={classes.about_us_subtitle}>
                    При оформленні угоди ви можете розраховувати на консультацію нашого фахівця з продажу
                </span>
            </div>

            <div className={`${classes.about_us_schedule} ${classes.about_us_block}`}>
                <svg fill='orange' className={classes.about_us_image} xmlns="http://www.w3.org/2000/svg" ><path d="M25.792 28 28 25.833l-6.417-6.458v-8.042h-3v9.25ZM20 36.958q-3.5 0-6.583-1.333-3.084-1.333-5.396-3.646-2.313-2.312-3.646-5.396Q3.042 23.5 3.042 20t1.333-6.583q1.333-3.084 3.646-5.396 2.312-2.313 5.396-3.646Q16.5 3.042 20 3.042t6.583 1.333q3.084 1.333 5.396 3.646 2.313 2.312 3.646 5.396Q36.958 16.5 36.958 20t-1.333 6.583q-1.333 3.084-3.646 5.396-2.312 2.313-5.396 3.646Q23.5 36.958 20 36.958ZM20 20Zm0 13.792q5.708 0 9.75-4.042T33.792 20q0-5.708-4.042-9.75T20 6.208q-5.708 0-9.75 4.042T6.208 20q0 5.708 4.042 9.75T20 33.792Z" /></svg>
                <span className={classes.about_us_title}>
                    Виплати за авто від 30 хв.
                </span>
                <span className={classes.about_us_subtitle}>
                    Ви отримаєте гроші від 30хв. після документального оформлення угоди i переоформлення авто
                </span>
            </div>
        </div>
    )
}