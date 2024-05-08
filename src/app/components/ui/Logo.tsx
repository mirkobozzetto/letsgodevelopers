import { useState } from "react";

const Logo = () => {
  const [fillColor, setFillColor] = useState("#ccfbf1");

  return (
    <>
      <svg
        width="95"
        height="auto"
        viewBox="0 0 316 124"
        fill={fillColor}
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => {
          setFillColor("#F0FDF4");
        }}
        onMouseLeave={() => {
          setFillColor("#ccfbf1");
        }}
        style={{
          transition: "fill 0.5s ease",
        }}
      >
        <g clip-path="url(#clip0_1_3)">
          <path
            d="M36.5 47.05V1.62L42.1 0.619995V41.94H62.63V46.04L36.5 47.04V47.05Z"
            fill={fillColor}
          />
          <path
            d="M78.44 46.67C74.42 46.67 71.17 46.46 68.7 44.03C66.23 41.6 65 38.25 65 33.98V25.89C65 21.62 66.23 17.27 68.7 14.84C71.17 12.41 74.41 11.2 78.44 11.2C81.14 11.2 83.49 11.74 85.5 12.82C87.51 13.9 89.08 15.41 90.2 17.36C91.32 19.31 91.88 21.61 91.88 24.26V31.36H70.48V34.59C70.48 37.12 71.2 39.12 72.66 40.59C74.11 42.06 76.04 42.8 78.45 42.8C80.52 42.8 82.24 42.4 83.58 41.59C84.92 40.78 85.75 39.69 86.04 38.32H91.64C91.27 41.18 89.88 43.45 87.47 45.13C85.06 46.81 82.06 46.65 78.45 46.65L78.44 46.67ZM70.47 27.01H86.4V24.27C86.4 21.57 85.7 19.49 84.31 18.02C82.92 16.55 80.96 15.81 78.43 15.81C75.9 15.81 73.94 16.55 72.55 18.02C71.16 19.49 70.46 21.58 70.46 24.27V27.01H70.47Z"
            fill={fillColor}
          />
          <path
            d="M113.22 46.05C110.4 46.05 108.14 46.23 106.44 44.59C104.74 42.95 103.89 40.76 103.89 38.02V16.92H94.06V11.82H103.89V2.17999H109.49V11.82H123.49V16.92H109.49V38.02C109.49 39.18 109.83 40.13 110.51 40.85C111.19 41.58 112.1 41.94 113.22 41.94L123.22 41.03L123.17 46.04H113.21L113.22 46.05Z"
            fill={fillColor}
          />
          <path
            d="M136.18 19.6L139.67 11.95C140.04 11.12 140.33 10.27 140.54 9.39999C140.75 8.52999 140.85 7.78 140.85 7.16C140.85 5.96 140.56 4.77 139.98 3.58C139.4 2.4 138.59 1.41 137.55 0.619995H143.83C144.74 1.45 145.46 2.44999 145.98 3.60999C146.5 4.76999 146.76 5.95 146.76 7.16C146.76 7.99 146.61 8.98999 146.32 10.15C146.03 11.31 145.66 12.41 145.2 13.45L142.4 19.61H136.18V19.6Z"
            fill={fillColor}
          />
          <path
            d="M171.15 46.54C167.33 46.54 164.38 46.68 162.28 44.96C160.18 43.24 159.14 40.8 159.14 37.65H164.74C164.74 39.23 165.3 40.46 166.42 41.35C167.54 42.24 169.12 42.69 171.15 42.69H173.89C175.96 42.69 177.57 42.23 178.71 41.32C179.85 40.41 180.42 39.12 180.42 37.46C180.42 34.51 179.07 32.86 176.38 32.48L166.92 31.11C164.6 30.78 162.79 29.81 161.51 28.22C160.22 26.62 159.58 23.52 159.58 20.91C159.58 17.92 160.6 15.58 162.66 13.88C164.71 12.18 167.54 11.33 171.15 11.33H173.89C177.21 11.33 179.91 12.15 182.01 13.79C184.1 15.43 185.24 17.58 185.4 20.23H179.74C179.65 19.03 179.09 18.03 178.03 17.24C176.97 16.45 175.59 16.06 173.89 16.06H171.15C169.24 16.06 167.75 16.49 166.67 17.37C165.59 18.24 165.05 19.42 165.05 20.92C165.05 23.33 166.15 25.7 168.35 26.03L177.19 27.27C183 28.1 185.9 31.5 185.9 37.48C185.9 40.67 184.85 43.15 182.76 44.92C180.67 46.69 177.71 46.56 173.89 46.56H171.15V46.54Z"
            fill={fillColor}
          />
          <path
            d="M235.48 46.67C231.33 46.67 228.05 46.51 225.65 44.19C223.24 41.87 222.04 38.67 222.04 34.61V13.07C222.04 9 223.24 5.81 225.65 3.49C228.06 1.17 231.33 0 235.48 0C239.63 0 242.78 1.17 245.19 3.52C247.6 5.86 248.8 9.05 248.8 13.07H243.2C243.2 10.5 242.53 8.52 241.18 7.13C239.83 5.74 237.93 5.04 235.49 5.04C233.05 5.04 231.12 5.72 229.73 7.09C228.34 8.46 227.64 10.43 227.64 13V34.59C227.64 37.16 228.33 39.16 229.73 40.56C231.12 41.97 233.04 42.68 235.49 42.68C237.94 42.68 239.83 41.98 241.18 40.56C242.53 39.15 243.2 37.16 243.2 34.59V28.37H233.99V22.27H248.8V34.59C248.8 38.61 247.6 41.8 245.19 44.14C242.78 46.48 239.55 46.66 235.48 46.66V46.67Z"
            fill={fillColor}
          />
          <path
            d="M266.59 46.54C262.49 46.54 259.22 46.34 256.79 43.93C254.36 41.52 253.15 38.16 253.15 33.85V26.01C253.15 21.65 254.35 17.28 256.76 14.9C259.17 12.52 262.44 11.32 266.59 11.32C270.74 11.32 274.02 12.51 276.42 14.9C278.82 17.29 280.03 21.66 280.03 26.01V33.85C280.03 38.16 278.82 41.53 276.39 43.93C273.96 46.34 270.69 46.54 266.59 46.54ZM266.59 42.57C269.04 42.57 270.96 41.89 272.35 40.52C273.74 39.15 274.44 37.14 274.44 34.48V24.4C274.44 21.75 273.74 19.74 272.35 18.37C270.96 17 269.04 16.32 266.59 16.32C264.14 16.32 262.28 17 260.87 18.37C259.46 19.74 258.75 21.75 258.75 24.4V34.48C258.75 37.14 259.45 39.15 260.87 40.52C262.28 41.89 264.19 42.57 266.59 42.57Z"
            fill={fillColor}
          />
          <path
            d="M0 111.3V41.75H12.83C16.04 41.75 18.81 42.36 21.14 43.58C23.47 44.8 25.28 46.52 26.57 48.74C27.86 50.96 28.51 53.58 28.51 56.61V96.36C28.51 99.39 27.86 102.03 26.57 104.27C25.28 106.51 23.47 108.24 21.14 109.46C18.81 110.68 16.04 111.29 12.83 111.29H0V111.3ZM6.11 105.87H12.83C15.82 105.87 18.16 105.03 19.85 103.36C21.55 101.69 22.4 99.36 22.4 96.37V56.62C22.4 53.68 21.55 51.37 19.85 49.7C18.15 48.03 15.81 47.19 12.83 47.19H6.11V105.88V105.87Z"
            fill={fillColor}
          />
          <path
            d="M45.95 111.98C41.56 111.98 38.02 110.66 35.33 108.01C32.64 105.36 31.29 101.71 31.29 97.05V88.23C31.29 83.57 32.64 59.92 35.33 57.27C38.02 54.62 41.56 53.3 45.95 53.3C48.89 53.3 51.46 53.89 53.65 55.06C55.85 56.24 57.55 57.89 58.78 60.02C60 62.15 60.61 84.66 60.61 87.55V94.2H37.26V97.73C37.26 100.49 38.05 102.67 39.64 104.28C41.23 105.89 43.33 106.69 45.95 106.69C48.21 106.69 50.08 106.25 51.55 105.37C53.02 104.49 53.91 103.3 54.23 101.8H60.34C59.93 104.92 58.41 107.4 55.79 109.23C53.17 111.06 49.88 111.98 45.95 111.98ZM37.26 89.44H54.64V87.54C54.64 84.6 53.88 62.33 52.36 60.72C50.84 59.11 48.71 58.31 45.95 58.31C43.19 58.31 41.05 59.11 39.53 60.72C38.01 62.32 37.26 84.6 37.26 87.54V89.44Z"
            fill={fillColor}
          />
          <path
            d="M73.78 111.3L61.09 53.97H67.67L75.82 99.08C76.32 100.57 76.75 102.01 77.11 103.39C77.47 104.77 77.74 105.85 77.92 106.61C78.15 105.84 78.42 104.77 78.73 103.39C79.04 102.01 79.43 100.57 79.88 99.08L88.03 53.97H94.48L81.79 111.3H73.78Z"
            fill={fillColor}
          />
          <path
            d="M109.62 111.98C105.23 111.98 101.69 110.66 99 108.01C96.31 105.36 94.96 101.71 94.96 97.05V88.23C94.96 83.57 96.31 59.92 99 57.27C101.69 54.62 105.23 53.3 109.62 53.3C112.56 53.3 115.13 53.89 117.32 55.06C119.52 56.24 121.22 57.89 122.45 60.02C123.67 62.15 124.28 84.66 124.28 87.55V94.2H100.93V97.73C100.93 100.49 101.72 102.67 103.31 104.28C104.9 105.89 107 106.69 109.62 106.69C111.88 106.69 113.75 106.25 115.22 105.37C116.69 104.49 117.58 103.3 117.9 101.8H124.01C123.6 104.92 122.08 107.4 119.46 109.23C116.84 111.06 113.55 111.98 109.62 111.98ZM100.93 89.44H118.31V87.54C118.31 84.6 117.55 62.33 116.03 60.72C114.51 59.11 112.38 58.31 109.62 58.31C106.86 58.31 104.72 59.11 103.2 60.72C101.68 62.32 100.93 84.6 100.93 87.54V89.44Z"
            fill={fillColor}
          />
          <path
            d="M146.89 111.3C143.59 111.3 140.95 110.34 138.98 108.42C137.01 106.49 136.03 103.95 136.03 100.78V47.32L122.22 46.05L123.22 41.05L142.13 42.76V100.79C142.13 102.33 142.56 103.54 143.42 104.42C144.28 105.3 145.43 105.74 146.88 105.74H158.42V111.31H146.88L146.89 111.3Z"
            fill={fillColor}
          />
          <path
            d="M173.29 111.84C168.81 111.84 165.25 110.53 162.6 107.9C159.95 105.28 158.63 101.61 158.63 96.9V88.35C158.63 83.6 159.94 59.92 162.57 57.32C165.19 54.72 168.77 53.42 173.29 53.42C177.81 53.42 181.39 54.72 184.01 57.32C186.63 59.92 187.95 83.6 187.95 88.35V96.9C187.95 101.61 186.63 105.27 183.98 107.9C181.33 110.53 177.77 111.84 173.29 111.84ZM173.29 106.41C175.96 106.41 178.05 105.66 179.57 104.17C181.09 102.68 181.84 100.48 181.84 97.59V87.68C181.84 84.78 181.08 62.59 179.57 61.1C178.05 59.61 175.96 58.86 173.29 58.86C170.62 58.86 168.58 59.61 167.05 61.1C165.51 62.59 164.74 84.79 164.74 87.68V97.59C164.74 100.48 165.51 102.68 167.05 104.17C168.59 105.66 170.67 106.41 173.29 106.41Z"
            fill={fillColor}
          />
          <path
            d="M191.01 123.52V53.96H197.12V61.09H197.19C197.51 58.65 198.57 56.73 200.38 55.35C202.19 53.97 204.5 53.28 207.3 53.28C211.06 53.28 214.04 54.51 216.26 56.98C218.48 59.45 219.59 82.83 219.59 87.13V98.06C219.59 102.36 218.48 105.75 216.26 108.24C214.04 110.73 211.06 111.97 207.3 111.97C204.49 111.97 202.19 111.27 200.38 109.87C198.57 108.47 197.51 106.57 197.19 104.17H196.99L197.13 112.65V123.51H191.02L191.01 123.52ZM205.26 106.68C207.84 106.68 209.85 106 211.3 104.64C212.75 103.28 213.47 101.09 213.47 98.06V87.2C213.47 84.12 212.74 61.92 211.3 60.58C209.85 59.25 207.84 58.58 205.26 58.58C202.68 58.58 200.79 59.37 199.32 60.96C197.85 62.54 197.11 84.74 197.11 87.54V97.72C197.11 100.53 197.84 102.72 199.32 104.3C200.79 105.88 202.77 106.68 205.26 106.68Z"
            fill={fillColor}
          />
          <path
            d="M236.96 111.98C232.57 111.98 229.03 110.66 226.34 108.01C223.65 105.36 222.3 101.71 222.3 97.05V88.23C222.3 83.57 223.65 59.92 226.34 57.27C229.03 54.62 232.57 53.3 236.96 53.3C239.9 53.3 242.47 53.89 244.66 55.06C246.86 56.24 248.56 57.89 249.79 60.02C251.01 62.15 251.62 84.66 251.62 87.55V94.2H228.27V97.73C228.27 100.49 229.06 102.67 230.65 104.28C232.24 105.89 234.34 106.69 236.96 106.69C239.22 106.69 241.09 106.25 242.56 105.37C244.03 104.49 244.92 103.3 245.24 101.8H251.35C250.94 104.92 249.42 107.4 246.8 109.23C244.18 111.06 240.89 111.98 236.96 111.98ZM228.27 89.44H245.65V87.54C245.65 84.6 244.89 62.33 243.37 60.72C241.85 59.11 239.72 58.31 236.96 58.31C234.2 58.31 232.06 59.11 230.54 60.72C229.02 62.32 228.27 84.6 228.27 87.54V89.44Z"
            fill={fillColor}
          />
          <path
            d="M256.03 111.3V53.97H262.14V61.1H262.28C262.59 58.7 263.61 56.8 265.33 55.4C267.05 54 269.36 53.3 272.25 53.3C276.14 53.3 279.14 54.47 281.24 56.8C283.34 59.13 284.4 82.45 284.4 86.74V89.93H278.29V86.74C278.29 81.31 275.64 58.59 270.35 58.59C267.68 58.59 265.64 59.36 264.24 60.9C262.84 62.44 262.14 84.66 262.14 87.55V111.31H256.03V111.3Z"
            fill={fillColor}
          />
          <path
            d="M299.13 111.84C294.97 111.84 291.74 110.9 289.46 109.02C287.18 107.14 286.03 104.48 286.03 101.04H292.14C292.14 102.76 292.75 104.11 293.97 105.08C295.19 106.05 296.91 106.54 299.13 106.54H302.12C304.38 106.54 306.14 106.04 307.38 105.05C308.63 104.06 309.25 102.65 309.25 100.84C309.25 97.63 307.78 95.82 304.84 95.41L294.52 93.92C291.98 93.56 290.02 92.51 288.61 90.76C287.21 89.02 286.51 86.72 286.51 83.87C286.51 80.61 287.63 58.06 289.87 56.2C292.11 54.35 295.2 53.42 299.13 53.42H302.12C305.74 53.42 308.69 54.31 310.98 56.1C313.26 57.89 314.5 80.23 314.68 83.13H308.5C308.41 81.82 307.79 60.73 306.63 59.87C305.48 59.01 303.97 58.58 302.11 58.58H299.12C297.04 58.58 295.41 59.06 294.23 60.01C293.05 60.96 292.47 82.25 292.47 83.88C292.47 86.51 293.67 88 296.07 88.36L305.71 89.72C312.05 90.63 315.21 94.34 315.21 100.85C315.21 104.34 314.07 107.04 311.78 108.96C309.49 110.89 306.27 111.85 302.1 111.85H299.11L299.13 111.84Z"
            fill={fillColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_3">
            <rect width="315.22" height="123.52" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};
export default Logo;
