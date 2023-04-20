import sgMail from '@sendgrid/mail';

import { configureSMPT } from './messageTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (data) => {
  const message = configureSMPT(data);
  await sgMail.send(message);
};
