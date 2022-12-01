import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import Web3Modal from "web3modal";

type SignerContextType = {
    signer?: JsonRpcSigner;
    address?: string;
    loading: boolean;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
};

const SignerContext = createContext<SignerContextType>({} as any);

const useSigner = () => useContext(SignerContext);

export const SignerProvider = ({ children }: { children: ReactNode }) => {
    const [signer, setSigner] = useState<JsonRpcSigner>();
    const [address, setAddress] = useState<string>();
    const [loading, setLoading] = useState(false);
    const web3modal = new Web3Modal({ cacheProvider: true });

    useEffect(() => {
        console.log("effect" ,web3modal.cachedProvider )
        if (web3modal.cachedProvider) connectWallet();
        window.ethereum.on("accountsChanged", connectWallet);
    }, []);

    const connectWallet = async () => {
        setLoading(true);
        try {
            console.log("before connectWallet",web3modal.cachedProvider);
            const instance = await web3modal.connect();
            const provider = new Web3Provider(instance);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setSigner(signer);
            setAddress(address);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };

    const disconnectWallet = async () => {
        setLoading(true);
        try {
            web3modal.clearCachedProvider();
            setSigner(undefined);
            setAddress(undefined);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };


    const contextValue = { signer, address, loading, connectWallet, disconnectWallet };

    return (
        <SignerContext.Provider value={contextValue}>
            {children}
        </SignerContext.Provider>
    );
};

export default useSigner;
