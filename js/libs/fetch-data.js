export default async function fetchData(url) {
  try {
    // document.querySelector(".loading").innerHTML = `
    //     <img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif">
    //   `;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  } finally {
    // document.querySelector(".loading").innerHTML = ``;
  }
}
