import { useEffect, useState } from "react";
import Profile from "../types/profile";

const useProfile = () => {
  const [profile, setProfile] = useState(() => loadProfile());

  useEffect(() => {
    try {
      localStorage.setItem("frank-profile", JSON.stringify(profile));
    } catch (e) {
      console.log(e);
      alert("Tietoja ei voitu tallentaa");
    }
  }, [profile]);

  return [profile, setProfile] as const;
};

const loadProfile = () => {
  const parsedProfile = localStorage.getItem("frank-profile");
  if (parsedProfile) return JSON.parse(parsedProfile) as Profile;
  else {
    const blankProfile: Profile = {
      firstName: "",
      lastName: "",
      birthDate: "",
      educationLevel: "",
      university: "",
      studentNumber: "",
      picture: "",
    };
    return blankProfile;
  }
};

export default useProfile;
