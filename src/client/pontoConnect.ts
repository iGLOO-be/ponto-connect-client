/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PaymentActivationRequest {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the paymentActivationRequest
   * @format uuid
   */
  id: string;
  attributes?: {
    /** URI to redirect to from your customer frontend to conduct the authorization flow */
    redirect?: string;
  };
}

export interface PaymentActivationRequestSingle {
  data?: PaymentActivationRequest;
}

export interface ReauthorizationRequest {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the reauthorizationRequest
   * @format uuid
   */
  id: string;
  attributes?: object;
}

export interface ReauthorizationRequestSingle {
  data?: ReauthorizationRequest;
}

export interface UserInfo {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the userInfo
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Name of the organization */
    name?: string;
    /** Indicates whether the organization has completed the onboarding process in the Ponto dashboard. If not completed within 72 hours of creation, the organization's account information and integration will be automatically deleted from Ponto. */
    onboardingComplete?: boolean;
    /** Indicates whether the organization can currently sign live payments from Ponto. Must be <code>true</code> to use the (bulk) payment redirect flow. */
    paymentsActivated?: boolean;
    /** Indicates whether the organization has requested to be able to sign payments from Ponto. If it is <code>false</code> (or you are in the sandbox), you may use the <a href='https://documentation.ibanity.com//api#request-payment-activation'>payment activation request</a> redirect flow. */
    paymentsActivationRequested?: boolean;
    /**
     * ID of the representative organization. Provided if the organization is being accessed via a mandate.
     * @format uuid
     */
    representativeOrganizationId?: string;
    /** Name of the representative organization. Provided if the organization is being accessed via a mandate and the <code>name</code> scope was requested. */
    representativeOrganizationName?: string;
    /**
     * ID of the organization corresponding to the provided access token
     * @format uuid
     */
    sub?: string;
  };
}

export interface UserInfoSingle {
  data?: UserInfo;
}

export interface Usage {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the usage
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Number of accounts linked to the integration. The total is prorated, so may be a decimal number if accounts have been linked or unlinked during the month. */
    accountCount?: number;
    /** Number of initiated bulk payment bundles created by the integration */
    bulkPaymentBundleCount?: number;
    /** Number of accounts which initiated a payment created by the integration */
    paymentAccountCount?: number;
    /** Number of initiated payments created by the integration */
    paymentCount?: number;
  };
}

export interface UsageSingle {
  data?: Usage;
}

export interface OnboardingDetails {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the onboardingDetails
   * @format uuid
   */
  id: string;
  attributes?: {
    /** City of the onboarding user's organization */
    addressCity?: string;
    /** Country of the onboarding user's organization */
    addressCountry?: string;
    /** Postal code of the onboarding user's organization */
    addressPostalCode?: string;
    /** Street address of the onboarding user's organization */
    addressStreetAddress?: string;
    /** Email belonging to the onboarding user */
    email?: string;
    /** Enterprise number corresponding to the onboarding user's organization */
    enterpriseNumber?: string;
    /** First name of the onboarding user */
    firstName?: string;
    /** Last name of the onboarding user */
    lastName?: string;
    /** Name of the onboarding user's organization */
    organizationName?: string;
    /** Phone number of the onboarding user */
    phoneNumber?: string;
    /** VAT number corresponding to the onboarding user's organization */
    vatNumber?: string;
  };
}

export interface OnboardingDetailsSingle {
  data?: OnboardingDetails;
}

export interface FinancialInstitutionAccount {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the financialInstitutionAccount
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Amount of financial institution account funds that can be accessed immediately */
    availableBalance?: number;
    /**
     * When the available balance was changed for the last time. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    availableBalanceChangedAt?: string;
    /**
     * Reference date of the available balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    availableBalanceReferenceDate?: string;
    /** Currency of the financial institution account, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
    currency?: string;
    /** Total funds currently in the financial institution account */
    currentBalance?: number;
    /**
     * When the current balance was changed for the last time. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    currentBalanceChangedAt?: string;
    /**
     * Reference date of the current balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    currentBalanceReferenceDate?: string;
    /** Description of the financial institution account */
    description?: string;
    /** Name of the account holder */
    holderName?: object;
    /** Name of the account product */
    product?: object;
    /** Financial institution's internal reference for this financial institution account */
    reference?: string;
    /** Type of financial institution reference (can be <code>IBAN</code>, <code>BBAN</code>, <code>email</code>, <code>PAN</code>, <code>MASKEDPAN</code> or <code>MSISDN</code>) */
    referenceType?: string;
    /** Type of financial institution account. Can be <code>checking</code>, <code>savings</code>, <code>securities</code>, <code>card</code> or <code>psp</code> */
    subtype?: string;
  };
}

export interface FinancialInstitutionAccountCollection {
  data?: FinancialInstitutionAccount[];
}

export interface FinancialInstitutionAccountSingle {
  data?: FinancialInstitutionAccount;
}

export interface FinancialInstitutionTransaction {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the financialInstitutionTransaction
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Additional transaction-related information provided from the financial institution to the customer */
    additionalInformation?: string;
    /** Amount of the financial institution transaction. Can be positive or negative */
    amount?: number;
    /** Bank transaction code, based on <a href='https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets'>ISO 20022</a> */
    bankTransactionCode?: string;
    /** Legal name of the counterpart. Can only be updated if it was previously not provided (blank). */
    counterpartName?: string;
    /** Number representing the counterpart's account */
    counterpartReference?: string;
    /**
     * When this financial institution transaction was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Identification of the creditor, e.g. a SEPA Creditor ID. */
    creditorId?: string;
    /** Currency of the financial institution transaction, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
    currency?: string;
    /** Description of the financial institution transaction */
    description?: string;
    /** Identifier assigned by the initiating party to identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. */
    endToEndId?: string;
    /**
     * Date representing the moment the financial institution transaction has been recorded
     * @format date-time
     */
    executionDate?: string;
    /** Unique reference of the mandate which is signed between the remitter and the debtor */
    mandateId?: string;
    /** Bank transaction code prorietary to the financial institution. Content will vary per financial institution */
    proprietaryBankTransactionCode?: string;
    /** Purpose code, based on <a href='https://www.iso20022.org/'>ISO 20022</a> */
    purposeCode?: string;
    /** Content of the remittance information (aka communication) */
    remittanceInformation?: string;
    /** Type of remittance information, can be <code>structured</code> or <code>unstructured</code> */
    remittanceInformationType?: string;
    /**
     * When this financial institution transaction was last synchronized successfully. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    updatedAt?: string;
    /**
     * Date representing the moment the financial institution transaction is considered effective
     * @format date-time
     */
    valueDate?: string;
  };
}

export interface FinancialInstitutionTransactionCollection {
  data?: FinancialInstitutionTransaction[];
}

export interface FinancialInstitutionTransactionSingle {
  data?: FinancialInstitutionTransaction;
}

export interface FinancialInstitution {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the financialInstitution
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Identifier for the financial institution, in <a href='https://en.wikipedia.org/wiki/ISO_9362'>ISO9362</a> format. */
    bic?: string;
    /** Indicates whether the financial institution allows bulk payment initiation requests */
    bulkPaymentsEnabled?: boolean;
    /** Identifies which values are accepted for the bulk payment initiation request <code>productType</code> */
    bulkPaymentsProductTypes?: string[];
    /** Country of the financial institution, in <a href='https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2'>ISO 3166-1 alpha-2</a> format. Is <code>null</code> in the case of an international financial institution. */
    country?: string;
    /** Indicates if the financial institution has been deprecated. Very rarely we may need to deprecate a <a href='https://documentation.ibanity.com//api#financial-institution'>financial institution</a> and ask your users to authorize their accounts again on its replacement. You will be able to access both accounts (if authorized) but you will not be able to synchronize the deprecated account once its authorization has expired. */
    deprecated?: boolean;
    /** Indicates whether a <code>requestedExecutionDate</code> is supported for <a href='https://documentation.ibanity.com//api#payment'>payments</a> from accounts belonging to this financial institution */
    futureDatedPaymentsAllowed?: boolean;
    /** Location of the logo image for the financial institution */
    logoUrl?: string;
    /** Indicates the start date of the maintenance. */
    maintenanceFrom?: object;
    /** Indicates the end date of the maintenance. */
    maintenanceTo?: object;
    /** Indicates if there is an ongoing or scheduled maintenance. If present, the possible values are:<ul><li><code>internal</code>, meaning we are working on the connection and no data access is possible</li><li><code>financialInstitution</code>, indicating the financial institution cannot be reached, but existing data is available in read-only mode</li></ul> */
    maintenanceType?: object;
    /** Name of the financial institution */
    name?: string;
    /** Indicates whether the financial institution allows <a href='https://documentation.ibanity.com//api#payment-initiation-request'>payment initiation requests</a> */
    paymentsEnabled?: boolean;
    /** Identifies which values are accepted for the <a href='https://documentation.ibanity.com//api#payment-initiation-request'>payment initiation request</a> <code>productType</code> */
    paymentsProductTypes?: string[];
    /** Indicates whether the financial institution allows periodic payment initiation requests */
    periodicPaymentsEnabled?: boolean;
    /** Identifies which values are accepted for the periodic payment initiation request <code>productType</code> */
    periodicPaymentsProductTypes?: string[];
    /** Hexadecimal color code related to the primary branding color of the financial institution */
    primaryColor?: string;
    /** Hexadecimal color code related to the secondary branding color of the financial institution */
    secondaryColor?: string;
    /** Customer-friendly name of the financial institution's shared brand, if it is a member of one */
    sharedBrandName?: object;
    /** Attribute used to group multiple individual financial institutions in the same country */
    sharedBrandReference?: object;
    /** Availability of the connection (experimental, beta, stable) */
    status?: string;
  };
}

export interface FinancialInstitutionCollection {
  data?: FinancialInstitution[];
}

export interface FinancialInstitutionSingle {
  data?: FinancialInstitution;
}

export interface Synchronization {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the synchronization
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this synchronization was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Details of any errors that have occurred during synchronization, due to invalid authorization or technical failure. <a href='https://documentation.ibanity.com//api#sync'>See possible errors</a> */
    errors?: object[];
    /**
     * Identifier of the resource to be synchronized
     * @format uuid
     */
    resourceId?: string;
    /** Type of the resource to be synchronized. Currently must be <code>account</code> */
    resourceType?: string;
    /** Current status of the synchronization, which changes from <code>pending</code> to <code>running</code> to <code>success</code> or <code>error</code> */
    status?: string;
    /** What is being synchronized. Account information such as balance is updated using <code>accountDetails</code>, while <code>accountTransactions</code> is used to synchronize the transactions. */
    subtype?: string;
    /**
     * When this synchronization was last synchronized successfully. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    updatedAt?: string;
  };
}

export interface SynchronizationSingle {
  data?: Synchronization;
}

export interface Transaction {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the transaction
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Additional transaction-related information provided from the financial institution to the customer */
    additionalInformation?: string;
    /** Amount of the transaction. Can be positive or negative */
    amount?: number;
    /** Bank transaction code, based on <a href='https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets'>ISO 20022</a> */
    bankTransactionCode?: string;
    /** Reference for card related to the transaction (if any). For example the last 4 digits of the card number. */
    cardReference?: string;
    /** Type of card reference (can be <code>PAN</code> or <code>MASKEDPAN</code>) */
    cardReferenceType?: string;
    /** Legal name of the counterpart */
    counterpartName?: object;
    /** Number representing the counterpart's account */
    counterpartReference?: string;
    /**
     * When this transaction was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Identification of the creditor, e.g. a SEPA Creditor ID. */
    creditorId?: string;
    /** Currency of the transaction, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
    currency?: string;
    /** Description of the transaction */
    description?: string;
    /** A Base64-encoded SHA-256 digest of the transaction payload from the financial institution. This may NOT be unique if the exact same transaction happens on the same day, on the same account. */
    digest?: string;
    /** Identifier assigned by the initiating party to identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. */
    endToEndId?: string;
    /**
     * Date representing the moment the transaction has been recorded
     * @format date-time
     */
    executionDate?: string;
    /** A fee that was withheld from this transaction at the financial institution */
    fee?: number;
    /** Internal resource reference given by the financial institution */
    internalReference?: string;
    /** Unique reference of the mandate which is signed between the remitter and the debtor */
    mandateId?: string;
    /** Bank transaction code prorietary to the financial institution. Content will vary per financial institution */
    proprietaryBankTransactionCode?: string;
    /** Purpose code, based on <a href='https://www.iso20022.org/'>ISO 20022</a> */
    purposeCode?: string;
    /** Content of the remittance information (aka communication) */
    remittanceInformation?: string;
    /** Type of remittance information, can be <code>structured</code> or <code>unstructured</code> */
    remittanceInformationType?: string;
    /**
     * When this transaction was last synchronized successfully. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    updatedAt?: string;
    /**
     * Date representing the moment the transaction is considered effective
     * @format date-time
     */
    valueDate?: string;
  };
}

export interface TransactionCollection {
  data?: Transaction[];
}

export interface TransactionSingle {
  data?: Transaction;
}

export interface Account {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the account
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When the authorization towards the account is expected to end. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    authorizationExpirationExpectedAt?: string;
    /**
     * When the account was authorized for the last time. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    authorizedAt?: string;
    /** Amount of account funds that can be accessed immediately */
    availableBalance?: number;
    /**
     * When the available balance was changed for the last time. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    availableBalanceChangedAt?: string;
    /**
     * Reference date of the available balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    availableBalanceReferenceDate?: string;
    /**
     * Last time that a variation (positive or negative) was detected in our system on the available balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    availableBalanceVariationObservedAt?: string;
    /** Currency of the account, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
    currency?: string;
    /** Total funds currently in the account */
    currentBalance?: number;
    /**
     * When the current balance was changed for the last time. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    currentBalanceChangedAt?: string;
    /**
     * Reference date of the current balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    currentBalanceReferenceDate?: string;
    /**
     * Last time that a variation (positive or negative) was detected in our system on the current balance. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    currentBalanceVariationObservedAt?: string;
    /** Indicates if the account has been deprecated. Very rarely we may need to deprecate a <a href='https://documentation.ibanity.com//api#financial-institution'>financial institution</a> and ask your users to authorize their accounts again on its replacement. You will be able to access both accounts (if authorized) but you will not be able to synchronize the deprecated account once its authorization has expired. */
    deprecated?: boolean;
    /** Description of the account */
    description?: string;
    /** Name of the account holder */
    holderName?: object;
    /** Internal resource reference given by the financial institution */
    internalReference?: string;
    /** Name of the account product */
    product?: object;
    /** Financial institution's internal reference for this account */
    reference?: string;
    /** Type of financial institution reference (can be <code>IBAN</code>, <code>BBAN</code>, <code>email</code>, <code>PAN</code>, <code>MASKEDPAN</code> or <code>MSISDN</code>) */
    referenceType?: string;
    /** Type of account. Can be <code>checking</code>, <code>savings</code>, <code>securities</code>, <code>card</code> or <code>psp</code> */
    subtype?: string;
  };
}

export interface AccountCollection {
  data?: Account[];
}

export interface AccountSingle {
  data?: Account;
}

export interface Payment {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the payment
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Amount of the payment. */
    amount?: number;
    /** Financial institution's internal reference for the payee's account */
    creditorAccountReference?: string;
    /** Type of payee's account reference, currently must be <code>IBAN</code> */
    creditorAccountReferenceType?: string;
    /** Reference to the financial institution */
    creditorAgent?: string;
    /** Type of financial institution reference, currently must be <code>BIC</code> */
    creditorAgentType?: string;
    /** Name of the payee. Limited to 60 characters in the set <code>a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 / - ? : ( ) . , ' + Space</code> to ensure it is not rejected by the financial institution. */
    creditorName?: string;
    /** Currency of the payment, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
    currency?: string;
    /** Content of the remittance information (aka communication). Limited to 140 characters in the set <code>a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 / - ? : ( ) . , ' + Space</code> to ensure it is not rejected by the financial institution. */
    remittanceInformation?: string;
    /** Type of remittance information, can be <code>structured</code> or <code>unstructured</code> */
    remittanceInformationType?: string;
    /**
     * A date in the future when the payment is requested to be executed. The availability of this feature depends on each financial institution. See <a href='https://documentation.ibanity.com//api#financial-institution-attributes'>financial institution attributes</a>. Note that it is not possible to simulate the delayed execution of a payment with the sandbox.
     * @format date
     */
    requestedExecutionDate?: string;
    /** Current status of the payment. <a href='/ponto-connect/products#payment-initiation-workflow'>See possible statuses</a>. */
    status?: string;
  };
}

export interface PaymentSingle {
  data?: Payment;
}

export interface BulkPayment {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the bulkPayment
   * @format uuid
   */
  id: string;
  attributes?: {
    /** <p>Indicates whether the bulk payment transactions should be grouped into one booking entry by the financial institution instead of individual transactions.</p><p>This is a preference that may or may not be taken into account by the financial institution based on availability and the customer's bulk payment contract.</p><p>Defaults to <code>false</code></p> */
    batchBookingPreferred?: boolean;
    /** Your identifier for the bulk payment, displayed to the user in the Ponto dashboard */
    reference?: string;
    /**
     * A date in the future when the payment is requested to be executed. The availability of this feature depends on each financial institution. See <a href='https://documentation.ibanity.com//api#financial-institution-attributes'>financial institution attributes</a>. Note that it is not possible to simulate the delayed execution of a payment with the sandbox.
     * @format date
     */
    requestedExecutionDate?: string;
    /** Current status of the bulk payment. <a href='/ponto-connect/products#payment-initiation-workflow'>See possible statuses</a>. */
    status?: string;
  };
}

export interface BulkPaymentSingle {
  data?: BulkPayment;
}

export interface Integration {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the integration
   * @format uuid
   */
  id: string;
  attributes?: {
    /** Details about the corresponding organization */
    organization?: object;
  };
}

export interface IntegrationSingle {
  data?: Integration;
}

export interface AccountTransactionsUpdated {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the accountTransactionsUpdated
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Number of transactions updated by the synchronization */
    count?: number;
  };
}

export interface AccountDetailsUpdated {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the accountDetailsUpdated
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface AccountTransactionsCreated {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the accountTransactionsCreated
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Number of transactions created by the synchronization */
    count?: number;
  };
}

export interface SynchronizationFailed {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the synchronizationFailed
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Subtype of the related synchronization */
    synchronizationSubtype?: string;
  };
}

export interface SynchronizationSucceededWithoutChange {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the synchronizationSucceededWithoutChange
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
    /** Subtype of the related synchronization */
    synchronizationSubtype?: string;
  };
}

export interface OrganizationBlocked {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the organizationBlocked
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface OrganizationUnblocked {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the organizationUnblocked
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface IntegrationAccountAdded {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the integrationAccountAdded
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface IntegrationAccountRevoked {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the integrationAccountRevoked
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface IntegrationRevoked {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the integrationRevoked
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface IntegrationCreated {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the integrationCreated
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

export interface AccountReauthorized {
  /** Resource name */
  type: string;
  /**
   * Unique identifier for the accountReauthorized
   * @format uuid
   */
  id: string;
  attributes?: {
    /**
     * When this notification was created. Formatted according to <a href='https://en.wikipedia.org/wiki/ISO_8601'>ISO8601</a> spec
     * @format date-time
     */
    createdAt?: string;
  };
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'https://api.ibanity.com/ponto-connect',
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Ponto Connect
 * @version 2
 * @baseUrl https://api.ibanity.com/ponto-connect
 *
 * For more info, please refer to the documentation: https://documentation.ibanity.com/ponto-connect/
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  accounts = {
    /**
     * No description
     *
     * @tags Account
     * @name ListAccounts
     * @summary List Accounts
     * @request GET:/accounts
     * @secure
     */
    listAccounts: (
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the account resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the account resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountCollection, any>({
        path: `/accounts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bulk Payment
     * @name CreateBulkPayment
     * @summary Create Bulk Payment
     * @request POST:/accounts/{accountId}/bulk-payments
     * @secure
     */
    createBulkPayment: (
      accountId: string,
      data: {
        /** Your identifier for the bulk payment, displayed to the user in the Ponto dashboard */
        reference: string;
        /** URI that your user will be redirected to at the end of the authorization flow.</a> */
        redirectUri?: string;
        /**
         * A date in the future when the payment is requested to be executed. The availability of this feature depends on each financial institution. See <a href='https://documentation.ibanity.com/ponto-connect/api#financial-institution-attributes'>financial institution attributes</a>. Note that it is not possible to simulate the delayed execution of a payment with the sandbox.
         * @format date
         */
        requestedExecutionDate?: string;
        /** <p>Indicates whether the bulk payment transactions should be grouped into one booking entry by the financial institution instead of individual transactions.</p><p>This is a preference that may or may not be taken into account by the financial institution based on availability and the customer's bulk payment contract.</p><p>Defaults to <code>false</code></p> */
        batchBookingPreferred?: boolean;
        /** <p>List of payment attribute objects to be included in the bulk payment.</p><p>Required attributes are <code>currency</code> (currently must be <code>EUR</code>), <code>amount</code>, <code>creditorName</code>, <code>creditorAccountReference</code>, and <code>creditorAccountReferenceType</code>.</p><p>Optional attributes are <code>remittanceInformation</code>, <code>remittanceInformationType</code>, <code>creditorAgent</code>, and <code>creditorAgentType</code>.</p><p>For more information see the <a href='https://documentation.ibanity.com/ponto-connect/api#create-payment-attributes'>create payment attributes</a></p> */
        payments: object[];
      },
      params: RequestParams = {}
    ) =>
      this.request<BulkPaymentSingle, any>({
        path: `/accounts/${accountId}/bulk-payments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bulk Payment
     * @name GetBulkPayment
     * @summary Get Bulk Payment
     * @request GET:/accounts/{accountId}/bulk-payments/{id}
     * @secure
     */
    getBulkPayment: (
      accountId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<BulkPaymentSingle, any>({
        path: `/accounts/${accountId}/bulk-payments/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bulk Payment
     * @name DeleteBulkPayment
     * @summary Delete Bulk Payment
     * @request DELETE:/accounts/{accountId}/bulk-payments/{id}
     * @secure
     */
    deleteBulkPayment: (
      accountId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<BulkPaymentSingle, any>({
        path: `/accounts/${accountId}/bulk-payments/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name CreatePayment
     * @summary Create Payment
     * @request POST:/accounts/{accountId}/payments
     * @secure
     */
    createPayment: (
      accountId: string,
      data: {
        /** Content of the remittance information (aka communication). Limited to 140 characters in the set <code>a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 / - ? : ( ) . , ' + Space</code> to ensure it is not rejected by the financial institution. */
        remittanceInformation?: string;
        /** Type of remittance information, can be <code>structured</code> or <code>unstructured</code> */
        remittanceInformationType?: string;
        /**
         * A date in the future when the payment is requested to be executed. The availability of this feature depends on each financial institution. See <a href='https://documentation.ibanity.com/ponto-connect/api#financial-institution-attributes'>financial institution attributes</a>. Note that it is not possible to simulate the delayed execution of a payment with the sandbox.
         * @format date
         */
        requestedExecutionDate?: string;
        /** Currency of the payment, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
        currency: string;
        /** Amount of the payment. */
        amount: number;
        /** Name of the payee. Limited to 60 characters in the set <code>a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9 / - ? : ( ) . , ' + Space</code> to ensure it is not rejected by the financial institution. */
        creditorName: string;
        /** Financial institution's internal reference for the payee's account */
        creditorAccountReference: string;
        /** Type of payee's account reference, currently must be <code>IBAN</code> */
        creditorAccountReferenceType: string;
        /** Reference to the financial institution */
        creditorAgent?: string;
        /** Type of financial institution reference, currently must be <code>BIC</code> */
        creditorAgentType?: string;
        /** URI that your user will be redirected to at the end of the authorization flow</a> */
        redirectUri?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentSingle, any>({
        path: `/accounts/${accountId}/payments`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name GetPayment
     * @summary Get Payment
     * @request GET:/accounts/{accountId}/payments/{id}
     * @secure
     */
    getPayment: (accountId: string, id: string, params: RequestParams = {}) =>
      this.request<PaymentSingle, any>({
        path: `/accounts/${accountId}/payments/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name DeletePayment
     * @summary Delete Payment
     * @request DELETE:/accounts/{accountId}/payments/{id}
     * @secure
     */
    deletePayment: (
      accountId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<PaymentSingle, any>({
        path: `/accounts/${accountId}/payments/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reauthorization Request
     * @name RequestAccountReauthorization
     * @summary Request Account Reauthorization
     * @request POST:/accounts/{accountId}/reauthorization-requests
     * @secure
     */
    requestAccountReauthorization: (
      accountId: string,
      data: {
        /** URI that your user will be redirected to at the end of the authorization flow</a> */
        redirectUri: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReauthorizationRequestSingle, any>({
        path: `/accounts/${accountId}/reauthorization-requests`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transaction
     * @name ListTransactions
     * @summary List Transactions
     * @request GET:/accounts/{accountId}/transactions
     * @secure
     */
    listTransactions: (
      accountId: string,
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the transaction resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the transaction resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TransactionCollection, any>({
        path: `/accounts/${accountId}/transactions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transaction
     * @name GetTransaction
     * @summary Get Transaction
     * @request GET:/accounts/{accountId}/transactions/{id}
     * @secure
     */
    getTransaction: (
      accountId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<TransactionSingle, any>({
        path: `/accounts/${accountId}/transactions/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetAccount
     * @summary Get Account
     * @request GET:/accounts/{id}
     * @secure
     */
    getAccount: (id: string, params: RequestParams = {}) =>
      this.request<AccountSingle, any>({
        path: `/accounts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name RevokeAccount
     * @summary Revoke Account
     * @request DELETE:/accounts/{id}
     * @secure
     */
    revokeAccount: (id: string, params: RequestParams = {}) =>
      this.request<AccountSingle, any>({
        path: `/accounts/${id}`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  financialInstitutions = {
    /**
     * No description
     *
     * @tags Financial Institution
     * @name ListOrganizationFinancialInstitutions
     * @summary List Organization Financial Institutions
     * @request GET:/financial-institutions
     * @secure
     */
    listOrganizationFinancialInstitutions: (
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the financial institution resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the financial institution resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionCollection, any>({
        path: `/financial-institutions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution
     * @name GetOrganizationFinancialInstitution
     * @summary Get Organization Financial Institution
     * @request GET:/financial-institutions/{id}
     * @secure
     */
    getOrganizationFinancialInstitution: (
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionSingle, any>({
        path: `/financial-institutions/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  onboardingDetails = {
    /**
     * No description
     *
     * @tags Onboarding Details
     * @name CreateOnboardingDetails
     * @summary Create Onboarding Details
     * @request POST:/onboarding-details
     * @secure
     */
    createOnboardingDetails: (
      data: {
        /** Email belonging to the onboarding user */
        email: string;
        /** First name of the onboarding user */
        firstName?: string;
        /** Last name of the onboarding user */
        lastName?: string;
        /** Name of the onboarding user's organization */
        organizationName?: string;
        /** Enterprise number corresponding to the onboarding user's organization */
        enterpriseNumber?: string;
        /** VAT number corresponding to the onboarding user's organization */
        vatNumber?: string;
        /** Street address of the onboarding user's organization */
        addressStreetAddress?: string;
        /** Country of the onboarding user's organization */
        addressCountry?: string;
        /** Postal code of the onboarding user's organization */
        addressPostalCode?: string;
        /** City of the onboarding user's organization */
        addressCity?: string;
        /** Phone number of the onboarding user */
        phoneNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<OnboardingDetailsSingle, any>({
        path: `/onboarding-details`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  organizations = {
    /**
     * No description
     *
     * @tags Integration
     * @name DeleteOrganizationIntegration
     * @summary Delete Organization Integration
     * @request DELETE:/organizations/{organizationId}/integration
     * @secure
     */
    deleteOrganizationIntegration: (
      organizationId: string,
      params: RequestParams = {}
    ) =>
      this.request<IntegrationSingle, any>({
        path: `/organizations/${organizationId}/integration`,
        method: 'DELETE',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Usage
     * @name GetOrganizationUsage
     * @summary Get Organization Usage
     * @request GET:/organizations/{organizationId}/usage/{month}
     * @secure
     */
    getOrganizationUsage: (
      organizationId: string,
      month: string,
      params: RequestParams = {}
    ) =>
      this.request<UsageSingle, any>({
        path: `/organizations/${organizationId}/usage/${month}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  paymentActivationRequests = {
    /**
     * No description
     *
     * @tags Payment Activation Request
     * @name RequestPaymentActivation
     * @summary Request Payment Activation
     * @request POST:/payment-activation-requests
     * @secure
     */
    requestPaymentActivation: (
      data: {
        /** URI that your user will be redirected to at the end of the authorization flow</a> */
        redirectUri: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentActivationRequestSingle, any>({
        path: `/payment-activation-requests`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  sandbox = {
    /**
     * No description
     *
     * @tags Financial Institution Account
     * @name ListFinancialInstitutionAccounts
     * @summary List Financial Institution Accounts
     * @request GET:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts
     * @secure
     */
    listFinancialInstitutionAccounts: (
      financialInstitutionId: string,
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the financial institution account resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the financial institution account resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionAccountCollection, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution Transaction
     * @name ListFinancialInstitutionTransactions
     * @summary List Financial Institution Transactions
     * @request GET:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts/{financialInstitutionAccountId}/financial-institution-transactions
     * @secure
     */
    listFinancialInstitutionTransactions: (
      financialInstitutionId: string,
      financialInstitutionAccountId: string,
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the financial institution transaction resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the financial institution transaction resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionTransactionCollection, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts/${financialInstitutionAccountId}/financial-institution-transactions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution Transaction
     * @name CreateFinancialInstitutionTransaction
     * @summary Create Financial Institution Transaction
     * @request POST:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts/{financialInstitutionAccountId}/financial-institution-transactions
     * @secure
     */
    createFinancialInstitutionTransaction: (
      financialInstitutionId: string,
      financialInstitutionAccountId: string,
      data: {
        /**
         * Date representing the moment the financial institution transaction is considered effective
         * @format date-time
         */
        valueDate: string;
        /**
         * Date representing the moment the financial institution transaction has been recorded
         * @format date-time
         */
        executionDate: string;
        /** Amount of the financial institution transaction. Can be positive or negative */
        amount: number;
        /** Currency of the financial institution transaction, in <a href='https://en.wikipedia.org/wiki/ISO_4217'>ISO4217</a> format */
        currency: string;
        /** Legal name of the counterpart. Can only be updated if it was previously not provided (blank). */
        counterpartName?: string;
        /** Number representing the counterpart's account */
        counterpartReference?: string;
        /** Description of the financial institution transaction */
        description: string;
        /** Content of the remittance information (aka communication) */
        remittanceInformation?: string;
        /** Type of remittance information, can be <code>structured</code> or <code>unstructured</code> */
        remittanceInformationType: string;
        /** Identifier assigned by the initiating party to identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. */
        endToEndId?: string;
        /** Purpose code, based on <a href='https://www.iso20022.org/'>ISO 20022</a> */
        purposeCode?: string;
        /** Unique reference of the mandate which is signed between the remitter and the debtor */
        mandateId?: string;
        /** Identification of the creditor, e.g. a SEPA Creditor ID. */
        creditorId?: string;
        /** Additional transaction-related information provided from the financial institution to the customer */
        additionalInformation?: string;
        /** Bank transaction code prorietary to the financial institution. Content will vary per financial institution */
        proprietaryBankTransactionCode?: string;
        /** Bank transaction code, based on <a href='https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets'>ISO 20022</a> */
        bankTransactionCode?: string;
        /** Type of card reference (can be <code>PAN</code> or <code>MASKEDPAN</code>) */
        cardReferenceType?: string;
        /** Reference for card related to the transaction (if any). For example the last 4 digits of the card number. */
        cardReference?: string;
        /** A fee that was withheld from this transaction at the financial institution */
        fee?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionTransactionSingle, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts/${financialInstitutionAccountId}/financial-institution-transactions`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution Transaction
     * @name GetFinancialInstitutionTransaction
     * @summary Get Financial Institution Transaction
     * @request GET:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts/{financialInstitutionAccountId}/financial-institution-transactions/{id}
     * @secure
     */
    getFinancialInstitutionTransaction: (
      financialInstitutionId: string,
      financialInstitutionAccountId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionTransactionSingle, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts/${financialInstitutionAccountId}/financial-institution-transactions/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution Transaction
     * @name UpdateFinancialInstitutionTransaction
     * @summary Update Financial Institution Transaction
     * @request PATCH:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts/{financialInstitutionAccountId}/financial-institution-transactions/{id}
     * @secure
     */
    updateFinancialInstitutionTransaction: (
      financialInstitutionId: string,
      financialInstitutionAccountId: string,
      id: string,
      data: {
        /** Legal name of the counterpart. Can only be updated if it was previously not provided (blank). */
        counterpartName?: string;
        /** Description of the financial institution transaction */
        description?: string;
        /** Content of the remittance information (aka communication) */
        remittanceInformation?: string;
        /** Identifier assigned by the initiating party to identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. */
        endToEndId?: string;
        /** Purpose code, based on <a href='https://www.iso20022.org/'>ISO 20022</a> */
        purposeCode?: string;
        /** Unique reference of the mandate which is signed between the remitter and the debtor */
        mandateId?: string;
        /** Identification of the creditor, e.g. a SEPA Creditor ID. */
        creditorId?: string;
        /** Additional transaction-related information provided from the financial institution to the customer */
        additionalInformation?: string;
        /** Bank transaction code prorietary to the financial institution. Content will vary per financial institution */
        proprietaryBankTransactionCode?: string;
        /** Bank transaction code, based on <a href='https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets'>ISO 20022</a> */
        bankTransactionCode?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionTransactionSingle, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts/${financialInstitutionAccountId}/financial-institution-transactions/${id}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Financial Institution Account
     * @name GetFinancialInstitutionAccount
     * @summary Get Financial Institution Account
     * @request GET:/sandbox/financial-institutions/{financialInstitutionId}/financial-institution-accounts/{id}
     * @secure
     */
    getFinancialInstitutionAccount: (
      financialInstitutionId: string,
      id: string,
      params: RequestParams = {}
    ) =>
      this.request<FinancialInstitutionAccountSingle, any>({
        path: `/sandbox/financial-institutions/${financialInstitutionId}/financial-institution-accounts/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  synchronizations = {
    /**
     * No description
     *
     * @tags Synchronization
     * @name CreateSynchronization
     * @summary Create Synchronization
     * @request POST:/synchronizations
     * @secure
     */
    createSynchronization: (
      data: {
        /** Type of the resource to be synchronized. Currently must be <code>account</code> */
        resourceType: string;
        /** Identifier of the resource to be synchronized */
        resourceId: string;
        /** What is being synchronized. Account information such as balance is updated using <code>accountDetails</code>, while <code>accountTransactions</code> is used to synchronize the transactions. */
        subtype: string;
        /** This must contain the IP address of the customer */
        customerIpAddress: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<SynchronizationSingle, any>({
        path: `/synchronizations`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Synchronization
     * @name GetSynchronization
     * @summary Get Synchronization
     * @request GET:/synchronizations/{id}
     * @secure
     */
    getSynchronization: (id: string, params: RequestParams = {}) =>
      this.request<SynchronizationSingle, any>({
        path: `/synchronizations/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Transaction
     * @name ListUpdatedTransactionsForSynchronization
     * @summary List Updated Transactions for Synchronization
     * @request GET:/synchronizations/{synchronizationId}/updated-transactions
     * @secure
     */
    listUpdatedTransactionsForSynchronization: (
      synchronizationId: string,
      query?: {
        /** Maximum number (1-100) of resources that might be returned. It is possible that the response contains fewer elements. Defaults to <code>10</code> */
        'page[limit]'?: number;
        /** Cursor for pagination. Indicates that the API should return the transaction resources which are immediately before this one in the list (the previous page) */
        'page[before]'?: string;
        /** Cursor for pagination. Indicates that the API should return the transaction resources which are immediately after this one in the list (the next page) */
        'page[after]'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TransactionCollection, any>({
        path: `/synchronizations/${synchronizationId}/updated-transactions`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  userinfo = {
    /**
     * No description
     *
     * @tags User Info
     * @name GetUserInfo
     * @summary Get User Info
     * @request GET:/userinfo
     * @secure
     */
    getUserInfo: (params: RequestParams = {}) =>
      this.request<UserInfoSingle, any>({
        path: `/userinfo`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
