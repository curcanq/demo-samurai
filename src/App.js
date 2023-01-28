import './App.css';
import React from 'react';
import Sidebar from './components/Navbar/Sidebar';
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import HeaderCointainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import { Suspense } from 'react';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

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

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderCointainer />
                <Sidebar friends={this.props.state.sidebar.friends} />
                <div className="app-wrapper-content ">
                    <Suspense fallback={<div><Preloader /></div>} >
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer />} />
                            <Route path="/profile" element={<ProfileContainer />}>
                                <Route path=":userId" element={<ProfileContainer />} />
                            </Route>
                            <Route path="/users" element={<UsersContainer />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App)
