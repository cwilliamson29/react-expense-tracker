import { zodResolver } from "@hookform/resolvers/zod";
import React, { PropsWithChildren } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  categories: string[];
  dataFile: string[];
  setData: (data) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(1),
  category: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = ({ categories, dataFile, setData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setData(data);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-select" id="category">
          {categories.map((data, index) => (
            <option key={index} value={data}>
              {capitalize(data)}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseTracker;
