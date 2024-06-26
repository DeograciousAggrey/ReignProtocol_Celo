import React from "react";

const Website = ({ className = "default" }) => {
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
				className="stroke-black dark:stroke-white"
				d="M9.02953 6.97113C8.48346 6.42529 7.74297 6.11865 6.97087 6.11865C6.19877 6.11865 5.45827 6.42529 4.9122 6.97113L2.85287 9.0298C2.30678 9.57588 2 10.3165 2 11.0888C2 11.8611 2.30678 12.6017 2.85287 13.1478C3.39895 13.6939 4.13959 14.0007 4.91187 14.0007C5.68414 14.0007 6.42479 13.6939 6.97087 13.1478L8.0002 12.1185"
				
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				className="stroke-black dark:stroke-white"
				d="M6.9707 9.02953C7.51677 9.57538 8.25727 9.88201 9.02937 9.88201C9.80147 9.88201 10.542 9.57538 11.088 9.02953L13.1474 6.97087C13.6935 6.42479 14.0002 5.68414 14.0002 4.91187C14.0002 4.13959 13.6935 3.39895 13.1474 2.85287C12.6013 2.30678 11.8606 2 11.0884 2C10.3161 2 9.57545 2.30678 9.02937 2.85287L8.00004 3.8822"
			
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Website;
