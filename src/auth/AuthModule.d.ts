import { AuthenticationResult } from '@azure/msal-browser';
/**
 * AuthModule for application - handles authentication in app.
 */
export declare class AuthModule {
    private myMSALObj;
    private account;
    private loginRedirectRequest;
    private loginRequest;
    private profileRedirectRequest;
    private profileRequest;
    private mailRedirectRequest;
    private mailRequest;
    private silentProfileRequest;
    private silentMailRequest;
    private silentLoginRequest;
    constructor();
    /**
     * Calls getAllAccounts and determines the correct account to sign into, currently defaults to first account found in cache.
     * TODO: Add account chooser code
     *
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    private getAccount;
    /**
     * Checks whether we are in the middle of a redirect and handles state accordingly. Only required for redirect flows.
     *
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#redirect-apis
     */
    loadAuthModule(): void;
    /**
     * Handles the response from a popup or redirect. If response is null, will check if we have any accounts and attempt to sign in.
     * @param response
     */
    handleResponse(response: AuthenticationResult | null): void;
    /**
     * Calls ssoSilent to attempt silent flow. If it fails due to interaction required error, it will prompt the user to login using popup.
     * @param request
     */
    attemptSsoSilent(): void;
    /**
     * Calls loginPopup or loginRedirect based on given signInType.
     * @param signInType
     */
    login(signInType: string): void;
    /**
     * Logs out of current account.
     */
    logout(): void;
    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive redirect.
     */
    getProfileTokenRedirect(): Promise<string | null>;
    /**
     * Gets the token to read user profile data from MS Graph silently, or falls back to interactive popup.
     */
    getProfileTokenPopup(): Promise<string | null>;
    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive redirect.
     */
    getMailTokenRedirect(): Promise<string | null>;
    /**
     * Gets the token to read mail data from MS Graph silently, or falls back to interactive popup.
     */
    getMailTokenPopup(): Promise<string | null>;
    /**
     * Gets a token silently, or falls back to interactive popup.
     */
    private getTokenPopup;
    /**
     * Gets a token silently, or falls back to interactive redirect.
     */
    private getTokenRedirect;
}
