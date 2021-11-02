import { createResource } from "react-resource-router";
import { getWorkshop } from "../../apis/workshopapis";

export const workshopResource = createResource({
  type: "WORKSHOP",
  getKey: () => "workshop",
  getData: () => getWorkshop({workShopId: sessionStorage.getItem("wid")})
});
