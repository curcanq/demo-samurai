import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators"
import { Input } from "../Common/FormsControls/FormsControls"
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"
import s from './../Common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return <>
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'} validate={[required]} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} type={'password'} validate={[required]} name={'password'} component={Input} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            {error && <div className={s.formSummaryError}>
                <h4>{error}</h4>
            </div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)