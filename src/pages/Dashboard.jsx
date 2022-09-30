import { Heading, SimpleGrid, Stack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MiLink } from "../components/Link";
import { LinkForm } from "../components/LinkForm";
import { Toggable } from "../components/Toggable";
import { create, getAll, remove } from "../service/links";

export const Dashboard = () => {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

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

  const addLink = async () => {
    const newLink = {
      title,
      url,
      description,
    };
    const link = await create(newLink);
    setLinks(links.concat(link));
  };

  const removeLink = async (id) => {
    await remove(id);
    const linksFilter = links.filter((l) => l.id !== id);
    setLinks(linksFilter);
  };

  return (
    <VStack className="App">
      <Heading>Mis links</Heading>
      <Toggable addLink={addLink}>
        <LinkForm
          handleTitle={handleTitle}
          handleUrl={handleUrl}
          handleDescription={handleDescription}
          title={title}
          url={url}
          description={description}
        />
      </Toggable>
      <Stack pt="30px">
        <Heading>Links</Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={3}>
          {links.map((link) => (
            <MiLink key={link.id} link={link} removeLink={removeLink} />
          ))}
        </SimpleGrid>
      </Stack>
    </VStack>
  );
};
