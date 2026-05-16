import "./Card.css";

function Card({ icon, title, subtitle, description, children, onClick, className = "" }) {
  return (
    <div className={`modern-card ${className}`} onClick={onClick}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </div>
  );
}

export default Card;
