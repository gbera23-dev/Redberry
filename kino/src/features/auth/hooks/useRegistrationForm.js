import { useRef, useState } from "react";


function useRegistrationForm() {
 const fileRef = useRef(null);
 const [avatar, setAvatar] = useState(null);
 const [preview, setPreview] = useState(null);
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirm, setConfirm] = useState("");

 return {
    fileRef, avatar, setAvatar, preview, setPreview, username, setUsername, 
    email, setEmail, password, setPassword, confirm, setConfirm, 
 }
}

export default useRegistrationForm