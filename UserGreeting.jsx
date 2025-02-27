import PropTypes from 'prop-types';

function UserGreeting(props) {
    return (props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>No Bro</h2>);
}
UserGreeting.propTypes = {
    isLoggedIn: "string",

}
UserGreeting.defaultProps = {
    isLoggedIn: "true",
    username: "People",
}
export default UserGreeting