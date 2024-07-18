import React from "react";
import * as labels from "../../utils/labels";
import './footer.css'
import ContactMeFooter from "../../molecules/ContactMeFooter/SocialMediaLinks";

function Footer() {
  return (
    <footer className="contact-footer-section">
      <div className="contact-author-section">
        <p>Call</p>
        <p>{labels.AUTHOR_PHONE_NUMBER}</p>
      </div>
      <div className="contact-author-section">
        <p>Write</p>
        <p>{labels.AUTHOR_EMAIL}</p>
      </div>
      <div className="contact-author-section">
        <p>Follow</p>
        <ContactMeFooter className="contact-footer-links"/>
      </div>
     
    </footer>
  );
}

export default Footer;
