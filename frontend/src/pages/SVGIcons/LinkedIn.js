import React from "react";

const LinkedIn = ({ className = "default" }) => {
	return (
		<svg
			width={`${className === "default" ? "16" : ""}`}
			height={`${className === "default" ? "16" : ""}`}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`${
				className !== "default" ? className : ""
			} pointer-events-none`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0.666016 1.89184C0.666016 1.56686 0.795113 1.25519 1.02491 1.0254C1.2547 0.795603 1.56637 0.666506 1.89135 0.666506H14.106C14.2671 0.666243 14.4266 0.697747 14.5754 0.759217C14.7243 0.820686 14.8596 0.910912 14.9735 1.02473C15.0875 1.13855 15.1778 1.27372 15.2395 1.42251C15.3011 1.5713 15.3328 1.73079 15.3327 1.89184V14.1065C15.3329 14.2676 15.3013 14.4271 15.2397 14.576C15.1782 14.7248 15.0879 14.8601 14.974 14.974C14.8602 15.088 14.7249 15.1783 14.5761 15.24C14.4273 15.3016 14.2678 15.3333 14.1067 15.3332H1.89135C1.73038 15.3332 1.57099 15.3015 1.42228 15.2398C1.27357 15.1782 1.13846 15.0879 1.02467 14.974C0.91088 14.8602 0.820637 14.725 0.759097 14.5763C0.697558 14.4276 0.665928 14.2681 0.666016 14.1072V1.89184ZM6.47135 6.25851H8.45735V7.25584C8.74402 6.68251 9.47735 6.16651 10.5794 6.16651C12.692 6.16651 13.1927 7.30851 13.1927 9.40384V13.2852H11.0547V9.88117C11.0547 8.68784 10.768 8.01451 10.04 8.01451C9.03002 8.01451 8.61002 8.74051 8.61002 9.88117V13.2852H6.47135V6.25851ZM2.80468 13.1938H4.94335V6.16651H2.80468V13.1932V13.1938ZM5.24935 3.87451C5.25338 4.05762 5.2208 4.2397 5.15351 4.41005C5.08622 4.5804 4.98558 4.7356 4.8575 4.86653C4.72942 4.99746 4.57648 5.10149 4.40765 5.17251C4.23882 5.24353 4.05751 5.28012 3.87435 5.28012C3.69119 5.28012 3.50988 5.24353 3.34105 5.17251C3.17222 5.10149 3.01927 4.99746 2.8912 4.86653C2.76312 4.7356 2.66248 4.5804 2.59519 4.41005C2.5279 4.2397 2.49532 4.05762 2.49935 3.87451C2.50726 3.51508 2.65561 3.17303 2.91261 2.92163C3.16961 2.67023 3.51483 2.52945 3.87435 2.52945C4.23387 2.52945 4.57909 2.67023 4.83609 2.92163C5.09309 3.17303 5.24144 3.51508 5.24935 3.87451Z"
				fill="white"
			/>
		</svg>
	);
};

export default LinkedIn;