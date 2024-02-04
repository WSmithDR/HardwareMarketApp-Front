
export const Star = ({ filled }) => (
    <span
      role="img"
      
      style={{
        display: 'inline-block',
        marginRight: '2px',
      }}
    >
      {filled ? "⭐️" : "☆"}
    </span>
  );