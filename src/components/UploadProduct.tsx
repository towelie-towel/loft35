import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../utils/api";

const ImageUploadForm = () => {
  const { handleSubmit } = useForm();
  const [image, setImage] = useState<File | undefined>();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function readFileAsBuffer(file: File): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const buffer = Buffer.from(event.target?.result as ArrayBuffer);
        resolve(buffer);
      };

      reader.onerror = () => {
        reject(new Error("Failed to read file"));
      };

      reader.readAsArrayBuffer(file);
    });
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const hello = api.productHandler.create.useMutation({});

  const onSubmit = async () => {
    if (!image) {
      throw new Error("not reconized image");
    }

    const bufferImage = await readFileAsBuffer(image);

    hello.mutate({
      name: name,
      description: description,
      file: bufferImage,
      secondaryImages: [],
      price: parseInt(price),
      stock: parseInt(stock),
      categoryName: categoryName,
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
          ref={inputRef}
          className="w-full p-2"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="input w-full p-2"
        />
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          name="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="input w-full p-2 text-white"
        />
        <label htmlFor="stock">stock</label>
        <input
          type="number"
          id="stock"
          name="stock"
          onChange={(e) => {
            setStock(e.target.value);
          }}
          className="input w-full p-2 text-white"
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="input w-full p-2 text-white"
        />
        <label htmlFor="categoryName">categoryName</label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
          className="input w-full p-2 text-white"
        />
      </div>
      <button type="submit" className="btn-primary" disabled={!image}>
        Upload
      </button>
    </form>
  );
};

export default ImageUploadForm;
