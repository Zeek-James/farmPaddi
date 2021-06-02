import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../utilities/fontAwesome";

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false)
    
    const Icon = (

        <FontAwesomeIcon icon={visible ? 'eye-slash' : 'eye'}
            onClick={() => setVisibility(!visible)}
        />
    )
    
    const InputType = visible ? 'text' : 'password'

    return [InputType, Icon]
}

export default usePasswordToggle;