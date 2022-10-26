function About({ makes, models }) {
  return <h1>Home page</h1>;
}

export async function getStaticProps() {
  try {
    const response = await fetch(`${process.env.API}/makes`);
    const makesData = await response.json();

            const makes = makesData.map((makeObj) => makeObj.brand);

    const models = makesData.reduce((acc, make) => {
              return {
        ...acc,
        [make.brand]: make.models,
      };
    }, {});

    return { props: { makes, models } };
  } catch (e) {
          return { notFound: true };
  }
}

export default About;
