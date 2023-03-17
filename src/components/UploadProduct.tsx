import { useForm } from "react-hook-form";
import { api } from "../utils/api";

interface FormValues {
  name: string;
  price: string;
  stock: string;
  description: string;
  categoryName: string;
  image: FileList;
}

interface IProps {
  active: boolean;
  onCloseClick: () => void;
}

const productList = api.productHandler.create.useMutation({});

const ImageUploadForm: React.FC<IProps> = ({
  active = false,
  onCloseClick,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    if (!data.image[0]) {
      throw new Error("submit isnt getting any image");
    }

    const arrayBuffer = await data.image[0].arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    productList.mutate(
      {
        name: data.name,
        description: data.description,
        file: fileBuffer,
        secondaryImages: [],
        price: parseInt(data.price),
        stock: parseInt(data.stock),
        categoryName: data.categoryName,
      },
      {
        onError: (e) => {
          console.error(e);
        },
        onSuccess(data) {
          console.log("succes", data);
        },
      }
    );
  };

  return (
    <div
      className={`modal-container onclick-close-modal ${
        active ? "scale-100" : "scale-0"
      } fixed inset-0 z-10 h-full w-full transform bg-[#bdbcbc7e] transition-transform`}
      onClick={onCloseClick}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute top-1/2 left-1/2 flex h-auto w-[90%] max-w-xs -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center overflow-x-hidden rounded-lg bg-[var(--secondary-bg-color)] py-5 shadow-lg"
      >
        <div onClick={onCloseClick}>close</div>
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="image" className="mb-2 block font-bold text-white">
            Image
          </label>
          <input
            type="file"
            id="image"
            {...register("image", { required: true })}
            className="w-full p-2"
          />
          {errors.image && <span>This field is required</span>}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="input w-[50%] p-2 text-white"
          />
          {errors.name && <span>This field is required</span>}
          <label htmlFor="price">price</label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true })}
            className="input w-[50%] p-2 text-white"
          />
          {errors.price && <span>This field is required</span>}
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            id="stock"
            {...register("stock", { required: true })}
            className="input w-[50%] p-2 text-white"
          />
          {errors.stock && <span>This field is required</span>}
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            {...register("description", { required: true })}
            className="input w-[50%] p-2 text-white"
          />
          {errors.description && <span>This field is required</span>}
          <label htmlFor="categoryName">categoryName</label>
          <input
            type="text"
            id="categoryName"
            {...register("categoryName", { required: true })}
            className="input w-[50%] p-2 text-white"
          />
          {errors.categoryName && <span>This field is required</span>}
        </div>
        <button
          type="submit"
          className="btn-primary"
          disabled={!watch("image")}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUploadForm;

/* 

To optimize and upgrade the code using "react-hook-form", you can use the following approach:

Import the "useForm" hook from "react-hook-form" and initialize it with the "defaultValues" object that contains all the initial state values for the form fields.

Replace the useState hooks for each input field with the "register" function from "useForm" and add the corresponding validation rules as arguments.

Remove the state and the onChange handlers for the file input field and replace it with the "register" function.

Modify the onSubmit function to use the "getValues" function from "useForm" to retrieve the form data and the "trigger" function to validate the form before submission.

Remove the inputRef and the readFileAsBuffer function as they are no longer needed.

Here's the updated code:

php
Copy code
import { useForm } from "react-hook-form";
import { api } from "../utils/api";

const ImageUploadForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: undefined,
      name: "",
      price: "",
      stock: "",
      description: "",
      categoryName: "",
    },
  });

  const productList = api.productHandler.create.useMutation({});

  const onSubmit = async (data) => {
    const bufferImage = await data.image[0].arrayBuffer();

    productList.mutate({
      name: data.name,
      description: data.description,
      file: Buffer.from(bufferImage),
      secondaryImages: [],
      price: parseInt(data.price),
      stock: parseInt(data.stock),
      
      */

/* 
      To optimize and upgrade the code using "react-hook-form", we need to replace the state variables with form fields created by the useForm hook. Here's an updated version of the code:

javascript
Copy code
import { useForm } from "react-hook-form";
import { api } from "../utils/api";

const ImageUploadForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const productList = api.productHandler.create.useMutation({});

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setValue("image", event.target.files[0]);
    }
  };

  const onSubmit = async (data) => {
    const bufferImage = await readFileAsBuffer(data.image[0]);

    productList.mutate({
      name: data.name,
      description: data.description,
      file: bufferImage,
      secondaryImages: [],
      price: parseInt(data.price),
      stock: parseInt(data.stock),
      categoryName: data.categoryName,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex w-[95%] flex-col items-center justify-center bg-[var(--secondary-bg-color)] py-4"
    >
      <div className="mb-4">
        <label htmlFor="image" className="mb-2 block font-bold text-gray-700">
          Image
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          ref={register({ required: true })}
          className="w-full p-2"
        />
        {errors.image && <span>This field is required</span>}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", { required: true })}
          className="input w-full p-2"
        />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          name="price"
          {...register("price", { required: true })}
          className="input w-full p-2 text-white"
        />
        {errors.price && <span>This field is required</span>}
        <label htmlFor="stock">stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          {...register("stock", { required: true })}
          className="input w-full p-2 text-white"
        />
        {errors.stock && <span>This field is required</span>}
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          {...register("description", { required: true })}
          className="input w-full p-2 text-white"
        />
        {errors.description && <span>This field is required</span>}
        <label htmlFor="categoryName">categoryName</label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          {...register("categoryName", { required: true })}
          className="input w-full p-2 text-white"
        />
        {errors.categoryName && <span>This field is required</span>}
      </div>
      <button type="submit" className="btn-primary" disabled={!watch("image")}>
        Upload
      </button>
    </form>
  );
};

export default ImageUploadForm;
      */
