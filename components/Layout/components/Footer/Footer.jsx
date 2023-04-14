import Image from 'next/image';
import Link from 'next/link';

import classes from './Footer.module.scss';

import { Box, Typography } from '@mui/material';

import telegramIcon from 'public/img/telegramIcon.svg';
import instagramIcon from 'public/img/instagramIcon.svg';
import viberIcon from 'public/img/viberIcon.svg';
import faceboockIcon from 'public/img/faceboockIcon.svg';

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
      <Box className={classes.footer_container} id="contacts_footer">
        <Box className={classes.footer_contacts}>
          <Typography className={classes.footer_contacts_title}>
            Контакти
          </Typography>
          <Box className={classes.footer_contacts_box}>
            <Typography
              className={`${classes.item_contact} ${classes.item_contact_title}`}
            >
              Телефон:
            </Typography>
            <Link href={`tel:${PHONE_NUMBER_MAIN}`}>
              <Typography className={classes.item_contact}>
                +380 063 124 4667
              </Typography>
            </Link>
            <Link href={`tel:${PHONE_NUMBER_SECONDARY}`}>
              <Typography className={classes.item_contact}>
                +380 068 098 0002
              </Typography>
            </Link>
          </Box>
          <Box className={classes.footer_messengers}>
            <Typography className={classes.footer_messengers_title}>
              Ми в соціальних мережах:
            </Typography>
            <Box className={classes.footer_messengers_box}>
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
                  src={faceboockIcon}
                  alt=""
                />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className={classes.footer_map}>
          <Box className={classes.footer_map_box}>
            <Box className={classes.item_map_first}></Box>
            <Box className={classes.item_map_second}></Box>
            <Box className={classes.item_map_main}></Box>
          </Box>
        </Box>
      </Box>
      <Typography className={classes.footer_security}>
        © Всі права захищені
      </Typography>
    </div>
  </footer>
);
