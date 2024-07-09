import Axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

function getAuthToken() {
  return localStorage.getItem("token");
}

function getHeaders() {
  const token = getAuthToken();
  let data = {
    "Content-Type": "application/json",
  };
  if (token) {
    data["Authorization"] = `Bearer ${token}`;
  }
  return data;
}

export async function getMe() {
  const headers = getHeaders();
  if (!headers?.Authorization) {
    return null;
  }
  const response = await Axios.get(`${BASE_URL}/me`, { headers });
  return response?.data;
}

export async function setVolunteer(data) {
  const headers = getHeaders();
  if (!headers?.Authorization) {
    return null;
  }
  const response = await Axios.post(`${BASE_URL}/volunteer`, data, { headers });
  return response?.data;
}

export async function getVolunteers() {
  try {
    const response = await Axios.get(`${BASE_URL}/volunteers`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch volunteers");
    }
  } catch (error) {
    console.error("Error fetching volunteers:", error);
    return null;
  }
}

export async function getVolunteersCount() {
  try {
    const response = await Axios.get(`${BASE_URL}/volunteers/count`);
    if (response.status === 200) {
      return response.data.count; // Return only the count
    } else {
      throw new Error("Failed to fetch volunteers count");
    }
  } catch (error) {
    console.error("Error fetching volunteers count:", error);
    return null;
  }
}

export async function castVote(voteFormId, vote) {
  try {
    const headers = getHeaders();
    const response = await Axios.post(
      `${BASE_URL}/vote`,
      { voteFormId, vote },
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error casting vote:", error);
    return null;
  }
}

export async function hasVoted(voteFormId) {
  try {
    const headers = getHeaders();
    const response = await Axios.get(`${BASE_URL}/hasvoted/${voteFormId}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error checking vote status:", error);
    return null;
  }
}

export async function getCurrentVotes(voteFormId) {
  try {
    const response = await Axios.get(`${BASE_URL}/countvotes/${voteFormId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current votes:", error);
    return { yes: 0, no: 0, total: 0 };
  }
}

export async function getDonationForm() {
  try {
    const response = await Axios.get(`${BASE_URL}/get-donation-form`);
    if (response.status === 200) {
      return response.data.donation; // Return the donation data array
    } else {
      throw new Error("Failed to fetch donation form");
    }
  } catch (error) {
    console.error("Error fetching donation form:", error);
    return null;
  }
}

export const getDonationFormById = async (id) => {
  try {
    const response = await Axios.get(`${BASE_URL}/donation-form/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching donation form by ID", error);
    throw error;
  }
};

export async function postBlog(blogData){
 
  try {
    const headers = getHeaders();
    const response = await Axios.post(`${BASE_URL}/add-blog`, blogData , {headers} );

    return response;
    } catch (error) {
      console.error("Error posting blog:", error);
      throw error;
      }
      
}
// export async function getApprovedBlogs() {
//   try {
//     const response = await Axios.get(`${BASE_URL}/blogs?status=approved`);
//     if (response.status === 200) {
//       return response.data.blogs;
//     } else {
//       throw new Error("Failed to fetch blogs");
//     }
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return [];
//   }
// }
export async function getApprovedBlogs() {
  try {
    const response = await Axios.get(`${BASE_URL}/approved-blogs`, { headers: getHeaders() });
    return response.data; // Return the approved blogs
  } catch (error) {
    console.error('Error fetching approved blogs:', error);
    return [];
  }
}


