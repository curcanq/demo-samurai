import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getUserProfile, getProfileStatus, updateStatus } from '../../redux/profileReducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getProfileStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)