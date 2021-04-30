import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mr/eating-places",
  app: () => System.import("@mr/eating-places"),
  activeWhen: ["/eating-places"],
});

start({
  urlRerouteOnly: true,
});
