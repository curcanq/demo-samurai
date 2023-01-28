import Pagination from '../Common/Pagination/Pagination'
import User from './User'

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <>
        <div>
            <Pagination currentPage={currentPage} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} />
            {
                users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
            }
        </div>
    </>
}

export default Users;