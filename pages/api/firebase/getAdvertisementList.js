import { getAdvertisementList } from 'data/Firebase';

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const advList = await getAdvertisementList(JSON.parse(req.body));
      res.json({ advList });
    } else {
      const advList = await getAdvertisementList();
      res.json({ advList });
    }
  } catch ({ message }) {
    res.status(500).json({ message: `Server error: ${message}` });
    console.log('Router error:', message);
  }
};

export default handler;
