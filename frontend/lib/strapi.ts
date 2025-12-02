import qs from "qs";

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

const QUERY_SOBRE_MI = {
  populate: {
    sections: {
      populate: {
        image: true,
      },
    },
  },
};

const QUERY_PRODUCTS = {
      populate: {
        image: true,
      },
    };


const QUERY_PRODUCT_BY_SLUG = (slug: string) => ({
  filters: { slug: { $eq: slug } },
  populate: {
    image: true,
    detail: {
      populate: '*', 
    },
  },
});

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

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getStrapiData(`/api/home-page?${query}`);
  return response?.data;
}

export async function getSobreMiPage(){
  const query = qs.stringify(QUERY_SOBRE_MI);
 const response = await getStrapiData(`/api/sobre-mi?${query}`);
  return response?.data;
}

export async function getManualPage(){
 const response = await getStrapiData(`/api/el-manual`);
  return response?.data;
}

export async function getProducts(){
  const query = qs.stringify(QUERY_PRODUCTS);
 const response = await getStrapiData(`/api/products?${query}`);
  return response?.data;
}

export async function getProductBySlug(slug: string) {
  const query = qs.stringify(QUERY_PRODUCT_BY_SLUG(slug), {
    encodeValuesOnly: true,
  });
  
  const res = await getStrapiData(`/api/products?${query}`);
  return res?.data?.[0] || null; 
}


// LOGICA DE AUTH
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

