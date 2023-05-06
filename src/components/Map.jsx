import React from "react";

export const Map = React.memo(() => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.4150251473243!2d77.95030037518688!3d27.20611667647355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974778216965fa5%3A0xe291154fa93e6cf6!2sLEARN2EARN%20LABS%20-%20DIGITAL%20MARKETING%20TRAINING%20INSTITUTE!5e0!3m2!1sen!2sin!4v1681654220893!5m2!1sen!2sin&maptype=satellite"
      title="location"
      width={"100%"}
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="main-div"
    />
  );
});
