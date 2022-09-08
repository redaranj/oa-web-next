import { promises as fs } from "fs";
import config from "../next.config.js";

const redirects = await config.redirects();

redirects.forEach(async ({ source, destination }) => {
  const tsx = `import redirect from "nextjs-redirect";

export default redirect("${destination}");
`;
  await fs.writeFile(`${process.cwd()}/pages${source}.tsx`, tsx);
});
