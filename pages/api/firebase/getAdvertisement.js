import { getAdvertisement } from 'data/Firebase';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const adv = await getAdvertisement(JSON.parse(req.body));
      res.json({ adv });
    } else {
      res.status(500).json({ message: 'Bad request' });
    }
  } catch ({ message }) {
    res.status(500).json({ message: `Server error: ${message}` });
    console.log('Router error:', message);
  }
};

export default handler;
