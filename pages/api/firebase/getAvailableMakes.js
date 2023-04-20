import { getAdvNameObj } from 'data/Firebase';

const handler = async (req, res) => {
  try {
    const names = await getAdvNameObj();
    res.json({ names });
  } catch ({ message }) {
    res.status(500).json({ message: `Server error: ${message}` });
    console.log('Router error:', message);
  }
};

export default handler;
