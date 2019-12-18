import { Injectable } from '@angular/core';

import { loadingReducer } from '@sbg/common';
import { applicationReducer } from '@sbg/common';

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs';
import {
  AdvisorClient,
  AdvisorDetailsData,
  AdvisorDetailsResponse,
  EnableCustomerRequest,
  ClientEnabledResponse
} from '@sbg/common';
import { Client, AddClientFormData, ClientByIdType } from '@sbg/common';
import { ErrorData } from '@sbg/common';
import {
  ProfileSummary,
  FetchProfileSummaryResponse,
  FetchProfileSummaryRequest
} from '@sbg/common';
import {
  Product,
  FetchProductListResponse,
  FetchProductGrowthResponse,
  FetchProductDetailsResponse,
  FetchProductResponse,
  FetchProductsResponse,
  FetchProductRequest,
  FetchProductGrowthRequest,
  FetchProductListRequest,
  FetchProductDetailsRequest
} from '@sbg/common';

let details: any = {
  clients: [{}]
};

let clientList: Client[] = [
  {
    digitalId: 'aaa@bbb.com',
    bpId: '121212',
    title: 'Mr',
    firstName: 'Donald',
    lastName: 'Massyn',
    idNumber: '1212121121',
    dateOfBirth: '12/12/1912',
    contactDetails: {
      emailAddress: 'aaa@bbb.com',
      cellNumber: '1221212',
      homeWorkNumber: '32232323',
      showInPdf: false
    },
    postalAddress: {
      streetNameNumber: 'one',
      city: 'two',
      country: 'three',
      postalCode: 'four',
      showInPdf: false
    },
    streetAddress: {
      streetNameNumber: 'five',
      city: 'six',
      country: 'seven',
      postalCode: 'eight',
      showInPdf: false
    },
    goalViewState: true
  },
  {
    digitalId: 'IamNull',
    bpId: '121212',
    title: null,
    firstName: null,
    lastName: null,
    idNumber: '1212121121',
    dateOfBirth: '12/12/1912',
    contactDetails: {
      emailAddress: 'aaa@bbb.com',
      cellNumber: '1221212',
      homeWorkNumber: '32232323',
      showInPdf: false
    },
    postalAddress: {
      streetNameNumber: 'one',
      city: 'two',
      country: 'three',
      postalCode: 'four',
      showInPdf: false
    },
    streetAddress: {
      streetNameNumber: 'five',
      city: 'six',
      country: 'seven',
      postalCode: 'eight',
      showInPdf: false
    },
    goalViewState: true
  }
];

let advisorClientList: AdvisorClient[] = [
  {
    bpid: '150236345',
    cellNumber: '+27785467232',
    email: 'sheryl.pather@ymail.com',
    enabled: true,
    firstName: 'SHERYL',
    idNumber: '8305062817080',
    lastName: 'PATHER',
    marketSegment: 0,
    middleName: null,
    registered: false,
    title: 'MISS'
  }
];

let envSettings = {
  goalSaverBaseUrl: 'https://mockUrl.co.za',
  goalSaverApiPath: '/sbg-mobile/rest',
  goalSaverApiUrl: 'https://mockUrl.co.za',
  wealthBaseUrl: 'https://mockUrl.co.za',
  wealthApiPath: '/sbg-mobile/rest',
  wealthApiUrl: 'https://mockUrl.co.za',
  logoutUrl: 'https://log:out@mockUrl.co.za',
  debugging: true,
  timeoutSeconds: 60000
};

let sysSettings = {
  env: 'development',
  endpoints: {
    auth: {
      auth: ''
    },
    goalSaver: {
      fetchGoalById: 'WI/GoalsaverServices/fetchGoalById',
      fetchOfferData: 'WI/GoalsaverServices/fetchOfferData',
      insertUpdateGoal: 'WI/GoalsaverServices/insertUpdateGoal',
      calculateTargetFund: 'WI/GoalsaverServices/calculateTargetFund',
      fetchEACData: 'WI/GoalsaverServices/FetchEAC'
    },
    client: {
      fetchClients: 'WI/GoalsaverServices/fetchClients',
      fetchClientById: 'WI/GoalsaverServices/fetchClientById'
    },
    profile: {
      fetchProfileSummary: 'WI/WealthAdvisorServices/FetchProfileSummary'
    },
    product: {
      fetchProduct: 'WI/WealthAdvisorServices/FetchProduct',
      fetchProductGrowth: 'WI/WealthAdvisorServices/FetchProductGrowth',
      fetchProductList: 'WI/WealthAdvisorServices/FetchProductList',
      fetchProducts: 'WI/WealthAdvisorServices/FetchProducts',
      fetchProductDetails: 'WI/WealthAdvisorServices/FetchProductDetails'
    },
    advisor: {
      getAdvisorDetails: 'WI/WealthAdvisorServices/FetchAdvisorDetails',
      setClientEnabled: 'WI/WealthAdvisorServices/EnableCustomer',
      fetchProfileSummary: 'WI/WealthAdvisorServices/FetchProfileSummary'
    },
    fundFactSheetURL:
      'https://standardbank.sharepoint.com/sites/StandardBankFinancialConsultancy'
  }
};

let advisor: AdvisorDetailsData = {
  bpid: '1234',
  cellNumber: '1234',
  clients: [],
  email: '1234@1234.com',
  firstName: 'bob',
  idNumber: '123456',
  lastName: 'roberts',
  middleName: 'abc',
  mobileNumber: '322'
};

@Injectable()
export class MockData {
  constructor() {}

  getClient(): Client {
    return details.clients[0];
  }

  getAdvisor(): AdvisorDetailsData {
    return advisor;
  }

  getClient$(): Observable<Client> {
    return of(details.clients[0]);
  }

  clientList$(): Observable<Client[]> {
    return of(clientList);
  }

  clientList(): Client[] {
    return clientList;
  }

  advisorClientList(): AdvisorClient[] {
    return advisorClientList;
  }

  badRequestError$(): Observable<ErrorData> {
    return of({ status: 400 });
  }

  loading$(): Observable<boolean> {
    return of(false);
  }

  loadingTrue$(): Observable<boolean> {
    return of(true);
  }

  loadingStateTrue$(): Observable<loadingReducer.State> {
    return of({
      isLoading: true,
      isRenderingPDF: false,
      isDataLoading: false,
      isProductsLoading: false,
      isClientToggledLoading: false
    });
  }

  errorList$(): Observable<ErrorData> {
    return of({ status: 404, message: 'Not found' });
  }

  getRoaContent(): any {
    return {
      page1: {
        graph_subscript: [
          '* This illustration is based on past performance and based on data believed to be accurate and ',
          'reliable. However, this does not suggest or imply and should not be construed, in any manner, a ',
          'guarantee of future performance. Past performance does not guarantee future results.'
        ],
        analysis_date: 'Analysis done: ',
        expected_returns_table: {
          col1_heading_part1: 'Expected Returns',
          col1_heading_part2: '(after tax)',
          col2_heading_tax_excluded: 'No tax applied',
          col2_heading_tax_included: 'Tax applied at 35% marginal rate',
          col3_heading: ' Net %',
          row1_subheading: 'Upper expectation (5,00% probability)',
          row2_subheading: 'Median return',
          row3_subheading: 'Lower expectation (5,00% probability)'
        },
        amount_invested_table: {
          col1_heading: 'Invested',
          col2_heading: '',
          row1_subheading: 'Deposit Amount',
          row2_subheading: 'Monthly Payment',
          row3_subheading: 'Total Monthly Payments'
        },
        rates_subtext: [
          'The average tax rates assumed in respect of taxable investments are: Stanlib Balanced Fund 18%, ',
          'Stanlib Balanced Cautious Fund 23% and Bank Deposits 30,0%'
        ],
        expected_return_condition: [
          'The expected returns shown here only apply where payments under the plan are ',
          'maintained throughout the full period of the plan.'
        ],
        investments_table: {
          col1_heading: 'Investments',
          col2_heading: '',
          row1_subheading: 'TAX FREE Savings Account',
          row2_subheading: 'Taxable',
          row3_subheading: 'TOTAL'
        },
        affordability_table: {
          col1_heading: 'Affordability',
          col2_heading: '',
          row1_subheading: 'Income',
          row2_subheading: 'Expenditure',
          row3_subheading: ''
        },
        criteria_table: {
          col1_heading: 'Criteria',
          col2_heading: '',
          row1_subheading: 'Goal Description',
          row2_subheading: 'Goal Term',
          row3_subheading: 'Inflation assumption for this goal',
          row4_subheading: 'Goal Amount',
          row5_subheading: 'Fund Choice',
          row6_subheading: 'Premium Escalation',
          row7_subheading: 'Initial Advice Fee',
          row8_subheading: 'Ongoing Advice Fee',
          row9_subheading: 'Probability Range'
        },
        bottom_page_heading1: 'Personal Risk',
        bottom_page_heading2: 'Recommended risk profile for this goal'
      },
      page2: {
        page_heading: 'Record of Advice',
        page_introduction: [
          'This record of advice covers the discussion between the Financial Planner, and client_name client_surname ',
          'regarding an investment that we have discussed for you.'
        ],
        section1: {
          heading: 'NOTICE',
          paragraph1_scenario1: [
            'A focused analysis was undertaken, therefore there may be limitations with regards to the ',
            'appropriateness of the advice provided.  You should take particular care when you consider ',
            'this limited investment advice focusing on a single goal when you determine the appropriateness ',
            'of the investment advice considering your objectives, financial situation, particular needs and goals.'
          ],
          paragraph1_scenario2: [
            'A comprehensive analysis was carried out, and additional recommendations may apply. This document should  ',
            'be read in conjunction with the Record of Advice provided by the planner.'
          ]
        },
        section2: {
          heading: 'SUMMARY OF YOUR INFORMATION PROVIDED TO ME',
          paragraph1_part1: [
            'You, client_name client_surname (client_id_number) have indicated after completion of a Financial ',
            'Needs Analysis, that you wish to create an investment plan for goal_description and ',
            'this is expected to take goal_term years.'
          ],
          paragraph1_part2:
            'Your inflation adjusted target amount is target_fund.',
          paragraph1_part3: [
            'I have determined from the needs analysis that a unit trust investment is a suitable vehicle for ',
            'this plan, and that the GoalStandard range of funds has a diverse range of funds to suit most ',
            'goals and durations.'
          ],
          paragraph2: [
            'Your risk profile indicated by your Needs Analysis can be described as risk_profile, and you have indicated ',
            'that you have an initial amount of deposit_amount to contribute to this plan. You have selected to ',
            'invest using goals based investment planning and not traditional risk based investment planning.'
          ]
        },
        section3: {
          heading: 'WHAT WAS CONSIDERED FOR YOUR GOAL',
          paragraph1_part1: [
            'Your risk and duration selections suggested that fund_recommendation would be most suitable (risk_profile risk profile). ',
            'I have therefore demonstrated the likely illustrative projection ',
            'of target_fund. I have explained the probability of the possible outcomes of each of the funds, ',
            'showing an illustrative 90% of all possible outcomes for the fund.'
          ],
          paragraph1_part2:
            'I have also demonstrated the same for selected_fund.',
          paragraph1_part3: [
            'I have done this to illustrate the risk to you that due to market fluctuation you may sometimes ',
            'receive more or sometimes receive less than your original goal amount. The recommended minimum ',
            'contributions are calculated to to exceed the goal target half the time, but not achieve the goal ',
            'target half the time and this should be taken into account when confirming the premium relative to ',
            'the priority for this goal. Should you choose to pay an ongoing advice fee on this investment, ',
            'this goal will be reviewed annually and changes suggested to ensure you reach your goal. We have ',
            'adjusted the premium escalation and the fund choice to suit your goal, taking into account your ',
            'desired affordability. Note that the final fund choice for this goal based on these factors may ',
            'not have the same risk profile as originally determined by the Financial Needs analysis.'
          ],
          paragraph2_tax_excluded:
            'Income and Capital Gain Tax have been excluded from these projected values, so your post tax return may differ from your goal amount.',
          // tslint:disable-next-line:max-line-length
          paragraph2_tax_included:
            'Income and Capital Gain Tax have been included in these projected values at a marginal rate of 35%, so your post tax return may differ from your goal amount.'
        },
        section4: {
          heading: 'MY RECOMMENDATION',
          paragraph1: [
            'Based on your selections of contribution, duration and nature of your goal and your risk tolerance for this goal (risk_tolerance_offer),',
            'I have recommended that you invest an initial contribution of deposit_amount and a monthly contribution of monthly_premium into',
            'fund_selected. Your start off monthly premium is monthly_premium and this premium will escalate by premium_escalation annually.'
          ]
        }
      },
      page3: {
        section1: {
          heading: 'ADVICE FEES',
          paragraph1_part1:
            'In return for providing you with upfront product advice you have agreed to pay',
          paragraph1_part2_option1:
            'an initial advice fee equal to fee_based_on_period excluding VAT which will be payable equally over the first fee_period of the investment.',
          paragraph1_part2_option2:
            'an initial advice fee of upfront_fee% excluding VAT on each contribution.',
          paragraph2: [
            'You may cancel the initial advice fee at any time by giving notice, without incurring any penalties, however,',
            'once an initial advice fee is paid, it cannot be refunded.'
          ]
        },
        section2: {
          heading: 'ONGOING ADVICE FEE',
          paragraph1: [
            'In return for providing you with ongoing product services you have agreed to pay an ongoing advice fee of ongoing_advice_fee% ',
            'excluding VAT per annum. This service charge is accrued daily and levied monthly in arrears on the market value of ',
            'the portfolio. Ongoing advice fees will be paid by the Manager (STANLIB Collective Investments Limited) from the liquidation ',
            'of units. Details of ongoing commission fees by the Manager to the Financial Planner on record in respect of your ',
            'investment are available on request from the Manager.'
          ],
          paragraph2: [
            'You may cancel the ongoing advice fee at any time by giving notice, without incurring any penalties, however, ',
            'once an ongoing advice fee is paid, it cannot be refunded.'
          ]
        },
        section3: {
          heading: 'PRODUCT COSTS',
          paragraph1: [
            'The Effective Annual Cost (EAC) measure is a standardized measure of expenses relating to an investment, ',
            'and is disclosed with every investment. The table below shows a full EAC breakdown for this plan.'
          ]
        },
        product_cost_table: {
          col1_heading: 'Charges',
          col2_heading: '1 Year',
          col3_heading: '3 Year',
          col4_heading: '5 Year',
          col5_heading: 'Term until maturity',
          row1_subheading: 'Advice Fee',
          row2_subheading: 'Investment Management Fee',
          row3_subheading: 'Administration Fees',
          row4_subheading: 'Other Fees',
          row5_subheading: 'Effective Annual Cost'
        }
      },
      page4: {
        section1: {
          heading: 'Client Declaration',
          list: {
            title: 'I client_name client_surname hereby confirm that:',
            list_item1:
              'I have received and signed a copy of the FAIS disclosure document.',
            list_item2:
              'I have disclosed all material fact accurately and properly as reflected in the financial needs analysis.',
            list_item3: [
              'I have been advised that any misrepresentation or non-disclosure of material facts including incorrect ',
              'information will have a negative impact which may include incorrect product recommendation to me, ',
              'repudiation of claims or even cancellation of the product.'
            ],
            list_item4: [
              'Where applicable all documentation relating to the recommended product was completed in its entirety ',
              'when I signed the documents.'
            ],
            list_item5: [
              'I understand the product as explained to me and I was able to make an informed decision regarding the ',
              'suitability of the product to my needs.'
            ],
            list_item6:
              'I was made aware of the fact that I must be provided with a copy of the record of advice.',
            list_item7:
              'Documentation includes the disclosure documents, financial needs analysis , product application forms.',
            list_item8: [
              'I understand and agree that should I add any additional funds to my investment without the assistance ',
              'or knowledge of my financial planner, any fees generated due to the additional amount will be paid to ',
              'Standard Bank Financial Consultancy.'
            ]
          }
        },
        signature_of_client: 'SIGNATURE OF CLIENT',
        signature_of_planner: 'SIGNATURE OF PLANNER (and name in print)',
        date: 'Date',
        signed_at: 'SIGNED AT'
      }
    };
  }

  getAddClientFormData(): AddClientFormData {
    return {
      idNumber: '123',
      idType: ClientByIdType.idNumber
    };
  }

  errorMessage(): ErrorData {
    return {
      message: 'error message'
    };
  }

  enableCustomerRequest(): EnableCustomerRequest {
    return {
      advisorId: '1',
      advisorBpId: '2',
      customerBpId: '3',
      customerId: '4',
      enableCustomer: true
    };
  }

  clientEnabledResponse(): ClientEnabledResponse {
    return {
      enableCustomer: true,
      customerBpId: '3'
    };
  }

  getAuthToken(): string {
    return (
      'aXNzdWVfdGltZT0iMjAxNi0xMS0yM1QwNDo0NTowMSINCmlzc3Vlcj0iQz1TQSwgU1Q9R2F1dGVuZywgTD1Kb2hhbm5lc2J1cmcsIE89U3RhbmRhcmRiYW5rLCBPVT1Tb2x1dGlvbiBEZWxp' +
      'dmVyeSwgQ049RGF0YXBvd2VyVG9rZW5TZXJ2ZXIuc3RhbmRhcmRiYW5rLmNvLnphIg0Kbm90X2FmdGVyPSIyMDI2LTExLTIzVDA1OjE1OjAxIg0Kbm90X2JlZm9yZT0iMjAxNi0xMS0yM' +
      '1QwNDo0NDowMSINCnVzZXJpZD0iIg0KZW1wX251bWJlcj0iQzczMzgwOCINCmFkX2dyb3Vwcz0iIg0Kc2lnbmF0dXJlPSJ3Y2xueDZtRlVMN2NFbnZ3SWYrMHlRNFhNTGZIeW9PS250dm' +
      'M0SUVjUWJUeStHUVp6bjNZUWVuOVJ3SUNrWDRlcUoxUWZpWmkyVU5DdDVUSHpCZitVVkJYMWVDMk12Z2VmamVyVlFjTlcwNmJuMUZPSEtnRlkyWGxMOU15ZUNzVVI1UmZQRlVtTDRtM3Q' +
      '2Y0VrSDc1K29JN3ZabnFTMUJNVHlXcVVhZXVPbk9VbGMxOUVpT1BSWjhBSHZ2M0FTUDZNM0FQbWZrZkpNRTM2aGhCTHd0OTBJWW1oR29iSGpqLzBrVW1STURkTm40TkJDTHdLeVVadTFF' +
      'SW5CekZGb0l2VkQrNmpubVlrTHFZL3dqZjRpbDlONHUyM2pNd1FuVktSQjA4ZXZLUEFaWVZSeW5NY1BuUkFsdU8zbmplWTlUREgyTW5BK1ErM29UUzNRNGtVVUxXRUE9PSI='
    );
  }

  getSystemSettings() {
    return sysSettings;
  }

  getEnvironmentSettings() {
    return envSettings;
  }

  getProfileSummaryResponse(): FetchProfileSummaryResponse {
    return {
      profileSummary: this.getProfileSummary()
    };
  }

  getProfileSummary(): ProfileSummary {
    return {
      assetAllocation: {
        combinedSummary: {
          components: [
            {
              name: 'Bonds',
              offShorePercentage: 1,
              offShoreValue: 50,
              onShorePercentage: 11,
              onShoreValue: 978,
              totalPercentage: 12,
              totalValue: 1028
            },
            {
              name: 'Cash',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 11,
              onShoreValue: 967,
              totalPercentage: 12,
              totalValue: 997
            },
            {
              name: 'Equity',
              offShorePercentage: 22,
              offShoreValue: 1856,
              onShorePercentage: 50,
              onShoreValue: 4331,
              totalPercentage: 72,
              totalValue: 6187
            },
            {
              name: 'Listed Property',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 1,
              onShoreValue: 72,
              totalPercentage: 1,
              totalValue: 102
            },
            {
              name: 'Physical Property',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 1,
              onShoreValue: 72,
              totalPercentage: 1,
              totalValue: 102
            },
            {
              name: 'Other',
              offShorePercentage: 0,
              offShoreValue: 0,
              onShorePercentage: 0,
              onShoreValue: 0,
              totalPercentage: 0,
              totalValue: 0
            },
            {
              name: 'Unknown',
              offShorePercentage: 0,
              offShoreValue: 0,
              onShorePercentage: 0,
              onShoreValue: 0,
              totalPercentage: 0,
              totalValue: 0
            }
          ],
          offShorePercentage: 25,
          offShoreValue: 200,
          onShorePercentage: 75,
          onShoreValue: 300,
          totalValue: 8602,
          totalPercentage: 23
        },
        offShoreSummary: {
          components: [
            {
              name: 'Bonds',
              offShorePercentage: 1,
              offShoreValue: 50,
              onShorePercentage: 11,
              onShoreValue: 978,
              totalPercentage: 12,
              totalValue: 1028
            }
          ],
          offShorePercentage: 25,
          offShoreValue: null,
          onShorePercentage: null,
          onShoreValue: null,
          totalValue: 2182,
          totalPercentage: 37
        },
        onShoreSummary: {
          components: [
            {
              name: 'Bonds',
              offShorePercentage: 1,
              offShoreValue: 50,
              onShorePercentage: 11,
              onShoreValue: 978,
              totalPercentage: 12,
              totalValue: 1028
            },
            {
              name: 'Cash',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 11,
              onShoreValue: 967,
              totalPercentage: 12,
              totalValue: 997
            },
            {
              name: 'Equity',
              offShorePercentage: 22,
              offShoreValue: 1856,
              onShorePercentage: 50,
              onShoreValue: 4331,
              totalPercentage: 72,
              totalValue: 6187
            },
            {
              name: 'Listed Property',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 1,
              onShoreValue: 72,
              totalPercentage: 1,
              totalValue: 102
            },
            {
              name: 'Physical Property',
              offShorePercentage: 0,
              offShoreValue: 30,
              onShorePercentage: 1,
              onShoreValue: 72,
              totalPercentage: 1,
              totalValue: 102
            },
            {
              name: 'Unknown',
              offShorePercentage: 0,
              offShoreValue: 0,
              onShorePercentage: 0,
              onShoreValue: 0,
              totalPercentage: 0,
              totalValue: 0
            }
          ],
          offShorePercentage: null,
          offShoreValue: null,
          onShorePercentage: 75,
          onShoreValue: null,
          totalValue: 6420,
          totalPercentage: 40
        }
      },
      currencyCode: 'ZAR',
      netWealth: {
        onShorePercentage: 33,
        offShorePercentage: 33,
        totalPercentage: 34,
        combinedSummary: {
          assetsValue: 2500725,
          components: [
            {
              name: 'Assets',
              offShorePercentage: 0,
              offShoreValue: 937772,
              onShorePercentage: 0,
              onShoreValue: 1562953,
              totalPercentage: 0,
              totalValue: 2500725
            },
            {
              name: 'Liabilities',
              offShorePercentage: 0,
              offShoreValue: 6863,
              onShorePercentage: 0,
              onShoreValue: 11438,
              totalPercentage: 0,
              totalValue: 18301
            },
            {
              name: 'Protection',
              offShorePercentage: 0,
              offShoreValue: 30000,
              onShorePercentage: 0,
              onShoreValue: 45000,
              totalPercentage: 0,
              totalValue: 75000
            }
          ],
          historicalData: [
            {
              date: '2016-01-22T22:00:00.000Z',
              value: 375108
            },
            {
              date: '2016-02-22T22:00:00.000Z',
              value: 1000289
            },
            {
              date: '2016-03-22T22:00:00.000Z',
              value: 1500433
            },
            {
              date: '2016-04-22T22:00:00.000Z',
              value: 1925556
            },
            {
              date: '2016-05-22T22:00:00.000Z',
              value: 2200636
            },
            {
              date: '2016-06-22T22:00:00.000Z',
              value: 2482424
            }
          ],
          liabilitiesValue: 18301,
          totalValue: 2482424
        },
        offShoreSummary: {
          assetsValue: 937772,
          components: [
            {
              name: 'Assets',
              offShorePercentage: 0,
              offShoreValue: 937772,
              onShorePercentage: null,
              onShoreValue: null,
              totalPercentage: 0,
              totalValue: 2500725
            },
            {
              name: 'Liabilities',
              offShorePercentage: 0,
              offShoreValue: 6863,
              onShorePercentage: null,
              onShoreValue: null,
              totalPercentage: 0,
              totalValue: 18301
            },
            {
              name: 'Protection',
              offShorePercentage: 0,
              offShoreValue: 30000,
              onShorePercentage: null,
              onShoreValue: null,
              totalPercentage: 0,
              totalValue: 75000
            }
          ],
          historicalData: [
            {
              date: '2016-01-22T22:00:00.000Z',
              value: 375108
            },
            {
              date: '2016-02-22T22:00:00.000Z',
              value: 1000289
            },
            {
              date: '2016-03-22T22:00:00.000Z',
              value: 1500433
            },
            {
              date: '2016-04-22T22:00:00.000Z',
              value: 1925556
            },
            {
              date: '2016-05-22T22:00:00.000Z',
              value: 2200636
            },
            {
              date: '2016-06-22T22:00:00.000Z',
              value: 930909
            }
          ],
          liabilitiesValue: 6863,
          totalValue: 930909
        },
        onShoreSummary: {
          assetsValue: 1562953,
          components: [
            {
              name: 'Assets',
              offShorePercentage: null,
              offShoreValue: null,
              onShorePercentage: 0,
              onShoreValue: 1562953,
              totalPercentage: 0,
              totalValue: 2500725
            },
            {
              name: 'Liabilities',
              offShorePercentage: null,
              offShoreValue: null,
              onShorePercentage: 0,
              onShoreValue: 11438,
              totalPercentage: 0,
              totalValue: 18301
            },
            {
              name: 'Protection',
              offShorePercentage: null,
              offShoreValue: null,
              onShorePercentage: 0,
              onShoreValue: 45000,
              totalPercentage: 0,
              totalValue: 75000
            }
          ],
          historicalData: [
            {
              date: '2016-01-22T22:00:00.000Z',
              value: 375108
            },
            {
              date: '2016-02-22T22:00:00.000Z',
              value: 1000289
            },
            {
              date: '2016-03-22T22:00:00.000Z',
              value: 1500433
            },
            {
              date: '2016-04-22T22:00:00.000Z',
              value: 1925556
            },
            {
              date: '2016-05-22T22:00:00.000Z',
              value: 2200636
            },
            {
              date: '2016-06-22T22:00:00.000Z',
              value: 1551515
            }
          ],
          liabilitiesValue: 11438,
          totalValue: 551515
        }
      },
      wealthQuotient: null
    };
  }

  getThirdPartyProducts(): Product[] {
    return this.getProducts().thirdPartyProducts;
  }

  getProductList(): FetchProductListResponse {
    return {
      productList: {
        InvestmentTypes: [],
        currencyCode: 'ZAR',
        products: [
          {
            currencyCode: 'ZAR',
            assetAllocation: {
              combinedSummary: null,
              offShoreSummary: null,
              onShoreSummary: null
            },
            netWealth: {
              combinedSummary: null,
              offShoreSummary: null,
              onShoreSummary: null,
              onShorePercentage: null,
              offShorePercentage: null,
              totalPercentage: null
            },
            productId: '123',
            productProperties: {
              allowAssetAllocationEdit: false,
              allowOnshoreOffshoreEdit: false,
              allowShareWithAdviserEdit: false,
              allowWealthQuotientEdit: false,
              assetAllocation: null,
              companyName: null,
              contractNumber: null,
              currentValue: null,
              currentValueAsAt: null,
              growthInMonths: null,
              inceptionDate: null,
              isAllowTransactions: false,
              isLinked: false,
              isOffShore: false,
              isThirdParty: false,
              isUpToDate: false,
              productName: null,
              sharedAdvisers: null,
              startValue: null,
              thirdPartyProperties: null,
              wealthQuotient: null
            },
            productValues: null,
            typeDescrAmountItems: null,
            wealthQuotientItems: null,
            wealthTypes: null,
            productName: null,
            currentValue: null,
            isOffShore: null,
            institutionName: null,
            accountNumber: null,
            protectionType: null,
            assetAllocationType: null,
            totalPercentage: null,
            isLinked: null,
            netWealthComponent: {
              onShorePercentage: null,
              offShorePercentage: null,
              totalPercentage: null
            }
          }
        ]
      }
    };
  }

  getProductGrowth() {
    return this.getProductDetails().productGrowth;
  }

  getProductGrowthResponse(): FetchProductGrowthResponse {
    return {
      productGrowth: this.getProductGrowth()
    };
  }

  getProductDetails(): FetchProductDetailsResponse {
    return {
      accountNumber: '0000422279854000',
      assetAllocation: {
        components: [
          {
            name: 'Test',
            offShorePercentage: 12,
            offShoreValue: 66535,
            onShorePercentage: 34,
            onShoreValue: 33423,
            totalPercentage: 50,
            totalValue: 66653
          }
        ],
        offShorePercentage: 12,
        onShorePercentage: 34,
        offShoreValue: 66535,
        onShoreValue: 33423,
        totalValue: 66653,
        totalPercentage: 25
      },
      currencyCode: 'ZAR',
      currentValue: 11423,
      isOffshore: true,
      productGrowth: {
        dataSets: [
          {
            historicalData: [
              {
                date: new Date('2016-01-31T22:00:00.000Z'),
                value: 2344
              },
              {
                date: new Date('2016-02-29T22:00:00.000Z'),
                value: 2345
              },
              {
                date: new Date('2016-03-31T22:00:00.000Z'),
                value: 2346
              }
            ],
            label: 'Label 1'
          }
        ],
        header: 'Header 1',
        startDate: new Date('2016-01-31T22:00:00.000Z'),
        startValue: 2345
      },
      productId: '335',
      productName: 'PRESTIGE CURRENT ACCOUNT',
      protectionType: 'ProtType',
      startDate: new Date('2016-01-22T22:00:00.000Z'),
      trustNumber: 'Trust',
      valueLabel: 'ValLabel',
      jsecode: 'JSE',
      sourceCurrency: 'KRW',
      sourceValue: 2625.0
    };
  }

  getProduct(): FetchProductResponse {
    return {
      product: {
        accountNumber: 'AccNo0',
        assetAllocationType: 'AAT0',
        currencyCode: 'ZAR',
        institutionName: 'Inst0',
        isLinked: false,
        isOffShore: true,
        productId: '331',
        productName: 'ProdName0',
        protectionType: 'Prot0',
        assetAllocation: null,
        netWealth: null,
        productProperties: null,
        productValues: null,
        typeDescrAmountItems: null,
        wealthQuotientItems: null,
        wealthTypes: null,
        currentValue: null,
        totalPercentage: null,
        netWealthComponent: {
          onShorePercentage: null,
          offShorePercentage: null,
          totalPercentage: null
        }
      }
    };
  }

  getProductRequest(): FetchProductRequest {
    return {
      currency: 'ZAR',
      customerId: '123',
      customerBpId: '123',
      advisorId: '123',
      advisorBpId: '123'
    };
  }

  getProducts(): FetchProductsResponse {
    return {
      currencyCode: 'ZAR',
      thirdPartyProducts: [
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '9000 123 456 788 9000',
          assetAllocationType: 'AAT5',
          currencyCode: 'ZAR',
          institutionName: 'Inst5',
          isLinked: true,
          isOffShore: false,
          productId: '331',
          productName: 'ProdName5',
          protectionType: 'Prot5'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 787 000',
          assetAllocationType: 'AAT2',
          currencyCode: 'ZAR',
          institutionName: 'Inst2',
          isLinked: true,
          isOffShore: false,
          productId: '9956',
          productName: 'ProdName2',
          protectionType: 'Prot2'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 789 000',
          assetAllocationType: 'AAT9',
          currencyCode: 'ZAR',
          institutionName: 'Inst9',
          isLinked: true,
          isOffShore: false,
          productId: '10017',
          productName: 'ProdName9',
          protectionType: 'Prot9'
        }
      ],
      unmanagedProducts: [
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 786 000',
          assetAllocationType: 'AAT7',
          currencyCode: 'ZAR',
          institutionName: 'Inst7',
          isLinked: false,
          isOffShore: true,
          productId: '87',
          productName: 'ProdName7',
          protectionType: 'Prot7'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: 'AccNo4',
          assetAllocationType: 'AAT4',
          currencyCode: 'ZAR',
          institutionName: 'Inst4',
          isLinked: false,
          isOffShore: true,
          productId: '335',
          productName: 'ProdName4',
          protectionType: 'Prot4'
        }
      ],
      groupProducts: [
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 785 000',
          assetAllocationType: 'AAT0',
          currencyCode: 'ZAR',
          institutionName: 'Inst0',
          isLinked: false,
          isOffShore: true,
          productId: '331',
          productName: 'ProdName0',
          protectionType: 'Prot0'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 784 000',
          assetAllocationType: 'AAT1',
          currencyCode: 'ZAR',
          institutionName: 'Inst1',
          isLinked: false,
          isOffShore: true,
          productId: '335',
          productName: 'ProdName1',
          protectionType: 'Prot1'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 783 000',
          assetAllocationType: 'AAT8',
          currencyCode: 'ZAR',
          institutionName: 'Inst8',
          isLinked: true,
          isOffShore: false,
          productId: '2751',
          productName: 'ProdName8',
          protectionType: 'Prot8'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 782 000',
          assetAllocationType: 'AAT3',
          currencyCode: 'ZAR',
          institutionName: 'Inst3',
          isLinked: true,
          isOffShore: false,
          productId: '9956',
          productName: 'ProdName3',
          protectionType: 'Prot3'
        },
        {
          assetAllocation: null,
          netWealth: null,
          productProperties: null,
          productValues: null,
          typeDescrAmountItems: null,
          wealthQuotientItems: null,
          wealthTypes: null,
          currentValue: null,
          totalPercentage: null,
          accountNumber: '123 456 781 000',
          assetAllocationType: 'AAT6',
          currencyCode: 'ZAR',
          institutionName: 'Inst6',
          isLinked: false,
          isOffShore: true,
          productId: '10017',
          productName: 'ProdName6',
          protectionType: 'Prot6'
        }
      ],
      userLastLogin: '2019-05-28 12:43'
    };
  }

  setAppState(
    newState: applicationReducer.State
  ): Observable<applicationReducer.State> {
    return of(newState);
  }

  getAdvisorDetails(): AdvisorDetailsResponse {
    return {
      advisor: {
        bpid: '150236227',
        cellNumber: null,
        clients: [
          {
            bpid: '150236346',
            cellNumber: '0785467232',
            email: 'sheryl.pather@ymail.com',
            enabled: false,
            firstName: 'SHERYL',
            idNumber: '8305062817080',
            lastName: 'PATHER',
            marketSegment: 0,
            middleName: null,
            registered: false,
            title: 'MISS'
          },
          {
            bpid: '150236346',
            cellNumber: '0785467232',
            email: 'sheryl.pather@ymail.com',
            enabled: false,
            firstName: 'SHERYL',
            idNumber: '8305062817080',
            lastName: 'PATHER',
            marketSegment: 0,
            middleName: null,
            registered: false,
            title: 'MISS'
          },
          {
            bpid: '150236350',
            cellNumber: '0785467232',
            email: 'jordan.nair@ymail.com',
            enabled: false,
            firstName: 'JORDAN',
            idNumber: '8507017556099',
            lastName: 'NAIR',
            marketSegment: 0,
            middleName: null,
            registered: false,
            title: 'MR.'
          }
        ],
        email: null,
        firstName: 'Bongani',
        idNumber: '7701077169098',
        lastName: 'Maphiri',
        middleName: null,
        mobileNumber: '+27100000000'
      }
    };
  }

  getEnabledClientState() {
    return {
      enableCustomer: true,
      customerBpId: 'bob'
    };
  }

  getProductGrowthRequest(): FetchProductGrowthRequest {
    return {
      currency: 'ZAR',
      productId: '1',
      customerId: '1',
      customerBpId: '1',
      advisorId: '1',
      advisorBpId: '1'
    };
  }

  getProductListRequest(): FetchProductListRequest {
    return {
      currency: 'ZAR',
      view: 'test',
      customerId: '1',
      customerBpId: '1',
      advisorId: '1',
      advisorBpId: '1'
    };
  }

  getProfileSummaryRequest(): FetchProfileSummaryRequest {
    return {
      currency: 'ZAR',
      view: 'test',
      customerId: '1',
      customerBpId: '1',
      advisorId: '1',
      advisorBpId: '1'
    };
  }

  getProductDetailsRequest(): FetchProductDetailsRequest {
    return {
      currency: 'ZAR',
      productId: '1',
      customerId: '1',
      customerBpId: '1',
      advisorId: '1',
      advisorBpId: '1'
    };
  }
}
