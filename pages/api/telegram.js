import { sendMessage } from 'data/Telegram';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const user = JSON.parse(req.body);

      await sendMessage(user);
      res.status(200).json({ message: 'ok' });
    } else {
      res.status(500).json({ message: 'Telegram bot enabled' });
    }
  } catch ({ message }) {
    res.status(500).send({ message });
    console.log('Router error:', message);
  }
};

export default handler;
