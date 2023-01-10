import { FC } from "react";
import { loadImageFromPath } from "lib/frontendHelpers";

type SocialMetaTagsProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export const SocialMetaTags: FC<SocialMetaTagsProps> = ({
  title = "OpenArchive",
  description = "OpenArchive helps history's first responders safely store, verify, and share critical evidence.",
  url = "/",
  image = "twitter-share.png",
}) => {
  const imageFile = loadImageFromPath(image);

  return (
    <>
      <meta name="twitter:site" content="@open_archive" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content={`https://open-archive.org${imageFile.src}`}
      />
      <meta property="og:title" content="OpenArchive" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://open-archive.org${url}`} />
      <meta name="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://open-archive.org${imageFile.src}`}
      />
    </>
  );
};
