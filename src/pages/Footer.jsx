import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoFPT from "../../src/assets/images/logo_FPT.png";

function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-20 bg-blue-950 max-md:px-5">
      <div className="mt-10 w-full max-w-[1191px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl font-bold leading-9 text-white max-md:mt-10">
              <img
                src={logoFPT}
                alt="FPT Logo"
                className="self-center aspect-[2.7] w-[250px]"
              />
              <div className="mt-6">Power by Project @ESMS</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[47%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-2.5 text-white max-md:mt-10 max-md:max-w-full">
              <div className="self-start ml-8 text-2xl font-bold leading-10 max-md:ml-2.5">
                CONTACT US
              </div>
              <div className="mt-7 text-xl leading-8 max-md:max-w-full">
                Address: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                Đức, Thành phố Hồ Chí Minh
                <br />
                Phone: 0399997857
                <br />
                Email: exe201_ESMS@fpt.edu.vn
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-1 mt-2 max-md:mt-10">
              <div className="mt-1.5 text-2xl font-bold leading-7 text-white uppercase">
                Follow Us
              </div>
              <div className="flex gap-2.5 mt-8 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/024f92eac3a3b5292b4ae17222147ed1eed59967724eeaae54b0c88b9cbc0773?"
                  className="shrink-0 aspect-[1.09] w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d5289a75edfc0d1073094b2ae75061f5cb11c33eefa53e59aa37f07de91156?"
                  className="shrink-0 w-6 aspect-[1.04]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d5531985bdaa289b85d19fc7da96670bc2c90d667e2208a2d97601ddceefb8?"
                  className="shrink-0 aspect-[1.09] w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/86633a3b9f2226bc1a2a1372c7f873c2a5964b39f33f107cf391bc6e5ffe2891?"
                  className="shrink-0 aspect-square w-[23px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/244c20661944b99d7c57005286f3de8dc14a686f517335de673fe584acc396fe?"
                  className="shrink-0 aspect-[1.09] w-[25px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad8dbc2e1c5dda8dbb3191d9605a0eda533366837f8ca92f0cc2a5e07fb176d0?"
                  className="shrink-0 aspect-square w-[23px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
