interface IProps {
  width?: number;
  height?: number;
  stroke?: string;
}

export const LoftSign: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || (height || 220) / 2.2}
      height={height || (width || 100) * 2.2}
      stroke={stroke || "currentColor"}
      viewBox="0 0 108 233"
      fill="none"
    >
      <g filter="url(#filter0_d_2_23)">
        <path d="M4 0H104V224.964H4V0Z" fill="black" />
      </g>
      <path
        d="M31.9889 203.391C32.5782 203.391 33.0375 203.152 33.3669 202.676C33.6962 202.199 33.8652 201.566 33.8739 200.778C33.8565 199.963 33.6745 199.33 33.3279 198.88C32.9812 198.429 32.5349 198.204 31.9889 198.204C30.8535 198.212 30.2469 198.936 30.1689 200.375V201.077C30.2989 202.619 30.9055 203.391 31.9889 203.391ZM30.1689 198.334C30.6802 197.692 31.3605 197.372 32.2099 197.372C33.0592 197.372 33.7612 197.671 34.3159 198.269C34.8792 198.867 35.1609 199.69 35.1609 200.739C35.1609 201.779 34.8792 202.624 34.3159 203.274C33.7612 203.915 33.0592 204.236 32.2099 204.236C31.3692 204.236 30.6889 203.898 30.1689 203.222V204.08H29.0769V195.721H28.1019V195.461L29.6489 194.421H30.1689V198.334ZM39.2085 204.288C38.3332 204.288 37.5922 203.95 36.9855 203.274C36.3789 202.598 36.0755 201.787 36.0755 200.843C36.0755 199.898 36.3789 199.079 36.9855 198.386C37.5922 197.692 38.3332 197.346 39.2085 197.346C40.0925 197.346 40.8509 197.692 41.4835 198.386C42.1249 199.079 42.4455 199.898 42.4455 200.843C42.4455 201.787 42.1249 202.598 41.4835 203.274C40.8509 203.95 40.0925 204.288 39.2085 204.288ZM41.1585 200.83C41.1585 200.084 40.9505 199.443 40.5345 198.906C40.1272 198.36 39.6592 198.087 39.1305 198.087C38.6019 198.087 38.1599 198.364 37.8045 198.919C37.4579 199.465 37.2845 200.115 37.2845 200.869C37.2845 201.614 37.4882 202.251 37.8955 202.78C38.3115 203.3 38.7752 203.56 39.2865 203.56C39.8065 203.56 40.2485 203.291 40.6125 202.754C40.9765 202.216 41.1585 201.575 41.1585 200.83ZM47.006 197.359H49.073V203.183C49.125 203.243 49.19 203.274 49.268 203.274C49.32 203.274 49.4803 203.105 49.749 202.767V203.352C49.6103 203.924 49.3287 204.21 48.904 204.21C48.4793 204.21 48.1717 203.902 47.981 203.287V203.001C47.6603 203.824 46.9497 204.236 45.849 204.236C44.4017 204.227 43.678 203.157 43.678 201.025V197.944H42.703V197.359H44.757V200.765C44.7743 202.585 45.173 203.495 45.953 203.495C47.305 203.495 47.981 202.615 47.981 200.856V197.944H47.006V197.359ZM53.6979 204.158C52.1985 204.158 51.4489 203.555 51.4489 202.351V198.529H50.2659V197.905H50.7599C51.4012 197.87 51.7652 197.333 51.8519 196.293L52.5539 195.487V197.905H54.0879V198.529H52.5539V201.896C52.5539 202.563 52.6535 202.996 52.8529 203.196C53.0609 203.386 53.3555 203.482 53.7369 203.482C54.1182 203.482 54.4085 203.408 54.6079 203.261V204.08C54.4779 204.132 54.3045 204.158 54.0879 204.158H53.6979ZM56.1697 195.89C56.005 195.716 55.9227 195.513 55.9227 195.279C55.9227 195.045 56.005 194.845 56.1697 194.681C56.343 194.507 56.5467 194.421 56.7807 194.421C57.0147 194.421 57.214 194.507 57.3787 194.681C57.552 194.845 57.6387 195.045 57.6387 195.279C57.6387 195.513 57.552 195.716 57.3787 195.89C57.214 196.054 57.0147 196.137 56.7807 196.137C56.5467 196.137 56.343 196.054 56.1697 195.89ZM57.3007 203.066C57.3614 203.326 57.5174 203.456 57.7687 203.456H58.3147V204.041H55.1297V203.456L55.8187 203.443C55.992 203.408 56.1264 203.282 56.2217 203.066V198.581H55.2467V198.321L56.7937 197.281H57.3007V203.066ZM63.7997 198.23V197.437L63.8127 197.45V197.437H64.8917V205.276C64.987 205.492 65.1213 205.618 65.2947 205.653L65.9837 205.666V206.251H62.7207V205.666H63.3447C63.596 205.666 63.752 205.536 63.8127 205.276V203.378C63.3187 203.941 62.6947 204.227 61.9407 204.236H61.9017C61.0177 204.236 60.2897 203.932 59.7177 203.326C59.1543 202.719 58.8727 201.896 58.8727 200.856C58.8727 199.807 59.15 198.962 59.7047 198.321C60.268 197.671 61.0003 197.346 61.9017 197.346H61.9407C62.7033 197.354 63.323 197.649 63.7997 198.23ZM62.0447 198.191C61.4813 198.191 61.0437 198.429 60.7317 198.906C60.4197 199.382 60.2593 200.015 60.2507 200.804C60.268 201.618 60.4413 202.251 60.7707 202.702C61.1 203.152 61.5247 203.378 62.0447 203.378C63.1193 203.369 63.6957 202.645 63.7737 201.207V200.505C63.6523 198.962 63.076 198.191 62.0447 198.191ZM70.4162 197.359H72.4832V203.183C72.5352 203.243 72.6002 203.274 72.6782 203.274C72.7302 203.274 72.8905 203.105 73.1592 202.767V203.352C73.0205 203.924 72.7388 204.21 72.3142 204.21C71.8895 204.21 71.5818 203.902 71.3912 203.287V203.001C71.0705 203.824 70.3598 204.236 69.2592 204.236C67.8118 204.227 67.0882 203.157 67.0882 201.025V197.944H66.1132V197.359H68.1672V200.765C68.1845 202.585 68.5832 203.495 69.3632 203.495C70.7152 203.495 71.3912 202.615 71.3912 200.856V197.944H70.4162V197.359ZM79.864 203.599C79.1013 204.023 78.278 204.236 77.394 204.236C77.3767 204.236 77.3593 204.236 77.342 204.236C76.2933 204.236 75.4657 203.932 74.859 203.326C74.261 202.719 73.962 201.878 73.962 200.804C73.962 199.729 74.2567 198.906 74.846 198.334C75.496 197.718 76.315 197.411 77.303 197.411C78.2997 197.411 79.0277 197.723 79.487 198.347C79.955 198.971 80.189 199.759 80.189 200.713V201.025H75.197C75.249 201.701 75.4787 202.286 75.886 202.78C76.3193 203.282 76.926 203.534 77.706 203.534C78.486 203.534 79.2227 203.278 79.916 202.767L79.864 203.599ZM79.123 200.349C79.097 198.927 78.5163 198.217 77.381 198.217H77.355C76.1157 198.217 75.3963 198.927 75.197 200.349H79.123Z"
        fill="white"
      />
      <path
        d="M63.8077 179.169V182.641H44.2077V179.169H63.8077Z"
        fill="white"
      />
      <path
        d="M37.793 163.652C34.7424 163.652 32.2117 163.184 30.201 162.248C29.0917 161.797 28.2424 161.312 27.653 160.792L29.473 157.672H29.993C30.4437 158.053 31.0677 158.452 31.865 158.868C33.529 159.63 35.3317 160.012 37.273 160.012C40.1157 160.012 42.213 159.405 43.565 158.192C44.917 156.944 45.593 155.124 45.593 152.732C45.593 150.34 44.917 148.537 43.565 147.324C42.213 146.076 40.1157 145.452 37.273 145.452H31.813V141.812L43.513 130.372H28.433V126.732H49.753V130.372L38.053 141.812C42.2477 141.812 45.4197 142.782 47.569 144.724C49.7184 146.63 50.793 149.3 50.793 152.732C50.793 156.233 49.7184 158.937 47.569 160.844C45.4197 162.716 42.161 163.652 37.793 163.652ZM64.313 163.652C61.2624 163.652 58.7317 163.184 56.721 162.248C55.6117 161.797 54.7624 161.312 54.173 160.792L55.993 157.672H56.513C56.9637 158.053 57.5877 158.452 58.385 158.868C60.049 159.63 61.8517 160.012 63.793 160.012C69.1664 160.012 71.853 157.412 71.853 152.212C71.853 147.012 69.1664 144.412 63.793 144.412H57.553L55.993 142.852V126.732H75.701V130.372H61.193V140.772H64.573C68.6984 140.772 71.801 141.76 73.881 143.736C75.9957 145.677 77.053 148.502 77.053 152.212C77.053 155.921 75.9957 158.764 73.881 160.74C71.7664 162.681 68.577 163.652 64.313 163.652Z"
        fill="white"
      />
      <path
        d="M28.0696 57.2723V18.7269H29.2741V56.0678H48.5469V57.2723H28.0696ZM86.1183 37.9996C86.1183 41.9269 85.4471 45.3774 84.1045 48.3512C82.7619 51.3249 80.8924 53.6461 78.4958 55.3149C76.0993 56.9712 73.32 57.7993 70.1581 57.7993C66.9836 57.7993 64.1981 56.9649 61.8016 55.2961C59.405 53.6273 57.5355 51.3061 56.1929 48.3323C54.8629 45.3586 54.1979 41.9144 54.1979 37.9996C54.1979 34.0723 54.8692 30.628 56.2117 27.6669C57.5543 24.6931 59.4239 22.3719 61.8204 20.7031C64.2169 19.0343 66.9962 18.1999 70.1581 18.1999C73.32 18.1999 76.0993 19.0343 78.4958 20.7031C80.8924 22.3593 82.7619 24.6743 84.1045 27.648C85.4471 30.6218 86.1183 34.0723 86.1183 37.9996ZM84.9138 37.9996C84.9138 34.3107 84.2927 31.0735 83.0505 28.2879C81.8083 25.4899 80.0768 23.3129 77.8559 21.7571C75.6476 20.1886 73.0816 19.4044 70.1581 19.4044C67.2471 19.4044 64.6812 20.1824 62.4603 21.7382C60.252 23.2816 58.5204 25.4522 57.2657 28.2503C56.0235 31.0358 55.4024 34.2856 55.4024 37.9996C55.4024 41.6634 56.0173 44.8944 57.2469 47.6924C58.4765 50.4779 60.1955 52.6612 62.4039 54.2421C64.6247 55.8106 67.2095 56.5948 70.1581 56.5948C73.0816 56.5948 75.6539 55.8168 77.8747 54.261C80.0956 52.6925 81.8271 50.5156 83.0693 47.7301C84.3115 44.932 84.9263 41.6885 84.9138 37.9996Z"
        fill="white"
      />
      <path
        d="M28.7693 111.716V73.1702H49.4724V74.3747H29.9739V91.8406H47.6656V93.0452H29.9739V111.716H28.7693ZM56.9867 74.3747V73.1702H83.035V74.3747H70.6131V111.716H69.4086V74.3747H56.9867Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_2_23"
          x="0"
          y="0"
          width="108"
          height="232.964"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_23"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_23"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const LoftLogo_1: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 102 100"
      fill="none"
      stroke={stroke || "currentColor"}
    >
      <circle cx="50" cy="50" r="50" fill="black" />
      <path
        d="M51.6097 65.1656C48.9097 65.1656 46.6147 64.7606 44.7247 63.9506C43.8247 63.5906 43.0447 63.1706 42.3847 62.6906L44.4097 59.0906H44.8597C45.1597 59.3906 45.6697 59.7356 46.3897 60.1256C47.7697 60.7856 49.3597 61.1156 51.1597 61.1156C55.5097 61.1156 57.6847 59.3156 57.6847 55.7156C57.6847 51.8156 55.5097 49.8656 51.1597 49.8656H45.9847V45.8156L55.4347 37.2656H43.0597V33.2156H62.6347V37.2656L52.7347 45.8156C55.1347 45.8156 57.1747 46.2506 58.8547 47.1206C60.5347 47.9606 61.8097 49.1306 62.6797 50.6306C63.5497 52.1306 63.9847 53.8256 63.9847 55.7156C63.9847 58.6256 62.9497 60.9356 60.8797 62.6456C58.8097 64.3256 55.7197 65.1656 51.6097 65.1656ZM76.3386 65.1656C73.6386 65.1656 71.3436 64.7606 69.4536 63.9506C68.5536 63.5906 67.7736 63.1706 67.1136 62.6906L69.1386 59.0906H69.5886C69.8886 59.3906 70.3986 59.7356 71.1186 60.1256C72.4986 60.7856 74.0886 61.1156 75.8886 61.1156C79.9386 61.1156 81.9636 59.0906 81.9636 55.0406C81.9636 50.9906 79.9386 48.9656 75.8886 48.9656H70.2186L68.4636 47.1206V33.2156H86.6436V36.8156H74.7636V44.9156H76.5636C80.4636 44.9156 83.3886 45.8006 85.3386 47.5706C87.2886 49.3106 88.2636 51.8006 88.2636 55.0406C88.2636 58.2506 87.2586 60.7406 85.2486 62.5106C83.2686 64.2806 80.2986 65.1656 76.3386 65.1656Z"
        fill="white"
      />
      <path
        d="M19.875 64.7156V32.7156H22.7969V62.0906H38.0469V64.7156H19.875Z"
        fill="white"
      />
    </svg>
  );
};

export const LoftLogo: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      stroke={stroke || "currentColor"}
      width={width || height || "60"}
      height={height || width || "60"}
      viewBox="-1 -1 62 62"
      fill="none"
    >
      <circle cx="30" cy="30" r="30" fill="black" />
      <path
        d="M29.9744 40.6465C29.0224 40.6465 28.0424 40.5625 27.0344 40.3945L27.5384 36.9225C28.6211 37.1092 29.5544 37.2025 30.3384 37.2025C31.8318 37.2025 33.0264 36.8852 33.9224 36.2505C34.8184 35.6158 35.2664 34.7852 35.2664 33.7585C35.2664 33.1052 35.0798 32.5918 34.7064 32.2185C34.3331 31.8452 33.8104 31.6585 33.1384 31.6585C32.6718 31.6585 32.1584 31.7518 31.5984 31.9385L31.0384 29.2505C31.9344 28.9705 32.7464 28.5132 33.4744 27.8785C34.2211 27.2252 34.5944 26.5718 34.5944 25.9185C34.5944 25.5078 34.4358 25.1812 34.1184 24.9385C33.8198 24.6772 33.4091 24.5465 32.8864 24.5465C32.3638 24.5465 31.8224 24.6958 31.2624 24.9945C30.7024 25.2745 30.1798 25.6758 29.6944 26.1985L27.3424 23.6225C28.1264 22.8572 29.0224 22.2598 30.0304 21.8305C31.0571 21.3825 32.1211 21.1585 33.2224 21.1585C34.2491 21.1585 35.1544 21.3452 35.9384 21.7185C36.7224 22.0732 37.3291 22.5772 37.7584 23.2305C38.1878 23.8652 38.4024 24.5838 38.4024 25.3865C38.4024 26.7305 37.7958 27.9812 36.5824 29.1385C37.4598 29.5492 38.1224 30.1465 38.5704 30.9305C39.0371 31.6958 39.2704 32.5732 39.2704 33.5625C39.2704 34.8878 38.8784 36.0918 38.0944 37.1745C37.3291 38.2572 36.2371 39.1065 34.8184 39.7225C33.3998 40.3385 31.7851 40.6465 29.9744 40.6465ZM43.7596 40.6465C42.8076 40.6465 41.8276 40.5625 40.8196 40.3945L41.3236 36.9225C42.4063 37.1092 43.3396 37.2025 44.1236 37.2025C45.617 37.2025 46.8023 36.8665 47.6796 36.1945C48.5756 35.5038 49.0236 34.6078 49.0236 33.5065C49.0236 32.7225 48.7996 32.1345 48.3516 31.7425C47.9223 31.3318 47.2876 31.1265 46.4476 31.1265C45.589 31.1265 44.7676 31.3132 43.9836 31.6865L42.4156 30.5385L42.9476 21.5785H52.4676L52.2436 24.8825H46.1956L46.0276 28.0465C46.345 27.9718 46.7556 27.9345 47.2596 27.9345C48.9956 27.9345 50.3863 28.4292 51.4316 29.4185C52.4956 30.3892 53.0276 31.7238 53.0276 33.4225C53.0276 34.8038 52.6356 36.0452 51.8516 37.1465C51.0863 38.2478 50.0036 39.1065 48.6036 39.7225C47.2036 40.3385 45.589 40.6465 43.7596 40.6465Z"
        fill="white"
      />
      <path
        d="M10.3638 40.3568V22.175H13.1071V37.9953H21.3457V40.3568H10.3638Z"
        fill="white"
      />
    </svg>
  );
};

export const MagnifyingGlass: React.FC<IProps> = ({
  width,
  height,
  stroke,
}) => {
  return (
    <svg
      fill="none"
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="3"
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const ShareIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
      />
    </svg>
  );
};

export const ShoppingCart: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

export const ShoppingBag: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
};

export const StarIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

export const TrashIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
};

export const TagIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6z"
      />
    </svg>
  );
};

export const XMark: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={width || height || 40}
      height={height || width || 40}
      stroke={stroke || "currentColor"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const InstagramIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      stroke={stroke || "currentColor"}
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6361 7H17.6477"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FacebookIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      stroke={stroke || "currentColor"}
      fill="currentColor"
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      id="facebook"
      data-name="Flat Color"
    >
      <path
        id="primary"
        d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"
      ></path>
    </svg>
  );
};

export const AddToCartIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={stroke || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13" />
      <path d="M15 6h6m-3 -3v6" />
    </svg>
  );
};

export const RemoveFromCartIcon: React.FC<IProps> = ({
  stroke,
  height,
  width,
}) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={stroke || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l8 .571m5.43 4.43l-.429 3h-13" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
    </svg>
  );
};

export const ClearCartIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={stroke || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17a2 2 0 1 0 2 2" />
      <path d="M17 17h-11v-11" />
      <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
      <path d="M3 3l18 18" />
    </svg>
  );
};

export const CartIcon: React.FC<IProps> = ({ width, height, stroke }) => {
  return (
    <svg
      width={width || height || 40}
      height={height || width || 40}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={stroke || "currentColor"}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  );
};
