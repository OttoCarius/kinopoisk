import { InputContainer, ButtonSubmit, Input, Container } from './Form.styled';
import PropTypes from 'prop-types';
import Message from '../..//../components/Message/Message';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { BsSearch } from 'react-icons/bs';

const Form = ({ handleSubmit, handleInputChange, query }) => {
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          {query ? (
            <Input
              placeholder="Type to search"
              type="text"
              onChange={handleInputChange}
            />
          ) : (
            <Input
              type="text"
              placeholder="Type to search"
              onChange={handleInputChange}
            />
          )}

          <ButtonSubmit type="submit">
            <BsSearch size="20px" color="black" />
          </ButtonSubmit>
        </InputContainer>
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
