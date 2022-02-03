import { IResponse } from "src/app/shared/interfaces/response.interface";

function mapPayloadToResponse<T>(success: boolean, payload: T): IResponse<T> {
  return { success, payload };
}

export default mapPayloadToResponse;
