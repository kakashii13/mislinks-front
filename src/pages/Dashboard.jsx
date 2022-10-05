import {
  Button,
  Heading,
  Select,
  SimpleGrid,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MiLink } from "../components/Link";
import { LinkForm } from "../components/LinkForm";
import { Search } from "../components/Search";
import { Toggable } from "../components/Toggable";
import { INITAL_CATEGORIES } from "../Helpers";
import { create, getAll, remove } from "../service/links";

export const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [linksFilter, setLinksFilter] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getLinks = async () => {
      const links = await getAll();
      setLinks(links);
    };
    getLinks();
  }, [links]);

  const handleTitle = (target) => {
    setTitle(target.value);
    // console.log(target.value);
  };
  const handleUrl = (target) => {
    setUrl(target.value);
  };
  const handleDescription = (target) => {
    setDescription(target.value);
  };

  const handleCategory = (target) => {
    setCategory(target.value);
  };

  const addLink = async () => {
    const newLink = {
      title,
      url,
      description,
      category,
    };
    const link = await create(newLink);
    setLinks(links.concat(link));
  };

  const removeLink = async (id) => {
    await remove(id);
    const linksFilter = links.filter((l) => l.id !== id);
    setLinks(linksFilter);
  };

  const favLink = async (id) => {};

  const logout = () => {
    localStorage.removeItem("mislinksuser");
    navigate("/login");
  };

  const filterCategory = (target) => {
    const linksFilter = links.filter(
      (l) => l.category?.toLowerCase() === target.value.toLowerCase()
    );
    setLinksFilter(linksFilter);
  };

  const linksToShow = !linksFilter.length ? links : linksFilter;
  return (
    <VStack className="App">
      <Button onClick={logout} colorScheme="purple">
        Log out
      </Button>
      <Heading>Mis links</Heading>
      <Toggable addLink={addLink}>
        <LinkForm
          handleTitle={handleTitle}
          handleUrl={handleUrl}
          handleDescription={handleDescription}
          handleCategory={handleCategory}
          title={title}
          url={url}
          description={description}
        />
      </Toggable>
      <Search />
      <Stack pt="30px" width="100%">
        <Heading>Links</Heading>
        <Stack width="150px">
          <Select onChange={({ target }) => filterCategory(target)}>
            {INITAL_CATEGORIES.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </Stack>
        <SimpleGrid minChildWidth="100px" spacing={"10px"}>
          {linksToShow.map((link) => (
            <MiLink key={link.id} link={link} removeLink={removeLink} />
          ))}
        </SimpleGrid>
      </Stack>
    </VStack>
  );
};
