import React from "react";

import * as styles from './navigation-sidebar.module.css' 

export default ({ width, height, children }) => {
	const [xPosition, setX] = React.useState(-width);
	
	const toggleMenu = () => {
		if (xPosition < 0) {
			setX(0);
		} else {
			setX(-width);
		}
	};
	
	React.useEffect(() => {
		setX(0);
	}, []);
	return (
		<div
		className={styles.sideBar}
		style={{
			transform: `translate(${xPosition}px)`,
			width: width
		}}
		>
		<div className="content">{children}</div>
		<button onClick={() => toggleMenu()}>Close Navigation</button>
		</div>
		);
	};