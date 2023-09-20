import getLaunches from "./fetch";
export default async function createTable(params) {
  const result = await getLaunches(params);
  console.log(result);
  return result;
}
