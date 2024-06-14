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


export async function getVolunteers(){
    

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

export async function getVolunteersCount(){
  
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


// Create Order
export async function createOrder(data){
    try {
        const response = await Axios.post(`${BASE_URL}/createorder`, data, {
            headers: { "Content-Type": "application/json" }
        });
        if (response.status === 200) {
            return response.data.orderId;
        } else {
            throw new Error("Failed to create order");
        }
    } catch (error) {
        console.error("Error creating order:", error);
        return null;
    }
}

// Verify Payment
export async function verifyPayment(data){
    try {
        const response = await Axios.post(`${BASE_URL}/verifypayment`, data, {
            headers: { "Content-Type": "application/json" }
        });
        if (response.status === 200) {
            return response.data.status;
        } else {
            throw new Error("Failed to verify payment");
        }
    } catch (error) {
        console.error("Error verifying payment:", error);
        return null;
    }
}