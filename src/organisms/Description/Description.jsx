import React from "react";
import "./description.css";
import ProfileCardButtons from "../../atoms/ProfileCardButtons/ProfileCardButtons";

function Description() {

  return (
    <>
    <section className="description-section">
        <section className="author-description-section">
      <h1 className="intro-heading">Hello</h1>
      <p className="intro-description">
        Hey, I'm Bhawneet – a Frontend Dev and tech blogger!
      </p>
      <ProfileCardButtons />
      <p  className="author-description" >
        Hey there! I'm Bhanweet, a Front-End Developer rocking React, Redux, and
        SAP UI5. I create sleek, user-friendly web apps and ensure they
        integrate smoothly with backends. Let's make the web awesome, one line
        of code at a time.
      </p>
      <p className="author-description">
        I'm also into blogging about tech trends and sharing insights with the dev community.Let's connect and build
        something epic!
      </p>
      </section>
    </section>
    </>
  );
}

export default Description;
