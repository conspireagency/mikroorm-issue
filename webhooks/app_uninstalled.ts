// import SessionModel from "../../utils/models/SessionModel.js";
// import StoreModel from "../../utils/models/StoreModel.js";

import { ApiVersion } from "@shopify/shopify-api";

/**
 * @typedef { import("../../_developer/types/2023-10/webhooks.js").APP_UNINSTALLED } webhookTopic
 */

const appUninstallHandler = async (
  topic: string,
  shop: string,
  webhookRequestBody: string,
  webhookId: string,
  apiVersion: string = ApiVersion.January24
): Promise<void> => {
  /** @type {webhookTopic} */
  const webhookBody = JSON.parse(webhookRequestBody);
  //   await StoreModel.findOneAndUpdate({ shop }, { isActive: false });
  //   await SessionModel.deleteMany({ shop });
  return;
};

export default appUninstallHandler;
