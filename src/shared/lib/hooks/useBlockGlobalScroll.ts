import { useEffect } from "react";

const useBlockGlobalStroll = (currentElemOnPage: boolean) => {
    useEffect(() => {
        if (currentElemOnPage) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
        return () => {
            document.body.style.overflowY = "auto";
        };
    }, [currentElemOnPage]);
};

export default useBlockGlobalStroll;
