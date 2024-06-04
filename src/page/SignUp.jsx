import { useForm } from 'react-hook-form';

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  function onSubmit(data) {
    console.log('data', data);
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-dark text-dark-font">
      <form
        className="flex flex-col items-center gap-2 text-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="my-3 text-xl">Sign Up</h2>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col gap-0">
            <input
              type="text"
              placeholder="Name"
              className="w-[300px] rounded-md border-none px-2 py-2 text-black outline-none placeholder:text-[13px]"
              {...register('name', {
                required: { value: true, message: 'Name is required.' },
              })}
            />
            {errors.name && (
              <p className="my-1 text-xs font-semibold text-primary">
                {errors.name.message}
              </p>
            )}
          </div>
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
              type="text"
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
          <div className="flex flex-col gap-0">
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-[300px] rounded-md border-none px-2 py-2 text-black outline-none placeholder:text-[13px]"
              {...register('confirm_password', {
                required: {
                  value: true,
                  message: 'Confirm password is required.',
                },
                validate: {
                  isValid: () => {
                    if (
                      getValues('confirm_password') !== getValues('password')
                    ) {
                      return 'Password and confirm password do not match.';
                    }
                  },
                },
              })}
            />
            {errors.confirm_password && (
              <p className="my-1 w-[300px] text-xs font-semibold text-primary">
                {errors.confirm_password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-0">
            <input
              type="file"
              className="w-[300px] rounded-md border-none bg-white px-2 py-1 text-black outline-none placeholder:text-[13px]"
              {...register('image', {
                required: {
                  value: true,
                  message: 'Image is required.',
                },
              })}
            />
            {errors.image && (
              <p className="my-1 w-[300px] text-xs font-semibold text-primary">
                {errors.image.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="section-button my-2 bg-primary text-base hover:bg-light-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
