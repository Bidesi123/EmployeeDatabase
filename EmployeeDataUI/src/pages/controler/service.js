import axios from "axios";

export async function login(data) {
    try {
        const response = await axios
        .POST(`https://localhost:44334/api/Employee/LoginEmployee?Id=${data.userid}&email=${data.password}`, data, {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        });
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}