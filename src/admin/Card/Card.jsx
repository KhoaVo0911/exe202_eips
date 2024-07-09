// import React from "react";
// import "./Card.scss"; // Import the CSS file for styling

// const Card = ({ image, eventName, description, startdate, onEdit }) => {
//   return (
//     <div className="card-item">
//       <div className="card-item-img-container">
//         <img className="card-item-image" src={image} alt={eventName} />
//       </div>
//       <div className="card-item-info">
//         <div className="card-item-header">
//           <p className="card-item-startdate">{startdate}</p>
//           <div className="card-item-name">
//             <p>{eventName}</p>
//           </div>
//         </div>
//         <div className="card-item-desc">
//           <p>{description}</p>
//         </div>
//         <button className="card-item-button" onClick={onEdit}>
//           EDIT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";
import "./Card.scss"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const handleCardClick = (event, navigate) => {
  navigate(`/event/${event.id}`, { state: { event } });
};

const Card = ({ event, image, title, description, startdate }) => {
  const navigate = useNavigate();
  return (
    <div className="card-item" onClick={() => handleCardClick(event, navigate)}>
      <div className="card-item-img-container">
        <img className="card-item-image" src={image} alt={title} />
      </div>
      <div className="card-item-info">
        <div className="card-item-header">
          <p className="card-item-startdate">{startdate}</p>
          <div className="card-item-name">
            <p>{title}</p>
          </div>
        </div>
        <div className="card-item-desc">
          <button className="card-item-button">EDIT</button>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
