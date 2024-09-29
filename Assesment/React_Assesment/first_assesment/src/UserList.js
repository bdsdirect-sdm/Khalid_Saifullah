export default function UserList({ users }) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 1 ? 
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.dob}</td>
                <td>{Date(Date.now())}</td>
              </tr>
            )) :  "no data found"}
          </tbody>
        </table>
      </>
    );
  }
  