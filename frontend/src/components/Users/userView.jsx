import PropTypes from 'prop-types'

const ViewUser = ({ user }) => {
  return (
    <>
        <div>
          <div className='flex flex-col'>
            <div className="mb-2">
              <strong>Username:</strong> {user.username}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-2">
              <strong>First Name:</strong> {user.first_name || 'N/A'}
            </div>
            <div className="mb-2">
              <strong>Last Name:</strong> {user.last_name || 'N/A'}
            </div>
          </div>
        </div>
    </>
  );
};

ViewUser.propTypes = {
  user: PropTypes.object.isRequired,
}

export default ViewUser;