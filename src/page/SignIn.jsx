import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { auth, db } from '../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, doc, getDoc } from 'firebase/firestore';
import { setUserState } from '../redux/userSlice';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  async function onSubmit(data) {
    const { user } = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const { uid, email } = user;

    const collectionRef = collection(db, 'user')
    const docRef = doc(collectionRef, uid)
    const userDocData = await getDoc(docRef)

    dispatch(
      setUserState(userDocData.data())
    );

    localStorage.setItem(
      'todoist_user',
      JSON.stringify(userDocData.data())
    );
    navigate('/');
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-dark text-dark-font">
      <form
        className="flex flex-col items-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-3 text-xl">Sign In</h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col gap-0">
            <input
              type="text"
              placeholder="Email"
              className="w-[300px] rounded-md border-none px-2 py-2 text-black outline-none placeholder:text-[13px]"
              {...register('email', {
                required: { value: true, message: 'Email is required.' },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email is not valid.',
                },
              })}
            />
            {errors.email && (
              <p className="my-1 text-xs font-semibold text-primary">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0">
            <input
              type="password"
              placeholder="Password"
              className="w-[300px] rounded-md border-none px-2 py-2 text-black outline-none placeholder:text-[13px]"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required.',
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    'Minimum eight characters, at least one letter, one number and one special character(@$!%*#?&).',
                },
              })}
            />
            {errors.password && (
              <p className="my-1 w-[300px] text-xs font-semibold text-primary">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="section-button my-2 bg-primary text-base hover:bg-light-primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
