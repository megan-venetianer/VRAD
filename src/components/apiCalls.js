export const getNeighborhoods = () => {
  return fetch('http://localhost:3001/api/v1/areas')
    .then(response => response.json())
}
