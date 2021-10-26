import constants from "../constants";

/** default page mode */
const defaultMode = title =>
  constants.nonMappedModules.includes(title)
    ? "view"
    : [constants.modules.balancingAdjustment, constants.modules.capitalAllowance].includes(title)
    ? "adding"
    : "mapping";

/** save store state */
const saveState = (state, stateName) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(stateName, serializedState);
  } catch (err) {
    console.log(err);
  }
};

/** load store state */
const loadState = stateName => {
  try {
    const serializedState = sessionStorage.getItem(stateName);
    if (serializedState === null) {
      return undefined;
    }
    sessionStorage.removeItem(stateName);
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

/** toast notification callback function */
const toastCallback = ({ severity, summary, detail }) => ({
    severity,
    summary,
    detail,
    life: constants.toastLifeTime,
    closable: false
  });

/** api error handling */
const apiErrorHandling = (error, toast) => {
  let errorString = "";

  if (error?.response?.data?.errors) {
    errorString = error.response.data.errors[0];
    if (toast) {
      toast.show(
        toastCallback({
          severity: "error",
          detail: errorString
        })
      );
    }
  } else {
    errorString = constants.networkErrorMessage;
    if (toast) {
      toast.show(
        toastCallback({
          severity: "error",
          summary: "Network Error",
          detail: errorString
        })
      );
    }
  }

  return errorString;
};


export default {
  defaultMode,
  saveState,
  loadState,
  toastCallback
};
