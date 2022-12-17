import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ImageUploadIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { productsNew, usersNew } from "./dataNew";
import "../sass/pages/new.scss";

const New = () => {
  const [inputs, setInputs] = useState(usersNew);
  const [title, setTitle] = useState("Add New User");
  const [img, setImg] = useState<File | null>(null);
  // new File(
  //   ["no-image-icon-0"],
  //   "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
  //   { type: "image/jpg" }
  // )

  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname.includes("products")) {
      setInputs(productsNew);
      setTitle("Add New Product");
    } else if (location.pathname.includes("users")) {
      setInputs(usersNew);
      setTitle("Add New User");
    }
  }, [location]);

  return (
    <div className="card page page--new">
      <header className="header">
        <h1 className="heading">{title}</h1>
      </header>
      <div className="content">
        <div className="img-wrapper">
          <img
            className="img"
            src={
              img
                ? URL.createObjectURL(img)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="image"
          />
        </div>
        <form className="form">
          <div className="form__adding">
            <div className="form__group">
              {inputs.slice(0, Math.ceil(inputs.length / 2)).map((input) => (
                <div className="form__input-group" key={input.id}>
                  <label
                    className="form__label"
                    htmlFor={input.label.toLowerCase()}
                  >
                    {input.label}
                  </label>
                  <input
                    className="form__input"
                    type={input.type}
                    name={input.label.toLowerCase().split(" ").join("-")}
                    id={input.label.toLowerCase()}
                    placeholder={input.placehoder}
                  />
                </div>
              ))}
            </div>
            <div className="form__group">
              {inputs.slice(Math.ceil(inputs.length / 2)).map((input) => (
                <div className="form__input-group" key={input.id}>
                  <label
                    className="form__label"
                    htmlFor={input.label.toLowerCase()}
                  >
                    {input.label}
                  </label>
                  <input
                    className="form__input"
                    type={input.type}
                    name={input.label.toLowerCase()}
                    id={input.label.toLowerCase()}
                    placeholder={input.placehoder}
                  />
                </div>
              ))}
              <div className="form__input-group form__input-group--img">
                <label className="form__label form__label--img" htmlFor="image">
                  Image: <ImageUploadIcon className="form__upload-icon" />
                </label>
                <input
                  className="form__input form__input--img"
                  type="file"
                  name="image"
                  id="image"
                  onChange={(e) => setImg(e.target.files![0])}
                />
              </div>
            </div>
          </div>
          <button className="form__submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;
