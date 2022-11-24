import type { Config } from "$lib/types";

export function upgradeVersion(config: Config) {

  const rename = (oldName: string, newName: string) => {
    if (oldName in config) {
      config[newName] = config[oldName];
      delete config[oldName];
    }
  }

  switch (config.version) {
    case undefined:
      rename("image", "imageUrl")
    case "1":
      rename("favicon", "icon")
    case "2":
  }
  config.version = "2";
  return config;
}
