import { IndexType, NonIndexType, RouteDetail } from "@/types";

function isNonIndexType(routeDetail: Partial<RouteDetail>): routeDetail is NonIndexType {
  return !routeDetail.indexPage;
}

export default isNonIndexType