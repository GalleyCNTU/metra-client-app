import Image from 'next/image';
import Link from 'next/link';

import classes from './Footer.module.scss';

import telegramIcon from 'public/img/telegramIcon.svg';
import instagramIcon from 'public/img/instagramIcon.svg';
import viberIcon from 'public/img/viberIcon.svg';
import facebookIcon from 'public/img/facebookIcon.svg';

import {
  PHONE_NUMBER_MAIN,
  PHONE_NUMBER_SECONDARY,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  VIBER_URL,
  TELEGRAM_URL,
} from 'continuities';

export const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.footer_body}>
      <div className={classes.footer_container} id="contacts_footer">
        <div className={classes.footer_contacts}>
          <span className={classes.footer_contacts_title}>
            Контакти
          </span>
          <div className={classes.footer_contacts_box}>
            <span
              className={`${classes.item_contact} ${classes.item_contact_title}`}
            >
              Телефон:
            </span>
            <Link href={`tel:${PHONE_NUMBER_MAIN}`}>
              <span className={classes.item_contact}>
                +380 063 124 4667
              </span>
            </Link>
            <Link href={`tel:${PHONE_NUMBER_SECONDARY}`}>
              <span className={classes.item_contact}>
                +380 068 098 0002
              </span>
            </Link>
          </div>
          <div className={classes.footer_messengers}>
            <span className={classes.footer_messengers_title}>
              Ми в соціальних мережах
            </span>
            <div className={classes.footer_messengers_box}>
              <Link href={INSTAGRAM_URL}>
                <Image
                  className={classes.item_messenger}
                  src={instagramIcon}
                  alt=""
                />
              </Link>
              <Link href={TELEGRAM_URL}>
                <Image
                  className={classes.item_messenger}
                  src={telegramIcon}
                  alt=""
                />
              </Link>
              <Link href={VIBER_URL}>
                <Image
                  className={classes.item_messenger}
                  src={viberIcon}
                  alt=""
                />
              </Link>
              <Link href={FACEBOOK_URL}>
                <Image
                  className={classes.item_messenger}
                  src={facebookIcon}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.footer_map}>
          <div className={classes.footer_map_box}>
            <div className={classes.item_map_first}></div>
            <div className={classes.item_map_second}></div>
            <div className={classes.item_map_main}></div>
          </div>
        </div>
      </div>
      <span className={classes.footer_security}>
        © Всі права захищені
      </span>
    </div>
  </footer>
);
