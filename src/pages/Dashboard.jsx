import { Heading, Select, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FavLinks } from "../components/FavLinks";
import { MiLink } from "../components/Link";
import { LinkForm } from "../components/LinkForm";
import { NavBar } from "../components/NavBar";
import { Search } from "../components/Search";
import { Toggable } from "../components/Toggable";
import { INITIAL_CATEGORIES } from "../Helpers";
import { create, getAll, remove, update } from "../service/links";

export const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [linksToShow, setLinksToShow] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getLinks = async () => {
      const links = await getAll();
      setLinks(links);
      setLinksToShow(links);
      console.log(links);
    };
    getLinks();
  }, []);

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
    setLinksToShow(linksToShow.concat(link));
  };

  const removeLink = async (id) => {
    await remove(id);
    const linksFilter = linksToShow.filter((l) => l.id !== id);
    // setLinks(linksFilter);
    console.log(linksFilter);
    setLinksToShow(linksFilter);
  };

  const favLink = async (id) => {
    const link = links.filter((link) => link.id === id);
    link[0].fav = !link[0].fav;
    const updatedLink = await update(id, link[0]);
    const linksFilter = linksToShow.filter((l) => l.id !== id);
    setLinks(linksFilter.concat(updatedLink));
    setLinksToShow(linksFilter.concat(updatedLink));
  };

  const logout = () => {
    localStorage.removeItem("mislinksuser");
    navigate("/login");
  };

  const filterCategory = (target) => {
    if (target.value == "") {
      setLinksToShow(links);
    } else {
      const filter = links.filter(
        (l) => l.category?.toLowerCase() === target.value.toLowerCase()
      );
      setLinksToShow(filter);
    }
  };

  return (
    <VStack className="App">
      <NavBar logout={logout} />
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
      <FavLinks links={links} />
      <Stack pt="30px" width="100%">
        <Heading>Links</Heading>
        <Stack width="150px">
          <Select
            onChange={({ target }) => filterCategory(target)}
            zIndex="10"
            placeholder="All"
          >
            {INITIAL_CATEGORIES.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </Stack>
        <Stack>
          {!linksToShow.length ? (
            <p>No data to display</p>
          ) : (
            <SimpleGrid minChildWidth="100px" spacing={"10px"}>
              {linksToShow.map((link) => (
                <MiLink
                  key={link.id}
                  link={link}
                  removeLink={removeLink}
                  favLink={favLink}
                />
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Stack>
    </VStack>
  );
};
