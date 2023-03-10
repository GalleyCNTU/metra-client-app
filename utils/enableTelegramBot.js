export async function enableBot() {
  await fetch(`${process.env.API}/api/telegram`)
    .then((res) => res.json())
    .then((data) => console.log(data.message));
}
