import { bot } from 'data/telegram';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const user = JSON.parse(req.body);

      bot.sendMessage(
        process.env.TELEGRAM_ADMIN_ID,
        getMessageTemplate(user, user?.carProperties)
      );
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(200).json({ message: 'Telegram bot enabled' });
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
}

function getMessageTemplate(props, additionalProps = null) {
  const { userName, userTelephone, carBrand, carModel, carYear } = props;

  return `ДАНІ ІВТОМОБІЛЯ
Марка авто: ${carBrand}
Модель авто: ${carModel}
Модельний рік: ${carYear}

ІНФОРМАЦЯ ПРО ПОКУПЦЯ
Ім'я: ${userName}
Телефон: ${userTelephone}
${setAdditionalProps(additionalProps)}`;
}

function setAdditionalProps(props) {
  const additionalMsg = {
    onCredit: 'У кредиті чи заставі',
    notCleared: 'Не розмитнений',
    wasPainted: 'Фарбований',
    notRunning: 'Не на ходу',
    afterAccident: 'Після ДТП',
  };
  if (props) {
    if (!Object.keys(props).length) return '';
    return Object.keys(props).reduce((previousValue, currentValue) => {
      if (props[currentValue]) {
        return previousValue + `${additionalMsg[currentValue]}\n`;
      } else {
        return previousValue;
      }
    }, '\nДОДАТКОВІ ХАРАКТЕРИСТИКИ:\n');
  } else return '';
}
