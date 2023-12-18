import axios from 'axios'

export async function AddWorker() 
{
  const url = `https://localhost:7891/api/worker`;

  try {
    const response = await axios({
      method: "POST",
      url: url,
    });

    return {
      response: response,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching data from the WoodGuru backend API.",
    };
  }
}

export async function ShowProduct() 
{
  const url = `https://localhost:7891/api/product/`;

  try {
    const response = await axios({
      method: "GET",
      url: url,
    });

    return {
      response: response,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "An error occurred while fetching data from the WoodGuru backend API.",
    };
  }
}

// export async function DeleteUser() 
// {
//   const url = `https://localhost:7891/api/worker`;

//   try {
//     const response = await axios({
//       method: "DELETE",
//       url: url,
//     });

//     return {
//       response: response,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       error: "An error occurred while fetching data from the WoodGuru backend API.",
//     };
//   }
// }