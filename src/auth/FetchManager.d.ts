import { UserInfo, MailInfo } from './GraphResponseTypes';
/**
 * Class that handles Bearer requests for data using Fetch.
 */
export declare class FetchManager {
    /**
     * Makes an Authorization "Bearer"  request with the given accessToken to the given endpoint.
     * @param endpoint
     * @param accessToken
     */
    callEndpointWithToken(endpoint: string, accessToken: string): Promise<UserInfo | MailInfo>;
}
