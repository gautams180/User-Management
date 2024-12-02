import { apiConnector } from "../apiConnector"
import { setLoading, setToken } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";
import { setUser } from '../../redux/slices/profileSlice'



const BASE_URL = process.env.BASE_URL;

export function login(email, password, navigate) {

    return async (dispatch) => {

        const toastId = toast.loading("Loading...");
        setLoading(true);

        try {
            console.log("BASE_URL: ",BASE_URL)
            const response = await apiConnector("POST",
                `http://localhost:4000/auth/login`,{
                    email,
                    password
                }
            )

            console.log("Login Api Response.......",response);

            if(!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successfull");
            dispatch(setToken(response.data.token));
            dispatch(setUser(response.data.user));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate(`/dashboard`);

        }
        catch(error) {
            console.log("Login API Error.........", error);
            toast.error(error.response.data.message);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function register(firstName,lastName,email,password,confirmPassword, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        setLoading(true);

        try {
            const response = await apiConnector("POST",
                "http://localhost:4000/auth/register",{
                    firstName,
                    lastName,
                    email,
                    password,
                    confirmPassword
                }
            )

            console.log("Register API response.........",response);

            if(!response.data.success) {
                throw new Error(response.data.message);
            }

            toast.success("User Registered Successfully");
            navigate("/login");
        }
        catch(error) {
            console.log("Register API Error.........", error);
            toast.error(error.response.data.message);
        }

        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}