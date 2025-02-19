
interface allThemes {
  default: oneTheme;
  mcdonals: oneTheme;
  chiviri4ta: oneTheme;

}

interface oneTheme {
  company: number;
  colors: {
    background: string;
    colorCode?: string;
    backgroundButton?: string;
    inputBackground: string;
    borderColor?:string;
    fontColor: string;
    primaryOutline: string;
    colorRecod?: string;
    progreSucess: string,
    progreWarning: string,
    progreDanger: string,
    modalTextColor: string
  };
  font?: {
    fontFamily: string;
  };
  littleCord?: string;
  backgroundImage? : string;
  images?: {
    title?:string;
    arrow:string;
    play: string;
    pause: string;
    star?:string;
    aww?: string;
    customIcon?: string;
    welcome?: string;
    welcome2?: string;
    writeSanta?:string;
    choose?: string;
    confirmation?: string;
    yay?: string;
    error404?: string;
    face?:string;
    x?:string;
    whatsapp?:string
  }
}


export const themes: allThemes = {
  default: {
    company: 1, //number of company, talk with be and ask this number
    colors: {
      borderColor:"#C40C2E",
      backgroundButton: "transparent",
      background: "#FFF", //white
      inputBackground: "#E8E8E8", //grayDarkWithOpacity
      colorCode:  "#1E1E1E",
      fontColor: "#1E1E1E", // grayDark
      primaryOutline: "#C40C2E", // redSanta
      colorRecod: "#C40C2E",
      progreSucess: "text-sucess",
      progreWarning: "text-warning",
      progreDanger: "text-danger",
      modalTextColor: "#1E1E1E",
    },
    font: {
      fontFamily: "Roboto, sans-serif",
    },
    littleCord: "/assets/images/colores.svg",
    images: {
      play : '/assets/icons/play.svg',
      pause : '/assets/icons/pause.svg',
      title: "/assets/icons/tm.svg",
      arrow : "/assets/icons/arrow.svg",
      star:"/assets/icons/Star1.svg",
      aww: "/assets/icons/gallejengibre.svg",
      customIcon: "",
      writeSanta:"/assets/icons/Group234.svg",
      choose: "/assets/icons/sello1.svg",
      welcome: "/assets/icons/Group234.svg",
      welcome2: "/assets/icons/santaGreen.svg",
      confirmation: "/assets/icons/santaGreen.svg",
      yay: "/assets/icons/sello1.svg",
      error404: "/assets/icons/luces404.svg",
      face:"/assets/icons/face.svg",
      whatsapp:"/assets/icons/whatsapp.svg",
      x: "/assets/icons/x.svg"
    }
  },
  mcdonals: {
    company: 2,
    colors: {
      background: "#FFF", //white
      colorRecod: "#FFF",
      inputBackground: "#980005", //grayDarkWithOpacity
      fontColor: "#FFF", // grayDark
      primaryOutline: "#DB0007", // redSanta
      colorCode: "#FFF",
      progreDanger: "text-white", //bootstrap class
      progreWarning: "text-white",
      progreSucess: "text-white",
      modalTextColor: "#DB0007",
    },
    backgroundImage:'/assets/custom/mcDonalds/fondo-mc.png',
    font: {
      fontFamily: "Poppins, sans-serif",
    },
    littleCord: "",
    images: {
      play : '/assets/custom/mcDonalds/playMc.svg',
      pause : '/assets/custom/mcDonalds/pauseMc.svg',
      arrow : "/assets/custom/mcDonalds/arrowWhite.svg",
      title: "/assets/custom/mcDonalds/titleMcD.svg",
      star:"/assets/custom/mcDonalds/StarMc.svg",
      writeSanta:"/assets/custom/mcDonalds/Group232.svg",
      confirmation: "/assets/custom/mcDonalds/noel_white.svg",
      welcome: "/assets/custom/mcDonalds/Group232.svg",
      welcome2: "/assets/custom/mcDonalds/noel_white.svg",
      choose: "/assets/custom/mcDonalds/polonorte.svg",
      yay: "/assets/custom/mcDonalds/polonorte.svg",
      customIcon: "/assets/custom/mcDonalds/mc-logo.svg",
      x:"/assets/custom/mcDonalds/xMc.svg",
      whatsapp:"/assets/custom/mcDonalds/whatsappMc.svg",
      face: "/assets/custom/mcDonalds/faceMc.svg",
    }
  },
  chiviri4ta: {
    company: 3,
    colors: {
      background: "#FFF", //white
      inputBackground: "#E8E8E8", //grayDarkWithOpacity
      fontColor: "#A71C1B", // grayDark
      primaryOutline: "#A71C1B", // redSanta
      borderColor:"#A71C1B",
      colorCode: "#A71C1B",
      colorRecod: "#0B7B75",
      progreDanger: "text-white",
      progreWarning: "text-white",
      progreSucess: "text-white",
      modalTextColor: "#A71C1B"
    },
    littleCord: "/assets/custom/chiviri4ta/Group.svg",
    font: {
      fontFamily: "Courier, sans-serif",
    },
    images: {
      title: "/assets/custom/chiviri4ta/mensajechirivi4ta.svg",
      star:"/assets/custom/chiviri4ta/arbolito.svg",
      customIcon: "/assets/custom/chiviri4ta/titleChivi.svg",
      choose: "/assets/custom/chiviri4ta/Group243.svg",
      arrow : "/assets/custom/chiviri4ta/arrowChivi.svg",
      writeSanta:"/assets/custom/chiviri4ta/santilla.svg",
      confirmation: "/assets/custom/chiviri4ta/Santa2.svg",
      play : '/assets/custom/chiviri4ta/playChivi.svg',
      pause : '/assets/custom/chiviri4ta/pauseChivi.svg',
      yay: "/assets/custom/chiviri4ta/santilla2.svg",
      welcome: "/assets/custom/chiviri4ta/santilla.svg",
      welcome2: "/assets/custom/chiviri4ta/santilla2.svg",
      x:"/assets/custom/chiviri4ta/xChivi.svg",
      whatsapp:"/assets/custom/chiviri4ta/whatsappChivi.svg",
      face: "/assets/custom/chiviri4ta/faceChivi.svg",
    }
    },
  }



