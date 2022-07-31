import axios from "axios";
import apiErr from "../apiErr/apiErr";

export const requestErrHandle = (err: unknown) => {
    if (axios.isAxiosError(err) && !!err.response?.status) {
        switch (err.response.status) {
            case 404: throw new apiErr.NotFound();
        }
    }

    return err;
}
