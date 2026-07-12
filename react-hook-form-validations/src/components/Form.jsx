import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'

const Form = ({setUsers, setToggle, users, updatedData}) => {
  
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  let submitForm = (data) => {
    if(updatedData){
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        })
      })
    }else{
      let arr = [...users, {...data, id: nanoid() }]
    setUsers(arr)
    localStorage.setItem("users", JSON.stringify(arr))
    }
    reset();
    setToggle((prev) => !prev)
  }

  return (
    <div className="flex items-center flex-col gap-3">
      <h1>Create user</h1>
      <form
      onSubmit={handleSubmit(submitForm)}
       className="w-90 flex bg-blue-100 flex-col gap-3 p-4 rounded border-2 border-black">
        <input
          {...register('name', {
            required:"Name is required"
          })}
          className="p-2 rounded outline-0 border border-black"
          type="text"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register('email', {
            required:"Email is required"
          })}
          className="p-2 rounded outline-0 border border-black"
          type="email"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          {...register('mobile', {
            required:"Mobile is required",
            minLength: {
                value:10,
                message:"Minimum 10 digits required"
            },
            maxLength: {
                 value:10,
                message:"Maximum 10 digits required"
            },
          })}
          className="p-2 rounded outline-0 border border-black"
          type="number"
          placeholder="Mobile"
        />
        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
        <input
          {...register('image', {
            required:"Image is required"
          })}
          className="p-2 rounded outline-0 border border-black"
          type="url"
          placeholder="Image"
        />
        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        <button
         className="text-white bg-blue-700 p-2 rounded-xl cursor-pointer">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
