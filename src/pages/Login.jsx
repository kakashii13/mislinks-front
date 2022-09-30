import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLinkContext } from "../context/LinkContext";
import { setToken } from "../service/links";
import { login } from "../service/login";

export const Login = () => {
  const { saveUser } = useLinkContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleUsername = (target) => {
    setUsername(target.value);
  };

  const handlePassword = (target) => {
    setPassword(target.value);
  };

  const saveToLocal = (user) => {
    localStorage.setItem("mislinksuser", JSON.stringify(user));
  };

  const handleLogin = async () => {
    try {
      const user = await login(username, password);
      setMessage("logged");
      saveUser(user);
      setToken(user.token);
      saveToLocal(user);
      setUsername("");
      setPassword("");
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response.data.error);
      setMessage(error.response.data.error);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  return (
    <FormControl width="300px">
      <Input
        placeholder="Username"
        value={username}
        onChange={({ target }) => handleUsername(target)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={({ target }) => handlePassword(target)}
      />
      <Button colorScheme="purple" onClick={handleLogin}>
        Log in
      </Button>
      {message.length > 0 && <Text>{message}</Text>}
    </FormControl>
  );
};
