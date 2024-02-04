import { ChangeEvent, FormEvent, useState } from "react";
import Sidebar from "../../components/Sidebar";

import shoePng from "../../assets/puma-shoes.png";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(shoePng);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="product-management">
        <section>
          <strong>ID- fsdfsfd</strong>
          <img
            src={photo}
            alt="Product Image"
          />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green"> {stock} Available</span>
          ) : (
              <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) =>
                  setPriceUpdate(Number(e.target.value))
                }
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) =>
                  setStockUpdate(Number(e.target.value))
                }
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                onChange={changeImageHandler}
              />
            </div>
            {photo && (
              <img
                src={photoUpdate}
                alt="New Image"
              />
            )}
            <button type="submit">Update Product</button>
          </form>
        </article>
      </main>
    </div>
  );
};
export default ProductManagement;
