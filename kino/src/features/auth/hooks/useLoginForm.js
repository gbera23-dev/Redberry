import { useState } from "react";


function useLoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return {email, setEmail, password, setPassword};
}

export default useLoginForm