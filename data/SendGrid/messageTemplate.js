const setAdditionalProps = (props) => {
  const additionalMsg = {
    onCredit: 'У кредиті чи заставі',
    notCleared: 'Не розмитнений',
    wasPainted: 'Фарбований',
    notRunning: 'Не на ходу',
    afterAccident: 'Після ДТП',
  };
  if (props) {
    return Object.keys(props).reduce((previousValue, currentValue) => {
      if (props[currentValue]) {
        return previousValue + `<h3>${additionalMsg[currentValue]}</h3>`;
      } else {
        return previousValue;
      }
    }, '<h3>Додаткові характеристики:</h3>');
  } else return '';
};

const getMessageTemplate = (props, additionalProps = null) => {
  const { userName, userTelephone, carBrand, carModel, carYear } = props;

  return `    
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: rgb(33, 33, 33);">
          <div
              style="display: block; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 3px 0px 3px gray; margin: 5px;">
              <h2>Дані автомобіля</h2>
              <h3>Марка авто: ${carBrand}</h3>
              <h3>Модель авто: ${carModel}</h3>
              <h3>Модельний рік: ${carYear}</h3>
              ${setAdditionalProps(additionalProps)}
          </div>
          <div
              style="display: block; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; box-shadow: 3px 3px 3px gray;  margin: 5px;">
              <h2>Інформація про покупця</h2>
              <h3>Ім'я: ${userName}</h3>
              <h3>Телефон: ${userTelephone}</h3>
          </div>
  
      </div>`;
};

export const configureSMPT = (data) => {
  return {
    to: process.env.MESSAGE_RECEIVING_MAIL,
    from: process.env.MESSENGER_MAIL,
    subject: 'Запит на продаж авто',
    html: getMessageTemplate(data, data?.carProperties),
  };
};
