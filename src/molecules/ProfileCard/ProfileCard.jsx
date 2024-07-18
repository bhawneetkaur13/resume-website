import React from "react";
import "./profileCard.css";
import * as labels from "../../utils/labels";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import ContactMeFooter from "../ContactMeFooter/SocialMediaLinks";
import ProfileCardButtons from "../../atoms/ProfileCardButtons/ProfileCardButtons";


function ProfileCard() {
  
  return (
    
    <section className="profile-card-section">
      <ProfileImage/>
      <h1 className="primary-heading">{labels.AUTHOR_NAME}</h1>
      <ProfileCardButtons/>
      <h3 className="author-designation-heading">{labels.AUTHOR_DESIGNATION}</h3>
      <ContactMeFooter/>
    </section>
  );
}

export default ProfileCard;
