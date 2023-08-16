import PropTypes from 'prop-types';

function Result({ value }) {
  return (
    <>
      <span className=" result">{value}</span>
    </>
  );
}

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Result;
