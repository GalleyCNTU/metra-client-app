import { sendMail } from 'data/SendGrid';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await sendMail(req.body);
      res.json({ message: 'Mail has been sent' });
    } else {
      res.status(500).json({ message: 'Bad request' });
    }
  } catch ({ message }) {
    res.status(500).json({ message: `Server error: ${message}` });
    console.log('Router error:', message);
  }
};

export default handler;
