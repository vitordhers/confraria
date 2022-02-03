import { IResponse } from "src/app/shared/interfaces/response.interface";

async function mapRequestToResponse<T = any>(
  context: any,
  request: Function,
  ...args: any
): Promise<IResponse<T>> {
  try {
    const entity = await request.apply(context, args);
    return { success: true, payload: entity };
  } catch (e: any) {
    return { success: false, message: e.message };
  }
}

export default mapRequestToResponse;
