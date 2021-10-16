import { useEffect, useState } from "react";
import Profile from "../types/profile";

const useProfile = () => {
  const [profile, setProfile] = useState<any>(() => loadProfile());

  useEffect(() => {
    localStorage.setItem("frank-profile", JSON.stringify(profile));
  }, [profile]);

  return [profile, setProfile];
};

const loadProfile = () => {
  const savedProfile = localStorage.getItem("frank-profile");
  if (savedProfile) return JSON.parse(savedProfile);
  else {
    const newProfile = {
      firstName: "",
      lastName: "",
      birthDate: "",
      university: "",
      studentNumber: null,
      picture: "",
    };
    return newProfile;
  }
};

export default useProfile;
