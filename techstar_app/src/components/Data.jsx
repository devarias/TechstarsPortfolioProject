import axios from 'axios';
export async function getData() {
  return await fetch('https://techstars-api.herokuapp.com/api/meetings')
    .then((data) => data.json())
    .catch((error) => console.error(error));
}
export async function getName(id) {
  const name = await axios
    .get(`https://techstars-api.herokuapp.com/api/mentors/${id}`)
    .then((res) => {
      return res.data.mentor;
    })
    .catch((e) => {
      console.error(e);
    });
  return name;
}
