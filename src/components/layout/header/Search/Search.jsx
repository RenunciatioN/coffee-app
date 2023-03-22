import { useState } from "react";

import { Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import style from "./Search.module.scss";

const Search = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<div className={style.search}>
			<Input
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				placeholder="Search"
				variant="flushed"
				height={25}
			/>
			<SearchIcon
				className={style.searchIcon}
				width={15}
				height={15}
				color={"#999797"}
			/>
		</div>
	);
};

export default Search;
