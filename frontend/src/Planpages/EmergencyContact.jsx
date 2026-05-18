import emergencyContacts from "../data/emergencyContacts";
import "./emergencycontact.css";

function Emergency() {
  return (
    <div className="emergency-container">
      <h1>🚨 Emergency Contacts</h1>
      <p>Quick access to important helpline numbers</p>

      <div className="emergency-grid">
        {emergencyContacts.map((item) => (
          <div className="emergency-card" key={item.id}>
            <div className="icon" style={{ color: item.color }}>
              <i className={item.icon}></i>
            </div>

            <h3>{item.name}</h3>
            <p>{item.number}</p>

            <a href={`tel:${item.number}`} className="call-btn">
              📞 Call Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emergency;