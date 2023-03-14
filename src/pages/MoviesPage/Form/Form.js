import { Container } from './Form.styled';
import PropTypes from 'prop-types';
import Message from '../..//../components/Message/Message';
import { StyledSearch, StyledInput } from './Form.styled';
// import { BsSearch } from 'react-icons/bs';

const Form = ({ handleSubmit, handleInputChange, query }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <StyledSearch>
          {query ? (
            <StyledInput
              placeholder="Type to search"
              type="text"
              onChange={handleInputChange}
            />
          ) : (
            <StyledInput
              type="text"
              placeholder="Type to search"
              onChange={handleInputChange}
            />
          )}

          {/* <ButtonSubmit type="submit">
            <BsSearch size="20px" color="black" />
          </ButtonSubmit> */}
        </StyledSearch>
      </form>
      <div> {query.length < 1 && <Message />}</div>
    </Container>
  );
};

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
