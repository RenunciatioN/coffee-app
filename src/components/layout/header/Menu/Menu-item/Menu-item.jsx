
import Link from "next/link";



const MenuItem = ({ item }) => {
	return <Link href={item.link}>{item.name}</Link>;
};

export default MenuItem;
