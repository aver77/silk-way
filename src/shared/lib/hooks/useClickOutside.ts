import { MutableRefObject, useEffect } from "react";

const useClickOutside = (
    elementRef: MutableRefObject<HTMLDivElement | null>,
    outsideAction: (...args: any[]) => void
) => {
    useEffect(() => {
        if (elementRef) {
            const handleClickOutside = (e: any) => {
                if (elementRef.current && !elementRef.current.contains(e.target)) {
                    outsideAction();
                }
            };

            document.addEventListener("mousedown", handleClickOutside, true);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside, true);
            };
        }
    }, [elementRef, outsideAction]);
};

export default useClickOutside;
