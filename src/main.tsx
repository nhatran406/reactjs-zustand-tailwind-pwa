import React from "react";
import ReactDOM from "react-dom/client";

/* components */
import Demo from "@/components/demo/Demo.tsx";

/* styles */
import "@/styles/tailwind.scss";
import "@/styles/index.scss";

// =======================================

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<Demo />
		</React.StrictMode>,
	);
} else {
	console.error("Element 'root' not found in the document.");
}
