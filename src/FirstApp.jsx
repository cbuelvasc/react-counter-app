import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        reiciendis expedita, laborum, vel fugiat nostrum quia veritatis optio
        exercitationem ad fuga, tenetur aut possimus deleniti voluptas vitae
        tempora obcaecati! Debitis.
      </p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

FirstApp.defaultProps = { 
  title: "I'm a title",
  subtitle: "I'm a subtitle",
};
