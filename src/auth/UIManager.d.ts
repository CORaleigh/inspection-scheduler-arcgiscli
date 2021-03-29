import { AccountInfo } from '@azure/msal-browser';
import { UserInfo, MailInfo } from './GraphResponseTypes';
/**
 * Class that handles UI updates for the app.
 */
export declare class UIManager {
    static welcomeDiv: HTMLElement | null;
    static signInButton: HTMLElement | null;
    static cardDiv: HTMLElement | null;
    static mailButton: HTMLElement | null;
    static profileButton: HTMLElement | null;
    static profileDiv: HTMLElement | null;
    static tabList: HTMLElement | null;
    static tabContent: HTMLElement | null;
    static showWelcomeMessage(account: AccountInfo): void;
    static clearTabs(): void;
    static updateUI(data: UserInfo | MailInfo, endpoint: string): void;
    static setProfile(data: UserInfo): void;
    static setMail(data: MailInfo): void;
    static createAndAppendListItem(d: any, i: number): void;
    static createAndAppendContentItem(d: any, i: number): void;
}
