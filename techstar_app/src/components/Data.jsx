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
export async function getCompName(id) {
  const name = await axios
    .get(`https://techstars-api.herokuapp.com/api/companies/${id}`)
    .then((res) => {
      return res.data.company;
    })
    .catch((e) => {
      console.error(e);
    });
  return name;
}
export async function getCompId() {
  const name = await axios
    .get(`https://techstars-api.herokuapp.com/api/companies/company_survey/`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
  return name;
}
export async function getMS(id) {
  const survey = await axios
    .get(`https://techstars-api.herokuapp.com/api/mentor_survey/${id}`)
    .then((res) => {
      /* console.log(res.data); */
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
  return survey;
}
/* export async function getMS() {
  return await fetch('https://techstars-api.herokuapp.com/api/mentor_survey')
    .then((data) => data.json())
    .catch((error) => console.error(error));
} */
/* export async function getCS() {
  return await fetch('https://techstars-api.herokuapp.com/api/company_survey/')
    .then((data) => data.json())
    .catch((error) => console.error(error));
} */
export async function getCS() {
  const survey = await axios
    .get(`https://techstars-api.herokuapp.com/api/company_survey/`)
    .then((res) => {
      /* console.log(res.data); */
      return res.data;
    })
    .catch((e) => {
      console.error(e);
    });
  return survey;
}
