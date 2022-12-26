import sanityClient from "@sanity/client";
import getConfig from "next/config";

const { projectId, dataset } = getConfig().publicRuntimeConfig.sanity;

export default sanityClient({
  projectId,
  dataset,
  useCdn: true,
});
