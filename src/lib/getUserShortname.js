export const getUserShortName = () => {
    let fullName = localStorage.getItem("fullName");
    // let lastName = localStorage.getItem("lastName");
  
    fullName = fullName?.trim() || "John";
    // lastName = lastName?.trim() || "Doe";
  
    const shortName = `${fullName[0] || ""}`;
  
    return shortName.toUpperCase();
  };