import categories from "./categories";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { PropsWithChildren } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  setData: (data) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" })
    .max(50, { message: "Description must NOT be more than 50 characters" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, { message: "Amount must be at least $0.01" })
    .max(100_000, { message: "Amount must NOT be more than $100,000" }),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ setData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setData(data);
    reset()
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
              {data}
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

export default ExpenseForm;
