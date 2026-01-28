// src/components/Profile/Profile.jsx

import React, { useContext } from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({ 
  onCardClick, 
  clothingItems, 
  handleAddClick, 
  onCardLike, 
  onLogOut,   
  onEditProfileClick 
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter((item) => {    // Filter items owned by current user
    return item.owner === currentUser?._id;
  });

  return (
    <div className="profile">
      <SideBar 
        onLogOut={onLogOut} 
        onEditProfileClick={onEditProfileClick} 
      />
      <ClothesSection 
        onCardClick={onCardClick} 
        clothingItems={userItems} 
        handleAddClick={handleAddClick} 
        onCardLike={onCardLike} 
      />
    </div>
  );
}

export default Profile;