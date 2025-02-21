import {useAppSelector} from '../../../../libs/hooks/storeHook.ts';
import {AppRootState} from '../../../../app/stores/rootStore.ts';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userProfileSchema} from './schema.ts';

interface LoginFormValues {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  updatedAt: string;

}

export default function UserProfileForm() {
  // Get profile from Redux store
  const profile = useAppSelector((state: AppRootState) => state.user.profile);

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<LoginFormValues>(
    {
      resolver: yupResolver(userProfileSchema),
      defaultValues: {
        id: profile?.id || 0,
        firstName: profile?.firstName || '',
        lastName: profile?.lastName || '',
        email: profile?.email || '',
        phone: profile?.phone || '',
        avatar: profile?.avatar || '',
        updatedAt: profile?.updatedAt || '',
      }
    }
  );

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'space-y-6'}>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <img
            src={profile?.avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
        </div>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            focus:ring-1 focus:ring-primary-500"
          />
          <p className="text-red-500 text-xs italic">{errors.firstName?.message}</p>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            focus:ring-1 focus:ring-primary-500"
          />
          <p className="text-red-500 text-xs italic">{errors.lastName?.message}</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            focus:ring-1 focus:ring-primary-500"
          />
          <p className="text-red-500 text-xs italic">{errors.email?.message}</p>

        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
            focus:ring-1 focus:ring-primary-500"
          />
          <p className="text-red-500 text-xs italic">{errors.phone?.message}</p>

        </div>
      </div>


      <button type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save
      </button>
    </form>
  );
}