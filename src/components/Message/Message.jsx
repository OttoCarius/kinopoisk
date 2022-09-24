import PropTypes from 'prop-types';
import { BoxMessage } from './Message.styled';
// import { MessageTitle } from './Message.styled';
import { MessageText } from './Message.styled';

const Message = () => (
  <BoxMessage>
    {/* <MessageTitle>Enter the title of the desired movie</MessageTitle> */}
    <MessageText>We wish you a pleasant viewing!</MessageText>
  </BoxMessage>
);

Message.defaultProps = {
  children: [],
};

Message.propTypes = {
  children: PropTypes.node,
};

export default Message;
