import { useState, useEffect } from "react";

/* assets */
import viteLogo from "@/assets/images/vite.svg";
import reactLogo from "@/assets/images/react.svg";
import bunLogo from "@/assets/images/bun.svg";

/* store - zustand */
import useZustandStore from "@/stores/zustand/store";

/* styles */
import "@/components/demo/Demo.scss";

/* types */
import type { T_FunctionComponent } from "@/@types";

// =======================================

export default function Demo(): T_FunctionComponent {
	// basic state
	const [count, setCount] = useState(0);

	// zustand
	const {
		count_zustand,
		user_zustand,
		increment__zustand,
		decrement__zustand,
		reset__zustand,
	} = useZustandStore();

	useEffect(() => {
		console.log("[useEffect] -> zustand");
		console.log(useZustandStore.getState());
	});

	const handleUserZustand = (id: string): void => {
		const users = user_zustand;
		const result = users.find((user) => user.id === id);
		console.log("[handleUserZustand] -> zustand");
		console.log(result);
	};

	return (
		<div id="demo">
			<div className="flex flex-row flex-wrap items-center justify-center gap-5">
				<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
					<img
						src={viteLogo}
						className="logo vite"
						alt="Vite.js logo"
						width={164}
						height={164}
					/>
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React.js logo"
						width={164}
						height={164}
					/>
				</a>
				<a href="https://bun.sh/" target="_blank" rel="noopener noreferrer">
					<img
						src={bunLogo}
						className="logo bun"
						alt="Bun.js logo"
						width={164}
						height={164}
					/>
				</a>
			</div>
			<h1>Vite + React + Bun</h1>
			<div className="cards">
				<div className="card">
					<p>useState</p>
					<button type="button" onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
				<div className="card">
					<p>Zustand</p>
					<p>count is {count_zustand}</p>
					<button type="button" onClick={() => increment__zustand()}>
						increment
					</button>
					<button type="button" onClick={() => decrement__zustand()}>
						decrement
					</button>
					<button type="button" onClick={() => reset__zustand()}>
						reset
					</button>
					<button type="button" onClick={() => handleUserZustand("admin")}>
						get admin
					</button>
				</div>
			</div>
			<p>
				Edit "<code>src/components/demo/Demo.tsx</code>" and save to test HMR
			</p>
			<p className="read-the-docs">
				Click on the Vite, React and Bun logos to learn more
			</p>
		</div>
	);
}
