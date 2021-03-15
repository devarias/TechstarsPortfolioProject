
export function getData() {
  return fetch('https://techstars-api.herokuapp.com/api/meetings')
    .then(data => data.json())
    .catch(error => console.error(error))
}
