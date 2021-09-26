// import message from "../components/message.js";

export default async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    message("danger", `The error is: ${error} `, ".alert");
  } finally {
  }
}
