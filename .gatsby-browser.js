
import React from 'react';
import {AnimatePresence} from 'framer-motion';


export const wrapRootElement = ({element}) => {
	return (
			<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
	);
};
