import { setLoading } from "../../redux/slices/authSlice";
import { setUser } from "../../redux/slices/profileSlice";
import { apiConnector } from "../apiConnector"
import toast from "react-hot-toast";


export const getUser = (id, navigate) => {
    return async(dispatch) => {
      const toastId = toast.loading("Loading...");
      setLoading(true);

      try {
          const response = await apiConnector(
            "GET",
            "http:localhost:4000/users/getUser",
            {
              id
            }
          )

          if(!response.data.success) {
            throw new Error(response.data.message);
          }

          console.log("Get User API Response.......",response);

          toast.success("User Fetched Successfully");
            dispatch(setUser(response.data.user));
            localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      catch(error) {
        console.log("Get User API Error.........", error);
        toast.error(error.response.data.message);
      }

      toast.dismiss(toastId);
      setLoading(false);
    }
}

export const getAllUsers = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {

    const response = await apiConnector("GET", "http://localhost:4000/users/getAllUsers")

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }

    console.log("Get ALL Users API response......",response);

    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const updateUserDetails = (id, firstName, lastName, email, navigate) => {

    return async(dispatch) => {
      const toastId = toast.loading("Loading...");
      setLoading(true);
  
      try {
          console.log(firstName, lastName, email);
          const response = await apiConnector(
              "PUT",
              "http://localhost:4000/users/updateUser",
              {
                  id,firstName,lastName,email
              }
          )
  
          if (!response?.data?.success) {
              throw new Error("Could Not Update user details")
          }
        
          console.log("Update User Details API response......",response);
          dispatch(setUser(response.data.user));
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/dashboard");
      }
      catch(error) {
          console.log("Update User API ERROR............", error)
          toast.error(error.message)
      }
  
      toast.dismiss(toastId);
      setLoading(false);
    }
    
}

export const deleteProfile = (id, navigate) => {

    return async(dispatch) => {
      const toastId = toast.loading("Loading...");
      setLoading(true);

      try {
          console.log("Inside deleteProfile")
          const response = await apiConnector(
            "DELETE",
            "http://localhost:4000/users/deleteUser",
            {
                id
            }
          )

          if (!response?.data?.success) {
              throw new Error("Could Not Delete user")
          }

          console.log("Delete User API response......",response);
          toast.success("Profile Deleted Successfully");
          navigate("/");
      }
      catch(error) {
        console.log("Delete User API ERROR............", error)
        toast.error(error.message)
      }

      toast.dismiss(toastId);
      setLoading(false);
    }
    
}