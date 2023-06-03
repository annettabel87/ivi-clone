import React, { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthFormType } from '@/pages/auth';
import HeaderEnterApp from '../HeaderEnterApp/HeaderEnterApp';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ILoginData,
  ILoginResponseData,
  IRegistrationData,
} from '@/shared/Interfaces/authInterfaces';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import ShowPasswords from '../ShowPasswords/ShowPasswords';
import { cancel, loginUser, registrationUser } from '@/store/reducers/authReducer';
import { GOOGLE_AUTH, MAIN_ROUTE, VK_AUTH } from '@/shared/constants/routes';
import style from './AuthForm.module.scss';

const MIN_LENGTH_NAME = 1;
const MIN_LENGTH_PASSWORD = 4;
export interface IAuthFormProps {
  type: AuthFormType;
}

const AuthForm: FC<IAuthFormProps> = ({ type }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errorPasswords, setErrorPasswords] = useState<string>('');
  const [formType, setFormType] = useState<AuthFormType>(type);

  const { errorRegistration, registrationRequestStatus, errorLogin, loginRequestStatus } =
    useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const typeShowInput = (type: 'name' | 'email' | 'password' | 'text', showPassword: boolean) => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password';
    }
    return type;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegistrationData & { passwordConfirm: string }>({
    mode: 'onChange',
  });

  const goBack = () => {
    router.back();
    dispatch(cancel());
  };

  const onSubmitLogin: SubmitHandler<ILoginData> = (data) => {
    data &&
      dispatch(loginUser({ email: data.email, password: data.password })).then((res) => {
        console.log(res);
        const { token } = res.payload as ILoginResponseData;
        if (token) {
          router.push(MAIN_ROUTE);
        }
      });
    errorLogin === undefined &&
      reset({
        email: '',
        password: '',
      });
  };

  const onSubmitRegistration: SubmitHandler<IRegistrationData & { passwordConfirm: string }> = (
    data
  ) => {
    if (data.password !== data.passwordConfirm) {
      setErrorPasswords(`Извините, но пароли не совпадают`);
    } else if (data && data.password === data.passwordConfirm) {
      dispatch(
        registrationUser({
          email: data.email,
          password: data.password,
          name: data.name,
        } as IRegistrationData)
      )
        .then(() => dispatch(loginUser({ email: data.email, password: data.password })))
        .then(
          () =>
            errorRegistration === undefined &&
            reset({
              email: '',
              name: '',
              password: '',
              passwordConfirm: '',
            })
        )
        .then(() => router.push(MAIN_ROUTE));
    }
  };

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form
          className={style.form}
          onSubmit={handleSubmit(type === 'login' ? onSubmitLogin : onSubmitRegistration)}
        >
          <HeaderEnterApp title={type === 'registration' ? 'Регистрация' : 'Авторизация'} />
          <div className={style.main}>
            <label className={style.emailPasswordContainer}>
              <span className={style.inputTitle}>Email</span>
              <div className={style.inputContainer}>
                <input
                  {...register('email', {
                    required: 'Пожалуйста, введите ваш email',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: errorRegistration || 'неверный формат',
                    },
                  })}
                  placeholder="Введите email"
                  title="email"
                  type="email"
                />
              </div>
              <span className={style.errorEmailPasswordMessage}>{errors.email?.message}</span>
            </label>
            <label className={style.emailPasswordContainer}>
              <span className={style.inputTitle}>Пароль</span>
              <div className={style.inputContainer}>
                <input
                  {...register('password', {
                    required: 'Пожалуйста, введите ваш пароль',
                    minLength: {
                      value: MIN_LENGTH_PASSWORD,
                      message:
                        (type === 'login' ? errorLogin : errorRegistration) ||
                        'слишком короткий пароль',
                    },
                  })}
                  placeholder="Введите пароль"
                  title="password"
                  type={typeShowInput('password', showPassword)}
                />
              </div>
              <ShowPasswords showPassword={showPassword} setShowPassword={setShowPassword} />
              <span className={style.errorEmailPasswordMessage}>{errors.password?.message}</span>
            </label>
            {type === 'registration' && (
              <label className={style.emailPasswordContainer}>
                <span className={style.inputTitle}>подтвердите пароль</span>
                <div className={style.inputContainer}>
                  <input
                    {...register('passwordConfirm', {
                      required: 'Пожалуйства, введите подтверждающий пароль',
                      minLength: {
                        value: MIN_LENGTH_PASSWORD,
                        message: 'Пожалуйства, введите  правильный подтверждающий пароль',
                      },
                    })}
                    placeholder="Повторите пароль"
                    title={'confirm'}
                    type={typeShowInput('password', showConfirmPassword)}
                  />
                </div>
                <ShowPasswords
                  showPassword={showConfirmPassword}
                  setShowPassword={setShowConfirmPassword}
                />
                <span className={style.errorEmailPasswordMessage}>{errors.password?.message}</span>
              </label>
            )}
            {type === 'registration' && (
              <label className={style.emailPasswordContainer}>
                <span className={style.inputTitle}>Имя</span>
                <div className={style.inputContainer}>
                  <input
                    {...register('name', {
                      required: 'Пожалуйста, введите ваше имя',
                      minLength: {
                        value: MIN_LENGTH_NAME,
                        message: errorRegistration || 'слишком короткое имя',
                      },
                    })}
                    placeholder="Введите имя"
                    title="name"
                    type={'name'}
                  />
                </div>

                <span className={style.errorEmailPasswordMessage}>{errors.name?.message}</span>
              </label>
            )}
          </div>
          <div className={style.footer}>
            <div className={style.footerBtns}>
              <span className={style.btnCancel} onClick={goBack}>
                назад
              </span>
              <div className={style.btnContainer}>
                <button
                  className={style.submitBtn}
                  type={'submit'}
                  disabled={
                    registrationRequestStatus === 'pending' ||
                    loginRequestStatus === 'pending' ||
                    !isDirty ||
                    !isValid ||
                    !!errorPasswords
                  }
                >
                  {type === 'login' ? 'Вход' : 'Регистрация'}
                </button>
              </div>
            </div>
            <span className={style.errorMessageContainer}>
              {errorPasswords || errorRegistration || errorLogin}
            </span>
          </div>
        </form>
        <div className={style.authButtonsContainer}>
          <a
            className={style.authButtonsContainer__vk}
            href={`${VK_AUTH}?app_id=51659336&state=&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fvk&redirect_uri_hash=101e1dc8376c4c4c8b&code_challenge=&code_challenge_method=&return_auth_hash=70783e11b7cd674979&scope=4194304&force_hash=`}
          >
            VK
          </a>
          <a
            className={style.authButtonsContainer__google}
            href={`${GOOGLE_AUTH}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/google&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&access_type=offline`}
          >
            Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
