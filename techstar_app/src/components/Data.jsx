
export function getData() {
  return fetch('https://ts-api-p2.herokuapp.com/api/mentors')
    .then(data => data.json())
    .catch(error => console.error(error))
}
