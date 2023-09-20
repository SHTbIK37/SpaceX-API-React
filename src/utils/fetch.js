export default async function getLaunches(params) {
  const spaceXUrl = "https://api.spacexdata.com/v3/launches";
  for (let key in params) {
    if (params[key] === undefined) {
      delete params[key];
    }
  }
  try {
    const result = await fetch(
      `${spaceXUrl}?${new URLSearchParams(Object.entries(params))}`
    );
    return result.json();
  } catch (error) {
    return 0;
  }
}
