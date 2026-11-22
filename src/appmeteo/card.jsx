import { Typography } from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

export default function Card() {
  const { t, i18n } = useTranslation();
  const [lang, setlang] = useState("ar");

  const [dateandtime, setdateandtime] = useState();
  const [temperature, settemperature] = useState({
    temp: 0,
    description: "",
    min: 0,
    max: 0,
    iiconwe: ``,
  });
  function handlelanguage() {
    const newLang = lang === "ar" ? "fr" : "ar";
    setlang(newLang);
    i18n.changeLanguage(newLang);
  }
  useEffect(() => {
    moment.locale(lang);
    setdateandtime(moment().format("MMM Do YY"));
  }, [lang]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=34.03&lon=-5.00&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`,
      )
      .then((respon) => {
        const minimum = Math.round(respon.data.main.temp_min);
        const maximum = Math.round(respon.data.main.temp_max);
        const descr = respon.data.weather[0].description;
        const iconwe = respon.data.weather[0].icon;

        settemperature({
          ...temperature,
          temp: Math.round(respon.data.main.temp),
          description: descr,
          min: minimum,
          max: maximum,
          iiconwe: `https://openweathermap.org/img/wn/${iconwe}@2x.png`,
        });
        console.log(minimum, maximum);
      })
      .catch(function (error) {});
  }, []);

  const dir = lang == "ar" ? "rtl" : "ltr";

  const pill = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "rgba(255,255,255,0.14)",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(6px)",
    padding: "6px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    margin: 0,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        dir={dir}
        style={{
          background:
            "linear-gradient(135deg, #4facfe 0%, #3a6fd8 50%, #6a3fd1 100%)",
          width: "100%",
          color: "white",
          padding: "28px",
          borderRadius: "28px",
          boxShadow: "0 20px 50px rgba(58, 111, 216, 0.35)",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* دوائر زخرفية */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            insetInlineEnd: "-60px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            insetInlineStart: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
            dir={dir}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: 700, letterSpacing: "0.5px" }}
            >
              {t("city")}
            </Typography>
            <Typography variant="h6" style={{ opacity: 0.85, fontWeight: 400 }}>
              {dateandtime}
            </Typography>
          </div>

          <hr
            style={{
              border: "none",
              height: "1px",
              background: "rgba(255,255,255,0.25)",
              margin: "20px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Typography
                  variant="h1"
                  style={{ fontWeight: 300, lineHeight: 1 }}
                >
                  {temperature.temp}
                </Typography>
                <img
                  src={temperature.iiconwe}
                  alt=""
                  style={{ width: "64px", height: "64px" }}
                />
              </div>
              <Typography
                variant="h6"
                style={{
                  opacity: 0.9,
                  fontWeight: 400,
                  textTransform: "capitalize",
                }}
              >
                {temperature.description}
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "14px",
                  flexWrap: "wrap",
                }}
              >
                <h5 style={pill}>
                  {t("min")}: {temperature.min}
                </h5>
                <h5 style={pill}>
                  {t("max")}: {temperature.max}
                </h5>
              </div>
            </div>

            <CloudIcon
              style={{
                fontSize: "150px",
                color: "rgba(255,255,255,0.92)",
                filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.25))",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "18px",
        }}
      >
        <Button
          variant="outlined"
          style={{
            color: "#3a6fd8",
            borderColor: "#3a6fd8",
            borderRadius: "999px",
            padding: "6px 28px",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
          onClick={handlelanguage}
        >
          {lang === "ar" ? "FR" : "AR"}
        </Button>
      </div>
    </div>
  );
}
