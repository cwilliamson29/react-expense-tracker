import categories from "./categories";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { PropsWithChildren } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  setData: (data) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z.number().min(0.01),
  category: z.enum(categories),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ setData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    setData(data);
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
