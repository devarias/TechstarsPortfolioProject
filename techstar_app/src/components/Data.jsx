export async function getData() {
  return await fetch('https://techstars-api.herokuapp.com/api/results')
    .then((data) => {
      console.log(data.json());
      data.json();
    })
    .catch((error) => console.error(error));
}
