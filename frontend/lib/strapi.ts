import qs from "qs";
const {STRAPI_TOKEN} = process.env

export const STRAPI_BASE_URL =process.env.PUBLIC_STRAPI_API_URL || "http://localhost:1337";


const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero-section": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            link: {
              populate: true,
            },
          },
        },
      },
    },
  },
};

export async function query (url:string){
  return fetch(`${STRAPI_BASE_URL}/api/${url}`,{
    headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
  }).then(res => res.json())
}

export async function getNosotrosPage(){
  return query("nosotros").then(res => {
    console.log(res)
    return res
  })
}

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  return response?.data;
}

export async function getStrapiData(url: string) {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from Strapi: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Strapi:", error);
    return null;
  }
}

export async function registerUserService (userData: object) {
  const url = `${STRAPI_BASE_URL}/api/auth/local/register`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export async function loginUserService (userData: object) {
  const url = `${STRAPI_BASE_URL}/api/auth/local`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('Error login user:', error)
    throw error
  }
}

