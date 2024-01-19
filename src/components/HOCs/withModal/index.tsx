import { cloneElement, FC, useRef } from "react";
import Image from "next/image";

import styles from "./WithModal.module.scss";
import closeImg from "@/shared/assets/svg/close.svg";
import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import useBlockGlobalStroll from "@/shared/lib/hooks/useBlockGlobalScroll";

interface IWithModal {
    closeModal: () => void;

    children: any;
}
const WithModal: FC<IWithModal> = ({ closeModal, children }) => {
    const modalChildRef = useRef<HTMLDivElement | null>(null);

    const closeModalRef = useRef(closeModal);
    closeModalRef.current = closeModal;

    useClickOutside(modalChildRef, closeModalRef.current);

    useBlockGlobalStroll(true);

    return (
        <div className={styles.container}>
            {cloneElement(children, {
                ref: (ref: HTMLDivElement) => (modalChildRef.current = ref)
            })}
            <Image className={styles.closeImg} src={closeImg} alt={"close"} />
        </div>
    );
};
export default WithModal;
