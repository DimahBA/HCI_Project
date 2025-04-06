import React from "react";

export default function MenuIcons({ isASetMenu }) {
  return (
    <>
      {isASetMenu ? (
        <svg
          width="86"
          height="59"
          viewBox="0 0 86 59"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Property 1=Default">
            <path
              id="Vector"
              d="M44.7962 0.236259C45.965 0.660126 46.5816 1.04546 47.4422 1.90604C48.778 3.24186 49.3431 4.65474 49.356 6.61994C49.356 7.80162 49.1248 8.73927 48.5725 9.71545C48.1229 10.5246 48.1229 10.5246 48.4697 10.5246C49.5101 10.5246 53.3506 11.565 55.6497 12.4642C65.9638 16.5101 74.1843 25.4113 77.1642 35.7639C77.999 38.6411 78.3715 40.9788 78.5 43.9844L78.577 46.0395L79.8615 46.1037C80.9533 46.1679 81.2872 46.245 82.0065 46.579C84.1258 47.568 85.3204 49.5203 85.3204 51.9608C85.3204 53.8489 84.5626 55.5187 83.124 56.816C82.3405 57.5224 80.979 58.2289 80.0028 58.4344C79.5532 58.5243 68.0061 58.55 42.3558 58.5371C6.173 58.4986 5.35095 58.4986 4.72157 58.2545C0.534286 56.6361 -1.19971 52.3718 0.881088 48.8267C1.84442 47.1955 3.84815 46.1037 5.90326 46.1037H6.71246V44.7807C6.71246 41.9036 7.40606 37.9732 8.51068 34.6722C10.2961 29.316 12.9677 25.0517 17.1036 20.9286C22.023 16.0349 27.4434 12.9137 34.0069 11.2311C34.9188 10.9999 36.0106 10.7687 36.4216 10.7173C36.8198 10.6659 37.1923 10.576 37.2308 10.5118C37.2565 10.4604 37.1538 10.1907 36.9739 9.92096C35.7666 8.07136 35.7923 5.1043 37.0253 3.15194C37.9116 1.76475 39.5043 0.583057 41.0585 0.172035C41.9961 -0.0848503 43.9998 -0.0463181 44.7962 0.236259ZM41.2383 3.22901C40.3135 3.62719 39.4401 4.65474 39.1575 5.65661C38.374 8.431 41.0199 10.91 43.8971 10.0879C44.9118 9.79251 45.9008 8.80349 46.1962 7.82731C46.6586 6.26029 46.3247 4.89879 45.1944 3.87123C44.0384 2.80515 42.7154 2.58679 41.2383 3.22901ZM39.3373 13.1706C33.2747 13.8642 27.3792 16.2918 22.524 20.0809C20.8927 21.3397 17.9899 24.1911 16.8082 25.6811C13.4686 29.9069 11.2209 34.7364 10.1805 39.9384C9.82082 41.7109 9.53824 44.1642 9.53824 45.4872V46.1037H42.6126H75.6871V45.1661C75.6871 44.6651 75.5971 43.4578 75.4944 42.5073C74.698 34.9419 71.3328 27.9545 65.8739 22.5342C60.7747 17.4735 53.9286 14.0312 47.3651 13.2348C46.7229 13.1578 46.0678 13.0678 45.888 13.0422C44.9632 12.9137 40.8786 12.9908 39.3373 13.1706ZM4.38762 49.5075C3.46282 50.1626 3.06464 50.8433 3.01327 51.8966C2.96188 52.6544 3.00042 52.8856 3.29585 53.4764C3.66833 54.2471 4.23348 54.7994 5.08121 55.2489L5.62068 55.5444H42.6769H79.733L80.2597 55.2618C81.9551 54.3498 82.713 52.7314 82.2249 51.0231C82.0322 50.3038 81.1845 49.3919 80.5422 49.1992C80.2725 49.1222 66.2592 49.0836 42.5227 49.0965L4.93993 49.1222L4.38762 49.5075Z"
              fill="currentColor"
            />
          </g>
        </svg>
      ) : (
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.98281 7.99957L66.55 65.5668C67.6423 66.6591 68.256 68.1407 68.256 69.6855C68.256 71.2303 67.6423 72.7119 66.55 73.8043C65.4574 74.8962 63.9759 75.5096 62.4313 75.5096C60.8866 75.5096 59.4051 74.8962 58.3125 73.8043L44.25 59.4996C43.3297 58.5651 42.8135 57.3064 42.8125 55.9949V55.1308C42.8126 54.4686 42.6812 53.8129 42.4258 53.2019C42.1705 52.5909 41.7963 52.0367 41.325 51.5714L39.5094 49.8949C38.893 49.3262 38.1435 48.9216 37.3298 48.7185C36.5162 48.5153 35.6645 48.5201 34.8531 48.7324C33.5737 49.0663 32.2292 49.0598 30.953 48.7137C29.6769 48.3675 28.5134 47.6936 27.5781 46.7589L14.2297 33.4089C6.31094 25.4902 3.39687 13.5324 8.98281 7.99957Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M62.5 5.54019L50.4297 17.6105C49.5009 18.5391 48.7641 19.6416 48.2614 20.855C47.7587 22.0684 47.5 23.369 47.5 24.6824V27.0043C47.5001 27.3328 47.4354 27.6581 47.3096 27.9616C47.1839 28.2651 46.9996 28.5408 46.7672 28.773L45 30.5402M50 35.5402L51.7672 33.773C51.9994 33.5406 52.2751 33.3563 52.5786 33.2306C52.8821 33.1048 53.2074 33.0401 53.5359 33.0402H55.8578C57.1712 33.0402 58.4718 32.7815 59.6852 32.2788C60.8986 31.7761 62.0011 31.0393 62.9297 30.1105L75 18.0402M68.75 11.7902L56.25 24.2902M31.25 58.0402L15.6688 73.7089C14.4967 74.8806 12.9073 75.5389 11.25 75.5389C9.59273 75.5389 8.0033 74.8806 6.83125 73.7089C5.65956 72.5369 5.00134 70.9475 5.00134 69.2902C5.00134 67.6329 5.65956 66.0435 6.83125 64.8714L20 51.7902"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
}
