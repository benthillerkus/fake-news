import type { Config } from "$lib/types";

export function upgradeVersion(config: Config) {

  const renameKey = (oldName: string, newName: string) => {
    if (oldName in config) {
      config[newName] = config[oldName];
      delete config[oldName];
    }
  }

  const renameValue = (key: string, oldName: string, newName: string) => {
    if (config[key] === oldName) {
      config[key] = newName;
    }
  }

  switch (config.version) {
    case undefined:
      renameKey("image", "imageUrl")
      renameValue("style", "blog", "Blog")
      renameValue("style", "newspaper", "News")
    case "1":
      renameKey("favicon", "icon")
    case "2":
  }
  config.version = "2";
  return config;
}
