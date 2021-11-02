import constants from "./constants";

const cacheValue = (state, stateName) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem(stateName, serializedState);
    } catch (err) {
        console.log(err);
    }
};

const getCache = stateName => {
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

const toastCallback = ({ severity, summary, detail }) => ({
    severity,
    summary,
    detail,
    life: constants.toastLifeTime,
    closable: true
});

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
    cacheValue,
    getCache,
    toastCallback,
    apiErrorHandling
};
