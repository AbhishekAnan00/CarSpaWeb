import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetProfile = () => {
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setProfile(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getProfile();
  }, []);

  return { Profile };
};
export default useGetProfile;