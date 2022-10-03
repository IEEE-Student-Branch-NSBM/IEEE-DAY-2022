/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "320px",
      xs: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        The_Black_Sugare: "The_Black_Sugare,cursive",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/countdownbg.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      container: {
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "1.5rem",
          xxl: "7.563rem",
          "2xl": "8rem",
          "3xl": "18rem",
        },
        screens: {
          xs: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          xxl: "1440px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
        center: true,
      },
      width: {
        47.25: "11.813rem", // 189px
        49.25: "12.313rem", // 197px
        55.5: "13.875rem", // 222px
        74.5: "18.625rem", //298px
        84.832: "21.208rem", //339.33px

        88: "22rem", //352px
        88.25: "22.063rem", //353px
        104.832: "26.208rem", // 419.33px
      },
      height: {
        14: "3.5rem", // 59px
        15.5: "3.875rem", // 62px
        37.5: "9.375rem", //150px
        55.25: "13.813rem", //221px
        85: "20.5rem", //328px
        92.75: "23.188rem", //371px
        99: "22rem", //396px
        115.75: "28.938rem", // 463px
      },
      margin: {
        "-15": "-3.75rem", //-60px
        2: "0.5rem", //8px
        2.5: "0.625rem", //10px
        4.5: "1.125rem", //18px
        4.8: "1.2rem", //19.2px
        5: "1.25rem", //20px
        5.75: "1.438rem", // 23px
        6.25: "1.563rem", //25px
        7.5: "1.875rem", //30px
        8.75: "2.188rem", //35px
        11: "2.75rem", //44px
        11.5: "2.875rem", //46px
        12: "3rem", //48px
        12.5: "3.125rem", //50px
        13.75: "3.438rem", //55px
        15: "3.75rem", //60px
        16.25: "4.063rem", //65px
        17: "4.25rem", //68px
        18.5: "4.625rem", //74px
        19.5: "4.875rem", // 48px
        20: "5rem", //80px
        20.75: "5.188rem", // 83px
        22: "5.5rem", //88px
        22.5: "5.625rem", //90px
        24.95: "6.237rem", // 99.8px
        30: "7.5rem", //120px
        31: "7.75rem", //124px
        32.75: "8.188rem", // 131px
        37.5: "9.375rem", //150px
        38.5: "9.625rem", //154px
        40.5: "10.125rem", //162px
        47: "11.75rem", //188px
        50: "12.5rem", //50px
        13.578: "3.394rem", //54.31px
        58.5: "14.625rem", //234px
        62.5: "15.625rem", //250px
        68.5: "17.125rem", //274px
        75: "18.75rem", //300px
      },
      borderRadius: {
        4: "1rem", // 16px
        39.108: "9.777rem", // 156.454px
      },
      zIndex: {
        99: "99",
        999: "999",
      },
      fontSize: {
        "4xxs": "4px",
        "5xxs": "5px",
        "6xxs": "6px",
        "7xxs": "7px",
        xxxxs: "8px",
        xxxs: "9px",
        xxsm: "10px",
        xxs: "11px",
        xs: "12px",
        xsl: "13px",
        xsxl: "14px",
        sm: "15px",
        base: "16px",
        md: "17px",
        lg: "18px",
        xl: "19px",
        "2xl": "20px",
        "4xl": "22px",
        "5xl": "24px",
        "6xl": "26px",
        "7xl": "28px",
        "8xl": "30px",
        "9xl": "32px",
        "10xl": "34px",
        "11xl": "36px",
        "11.5xl": "38px",
        "12xl": "40px",
        "13xl": "46px",
        "14xl": "48px",
        "15xl": "50px",
        "16xl": "52px",
        "17xl": "54px",
        "18xl": "56px",
        "18.8xl": "70px",
        "19xl": "80px",
        "20xl": "84px",
        "21xl": "92px",
        "22xl": "96px",
        "23xl": "100px",
        "24xl": "104px",
        "25xl": "108px",
        "26xl": "112px",
      },
      zIndex: {
        "-10": "-10",
        100: "100",
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },

      lineHeight: {
        5.25: "1.3125rem", //21px
        5.5: "1.375rem", //22px
        5.75: "1.4375rem", //23px
        6.5: "1.625rem", //26px
        6.75: "1.688rem", //6.75
        7.5: "1.875rem", //30px
        8.25: "2.063rem",
        8.5: "2.125rem", //34px
        8.75: "2.1875rem", //35px
        9.5: "2.375rem", //38px
        10.5: "2.625rem", //42px
        11: "2.75rem", //44px
        11.25: "2.813rem", //45px
        12.5: "3.125rem", //50px
        14: "3.5rem", //56px
        15: "3.75rem", //60px
        16: "4rem", //64px
        16.25: "4.0625rem", //65px
        17.5: "4.375rem", //70px
        18: "4.5rem",
        18.75: "4.688rem", //75px
        20: "5rem", //80px
        21: "5.25rem", //84px
        22: "5.5rem", //88px
        26: "6.5rem", //104px
        26.25: "6.563rem", //105px
      },
      colors: {
        brown: {
          10: "#783903",
          20: "#805938",
        },
        gray: {
          10: "#D3D3D3",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
