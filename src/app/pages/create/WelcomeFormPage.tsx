import React, { useState, useEffect } from "react";
import { AgText, AgTextSmall } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import InputText from "../../../layout/components/Input/InputText";
import { themes } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const WelcomeForm = () => {
  const { themeCustom } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    invoice: "hola",
    company: themes[themeCustom].company,
  });

  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const chooseImageStar = themes[themeCustom].images?.star
    ? themes[themeCustom].images?.star
    : themes["default"].images?.star;

  const hadndleChange = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (
      storedUser &&
      (storedUser.name || storedUser.email || storedUser.invoice)
    ) {
      localStorage.removeItem("user");
    }
  }, []);

  const validateDefault = () => {
    if (user.name === "" || user.email === "") {
      setError(true);
      return false;
    }
    return true;
  };

  const validateChiviri4ta = () => {
    if (user.name === "" || user.email === "" || user.invoice === "") {
      setError(true);
      return false;
    }
    return true;
  };

  const validateMcDonals = () => {
    if (user.name === "") {
      setError(true);
      return false;
    }
    return true;
  };

  const validation = () => {
    switch (themeCustom) {
      case "default":
        if (validateDefault()) {
          setError(false);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/create/choose");
        }
        break;
      case "chiviri4ta":
        if (validateChiviri4ta()) {
          setError(false);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/create/choose");
        }
        break;
      case "mcdonals":
        if (validateMcDonals()) {
          setError(false);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/create/choose");
        }
        break;
      default:
        break;
    }
  };

  const styleImg = {
    width: "7em",
    height: "3em",
  };

  const styleImgStar = {
    width: "2.4em",
    height: "2.4em",
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <AgText
        text={"¡Bienvenido!"}
        customClass={'mb-5'}
        color={themes[themeCustom].colors.fontColor}
      />
      {/* <div className="w-75 text-center mt-4 mb-3">
        <AgTextSmall
          color={themes[themeCustom].colors.fontColor}
          text={
            "Completa la siguiente información para poder generar tu mensaje"
          }
        />
      </div> */}
      <div className="w-75 text-center mb-5">
        <img
          src={chooseImageStar}
          style={styleImgStar}
          className="align-self-end"
          alt="img of polo north express "
        />
      </div>
      <div className="w-100 px-4 mb-5">
        <InputText
          customClass={"text-center"}
          placeholderInput={"Escribe tu nombre para generar un mensaje"}
          typeInput={"text"}
          name={"name"}
          handleInput={hadndleChange}
        />
      </div>
      {(themeCustom === "default" || themeCustom === "chiviri4ta") && (
        <div className="w-100 px-4 mb-5">
          <InputText
            customClass={"text-center"}
            name={"email"}
            placeholderInput={"Correo electrónico"}
            typeInput={"email"}
            handleInput={hadndleChange}
          />
        </div>
      )}

      {themeCustom === "chiviri4ta" && (
        <div className="w-100 px-4 mb-1">
          <InputText
            customClass={"text-center"}
            name={"invoice"}
            placeholderInput={"Número de la factura de tu compra"}
            typeInput={"text"}
            handleInput={hadndleChange}
          />
        </div>
      )}

      {error && (
        <div className="d-flex align-items-start mb-4">
          <span className="small alert alert-warning">
            Todos los campos son obligatorios
          </span>
        </div>
      )}

      <div
        className={`${
          customIcon
            ? "d-flex flex-column align-items-center mt-5"
            : "mt-4 mb-5"
        }`}
      >
        <BasicButton
          bgColor={themes[themeCustom].colors.backgroundButton}
          text={"Continuar"}
          color={themes[themeCustom].colors.primaryOutline}
          clickFunction={validation}
        />
        {customIcon && (
          <div className="d-flex flex-column align-items-center mt-5">
            <img src={customIcon} style={styleImg} alt="img of company" />
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeForm;
