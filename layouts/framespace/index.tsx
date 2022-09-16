import React, {PropsWithChildren} from "react";
import {Frame} from "@/layouts/framespace/styles";


const FrameSpace: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <Frame>
            {children}
        </Frame>
    );
}

export default FrameSpace