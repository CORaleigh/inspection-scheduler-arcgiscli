/**
 * Graph data about the user.
 */
export declare type UserInfo = {
    businessPhones?: Array<string>;
    displayName?: string;
    givenName?: string;
    id?: string;
    jobTitle?: string;
    mail?: string;
    mobilePhone?: string;
    officeLocation?: string;
    preferredLanguage?: string;
    surname?: string;
    userPrincipalName?: string;
};
/**
 * Mail data from MS Graph
 */
export declare type MailInfo = {
    value?: Array<any>;
};
