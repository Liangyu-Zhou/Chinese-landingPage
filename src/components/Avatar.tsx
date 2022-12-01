import { useMemo } from "react";
import Blockies from "react-blockies";
import metamaskImg from "../assets/MetaMask_Fox.svg.png";

type AddressAvatarProps = {
    address: string;
}
const minifyAddress = (address: string) => {
    const start = address.substring(0, 5);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
}
const AddressAvatar = ({ address }: AddressAvatarProps) => {
    const shortAddress = useMemo(() => minifyAddress(address), [address]);

    return (<div className="flex h-10 items-center mx-auto mt-3">
        <Blockies seed={address.toLowerCase()} className="mr-2 rounded-md"></Blockies>
        <span>{shortAddress}</span>
    </div>);

}

export default AddressAvatar;