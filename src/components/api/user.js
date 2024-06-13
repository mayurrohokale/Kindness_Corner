import Axios from "axios";

const BASE_URL = process.env.REACT_APP_API_KEY || "http://localhost:8000";

function getAuthToken() {
    return localStorage.getItem("token");
}


function getHeaders() {

    const token = getAuthToken();

    let data = {
        "Content-Type": "application/json",
    }

    if (token) {
        data['Authorization'] = `Bearer ${token}`;
    }
    return data
}
export async function getMe(){
    const headers = getHeaders();
    if (!headers?.Authorization) {
        return null;
    }
  const response = await Axios.get(`${BASE_URL}/me`, 
    {headers:headers }
  );
  return response?.data
}

export async function setVolunteer(data){
    const headers = getHeaders();
    console.log(headers);
    if (!headers?.Authorization) {
        return null;
    }
    const response = await Axios.post(`${BASE_URL}/volunteer`, 
        data,
        { headers: headers }
    );
  return response?.data
}

export async function getVolunteersCount(){
    const headers = getHeaders();
    if (!headers?.Authorization) {
        return null;
    }

    try {
        const response = await Axios.get(`${BASE_URL}/volunteers/count`, {
            headers
        });

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

